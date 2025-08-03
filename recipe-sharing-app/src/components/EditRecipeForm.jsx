import React, { useState } from 'react';
import { useRecipeStore } from '../recipeStore';

const EditRecipeForm = ({ recipe, onClose }) => {
    const [title, setTitle] = useState(recipe.title);
    const [description, setDescription] = useState(recipe.description);
    const updateRecipe = useRecipeStore((state) => state.updateRecipe);

    const handleSubmit = (event) => {
        event.preventDefault(); // ✅ important!
        updateRecipe({ ...recipe, title, description });
        if (onClose) onClose();
    };

    return (
        <form onSubmit={handleSubmit}>
            <h3>Edit Recipe</h3>
            <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Title"
                required
            />
            <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Description"
                required
            />
            <button type="submit">Save</button>
        </form>
    );
};

export default EditRecipeForm;
