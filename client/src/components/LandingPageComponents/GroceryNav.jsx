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
            <p className="font-bold text-lg md:text-2xl py-4">View Products Fresh From Farmers</p>
            <div className="flex justify-center font-bold text-2xl w-full md:w-[70%] m-auto overflow-x-scroll no-scrollbar">
                {categories.map(c =>
                    <div className="cursor-pointer" onClick={()=>setActive(c)}>
                     <h1 className="px-10 mb-2" >{c.main}</h1>
                     <p className={active.main === c.main? "mt-auto h-2  bg-green-600"  : "h-2 hidden"}></p>
                    </div>
                     )}
            </div>
            </div>
                <div className="flex justify-center p-4">
                <div className=" gap-8 grid grid-cols-2 md:flex justify-center">
                    {subCat.map(a => 
                        <div className="h-36 w-36 bg-pink-200 relative group rounded-md transition-all ease-out duration-100 col-span-1">
                        <div className="flex absolute rounded-b-md h-12 w-full bottom-0 group-hover:h-16 group-hover:text-lg transition-all ease-out duration-100 bg-pink-400 justify-center items-center font-semibold">
                            {a}
                        </div>    
                        </div>  
                        )}
                </div>
                </div>
            {/* put card here */}
                <a
                href="#"
                className="rounded-md mt-20 bg-pink-400 px-6 py-2 text-lg font-semibold text-white shadow-sm hover:bg-pink-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900"
                >
                Start Shopping
                </a>
        </div>
    )
}