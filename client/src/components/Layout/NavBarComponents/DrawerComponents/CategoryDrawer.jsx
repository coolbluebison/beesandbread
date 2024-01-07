

export default function CategoryDrawer({setDisplay,setSub}){

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
        <>
            <p className="flex items-center justify-start gap-2 text-xl text-black font-bold w-full hover:bg-gray-400 transition-all ease-linear cursor-pointer duration-75 px-4 py-1"
            onClick={()=>{setDisplay(true)}}
            >
            <svg className="h-7 w-7 rotate-180" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 7L15 12L10 17" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>Back</p>
            <p className="w-full h-[0.5px] my-2 bg-gray-400"></p>
            {categories.map(c=> { 
                return(
                    <p className="flex items-center text-lg text-black w-full hover:bg-gray-400 transition-all ease-linear cursor-pointer duration-75 px-4 py-2" key={c} onMouseOver={()=>{setSub(true,c)}}>{c}
                    <svg className="ml-auto h-6 w-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 7L15 12L10 17" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg></p>
                )
            })}
        </>
    )
}