import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='name-of-product'>
        <h3>Calm Down</h3>
      </div>
      <div className='options-navbar'>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            {" "}
            <Link to='/explore'>Explore</Link>
          </li>
          <li>About Us</li>
          <li>Emergency?</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
