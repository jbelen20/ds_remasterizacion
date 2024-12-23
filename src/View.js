import React from "react";
import "./App.css";
import Footer from "./components/home/Footer";
import Highlights from "./components/home/Highlights";
import HomeSlider from "./components/home/homeSlider";
import Products from "./components/home/Products";
import We from "./components/home/We";
import Navbar from "./components/home/navbar";
// import SideBar from "./components/home/SideBar";

const View = () => {
  return (
    <div>
      <div className="App">
        <Navbar />
        {/* <SideBar/> */}
        <div className="homeSlider">
          <HomeSlider />
        </div>
        <Products />
        <We />
        <Highlights />
        <Footer />
      </div>
    </div>
  );
};

export default View;
