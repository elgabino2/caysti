import React from "react";
import Apple from "../images/Apple.jpg"
import Thermo from "../icons/Thermo.png"
import Lamp from "../icons/Lamp.png"
import Water from "../icons/Water.png"
import Wind from "../icons/Wind (2).png"

function Body(){
    return(
        <>
        <div className="w-full h-[30rem]  my-[68rem]">
             <h1 className="font-bold text-[3rem] text-center">Culture idéal en ce moment</h1> 
            {/* <p className="text-[#5A5757] text-[1rem] font-bold mx-[2rem]">Look the ideal plant for these time</p> */} 
            <div className="h-full w-full  flex justify-center my-[2rem]">
            <div className="h-full w-[80%] bg-[black]  bg-[{Apple}] shadow-md rounded-[10px]" style={{
                            backgroundImage: `url(${Apple})`,
                            backgroundSize: "cover", 
                            backgroundPosition: "center"
                        }}>
                            <h1 className="text-[white] text-[3rem] font-bold mx-[4rem]">Monday</h1>
                            <p className="font-bold text-[3.3rem] text-white mx-[4rem] my-[2rem]">29°c </p>
                            <div className="w-full h-[25%]  my-[10rem] flex">
                                <div className="h-full w-[25%]  flex justify-center items-center">
                                    <img src={Thermo} alt="" /><span className="text-[2rem] text-white font-bold">29°c</span>
                                </div>
                                <div className="h-full w-[25%]  flex justify-center items-center">
                                <img src={Wind} alt="" /><span className="text-[2rem] text-white font-bold">10</span>
                                </div>
                                <div className="h-full w-[25%]  flex justify-center items-center">
                                <img src={Lamp} alt="" /><span className="text-[2rem] text-white font-bold">60</span>
                                </div>
                                <div className="h-full w-[25%]  flex justify-center items-center">
                                <img src={Water} alt="" /><span className="text-[2rem] text-white font-bold">10</span>
                                </div>
                            </div>
                {/* <img src={Apple} alt="" className="h-full w-full"/> */}
            </div></div>
        </div>
        </>
    )
}

export default Body