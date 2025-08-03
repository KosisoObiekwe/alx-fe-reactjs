// src/components/RecipeList.jsx
import React from 'react';
import useRecipeStore from './recipeStore';

function RecipeList() {
    const recipes = useRecipeStore((state) => state.recipes);

    return (
        <div>
            <h3>Recipe List</h3>
            <ul>
                {recipes.map((r, index) => (
                    <li key={index}>{r}</li>
                ))}
            </ul>
        </div>
    );
}

export default RecipeList;
