import React, { useEffect, useRef } from "react";

function Graph() {
  const graphContainerRef = useRef<HTMLDivElement>(null);
  const chartRef = useRef<Highcharts.Chart | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://api.meteomatics.com/2024-10-06T00:00:00Z--2024-10-09T00:00:00Z:PT1H/t_2m:C,precip_1h:mm,wind_speed_10m:ms/52.520551,13.461804/html",
          {
            headers: {
              Authorization: `Basic ${btoa("aurele_zongo:t849TZJpiq")}`, // Remplace par tes identifiants API
            },
          }
        );

        if (!response.ok) {
          throw new Error("Erreur lors de la récupération des données");
        }

        const htmlText = await response.text();
        if (graphContainerRef.current) {
          graphContainerRef.current.innerHTML = htmlText;

          const scriptsToLoad = [
            "https://code.jquery.com/jquery-3.6.0.min.js",
            "https://code.highcharts.com/highcharts.js",
            "https://code.highcharts.com/modules/data.src.js",
            "https://code.highcharts.com/modules/exporting.js",
            "https://code.highcharts.com/modules/offline-exporting.js",
          ];

          const loadScripts = scriptsToLoad.map(src => {
            return new Promise<void>((resolve, reject) => {
              const script = document.createElement("script");
              script.src = src;
              script.onload = () => resolve();
              script.onerror = () => reject(new Error(`Failed to load script: ${src}`));
              document.body.appendChild(script);
            });
          });

          await Promise.all(loadScripts);

          const container = document.getElementById("container");
          if (container) {
            const csv = document.getElementById("csv")!.innerText
              // .replace(/-999\;/g, ";")
              // .replace(/-999\n/g, "\n")
              // .replace(/-666\;/g, ";")
              // .replace(/-666\n/g, "\n");

            
            chartRef.current = Highcharts.chart(container, {
              chart: {
                type: 'line',
                zoomType: 'xy',
                width: 2000, 
                height: 488 
              },
              credits: {
                text: 'meteomatics.com',
                href: 'http://www.meteomatics.com'
              },
              data: {
                csv: csv,
                itemDelimiter: ';',
                lineDelimiter: '\n',
                parseDate: function (txt) {
                  return new Date(txt).getTime();
                }
              },
              tooltip: {
                shared: true
              },
              title: {
                text: null
              },
              yAxis: {
                title: {
                  text: null
                }
              },
              plotOptions: {
                series: {
                  animation: false
                }
              }
            });
          }
        }
      } catch (error) {
        console.error("Erreur lors de la récupération des données météo:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
    <div className="h-[40rem] w-full  my-[-54rem]">
      <h1 className="text-center text-[4rem] font-bold">Graphique Météo</h1>
      <div className="h-[30rem] my-[4rem] w-full flex justify-center items-center">
        <div className="h-[95%] w-[90%] bg-[green] shadow-sm flex justify-center items-center">
          <div className="h-[90%] w-[95%] ">
            <div ref={graphContainerRef}>
              <div id="container" style={{ width: '100%', height: '100%' }} />
              
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  );
}

export default Graph;
