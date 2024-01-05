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
        <div className="w-full bottom-0  bg-rose-300 grid grid-cols-1 md:grid-cols-2 text-black">
            <div className="col-span-1 flex justify-center items-center min-h-[350px]">
                <div className="w-1/2 ">
                    <p className="font-bold text-3xl text-center ">Bees N Bread</p>
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
            </div>
            <div className="col-span-1 flex justify-center items-center">
                <p> hello</p>
            </div>
            <div className="col-span-2 bottom-0 relative">
                <FooterEnd />
            </div>
        </div>
        </>
    )
}