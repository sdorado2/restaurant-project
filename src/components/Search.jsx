import React from "react";
import { useState, useEffect } from "react";

function Search(props) {
  const [findDrink, setFindDrink] = useState({
    searchTerm: "",
  });

  const searchDrink = (event) => {
    setFindDrink({ ...findDrink, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.drinkSearch(findDrink.searchTerm);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          className="search"
          type="text"
          name="searchTerm"
          placeholder="Search drinks here"
          onChange={searchDrink}
          value={findDrink.searchTerm}
        />
        <input className="submit" type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default Search;
