import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


// import Banner from "./components/LandingPage_components/Banner"
// import Carousel from "./components/LandingPage_components/Carosel"
// import GroceryNav from "./components/LandingPage_components/GroceryNav"
import LandingPage from './components/LandingPageComponents/LandingPage';

import IndividualItem from "./components/IndividualItemComponents/IndividualItem"


function App() {

  return (

    <Router>  
      <Routes>  
        
        <Route path="/" element= { <LandingPage /> } />
        <Route path="/item" element= { <IndividualItem /> } />

      </Routes>
    </Router>

  )
}

export default App
