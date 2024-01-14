import { Outlet } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Footer from "./Footer";
import NavBar from "./Navbar";

export default function Rootlayout(){

    const nav = useLocation()

    return(
        <>
        {nav.pathname !== '/login' && nav.pathname !== "/" ? <NavBar /> : null }
        <Outlet />
        {nav.pathname !== '/login'? <Footer /> : null }
        </>
    )
}