import DrawerMain from "./NavBarComponents/Drawer"
import Banner from "./NavBarComponents/Banner"
import SubNav from "./NavBarComponents/SubNav"

// icon imports
import { CiMenuBurger } from "react-icons/ci";
import { CiRedo } from "react-icons/ci";
import { IoPricetagOutline } from "react-icons/io5";
import { RiLoopRightFill } from "react-icons/ri";
import { IoSearchOutline } from "react-icons/io5";
import { RxAvatar } from "react-icons/rx";
import { BsCart2 } from "react-icons/bs";

export default function NavBar(){

    function rightArrow(){
        return(
    <svg width="50px" height="50px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M10 7L15 12L10 17" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>)
    }

    return(
        <>
        <nav className="top-0 fixed z-50 w-screen">
            <Banner />
            <div className="drawer">
            <input id="my-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <div className="w-full bg-rose-300 h-20 flex items-center justify-between px-10 shadow-sm">
                        <p className="text-2xl font-bold text-black">LOGO</p>
                        <label htmlFor="my-drawer" className="text-2xl font-semibold text-gray-800 cursor-pointer flex items-center gap-2"><CiMenuBurger size={"1.5rem"}/>Menu</label>
                        <label className="text-2xl font-semibold text-gray-800 cursor-pointer flex items-center gap-2"><CiRedo size={"1.5rem"}/> Buy It Again</label>
                        <label className="text-2xl font-semibold text-gray-800 cursor-pointer flex items-center gap-2"><IoPricetagOutline size={"1.5rem"}/>Deals</label>
                        <label className="text-2xl font-semibold text-gray-800 cursor-pointer flex items-center gap-2"><RiLoopRightFill size={"1.5rem"}/> Autoship</label>
                        <label className="text-lg underline font-semibold text-gray-700 cursor-pointer">Get 15% Off</label>
                        <div className="flex justify-between gap-4 w-1/2 items-center">
                            <div className="w-[80%] flex bg-white rounded-full h-12 items-center px-4 shadow-md">
                                <IoSearchOutline size={"1.5rem"}/>
                                <input className="w-full h-10 bg-white outline-none mx-4 text-gray-800" placeholder="Search..."></input>
                            </div>
                            <span className="h-12 w-12 bg-white rounded-full hover:scale-110 transition-all duration-200 items-center flex justify-center text-gray-700 shadow-md"><RxAvatar size={"2rem"}/></span>
                            <span className="h-12 w-12 bg-white rounded-full hover:scale-110 transition-all duration-200 items-center flex justify-center text-gray-700 shadow-md"><BsCart2 size={"2rem"}/> </span>
                        </div>
                    </div>
                </div> 
                <DrawerMain />
            </div>
            <SubNav />
        </nav>
        </>
    )
}