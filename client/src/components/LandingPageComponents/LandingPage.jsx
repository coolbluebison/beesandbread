import React from "react"

import Banner from "./Banner"
import Carousel from "./Carosel"
import GroceryNav from "./GroceryNav"
import Footer from "../Layout/Footer"

function LandingPage() {


    return (

        <>
        <Banner />
        <div className="w-full  m-auto">
        <Carousel />
        </div>
        <GroceryNav />
        
      </>
  

    )
}

export default LandingPage;