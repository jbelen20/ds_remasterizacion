import "./App.css";
import HomeSlider from "./components/home/homeSlider";
import Navbar from "./components/navbar/navbar";
import styled from "styled-components";

function App() {
  return (
    <div className="App">
      <div className="homeSlider">
        <HomeSlider />
      </div>
      <Navbar />
    </div>
  );
}

export default App;
