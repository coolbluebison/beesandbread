

export default function ProfileNav({pHover,setPHover}){
    return(
        <div className={pHover?"w-72 px-4 py-4 bg-white rounded-b-2xl absolute z-40 right-20 shadow-md":"hidden"} onMouseOver={()=>{setPHover(true)}} onMouseLeave={()=>{setPHover(false)}}>
            {/* put content here */}
                <p className="p-3 text-lg text-gray-800 cursor-pointer w-full rounded-xl hover:bg-rose-400">Account Information</p>
                <p className="p-3 text-lg text-gray-800 cursor-pointer w-full rounded-xl hover:bg-rose-400">Orders</p>
                <p className="p-3 text-lg text-gray-800 cursor-pointer w-full rounded-xl hover:bg-rose-400">Buy It Again</p>
                <p className="p-3 text-lg text-gray-800 cursor-pointer w-full rounded-xl hover:bg-rose-400">Lists</p>
                <p className="p-3 text-lg text-gray-800 cursor-pointer w-full rounded-xl hover:bg-rose-400">Recommended</p>
                <p className="p-3 text-lg text-gray-800 cursor-pointer w-full rounded-xl hover:bg-rose-400">Recently Viewed</p>
                <p className="p-3 text-lg text-gray-800 cursor-pointer w-full rounded-xl hover:bg-rose-400">Invite a Friend</p>
                <p className="p-3 text-lg text-gray-800 cursor-pointer w-full rounded-xl hover:bg-rose-400">Review Purchases</p>
                <p className="p-3 text-lg text-gray-800 cursor-pointer w-full rounded-xl hover:bg-rose-400">Gift Membership</p>
                <p className="p-3 text-lg text-gray-800 cursor-pointer w-full rounded-xl hover:bg-rose-400">FAQs</p>
                <p className="p-3 text-lg text-gray-800 cursor-pointer w-full rounded-xl hover:bg-rose-400">24/7 Chat</p>
        </div>
    )
}