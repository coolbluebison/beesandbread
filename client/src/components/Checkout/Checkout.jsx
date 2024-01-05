import { BiSolidBinoculars } from "react-icons/bi";
import { FaAngleLeft } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";
import CheckoutCard from "./CheckoutCard";

import { useState,useRef } from "react";

export default function Checkout({cart}){

    let [arrow,setArrow] = useState(false)
    let [arrow1,setArrow1] = useState(false)

    const div = useRef(null)
    const div1 = useRef(null)

    function rightArrow(div,setArrow) {
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

    function leftArrow(div,setArrow) {
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
        <div className={cart? "text-black relative w-screen h-[81vh] bg-white -z-50 transition-all duration-500 overflow-auto py-10" : "text-black absolute top-0 w-screen bg-white -translate-y-full -z-50 transition-all duration-500"}>
       
            <div className="mx-40  pb-8 px-4">
                <p className="text-4xl font-bold">Your Cart</p>
                <p className="text-lg">0 Boxes, 0 Items ($0.00)</p>
            </div>
            <div className=" flex w-full px-40 bg-rose-300 py-4 items-center gap-4">
                <div className=" flex justify-center p-4 items-center rounded-full bg-rose-400">
                <BiSolidBinoculars size={"5rem"}/>
                </div>
                <div className="items-center text-lg">
                    <p>Your cart is currently empty.</p>
                    <p>Get started by browsing some recommended products.</p>
                </div>
            </div>
            <div className="w-full px-40 flex justify-between items-center py-4">
                <p className="font-bold text-4xl py-10 ">Buy It Again</p>
                <div className="flex items-center gap-2">
                    <p className="text-rose-400 text-lg underline cursor-pointer font-semibold">See All</p>
                    <span className={arrow ? "h-8 w-8 bg-rose-200 hover:bg-rose-300 rounded-full flex items-center justify-center  cursor-pointer text-black" : "h-8 w-8 bg-gray-200 rounded-full flex items-center justify-center text-gray-100"} onClick={()=>{leftArrow(div,setArrow)}}><FaAngleLeft size={"1.2rem"}/></span>
                    <span className={!arrow ? "h-8 w-8 bg-rose-200 hover:bg-rose-300 rounded-full flex items-center justify-center cursor-pointer  text-black" : "h-8 w-8 bg-gray-200 rounded-full flex items-center justify-center text-gray-100"} onClick={()=>{rightArrow(div,setArrow)}}><FaAngleRight size={"1.2rem"}/></span>
                </div>
            </div>
            
            <div className="flex items-center justify-center px-40">
            <div className="w-[100%]  gap-16 flex justify-start overflow-x-scroll overflow-hidden no-scrollbar" ref={div}>
                <CheckoutCard />
                <CheckoutCard />
                <CheckoutCard />
                <CheckoutCard />
                <CheckoutCard />
                <CheckoutCard />
                <CheckoutCard />
                <CheckoutCard />
                <CheckoutCard />
                <CheckoutCard />
                
            </div>
            </div>
            
            <div className="w-full  px-40 flex justify-between items-center py-4">
                <p className="font-bold text-4xl py-10">Recommended for you</p>
                <div className="flex items-center gap-2">
                    <p className="text-rose-400 text-lg underline cursor-pointer font-semibold">See All</p>
                    <span className={arrow1 ? "h-8 w-8 bg-rose-200 hover:bg-rose-300 rounded-full flex items-center justify-center  cursor-pointer text-black" : "h-8 w-8 bg-gray-200 rounded-full flex items-center justify-center text-gray-100"} onClick={()=>{leftArrow(div1,setArrow1)}}><FaAngleLeft size={"1.2rem"}/></span>
                    <span className={!arrow1 ? "h-8 w-8 bg-rose-200 hover:bg-rose-300 rounded-full flex items-center justify-center cursor-pointer  text-black" : "h-8 w-8 bg-gray-200 rounded-full flex items-center justify-center text-gray-100"} onClick={()=>{rightArrow(div1,setArrow1)}}><FaAngleRight size={"1.2rem"}/></span>
                </div>
            </div>

            <div className="flex items-center justify-center px-40 pb-10">
            <div className="w-[100%]  gap-16 flex justify-start overflow-x-scroll overflow-hidden no-scrollbar" ref={div1}>
                <CheckoutCard />
                <CheckoutCard />
                <CheckoutCard />
                <CheckoutCard />
                <CheckoutCard />
                <CheckoutCard />
                <CheckoutCard />
                <CheckoutCard />
                <CheckoutCard />
                <CheckoutCard />
                
            </div>
            </div>
            
        </div>
    )
}