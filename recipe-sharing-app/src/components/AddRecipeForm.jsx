// src/components/AddRecipeForm.jsx
import React, { useState } from 'react';
import useRecipeStore from './recipeStore';

function AddRecipeForm() {
    const [recipe, setRecipe] = useState('');
    const addRecipe = useRecipeStore((state) => state.addRecipe);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (recipe.trim()) {
            addRecipe(recipe.trim());
            setRecipe('');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={recipe}
                onChange={(e) => setRecipe(e.target.value)}
                placeholder="Enter recipe name"
            />
            <button type="submit">Add Recipe</button>
        </form>
    );
}

export default AddRecipeForm;
