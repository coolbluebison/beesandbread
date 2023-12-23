

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
                    {/* Page content here */}
                    <label htmlFor="my-drawer" className="btn btn-primary drawer-button">Open drawer</label>
                </div> 
                <div className="drawer-side">
                    <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="menu min-h-full group m-0 p-0 bg-gray-100 text-base-content">
                        <div className="flex group transition-all ease-linear duration-500">
                            <div className="w-80">
                                <p className="text-center font-semibold text-black p-8 text-lg">Welcome Back 'User'!</p>
                                <p className="w-full h-[0.5px] mb-2 bg-gray-400"></p>
                                    <p className="flex items-center text-2xl text-gray-900 font-bold w-full hover:bg-gray-400 transition-all ease-linear cursor-pointer duration-75 px-4 py-1">Categories
                                    <svg className="ml-auto h-6 w-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10 7L15 12L10 17" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg></p> 
                                    <p className="flex items-center text-2xl text-gray-900 font-bold w-full hover:bg-gray-400 transition-all ease-linear cursor-pointer duration-75 px-4 py-1">Brand
                                    <svg className="ml-auto h-6 w-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10 7L15 12L10 17" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg></p>
                                    <p className="flex items-center text-2xl text-gray-900 font-bold w-full hover:bg-gray-400 transition-all ease-linear cursor-pointer duration-75 px-4 py-1">Diet
                                    <svg className="ml-auto h-6 w-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10 7L15 12L10 17" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg></p>
                                    <p className="flex items-center text-2xl text-gray-900 font-bold w-full hover:bg-gray-400 transition-all ease-linear cursor-pointer duration-75 px-4 py-1">But It Again
                                    <svg className="ml-auto h-6 w-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10 7L15 12L10 17" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg></p>
                                    <p className="flex items-center text-2xl text-gray-900 font-bold w-full hover:bg-gray-400 transition-all ease-linear cursor-pointer duration-75 px-4 py-1">Deals
                                    <svg className="ml-auto h-6 w-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10 7L15 12L10 17" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg></p>
                                <p className="w-full h-[0.5px] my-2 bg-gray-400"></p>
                                    <p className="text-lg text-gray-700 font-semibold w-full hover:bg-gray-400 transition-all ease-linear cursor-pointer duration-75 px-4 py-1">My Orders</p>
                                    <p className="text-lg text-gray-700 font-semibold w-full hover:bg-gray-400 transition-all ease-linear cursor-pointer duration-75 px-4 py-1">Autoship</p>
                                    <p className="text-lg text-gray-700 font-semibold w-full hover:bg-gray-400 transition-all ease-linear cursor-pointer duration-75 px-4 py-1">My Account</p>
                                    <p className="text-lg text-gray-700 font-semibold w-full hover:bg-gray-400 transition-all ease-linear cursor-pointer duration-75 px-4 py-1">Shopping List</p>
                                    <p className="text-lg text-gray-700 font-semibold w-full hover:bg-gray-400 transition-all ease-linear cursor-pointer duration-75 px-4 py-1">Blog</p>
                                <p className="w-full h-[0.5px] my-2 bg-gray-400"></p>
                                    <p className="text-lg text-gray-700 font-semibold w-full hover:bg-gray-400 transition-all ease-linear cursor-pointer duration-75 px-4 py-1">About Us</p>
                                    <p className="text-lg text-gray-700 font-semibold w-full hover:bg-gray-400 transition-all ease-linear cursor-pointer duration-75 px-4 py-1">How It Works</p>
                                    <p className="text-lg text-gray-700 font-semibold w-full hover:bg-gray-400 transition-all ease-linear cursor-pointer duration-75 px-4 py-1">Our Quality Standard</p>
                                    <p className="text-lg text-gray-700 font-semibold w-full hover:bg-gray-400 transition-all ease-linear cursor-pointer duration-75 px-4 py-1">Enviromental Impact</p>
                                    <p className="text-lg text-gray-700 font-semibold w-full hover:bg-gray-400 transition-all ease-linear cursor-pointer duration-75 px-4 py-1">FAQ</p>
                            </div>
                            <div className="w-80 hidden">
                                <p className="text-center font-bold text-black">Welcome 'User'</p>
                            </div>
                        </div>
                    </ul>
                </div>
            </div>
        </nav>
        </>
    )
}