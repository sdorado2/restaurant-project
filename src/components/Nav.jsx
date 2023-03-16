import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className="nav">
      <Link to="/">
        <div>Home</div>
      </Link>
      <Link to="/drinks">
        <div>Drinks</div>
      </Link>
      <Link to="/meals">
        <div>Meals</div>
      </Link>
    </div>
  );
};

export default Nav;
