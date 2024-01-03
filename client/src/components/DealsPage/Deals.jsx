import DealsNav from "./DealsNav"

export default function Deals(){

    let categories = [
        "New",
        "Meat & Seafood",
        "Pantry",
        "Snacks",
        "Bar Food",
        "Treats",
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
        <div className="px-10 md:px-36 pt-52  bg-white">
            <DealsNav cat={categories}/>
        </div>
    )

}