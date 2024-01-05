import { useState,useEffect } from "react";

// component imports
import DrawerMain from "./NavBarComponents/Drawer"
import Banner from "./NavBarComponents/Banner"
import SubNav from "./NavBarComponents/SubNav"
import CartNav from "./NavBarComponents/CartNav";
import AutoshipNav from "./NavBarComponents/AutoshipNav";
import Checkout from "../Checkout/Checkout";
import ProfileNav from "./NavBarComponents/ProfileNav";

// icon imports
import { CiMenuBurger } from "react-icons/ci";
import { CiRedo } from "react-icons/ci";
import { IoPricetagOutline } from "react-icons/io5";
import { RiLoopRightFill } from "react-icons/ri";
import { IoSearchOutline } from "react-icons/io5";
import { RxAvatar } from "react-icons/rx";
import { BsCart2 } from "react-icons/bs";
import { IoCloseOutline } from "react-icons/io5";



export default function NavBar(){

    let [cartHover,setCartHover] = useState(false)
    let [cartDisplay,setCartDisplay] = useState(false)

    let [ASHover,setASHover] = useState(false)
    let [ASDisplay,setASDisplay] = useState(false)

    let [pHover,setPHover] = useState(false)
    let [pDisplay,setPDisplay] = useState(false)


    useEffect(()=>{

        const timeout = setTimeout(()=>{
            setCartDisplay(cartHover)
          },100)
      
          return () => clearTimeout(timeout)

    },[cartHover])

    useEffect(()=>{

        const timeout = setTimeout(()=>{
            setPDisplay(pHover)
          },100)
      
          return () => clearTimeout(timeout)

    },[pHover])


    useEffect(()=>{

        const timeout = setTimeout(()=>{
            setASDisplay(ASHover)
          },100)
      
          return () => clearTimeout(timeout)

},[ASHover])

    let [cart,setCart] = useState(false)

    return(
        <>
        <nav className="top-0 fixed z-50 w-screen font-lato">
            <Banner />
            <div className="drawer">
            <input id="my-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <div className="w-full bg-rose-300 h-20 flex items-center justify-between px-10 shadow-sm">
                        <p className="text-2xl font-bold text-black cursor-pointer">LOGO</p>
                        <label htmlFor="my-drawer" className="text-2xl font-semibold text-gray-800 cursor-pointer flex items-center gap-2"><CiMenuBurger size={"1.5rem"}/>Menu</label>
                        <label className="text-2xl font-semibold text-gray-800 cursor-pointer flex items-center gap-2"><CiRedo size={"1.5rem"}/> Buy It Again</label>
                        <label className="text-2xl font-semibold text-gray-800 cursor-pointer flex items-center gap-2"><IoPricetagOutline size={"1.5rem"}/>Deals</label>
                        <label className="text-2xl font-semibold text-gray-800 cursor-pointer flex items-center gap-2" onMouseOver={()=>{setASHover(true)}} onMouseLeave={()=>{setASHover(false)}}><RiLoopRightFill size={"1.5rem"}/> Autoship</label>
                        <label className="text-lg underline font-semibold text-gray-700 cursor-pointer">Get 15% Off</label>
                        <div className="flex justify-between gap-4 w-1/2 items-center">
                            <div className="w-[80%] flex bg-white rounded-full h-12 items-center px-4 shadow-md ">
                                <IoSearchOutline size={"1.5rem"}/>
                                <input className="w-full h-10 bg-white outline-none mx-4 text-gray-800" placeholder="Search..."></input>
                            </div>
                            <span className="h-12 w-12 bg-white rounded-full hover:scale-110 transition-all duration-200 items-center flex justify-center text-gray-700 shadow-md"><RxAvatar size={"2rem"} onMouseOver={()=>setPHover(true)} onMouseLeave={()=>{setPHover(false)}}/></span>
                            <span className="h-12 w-12 bg-white rounded-full hover:scale-110 transition-all duration-200 items-center flex justify-center text-gray-700 shadow-md hover:bg-green-200" onClick={()=>setCart(!cart)} onMouseOver={!cart ? ()=>{setCartHover(true)} : null} onMouseLeave={()=>{setCartHover(false)}}>{cart ? <IoCloseOutline size={"2rem"}/>: <BsCart2 size={"2rem"}/> }</span>
                        </div>
                    </div>
                </div> 
                <DrawerMain />
            </div>
            <AutoshipNav ASDisplay={ASDisplay} setASHover={setASHover}/>
            <CartNav cartHover={cartDisplay} setCartHover={setCartHover}/>
            <ProfileNav pHover={pDisplay} setPHover={setPHover}/>
            <SubNav />
            <Checkout cart={cart} />
        </nav>
        </>
    )
}