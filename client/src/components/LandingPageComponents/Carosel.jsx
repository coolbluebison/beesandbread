import { useState,useEffect } from "react";

export default function Carousel(){

    let slides = [
        "https://i.pinimg.com/originals/51/82/ac/5182ac536727d576c78a9320ac62de30.jpg",
        "https://wallpapercave.com/wp/wp3386769.jpg",
        "https://wallpaperaccess.com/full/809523.jpg",
        "https://getwallpapers.com/wallpaper/full/5/c/0/606489.jpg",
      ];

    let [current, setCurrent] = useState(0);

    let nextSlide = () => {
        if (current === slides.length - 1) setCurrent(0);
        else setCurrent(current + 1);
    };

    useEffect(() => {
        const interval = setInterval(() => {
          nextSlide();
        }, 5000);
        return () => clearInterval(interval);
      }, [current]);


    return(
        <div className="overflow-hidden relative mx-0   md:h-[40rem]">
            <div
                className={`flex transition ease-out duration-500 `}
                style={{
                transform: `translateX(-${current * 100}%)`,
                }}
            >
                {slides.map(s => <img src={s}/>)}
            </div>

        <div className="absolute flex justify-center items-center text-center md:text-left h-full p-5 md:pl-20 top-0 w-full md:w-[40%] ">
            <div >
                <h1 className="text-lg md:text-4xl text-gray-200 pb-2 md:pb-16 font-semibold ">Get Started and Enjoy the Best Savings on Organic Farm Fresh Food</h1>
                <a
                href="#"
                className="flex-none rounded-md bg-pink-400 px-4 py-1.5 text-sm md:text-lg font-semibold text-white shadow-sm hover:bg-pink-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900"
                >
                Save Now 
                </a>
                <a
                href="#"
                className="flex-none m-2 rounded-md bg-pink-400 px-4 py-1.5 text-sm md:text-lg font-semibold text-white shadow-sm hover:bg-pink-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900"
                >
                Shop Local 
                </a>
            </div>
        </div>

        <div className="absolute bottom-0 py-4 flex justify-center gap-3 w-full">
            {slides.map((s, i) => {
            return (
                <div
                onClick={() => {
                    setCurrent(i);
                }}
                key={"circle" + i}
                className={`rounded-full md:w-2 md:h-2 w-1 h-1 cursor-pointer  ${
                    i == current ? "bg-white" : "bg-gray-500"
                }`}
                ></div>
            );
            })}
        </div>

        </div>

        
    )
}