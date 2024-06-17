import React from "react";
import { NavLink } from "react-router-dom";

let Links = [
  { path: "/", title: "Home" },
  { path: "/about", title: "About" },
  { path: "/contact", title: "Contact" },
  { path: "/product", title: "Product" }
];

const Navbar = () => {
  return (
    <div className="navbar">
      {Links.map((el) => (
        <NavLink
          className="navlink"
          key={el.title}
          to={el.path}
        >
          {el.title}
        </NavLink>
      ))}
      <NavLink to={"/login"} className="navlink-button">Login</NavLink>
    </div>
  );
};

export default Navbar;
