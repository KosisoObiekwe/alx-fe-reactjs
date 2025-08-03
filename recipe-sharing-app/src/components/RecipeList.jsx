// src/components/RecipeList.jsx
import React from 'react';
import useRecipeStore from './recipeStore';
import { Link } from 'react-router-dom';

function RecipeList() {
    const recipes = useRecipeStore((state) => state.recipes);
    const searchTerm = useRecipeStore((state) => state.searchTerm);

    const filteredRecipes = recipes.filter((recipe) =>
        recipe.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div>
            <h2>Recipe List</h2>
            <ul>
                {filteredRecipes.map((recipe) => (
                    <li key={recipe.id}>
                        <Link to={`/recipes/${recipe.id}`}>{recipe.title}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default RecipeList;
