import Banner from "./components/Banner"
import Carousel from "./components/Carosel"
import GroceryNav from "./components/GroceryNav"

function App() {

  return (
    <>
      <Banner />
      <div className="w-full md:w-[75%] m-auto">
      <Carousel />
      </div>
      <GroceryNav />
    </>
  )
}

export default App
