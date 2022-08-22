import "./App.css";
import HomeSlider from "./components/home/homeSlider";
import Products from "./components/home/Products";
import Navbar from "./components/navbar/navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="homeSlider">
        <HomeSlider />
      </div>
      <Products />
    </div>
  );
}

export default App;
