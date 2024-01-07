

export default function FooterBanner(){
    return(
        <div className="w-full bg-rose-200 h-16 flex items-center justify-between px-52 text-black">
            <p className=" font-bold text-lg">Need Help?</p>
            <div className="flex items-center justify-end gap-3 w-1/2">
                <p className="w-1/3 h-10 rounded-3xl bg-white flex items-center justify-center text-center cursor-pointer">Email Us</p>
                <p className="w-1/3 h-10 rounded-3xl bg-white flex items-center justify-center text-center cursor-pointer">FAQs</p>
            </div>
        </div>
    )
}