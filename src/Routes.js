
import { BrowserRouter, Routes, Route } from "react-router-dom";

import ViewAProduct from "./components/otherViews/ViewAProduct";
import ViewAllProducts from "./components/otherViews/ViewAllProducts";
import Favorites from "./components/otherViews/Favorites";
import ShoppingCart from "./components/otherViews/ShoppingCart";
import WeDetails from "./components/otherViews/WeDetails";
import Login from "./components/otherViews/Login";
import Profile from "./components/otherViews/Profile";
import CreateAccount from "./components/otherViews/CreateAccount";
import View from "./View";

function RoutesApp() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<View />} />
        <Route path="/aproduct" element={<ViewAProduct />} />
        <Route path="/allproducts" element={<ViewAllProducts />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/shoppingcart" element={<ShoppingCart />} />
        <Route path="/wedetails" element={<WeDetails />} />
        <Route path='/profile/:id' element={<Profile />} />
        <Route path="/login" element={<Login  />} />
        <Route path="/createaccount" element={<CreateAccount  />} />
      </Routes>
    </BrowserRouter>
  );
}

export default RoutesApp;