import { Outlet } from "react-router-dom";
import Footer from "./Footer";

export default function Rootlayout(){
    return(
        <>
        <Outlet />
        <Footer />
        </>
    )
}