// Hover function for autoship on Navbar
import { RiLoopRightFill } from "react-icons/ri";

export default function AutoshipNav({ASDisplay,setASHover}){

    return(

        <div className={ASDisplay?"w-96 p-2 bg-gray-100 rounded-b-2xl absolute z-40 left-1/3 shadow-md":"hidden"} onMouseOver={()=>{setASHover(true)}} onMouseLeave={()=>{setASHover(false)}}>
            {/* put content here */}
           <div className="bg-rose-300 text-black p-2">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <span className="bg-orange-500 rounded-full p-1"><RiLoopRightFill/></span>
                        <p className="font-bold">Your Autoship</p>
                    </div>
                    <p className="text-orange-600 font-semibold underline cursor-pointer">View</p>
                </div>
                <div className="p-2">You currently have 0 active Autoship items. Add items to Autoship to receive recurring shipments on your schedule. You can pause Autoship anytime.</div>
                <p className="text-orange-600 font-semibold underline cursor-pointer p-2">Pause Autoship</p>
           </div>
           <p className="text-2xl p-4 text-center cursor-pointer text-black font-semibold">Manage Autoship</p>
        </div>

    )

}