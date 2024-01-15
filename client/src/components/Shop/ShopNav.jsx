import { IoMdHome } from "react-icons/io";
import { FaChevronRight } from "react-icons/fa6";

export default function ShopNav(){
    return(
        <div className="w-full py-6 flex items-center text-black gap-2 px-32 pt-52 bg-white">
            <p><IoMdHome size={"1.25rem"}/></p>
            <p className="hover:underline cursor-pointer">Home</p>
            <p><FaChevronRight /></p>
            <p className="hover:underline cursor-pointer">Category</p>
            <p><FaChevronRight /></p>
            <p className="hover:underline cursor-pointer">Sub Category</p>
        </div>
    )
}