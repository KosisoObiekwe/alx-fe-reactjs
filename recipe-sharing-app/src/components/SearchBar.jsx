// src/components/SearchBar.jsx
import React from 'react';
import useRecipeStore from './recipeStore';

function SearchBar() {
    const searchTerm = useRecipeStore((state) => state.searchTerm);
    const setSearchTerm = useRecipeStore((state) => state.setSearchTerm);

    return (
        <input
            type="text"
            placeholder="Search recipes..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
        />
    );
}

export default SearchBar;
