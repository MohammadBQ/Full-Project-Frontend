import React from "react";

const SearchBar = () => {
  return (
    <div>
      <input type="text" placeholder="Search your recipe"></input>

      <select>
        <option value="ingredients">Ingredients</option>
      </select>
    </div>
  );
};

export default SearchBar;
//https://www.w3schools.com/howto/howto_css_searchbar.asp
//https://developer.mozilla.org/en-US/docs/Web/HTML/Element/select
//https://www.w3schools.com/tags/tag_select.asp
