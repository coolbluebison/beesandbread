import { FaAngleLeft } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";

import { useState,useRef } from "react";

export default function DealsNav({cat}){

    let [arrow,setArrow] = useState(false)

    const div = useRef(null)

    function rightArrow() {
        const container = div.current;
    
        // Calculate the total width of the content inside the container
        const totalWidth = container.scrollWidth;
    
        // Scroll to the end of the content
        container.scrollTo({
            left: totalWidth,
            behavior: "smooth",
        });
        setArrow(true)
    }

    function leftArrow() {
        const container = div.current;
    
        // Calculate the total width of the content inside the container
        const totalWidth = container.scrollWidth;
    
        // Scroll to the end of the content
        container.scrollTo({
            left: -totalWidth,
            behavior: "smooth",
        });
        setArrow(false)
    }
    
    return(
        <div className="w-full">
            <div className="flex justify-between items-center mx-10">
                <div className="flex gap-2">
                    <p className="text-2xl font-bold text-black">Bees n Bread Deals</p>
                    <p className="text-2xl text-gray-700 font-semibold">(12)</p>
                </div>
                <div className="flex gap-2">
                    <span className={arrow ? "h-10 w-10 bg-rose-200 hover:bg-rose-300 rounded-full flex items-center justify-center  cursor-pointer text-black" : "h-10 w-10 bg-gray-200 rounded-full flex items-center justify-center text-gray-100"} onClick={()=>{leftArrow()}}><FaAngleLeft size={"1.2rem"}/></span>
                    <span className={!arrow ? "h-10 w-10 bg-rose-200 hover:bg-rose-300 rounded-full flex items-center justify-center cursor-pointer  text-black" : "h-10 w-10 bg-gray-200 rounded-full flex items-center justify-center text-gray-100"} onClick={()=>{rightArrow()}}><FaAngleRight size={"1.2rem"}/></span>
                </div>
            </div>
            <div className="mx-10 flex justify-start pt-4 gap-4 overflow-x-scroll no-scrollbar" ref={div}>
                {cat.map(c => { return(
                    <div className="group" key={c.index}>
                        <div className="h-28 w-28 bg-gray-200 rounded-2xl">
                            Picture Here
                        </div>
                        <p className="text-center text-xs group-hover:text-black group-hover:underline">{c}</p>
                    </div>
                )
                })}
            </div>
        </div>
    )

}