import SubDrawer from "./SubDrawer"
import { useState } from "react"

export default function DrawerMain(){

    let [sub,setSub] = useState(false)

    return(
        <div className="drawer-side z-50">
                    <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="menu min-h-full group m-0 p-0 bg-gray-100 text-base-content">
                        <div className="flex group transition-all ease-linear duration-500">
                            <div className="w-80">
                                <p className="text-center font-semibold text-black p-4 text-lg w full bg-rose-300">Welcome Back 'User'!</p>
                                <p className="w-full h-[0.5px] mb-2 bg-gray-400"></p>
                                    <p className="flex items-center text-2xl text-gray-900 font-bold w-full hover:bg-gray-400 transition-all ease-linear cursor-pointer duration-75 px-4 py-1" onClick={()=>setSub(!sub)}>Categories
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
                            <SubDrawer sub={sub}/>
                        </div>
                    </ul>
                </div>
    )
}