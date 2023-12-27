import { useState } from "react"

export default function SubNav(){

    let categories = [
        "Bees N Bread Specials",
        "Holiday & More",
        "New",
        "Meat & Seafood",
        "Pantry",
        "Snacks, Bars & Treats",
        "Beverages",
        "Frozen",
        "Wine",
        "Babies & Kids",
        "Health",
        "Personal Care",
        "Household",
        "Pet",
        "Exclusives",
        "Gifts"
    ]



    return(
        <div className="w-full h-10 flex justify-evenly px-12 gap-4 bg-gray-200 items-center">
            {categories.map(cat => 
                <div className="group relative h-full flex items-center" key={cat}>
                    <p className="text-gray-600 cursor-pointer font-semibold hover:text-cyan-800 " key={cat + "p"}>{cat}</p>
                    <p className="h-1 bg-cyan-800 w-full bottom-0 absolute hidden group-hover:block"></p>
                </div>
            )}
        </div>
    )
}