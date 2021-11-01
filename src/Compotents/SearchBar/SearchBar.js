import React, {useState} from "react";
import "./SearchBar.css";

function SearchBar() {
    const [query, setQuery] = useState("");

    function onFormSubmit(e) {
        e.preventDefault();
    }

    return(
        <form className="searchbar" onSubmit={onFormSubmit}>
            <input
                type="text"
                name="search"
                placeholder="Search a recipe.."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
            />
            <button type="submit">
                Search
            </button>
        </form>
    );
}

export default SearchBar;