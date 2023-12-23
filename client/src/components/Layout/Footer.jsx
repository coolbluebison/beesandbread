
export default function Footer(){
    return(
        <div className="w-full bottom-0 bg-orange-300 grid grid-cols-1 md:grid-cols-2">
            <div className="col-span-1  flex justify-center items-center min-h-[350px]">
                <div>
                    <p className="font-bold text-3xl text-center ">Bees N Bread</p>
                    <p className="font-semibold text-lg text-center">Signup for our Newsletter and get updated <br/> on the latest products and deals</p>
                    <form className="flex w-full pt-6">
                        <input className="w-full rounded-l-md p-2" required placeholder="Email"></input>
                        <a
                        href="#"
                        className="flex-none rounded-r-md bg-pink-400 px-3 py-2 text-lg m-auto font-semibold text-white shadow-sm hover:bg-pink-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900"
                        >
                        Join <span aria-hidden="true">&rarr;</span>
                        </a>
                    </form>
                </div>
            </div>
            <div className="col-span-1 flex justify-center items-center">
                <p> hello</p>
            </div>
            <div className="col-span-2 bottom-0 relative">
                <p className="text-center">© BeesNBread not a real copyright yet.</p>
            </div>
        </div>
    )
}