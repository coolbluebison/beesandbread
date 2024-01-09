import React from "react"

import LandingNav from "./LandingNav"
import Carousel from "./Carosel"
import GroceryNav from "./GroceryNav"
import CTA from "./CTA"
import Featured from "./Featured"

function LandingPage() {


    return (

      <div className="bg-white">

        <LandingNav />
        <Carousel />
        <Featured />
        <CTA />
        <GroceryNav />
        
      </div>
  

    )
}

export default LandingPage;