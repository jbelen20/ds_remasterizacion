import "./App.css";
import Footer from "./components/home/Footer";
import Highlights from "./components/home/Highlights";
import HomeSlider from "./components/home/homeSlider";
import Products from "./components/home/Products";
import We from "./components/home/We";
import Navbar from "./components/navbar/navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="homeSlider">
        <HomeSlider />
      </div>
      <Products />
      <We />
      <Highlights />
      <Footer />
    </div>
  );
}

export default App;
