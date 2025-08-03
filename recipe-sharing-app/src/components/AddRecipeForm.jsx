// src/components/AddRecipeForm.jsx
import React, { useState } from 'react';
import { useRecipeStore } from './recipeStore';

function AddRecipeForm() {
    const [title, setTitle] = useState('');
    const [instructions, setInstructions] = useState('');
    const addRecipe = useRecipeStore((state) => state.addRecipe);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!title || !instructions) return;
        addRecipe({ title, instructions });
        setTitle('');
        setInstructions('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Recipe Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <textarea
                placeholder="Instructions"
                value={instructions}
                onChange={(e) => setInstructions(e.target.value)}
            />
            <button type="submit">Add Recipe</button>
        </form>
    );
}

export default AddRecipeForm;
