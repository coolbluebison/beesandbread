

export default function DrawerMain({setDisplay}){
    return(
        <>
        <p className="flex items-center text-2xl text-black font-bold w-full hover:bg-gray-400 transition-all ease-linear cursor-pointer duration-75 px-4 py-2" onClick={()=>setDisplay(false)}>Categories
            <svg className="ml-auto h-7 w-7" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 7L15 12L10 17" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg></p> 
            <p className="flex items-center text-2xl text-black font-bold w-full hover:bg-gray-400 transition-all ease-linear cursor-pointer duration-75 px-4 py-2">Brand
            <svg className="ml-auto h-7 w-7" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 7L15 12L10 17" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg></p>
            <p className="flex items-center text-2xl text-black font-bold w-full hover:bg-gray-400 transition-all ease-linear cursor-pointer duration-75 px-4 py-2">Diet
            <svg className="ml-auto h-7 w-7" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 7L15 12L10 17" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg></p>
            <p className="flex items-center text-2xl text-black font-bold w-full hover:bg-gray-400 transition-all ease-linear cursor-pointer duration-75 px-4 py-2">But It Again
            <svg className="ml-auto h-7 w-7" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 7L15 12L10 17" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg></p>
            <p className="flex items-center text-2xl text-black font-bold w-full hover:bg-gray-400 transition-all ease-linear cursor-pointer duration-75 px-4 py-2">Deals
            <svg className="ml-auto h-7 w-7" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 7L15 12L10 17" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg></p>
        <p className="w-full h-[0.5px] my-2 bg-gray-400"></p>
            <p className="text-lg text-black w-full hover:bg-gray-400 transition-all ease-linear cursor-pointer duration-75 px-4 py-1.5">My Orders</p>
            <p className="text-lg text-black w-full hover:bg-gray-400 transition-all ease-linear cursor-pointer duration-75 px-4 py-1.5">Autoship</p>
            <p className="text-lg text-black w-full hover:bg-gray-400 transition-all ease-linear cursor-pointer duration-75 px-4 py-1.5">My Account</p>
            <p className="text-lg text-black w-full hover:bg-gray-400 transition-all ease-linear cursor-pointer duration-75 px-4 py-1.5">Shopping List</p>
            <p className="text-lg text-black w-full hover:bg-gray-400 transition-all ease-linear cursor-pointer duration-75 px-4 py-1.5">Blog</p>
        <p className="w-full h-[0.5px] my-2 bg-gray-400"></p>
            <p className="text-lg text-black w-full hover:bg-gray-400 transition-all ease-linear cursor-pointer duration-75 px-4 py-1.5">About Us</p>
            <p className="text-lg text-black w-full hover:bg-gray-400 transition-all ease-linear cursor-pointer duration-75 px-4 py-1.5">How It Works</p>
            <p className="text-lg text-black w-full hover:bg-gray-400 transition-all ease-linear cursor-pointer duration-75 px-4 py-1.5">Our Quality Standard</p>
            <p className="text-lg text-black w-full hover:bg-gray-400 transition-all ease-linear cursor-pointer duration-75 px-4 py-1.5">Enviromental Impact</p>
            <p className="text-lg text-black w-full hover:bg-gray-400 transition-all ease-linear cursor-pointer duration-75 px-4 py-1.5">FAQ</p>
            </>
    )
}