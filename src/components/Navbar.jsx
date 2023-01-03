import React from "react";
import { NavLink, Link } from "react-router-dom";
import logo from "../assets/djacm_logo.png";

const Navbar = () => {
  const routes = [
    { to: "/", text: "Home" },
    { to: "/events", text: "Events" },
    { to: "/team", text: "Team" },
  ];

  return (
    <nav className='navbar'>
      <div className='nav-content'>
        <Link to='/' className='nav-logo-link'>
          <img src={logo} className='nav-logo' />
        </Link>

        <div className='nav-links'>
          {routes.map(x => (
            <NavLink
              key={x.text}
              to={x.to}
              className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>
              {x.text}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
