import DrawerMain from "./NavBarComponents/Drawer"

export default function NavBar(){

    function rightArrow(){
        return(
    <svg width="50px" height="50px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M10 7L15 12L10 17" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>)
    }

    return(
        <>
        <nav className="w-screen top-0 fixed z-50">
            <div className="drawer">
            <input id="my-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <div className="w-full bg-red-200 h-16 flex items-center justify-evenly gap-4">
                        <p className="text-2xl font-bold text-black">LOGO</p>
                        <label htmlFor="my-drawer" className="text-2xl font-semibold text-black cursor-pointer">Menu</label>
                        <input className="h-10 w-[30%] rounded-full bg-white text-center focus:scale-105 focus:border-none transition-all duration-500 text-black outline-none"></input>
                        <span className="h-10 w-10 bg-white rounded-full hover:scale-110 transition-all duration-200">Profile</span>
                        <span className="h-10 w-10 bg-white rounded-full hover:scale-110 transition-all duration-200">Cart</span>
                    </div>
                </div> 
                <DrawerMain />
            </div>
        </nav>
        </>
    )
}