import React from 'react';
import { useRecipeStore } from '../store/recipeStore';

const RecipeList = () => {
    const { filteredRecipes } = useRecipeStore();

    return (
        <div className="space-y-4">
            {filteredRecipes.map((recipe) => (
                <div key={recipe.id || recipe.name} className="p-4 bg-white rounded shadow">
                    <h2 className="text-xl font-bold">{recipe.name}</h2>
                    <p><strong>Cuisine:</strong> {recipe.cuisine}</p>
                    <p><strong>Ingredients:</strong> {recipe.ingredients?.join(', ')}</p>
                    <p><strong>Instructions:</strong> {recipe.instructions}</p>
                </div>
            ))}
        </div>
    );
};

export default RecipeList;
