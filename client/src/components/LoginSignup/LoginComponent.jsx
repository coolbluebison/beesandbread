import { RxAvatar } from "react-icons/rx";
import { RxLockClosed } from "react-icons/rx";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { useState } from "react";

export default function LoginComponent(){

    let [show,setShow] = useState(false)

    return(
        <>
            <form action="#" className="w-1/2 mx-auto flex items-center justify-center" >
            <div className="w-full">

                <label className="py-4 text-black font-semibold">Username</label>
                <div className="w-full bg-white rounded-md flex  justify-between px-2 my-2 items-center">
                    <RxAvatar size={"1.5rem"}/>
                    <input type="text" className="py-2 w-[90%] bg-white outline-none" placeholder="Enter Username"/>
                </div>

                <p className="h-6"></p>

                <label className=" text-black font-semibold">Password</label>
                

                <div className="w-full bg-white rounded-md flex  justify-between px-2 my-2 items-center">
                    <RxLockClosed size={"1.5rem"}/>
                    <input className="py-2 w-[81%] bg-white outline-none" placeholder="Enter Password" id="password" type={show ? null : "password"} />
                    <div className="cursor-pointer" onClick={()=>setShow(!show)}>
                        {show ? <FaEyeSlash size={"1.5rem"}/> : <FaEye size={"1.5rem"}/>}
                    </div>
                </div>
                <p className="w-full flex justify-end text-sm underline cursor-pointer hover:text-gray-800">Forgot Password?</p>

                <p className="h-6"></p>

                <p className="w-full text-center text-xl my-12 py-2 rounded-full hover:bg-rose-600 bg-rose-500 cursor-pointer text-white tracking-wider">Login</p>

            </div>
            
            </form>
        </>
    )
}