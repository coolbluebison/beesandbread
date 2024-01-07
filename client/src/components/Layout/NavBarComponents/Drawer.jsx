import SubDrawer from "./SubDrawer"
import DrawerMain from "./DrawerComponents/DrawerMain"
import CategoryDrawer from "./DrawerComponents/CategoryDrawer"


import { useState } from "react"


export default function Drawer(){

    let [sub,setSub] = useState(false)
    let [display,setDisplay] = useState(true)
    let [subContent,setSubContent] = useState(null)


    return(
        <div className="drawer-side z-50">
                    <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="menu min-h-full group m-0 p-0 bg-gray-100 text-base-content">
                        <div className="flex group transition-all ease-linear duration-500">
                            <div className="w-80">
                                <p className="text-center font-semibold text-black p-4 text-lg w full bg-rose-300">Welcome Back 'User'!</p>
                                <p className="w-full h-[0.5px] mb-2 bg-gray-400"></p>
                                <div className="transition-all duration-500">
                                {display ? <DrawerMain setDisplay={setDisplay} /> : <CategoryDrawer setDisplay={setDisplay} setSub={setSub}/>}
                                </div>
                            </div>
                            <SubDrawer sub={sub} setSub={setSub}/>
                        </div>
                    </ul>
                </div>
    )
}