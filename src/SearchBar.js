import './searchbar.css'
import React, { useState } from 'react';

function SearchBar({ onSearch }) {
    const [searchText, setSearchText] = useState('');

    const handleChange = (event) => {
        setSearchText(event.target.value);
    };

    const handleSearch = () => {
        onSearch(searchText);
    };

    return (
        <>
            <input
                type="text"
                placeholder="Search..."
                value={searchText}
                onChange={handleChange}
            />
            <button onClick={handleSearch}>Search</button>
        </>
    );
}

export default SearchBar;
