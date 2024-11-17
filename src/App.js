import View from "./View";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ViewAProduct from "./components/otherViews/ViewAProduct";
import ViewAllProducts from "./components/otherViews/ViewAllProducts";
import Favorites from "./components/otherViews/Favorites";
import ShoppingCart from "./components/otherViews/ShoppingCart";
import WeDetails from "./components/otherViews/WeDetails";
import Login from "./components/otherViews/Login";
import Profile from "./components/otherViews/Profile";
import { useState } from "react";


function App() {
  const [user, setUser] = useState([])

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<View />} />
        <Route path="/aproduct" element={<ViewAProduct />} />
        <Route path="/allproducts" element={<ViewAllProducts />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/shoppingcart" element={<ShoppingCart />} />
        <Route path="/wedetails" element={<WeDetails />} />
        {
          !user.length > 0
            ? <Route path="/login" element={<Login setUser={setUser} />} />
            : <Route path="/profile" element={<Profile />} />
        }
       
      </Routes>
    </BrowserRouter>
  );
}

export default App;
