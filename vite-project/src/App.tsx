import Header from "./composant/header";
import Body from "./composant/body";
import Graph from "./composant/Graph";
import axios from "axios";

const meteo=()=>{
  axios.get('https://www.arcgis.com/home/webmap/viewer.html?webmap=d0cdbda4e13c418da23c8aa86867166e')
  .then(res => {
    console.log(res)
  }).catch(err =>{
    console.log(err)
  })
}

function App(){
  return(
    <>
    <Header/>
    <Body/>
    <Graph />
    </>
  );
}


export default App