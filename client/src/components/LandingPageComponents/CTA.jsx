import { CiCirclePlus } from "react-icons/ci";
import { CiCircleMinus } from "react-icons/ci";
import { GoTrophy } from "react-icons/go";
import { AiOutlinePhone } from "react-icons/ai";
import { IoPricetagsOutline } from "react-icons/io5";
import { CgBee } from "react-icons/cg";
import { IoTriangle } from "react-icons/io5";

import { useState } from "react";

import CTASection from "./CTAsection";

export default function CTA(){

    let [active,setActive] = useState(1)

    function onClick(state){
        if(active === state){
            setActive(0)
        } else {
            setActive(state)
        }
    }

    return(
        <div className="w-full bg-rose-300">
            <ul className="flex justify-evenly items-center text-xl text-black">

                <div className="w-1/5 relative h-full py-6">
                    <li className="h-20 flex bg-white items-center justify-between px-4 text-center border-2 cursor-pointer rounded-full hover:scale-105 transition-all border-rose-400 shadow-md"
                    onClick={()=>onClick(1)}>
                        <GoTrophy size={"2rem"}/>Quailty Ingredients
                        {active === 1 ? <CiCircleMinus size={"3rem"} style={{color:"rgb(251 113 133)"}}/> : <CiCirclePlus size={"3rem"} style={{color:"rgb(251 113 133)"}}/>}
                    </li>
                    <span className={active === 1? "absolute -bottom-1 right-[45%] transition-all duration-300": "absolute -bottom-1 right-1/2 opacity-0"}><IoTriangle size={"1.5rem"} style={{color: "rgb(251 113 133)"}}/></span>
                </div>

                <div className="w-1/5 py-6 relative">
                    <li className="h-20 flex bg-white items-center justify-between px-4 text-center border-2 cursor-pointer rounded-full hover:scale-105 transition-all border-rose-400 shadow-md"
                    onClick={()=>onClick(2)}>
                        <AiOutlinePhone size={"2rem"}/>Customer Service
                        {active === 2 ? <CiCircleMinus size={"3rem"} style={{color:"rgb(251 113 133)"}}/> : <CiCirclePlus size={"3rem"} style={{color:"rgb(251 113 133)"}}/>}
                    </li>
                    <span className={active === 2? "absolute -bottom-1 right-[45%] transition-all duration-300": "absolute -bottom-1 right-1/2 opacity-0"}><IoTriangle size={"1.5rem"} style={{color: "rgb(251 113 133)"}}/></span>
                </div>

                <div className="w-1/5 py-6 relative z-30">
                    <li className="h-20 flex bg-white items-center justify-between px-4 text-center border-2 cursor-pointer rounded-full hover:scale-105 transition-all border-rose-400 shadow-md"
                    onClick={()=>onClick(3)}>
                        <CgBee size={"2rem"}/>Our Mission
                        {active === 3 ? <CiCircleMinus size={"3rem"} style={{color:"rgb(251 113 133)"}}/> : <CiCirclePlus size={"3rem"} style={{color:"rgb(251 113 133)"}}/>}
                    </li>
                    <span className={active === 3? "absolute -bottom-1 right-[45%] transition-all duration-300": "absolute -bottom-1 right-1/2 opacity-0"}><IoTriangle size={"1.5rem"} style={{color: "rgb(251 113 133)"}}/></span>
                </div>

                <div className="w-1/5 py-6 relative">
                    <li className="h-20 flex bg-white items-center justify-between px-4 text-center border-2 cursor-pointer rounded-full hover:scale-105 transition-all border-rose-400 shadow-md"
                    onClick={()=>onClick(4)}>
                        <IoPricetagsOutline size={"2rem"}/>Unbeatable Prices
                        {active === 4 ? <CiCircleMinus size={"3rem"} style={{color:"rgb(251 113 133)"}}/> : <CiCirclePlus size={"3rem"} style={{color:"rgb(251 113 133)"}}/>}
                    </li>
                    <span className={active === 4? "absolute -bottom-1 right-[45%] transition-all duration-300": "absolute -bottom-1 right-1/2 opacity-0"}><IoTriangle size={"1.5rem"} style={{color: "rgb(251 113 133)"}}/></span>
                </div>

            </ul>

            <CTASection active={active}/>

        </div>
    )
}