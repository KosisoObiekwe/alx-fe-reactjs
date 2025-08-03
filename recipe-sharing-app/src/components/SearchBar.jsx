import React from 'react';
import { useRecipeStore } from '../store/recipeStore';

const SearchBar = () => {
    const { searchTerm, setSearchTerm } = useRecipeStore();

    return (
        <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search recipes..."
            className="w-full p-2 border border-gray-300 rounded"
        />
    );
};

export default SearchBar;
