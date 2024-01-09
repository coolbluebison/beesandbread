import { GoTrophy } from "react-icons/go";
import { AiOutlinePhone } from "react-icons/ai";
import { IoPricetagsOutline } from "react-icons/io5";
import { CgBee } from "react-icons/cg";

export default function CTASection({active}){

    function icon(active){
        if(active === 1){
            return(<GoTrophy size={"10rem"}/>)
        } else if (active === 2){
            return(<AiOutlinePhone size={"10rem"}/>)
        } else if (active === 3){
            return(<IoPricetagsOutline size={"10rem"}/>)
        } else if (active === 4){
            return(<CgBee size={"10rem"}/>)
        }
    }

    return(
        <div className={active === 0 ? "w-full h-0 opacity-0 transition-all duration-300 -z-50 bg-rose-400 text-white flex" : "w-full h-[25rem] opacity-100 transition-all duration-300 bg-rose-400 text-white flex"}>
            <div className={active === 0 ? "hidden" : "flex mx-52"}>
                <div className="h-full w-1/3 flex items-center justify-center">
                    <span className="bg-rose-300 p-20 rounded-full">
                        {icon(active)}
                    </span>
                </div>
                <div className="h-full w-2/3 flex items-center justify-center">
                    <div className="w-2/3">
                        <p className="font-dancing text-center py-4 text-4xl">Ingredients</p>
                        <p className=" text-center text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}