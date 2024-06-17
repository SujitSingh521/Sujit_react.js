import React from "react";
import Home from "./Home"; 
import About from "./About";
import Contact from "./Contact";
import Product from "./Product";
import Notfound from "./Notfound";
import Login from "./Login";
import PrivateRoute from "./PrivateRoute";
import {Route, Routes} from "react-router-dom";


const AllRoutes = () => {
  return (
    <div>
       <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/product" element={
        <PrivateRoute>
          <Product />
        </PrivateRoute>
      } />
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<Notfound />} />
    </Routes>
    </div>
  )
}

export default AllRoutes

