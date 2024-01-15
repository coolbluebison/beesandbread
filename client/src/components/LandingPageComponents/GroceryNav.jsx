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
        <div className="bg-white w-full text-center pb-10">
            <div className=" shadow-sm">
            <p className="font-bold text-lg md:text-2xl py-4">View Products Fresh From Farmers</p>
            <div className="flex md:justify-center font-bold text-2xl w-full md:w-[70%] m-auto overflow-x-scroll no-scrollbar">
                {categories.map(c =>
                    <div className="cursor-pointer" onClick={()=>setActive(c)}>
                     <h1 className="px-10 mb-2" >{c.main}</h1>
                     <p className={active.main === c.main? "mt-auto mx-auto w-[80%] h-1 bg-cyan-800"  : "h-1 hidden"}></p>
                    </div>
                     )}
            </div>
            </div>
                <div className="flex justify-center p-4">
                <div className=" gap-6 md:gap-12 grid grid-cols-2 md:flex justify-center">
                    {subCat.map(a => 
                        <div className="h-36 w-36 bg-pink-200 relative group rounded-md transition-all ease-out duration-100 col-span-1">
                        <div className="flex absolute h-8 w-full bottom-0 group-hover:h-12 group-hover:text-lg transition-all ease-out duration-100 bg-white justify-center items-center font-semibold">
                            {a}
                        </div>    
                        </div>  
                        )}
                </div>
                </div>
                <a
                href="#"
                className="rounded-md mt-20 bg-pink-400 px-6 py-2 text-lg font-semibold text-white shadow-sm hover:bg-pink-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900"
                >
                Start Shopping
                </a>
        </div>
    )
}