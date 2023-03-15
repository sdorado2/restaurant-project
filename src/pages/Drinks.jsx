import axios from "axios";
import { useState, useEffect } from "react";
import Search from "../components/Search";

const Drinks = (props) => {
  const [drink, setDrink] = useState(null);
  const [loading, setLoading] = useState(true);

  const getDrink = async (searchTerm) => {
    const response = await axios
      .get(
        `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchTerm}`
      )
      .then((res) => res.data.drinks);
    console.log("data has :", response[0]);
    setDrink(response[0]);
    setLoading(false);
  };

  useEffect(() => {
    getDrink("Margarita");
  }, []);

  console.log("drink has : ", drink);
  // console.log("drink has : ", drink[0]);

  if (loading) return <div>Loading...</div>;

  console.log("drink has : ", drink);
  return (
    <div>
      <div>
        <Search drinksearch={getDrink} />
      </div>

      <div>
        <h1>{drink.strDrink}</h1>
      </div>
    </div>
  );
};

export default Drinks;
