import DrawerMain from "./NavBarComponents/Drawer"
import Banner from "./NavBarComponents/Banner"
import SubNav from "./NavBarComponents/SubNav"

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
                    <div className="w-full bg-red-200 h-20 flex items-center justify-between px-10">
                        <p className="text-2xl font-bold text-black">LOGO</p>
                        <label htmlFor="my-drawer" className="text-2xl font-semibold text-black cursor-pointer">Menu</label>
                        <label className="text-2xl font-semibold text-gray-700 cursor-pointer">Buy It Again</label>
                        <label className="text-2xl font-semibold text-gray-700 cursor-pointer">Deals</label>
                        <label className="text-2xl font-semibold text-gray-700 cursor-pointer">Autoship</label>
                        <label className="text-lg underline font-semibold text-gray-700 cursor-pointer">Get 15% Off</label>
                        <div className="flex justify-between gap-4 w-1/2">
                            <input className="h-12 rounded-full w-[80%] bg-white text-center focus:border-none transition-all duration-500 text-black outline-none"></input>
                            <span className="h-12 w-12 bg-white rounded-full hover:scale-110 transition-all duration-200">Profile</span>
                            <span className="h-12 w-12 bg-white rounded-full hover:scale-110 transition-all duration-200">Cart</span>
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