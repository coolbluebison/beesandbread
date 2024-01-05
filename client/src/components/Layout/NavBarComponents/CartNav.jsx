// this is the hover menu for the cart Icon on the Navbar

export default function CartNav({cartHover,setCartHover}){
    return(
        <div className={cartHover?"w-96 px-4 bg-white rounded-b-2xl absolute z-40 right-5 shadow-md":"hidden"} onMouseOver={()=>{setCartHover(true)}} onMouseLeave={()=>{setCartHover(false)}}>
            {/* put content here */}
            <div className="flex w-full justify-between py-2 text-black">
                <p className="font-semibold">Your Cart: 0 Items</p>
                <p>Subtotal: $0.00</p>
            </div>
            <div className="flex w-full pb-4 justify-between py-2 font-bold text-lg text-white">
                <p className="w-[48%] text-center bg-gray-300 text-black transition-all duration-100 hover:text-white hover:bg-orange-500 rounded-2xl px-1 py-4">View Cart</p>
                <p className="w-[48%] text-center bg-orange-400 hover:bg-orange-500 transition-all duration-100 rounded-2xl px-1 py-4">Checkout</p>
            </div>
        </div>
    )
}