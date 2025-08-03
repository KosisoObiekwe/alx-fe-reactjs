// src/components/recipeStore.js
import { create } from 'zustand';

const useRecipeStore = create((set) => ({
    recipes: [],
    searchTerm: '',

    setRecipes: (newRecipes) => set({ recipes: newRecipes }),
    addRecipe: (recipe) => set((state) => ({ recipes: [...state.recipes, recipe] })),
    updateRecipe: (updatedRecipe) =>
        set((state) => ({
            recipes: state.recipes.map((r) =>
                r.id === updatedRecipe.id ? updatedRecipe : r
            ),
        })),
    deleteRecipe: (id) =>
        set((state) => ({
            recipes: state.recipes.filter((r) => r.id !== id),
        })),
    setSearchTerm: (term) => set({ searchTerm: term }),
}));

export default useRecipeStore;
