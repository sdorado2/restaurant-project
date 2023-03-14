import React from "react";
import { useState, useEffect } from "react";
// import { Link, useParams } from "react-router-dom";
import Search from "../components/Search";

const Drinks = (props) => {
  const [drink, setDrink] = useState(null);

  // const url = `www.thecocktaildb.com/api/json/v1/1/search.php?s={""}`;

  const getDrink = async (searchTerm) => {
    const response = await fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchTerm}`
    );
    const data = await response.json();
    console.log("data has :", data);
    setDrink(data);
  };

  useEffect(() => {
    getDrink("Margarita");
  }, []);

  console.log("drink has : ", drink);
  // console.log("drink has : ", drink[0]);

  return (
    <div>
      <div>
        <Search drinksearch={getDrink} />
      </div>

      <div>
        <h1>{drink}</h1>
      </div>
    </div>
  );
};

export default Drinks;
