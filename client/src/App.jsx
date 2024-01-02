import { BrowserRouter as Router, Routes, Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';


// import Banner from "./components/LandingPage_components/Banner"
// import Carousel from "./components/LandingPage_components/Carosel"
// import GroceryNav from "./components/LandingPage_components/GroceryNav"
import LandingPage from './components/LandingPageComponents/LandingPage';

import IndividualItem from "./components/IndividualItemComponents/IndividualItem"

import Rootlayout from './components/Layout/Rootlayout';

import Deals from './components/DealsPage/Deals';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Rootlayout/>}>
      <Route index element= { <LandingPage /> } />
        <Route path="/item" element= { <IndividualItem /> } />
        <Route path="/deals" element= { <Deals /> } />
    </Route>
  )
)

function App() {

  return (
    <RouterProvider router={router} />
  )
}

export default App
