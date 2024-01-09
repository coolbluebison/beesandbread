import { useNavigate } from "react-router-dom"

export default function LandingNav(){

    let nav = useNavigate()

    return(
        <div className="w-full h-8 bg-rose-400 flex items-center fixed top-0 z-50 justify-center">
            <p className="font-dancing text-white text-lg">Bees N Bread</p>
        </div>
    )
}