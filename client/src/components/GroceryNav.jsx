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
            sub: ["Salmon","Tuna","Yellowtail"]
        },
        {
            main: "Egg",
            sub: ["Salmon","Tuna","Yellowtail"]
        },
        {
            main: "Organic",
            sub: ["Salmon","Tuna","Yellowtail"]
        },
        {
            main: "Gluten-Free",
            sub: ["Salmon","Tuna","Yellowtail"]
        }
    ]

    let [active,setActive] = useState(categories[0])

    return(
        <div className="w-full text-center">
            <div className="bg-green-200 shadow-lg">
            <p className="font-bold text-3xl p-5">View Products Fresh From Farmers</p>
            <div className="flex justify-center font-bold text-2xl w-[70%] m-auto ">
                {categories.map(c =>
                    <div>
                     <h1 className="px-10" onClick={()=>setActive(c)}>{c.main}</h1>
                     <p className={active.main === c.main? "mt-auto h-2  bg-green-600 rounded-t-md"  : "hidden"}></p>
                    </div>
                     )}
            </div>
            </div>

            {/* put card here */}

        </div>
    )
}