import React, { useState } from "react";
import RecipeCard from "./RecipeCard";
// import RecipeCard from "./RecipeCard";

const SearchBar = ({ recipe }) => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <>
      <div className="templateContainer">
        <div className="searchInput_Container">
          <input
            id="searchInput"
            type="text"
            placeholder="Search here..."
            onChange={(event) => {
              setSearchTerm(event.target.value);
            }}
          />
        </div>
        <div className="template_Container">
          {recipe
            .filter((val) => {
              if (searchTerm === "") {
                return val.dat;
              } else if (
                val.title.toLowerCase().includes(searchTerm.toLowerCase())
              ) {
                return val;
              }
            })
            .map((val) => (
              <RecipeCard recipe={val} />
            ))}
          {/* question */}
          return <RecipeCard />
        </div>
      </div>
    </>
  );
};
export default SearchBar;
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
