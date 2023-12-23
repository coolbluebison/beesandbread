import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import NavBar from "./Navbar";

export default function Rootlayout(){
    return(
        <>
        <NavBar />
        <Outlet />
        <Footer />
        </>
    )
}