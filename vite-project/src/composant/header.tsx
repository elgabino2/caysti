import React from "react";
import vegetable from "../images/vegetable.jpg"
import background from "../images/background.jpg"


function Header(){
    return(
        <>
        <div className="h-[34rem] w-full bg-[{background}]" style={{
                            backgroundImage: `url(${background})`,
                            backgroundSize: "cover", 
                            backgroundPosition: "center"
                        }}>
                            <div className="h-full w-full bg-[black] opacity-[30%]">
                            </div>
                            <div className="h-[15rem] w-[38rem]  my-[-26rem] mx-[4rem] relative">
                                <p className="text-white text-[4rem] font-bold">Un coup d’avance sur la nature</p>
                                
                            </div>
                            <div className="h-[4rem] my-[28rem] mx-[4rem] w-[38rem]  relative">
                                <p className="text-[1.5rem] text-white">Nous vous informons en temps réel des conditions météorologique de votre environnement</p>
                                
                            </div>
                            <div className="h-[6rem] w-[20rem]  my-[-32rem] relative mx-[60rem]">
                            <button className="h-[4rem] w-[14rem] rounded-[5px] bg-[#72BF78] text-[1.5rem] text-white font-semibold">En savoir plus</button>
                            </div>
                            
        {/* <div className="flex h-[5rem] w-full bg-[#00FF78] shadow-md  my-[-6rem] z-10">
            <div className="w-[30%] flex items-center justify-center">
                <h1 className="text-[3rem] font-bold text-white">GreenSpace</h1>
            </div>
            <div className="flex-1 flex justify-evenly items-center bg-[pink]">
                <a href="#" className="text-[1.5rem] font-semibold text-white">Acceuil</a>
                <a href="#" className="text-[1.5rem] font-semibold text-white">Prévisions météo</a>
                <a href="#" className="text-[1.5rem] font-semibold text-white">Chat</a>
                
            </div>
        </div> */}
        </div>
        <div className="flex h-[5rem] w-full    my-[-35rem] z-10 relative">

            <div className="w-[30%] flex items-center justify-center">
                <h1 className="text-[3rem] font-bold text-white">GreenSpace</h1>
            </div>
            <div className="flex-1 flex justify-evenly items-center ">
                <a href="#" className="text-[1.5rem] font-semibold text-white">Acceuil</a>
                <a href="#" className="text-[1.5rem] font-semibold text-white">Prévisions météo</a>
                <a href="#" className="text-[1.5rem] font-semibold text-white">Chat</a>
                
            </div>
        </div>
        
        </>
    );
}


export default Header