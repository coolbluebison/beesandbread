import React from "react"

import LandingNav from "./LandingNav"
import Carousel from "./Carosel"
import GroceryNav from "./GroceryNav"
import CTA from "./CTA"

function LandingPage() {


    return (

      <div className="bg-white">

        <LandingNav />
        <Carousel />
        <GroceryNav />
        <CTA />
        
        
      </div>
  

    )
}

export default LandingPage;