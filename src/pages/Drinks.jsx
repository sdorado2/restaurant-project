import React from "react";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Search from "../components/Search";

const Drinks = (props) => {
  const [drink, setDrink] = useState({
    searchTerm: "",
  });

  const url = `www.thecocktaildb.com/api/json/v1/1/search.php?s={""}`;

  const getDrink = async (searchTerm) => {
    const response = await fetch({ url });
    const data = await response.json();
    setDrink(data);
  };

  useEffect(() => {
    getDrink("Margarita");
  }, []);

  return (
    <div>
      <Search />
    </div>
  );
};

export default Drinks;
