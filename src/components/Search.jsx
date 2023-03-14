import React from "react";
import { useState, useEffect } from "react";

function Search(props) {
  const [drink, setDrink] = useState({
    searchTerm: "",
  });

  const handleChange = (event) => {
    setDrink({ ...drink, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.drinkSearch(drink.searchTerm);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          className="search"
          type="text"
          name="searchTerm"
          placeholder="Search drinks here"
          onChange={handleChange}
          value={drink.searchTerm}
        />
        <input className="submit" type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default Search;
