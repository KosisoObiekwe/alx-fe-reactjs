// src/components/AddRecipeForm.jsx
import { useState } from 'react';
import useRecipeStore from './recipeStore';

function AddRecipeForm() {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const addRecipe = useRecipeStore((state) => state.addRecipe);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!title || !description) return;

        const newRecipe = {
            id: Date.now().toString(),
            title,
            description,
        };

        addRecipe(newRecipe);
        setTitle('');
        setDescription('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <textarea
                placeholder="Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            ></textarea>
            <button type="submit">Add Recipe</button>
        </form>
    );
}

export default AddRecipeForm;
