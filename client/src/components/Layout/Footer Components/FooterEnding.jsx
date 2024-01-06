import { FaCcAmex } from "react-icons/fa";
import { FaCcDiscover } from "react-icons/fa";
import { FaCcApplePay } from "react-icons/fa";
import { FaCcVisa } from "react-icons/fa6";
import { FaCcPaypal } from "react-icons/fa6";
import { FaCcMastercard } from "react-icons/fa6";


export default function FooterEnd(){
    return(
        <div className="bg-rose-800 px-52 py-2 text-white">
        <div className="w-full h-28 text-white flex justify-between items-center">
            <div className="text-gray-200 flex gap-2">
                <FaCcAmex size={"4rem"}/>
                <FaCcDiscover size={"4rem"}/>
                <FaCcMastercard size={"4rem"}/>
                <FaCcVisa size={"4rem"}/>
                <FaCcApplePay size={"4rem"}/>
                <FaCcPaypal size={"4rem"}/>
            </div>
            <div className="text-semibold underline">
                <p className="cursor-pointer">Terms of Service</p>
                <p className="cursor-pointer">Information</p>
            </div>
            <div className="text-semibold underline">
                <p className="cursor-pointer">Privacy Policy</p>
                <p className="cursor-pointer">Accessibility Adjustments</p>
            </div>
            <div className="text-semibold underline">
                <p className="cursor-pointer" >CO Supply Chain</p>
                <p className="cursor-pointer">Sitemap</p>
            </div>
        </div>
        <p className="py-2 ">If you are visually-impaired and having difficulty with our website, call us at 1‑111‑111‑1111</p>
        <p className="py-2 ">This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply. © Bees N Bread 2024 All rights reserved. </p>
        </div>
    )
}