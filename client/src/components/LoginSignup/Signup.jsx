import { RxAvatar } from "react-icons/rx";
import { RxLockClosed } from "react-icons/rx";
import { MdOutlineEmail } from "react-icons/md";
import { SlSocialGoogle } from "react-icons/sl";
import { TiSocialFacebookCircular } from "react-icons/ti";
import { FaApple } from "react-icons/fa";

export default function SignupComponent(){
    return(
        <>
            <form action="#" className="w-1/2 mx-auto flex items-center justify-center" >
            <div className="w-full">

                <div className="flex gap-2 text-gray-400">
                    <div>
                        <label className="py-2 text-black font-semibold">Email</label>
                        <div className="w-full bg-white rounded-md flex  justify-between px-2 my-2 items-center shadow-md">
                            <MdOutlineEmail size={"1.5rem"}/>
                            <input type="text" className="py-2 w-[90%] bg-white outline-none" placeholder="Email"/>
                        </div>
                    </div>
                    <div>
                        <label className="py-2 text-black font-semibold">Username</label>
                        <div className="w-full bg-white rounded-md flex  justify-between px-2 my-2 items-center shadow-md">
                            <RxAvatar size={"1.5rem"}/>
                            <input type="text" className="py-2 w-[90%] bg-white outline-none" placeholder="Username"/>
                        </div>
                    </div>
                </div>

                <p className="h-4"></p>

                <div className="flex gap-2 text-gray-400">
                    <div>
                        <label className="py-2 text-black font-semibold">Password</label>
                        <div className="w-full bg-white rounded-md flex  justify-between px-2 my-2 items-center shadow-md">
                            <RxLockClosed size={"1.5rem"}/>
                            <input className="py-2 w-[90%] bg-white outline-none" placeholder="Password" id="password" type="password"/>
                        </div>
                    </div>
                    <div>
                        <label className="py-2 text-black font-semibold">Confirm Password</label>
                        <div className="w-full bg-white rounded-md flex  justify-between px-2 my-2 items-center shadow-md">
                            <RxLockClosed size={"1.5rem"}/>
                            <input className="py-2 w-[90%] bg-white outline-none" placeholder="Confirm" id="password" type="password"/>
                        </div>
                    </div>
                </div>

                <div className="h-8 py-5  w-[70%] mx-auto">
                    <div className="flex w-full items-center justify-between p-1">
                        <input type="checkbox" className="checkbox checkbox-xs bg-white checked:border-white [--chkbg:theme(colors.white)]"/>
                        <p className="text-gray-700 text-sm underline">Opt In To Email Promotions</p>
                    </div>
                    <div className="flex w-full items-center justify-between p-1">
                        <input type="checkbox" className="checkbox checkbox-xs bg-white checked:border-white [--chkbg:theme(colors.white)]"/>
                        <p className="text-gray-700 text-sm underline">Agree To Terms Of Service</p>
                    </div>
                </div>

                <p className="w-full text-center text-xl my-12 py-2 rounded-full hover:bg-rose-600 shadow-md bg-rose-500 cursor-pointer text-white tracking-wider">Sign Up</p>

                <p className="text-sm text-center py-4">Or Continue With</p>

                <div className="flex items-center justify-between mx-2">
                    <span className="h-16 w-16 bg-rose-500 hover:bg-rose-600 hover:scale-105 shadow-md text-white rounded-xl flex items-center justify-center cursor-pointer"><SlSocialGoogle size={"2rem"}/></span>
                    <span className="h-16 w-16 bg-rose-500 hover:bg-rose-600 hover:scale-105 shadow-md text-white rounded-xl flex items-center justify-center cursor-pointer"><TiSocialFacebookCircular size={"2.5rem"}/></span>
                    <span className="h-16 w-16 bg-rose-500 hover:bg-rose-600 hover:scale-105 shadow-md text-white rounded-xl flex items-center justify-center cursor-pointer"><FaApple size={"2.5rem"}/></span>
                </div>

            </div>
            
            </form>
        </>
    )
}