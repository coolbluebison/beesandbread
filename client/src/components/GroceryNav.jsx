import { useEffect, useState } from "react"

export default function GroceryNav(){

    let categories = [
        {
            main: "Meat",
            sub: ["Beef","Pork","Chicken"]
        },
        {
            main: "Fish",
            sub: ["Salmon","Tuna","Yellowtail"]
        },
        {
            main: "Dairy",
            sub: ["Salmon","Tuna",]
        },
        {
            main: "Egg",
            sub: ["Salmon","Tuna","Yellowtail"]
        },
        {
            main: "Organic",
            sub: ["Salmon","Tuna",]
        }
    ]

    let [active,setActive] = useState(categories[0])
    let subCat = active.sub

    console.log(subCat)

    return(
        <div className="w-full text-center">
            <div className="bg-green-200 shadow-lg">
            <p className="font-bold text-3xl p-5">View Products Fresh From Farmers</p>
            <div className="flex justify-center font-bold text-2xl w-full md:w-[70%] m-auto overflow-hidden">
                {categories.map(c =>
                    <div>
                     <h1 className="px-10" onClick={()=>setActive(c)}>{c.main}</h1>
                     <p className={active.main === c.main? "mt-auto h-2  bg-green-600 rounded-t-md"  : "h-2 hidden"}></p>
                    </div>
                     )}
            </div>
            </div>
                <div className="flex justify-center gap-8 p-5">
                    {subCat.map(a => 
                        <div className="h-40 w-40 bg-pink-200 relative group rounded-md transition-all ease-out duration-100">
                        <div className="flex absolute rounded-b-md h-16 w-full bottom-0 group-hover:h-20 group-hover:text-lg transition-all ease-out duration-100 bg-pink-400 justify-center items-center font-semibold">
                            {a}
                        </div>    
                        </div>  
                        )}
                </div>
            {/* put card here */}
                <a
                href="#"
                className="rounded-md mt-20 bg-pink-400 px-4 py-1.5 text-sm md:text-lg font-semibold text-white shadow-sm hover:bg-pink-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900"
                >
                Start Shopping
                </a>
        </div>
    )
}