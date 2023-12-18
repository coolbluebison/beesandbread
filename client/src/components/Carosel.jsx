import { useState,useEffect } from "react";

export default function Carousel(){

    let slides = [
        "https://i.pinimg.com/originals/51/82/ac/5182ac536727d576c78a9320ac62de30.jpg",
        "https://wallpapercave.com/wp/wp3386769.jpg",
        "https://wallpaperaccess.com/full/809523.jpg",
        "https://getwallpapers.com/wallpaper/full/5/c/0/606489.jpg",
      ];

    let [current, setCurrent] = useState(0);

    let previousSlide = () => {
        if (current === 0) setCurrent(slides.length - 1);
        else setCurrent(current - 1);
    };

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
        <div className="overflow-hidden relative rounded-md">
            <div
                className={`flex transition ease-out duration-500`}
                style={{
                transform: `translateX(-${current * 100}%)`,
                }}
            >
                {slides.map(s => <img src={s} />)}
            </div>

        <div className="absolute flex justify-center items-center h-full pl-20 top-0 w-[40%] ">
            <div>
                <h1 className="text-2xl md:text-4xl text-gray-200 pb-16">Get Started and Enjoy the best savings on Organic Farm Fresh Food</h1>
                <a
                href="#"
                className="flex-none rounded-md bg-pink-400 px-6 py-2 text-lg font-semibold text-white shadow-sm hover:bg-pink-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900"
                >
                Save Now <span aria-hidden="true">&rarr;</span>
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
                className={`rounded-full w-3 h-3 cursor-pointer  ${
                    i == current ? "bg-white" : "bg-gray-500"
                }`}
                ></div>
            );
            })}
        </div>

        </div>

        
    )
}