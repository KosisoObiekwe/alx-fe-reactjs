import { create } from 'zustand';
import axios from 'axios';

export const useRecipeStore = create((set) => ({
    recipes: [],
    filteredRecipes: [],
    searchTerm: '',

    fetchRecipes: async () => {
        try {
            const response = await axios.get('https://dummyjson.com/recipes');
            const recipes = response.data.recipes;
            set({ recipes, filteredRecipes: recipes });
        } catch (error) {
            console.error('Failed to fetch recipes:', error);
        }
    },

    addRecipe: (newRecipe) => {
        set((state) => {
            const updatedRecipes = [...state.recipes, newRecipe];
            return {
                recipes: updatedRecipes,
                filteredRecipes: updatedRecipes.filter((recipe) =>
                    recipe.name.toLowerCase().includes(state.searchTerm.toLowerCase())
                ),
            };
        });
    },

    setSearchTerm: (term) => set({ searchTerm: term }),

    filterRecipes: () =>
        set((state) => ({
            filteredRecipes: state.recipes.filter((recipe) =>
                recipe.name.toLowerCase().includes(state.searchTerm.toLowerCase())
            ),
        })),
}));
