import FooterEnd from "./Footer Components/FooterEnding"
import FooterBanner from "./Footer Components/FooterBanner";

import { SlSocialFacebook } from "react-icons/sl";
import { SlSocialInstagram } from "react-icons/sl";
import { SlSocialTwitter } from "react-icons/sl";
import { SlSocialYoutube } from "react-icons/sl";

export default function Footer(){
    return(
        <>
        <FooterBanner />
        <div className="w-full bottom-0  bg-rose-300 text-black">
            <div className="flex justify-between items-center gap-8 mx-52">
                <div className="w-1/3">
                    <p className="font-bold text-4xl text-center py-4 font-dancing">Bees N Bread</p>
                    <p className="font-semibold text-lg text-center">Signup for our Newsletter and get updated <br/> on the latest products and deals</p>
                    <form className="flex w-full pt-6 gap-2 items-center justify-center">
                        <input className="w-1/2 rounded-lg bg-white p-2" required placeholder="Email"></input>
                        <p className="w-1/3 rounded-lg p-2 bg-pink-400 text-center font-bold text-white cursor-pointer hover:bg-pink-500">Join Now</p>
                    </form>
                    <p className="flex items-center justify-center text-center py-2">By providing your email, you agree to receive marketing emails messages from Bees n Bread. Consent not a condition to purchase.</p>
                    <div className="w-full flex justify-center py-2">
                        <p className="w-2/3 h-[1px] bg-gray-700"></p>
                    </div>
                    <div className="flex justify-center items-center py-2 gap-4 text-gray-800">
                        <span className="cursor-pointer hover:text-white"><SlSocialFacebook size={"2rem"}/></span>
                        <span className="cursor-pointer hover:text-white"><SlSocialInstagram size={"2rem"}/></span>
                        <span className="cursor-pointer hover:text-white"><SlSocialTwitter size={"2rem"}/></span>
                        <span className="cursor-pointer hover:text-white"><SlSocialYoutube size={"2rem"}/></span>
                    </div>
                    
                </div>

                <div className="flex w-2/3 justify-end gap-16">
                <div className="">
                    <p className="font-semibold p-2 text-xl">Section</p>
                    <p className="cursor-pointer p-2">example</p>
                    <p className="cursor-pointer p-2">example</p>
                    <p className="cursor-pointer p-2">example</p>
                    <p className="cursor-pointer p-2">example</p>
                    <p className="cursor-pointer p-2">example</p>
                    <p className="cursor-pointer p-2">example</p>
                </div>
                <div className="">
                    <p className="font-semibold p-2 text-xl">Section</p>
                    <p className="underline cursor-pointer p-2">example</p>
                    <p className="underline cursor-pointer p-2">example</p>
                    <p className="underline cursor-pointer p-2">example</p>
                    <p className="underline cursor-pointer p-2">example</p>
                    <p className="underline cursor-pointer p-2">example</p>
                    <p className="underline cursor-pointer p-2">example</p>
                </div>
                <div className="">
                    <p className="font-semibold p-2 text-xl">Section</p>
                    <p className="underline cursor-pointer p-2">example</p>
                    <p className="underline cursor-pointer p-2">example</p>
                    <p className="underline cursor-pointer p-2">example</p>
                    <p className="underline cursor-pointer p-2">example</p>
                    <p className="underline cursor-pointer p-2">example</p>
                    <p className="underline cursor-pointer p-2">example</p>
                </div>
                <div className="">
                    <p className="font-semibold p-2 text-xl">Section</p>
                    <p className="underline cursor-pointer p-2">example</p>
                    <p className="underline cursor-pointer p-2">example</p>
                    <p className="underline cursor-pointer p-2">example</p>
                    <p className="underline cursor-pointer p-2">example</p>
                    <p className="underline cursor-pointer p-2">example</p>
                    <p className="underline cursor-pointer p-2">example</p>
                </div>
                </div>

            </div>
            
                
            
        </div>
        <FooterEnd />
        </>
    )
}