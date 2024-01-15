import ShopNav from "./ShopNav"
import ShopFilter from "./ShopFilter"

export default function ShopMain(){
    return(
        <>
        <ShopNav />
        <div className="h-screen w-full bg-gray-200">
            <ShopFilter />
        </div>
        </>
    )
}