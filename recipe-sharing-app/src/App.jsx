import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import RecipeForm from './components/RecipeForm';
import RecipeList from './components/RecipeList';
import RecipeDetails from './components/RecipeDetails';
import EditRecipe from './components/EditRecipe';
import Navbar from './components/Navbar';
import SearchBar from './components/SearchBar';
import useRecipeStore from './store/recipeStore';

const App = () => {
  const { fetchRecipes, filterRecipes, searchTerm } = useRecipeStore();

  useEffect(() => {
    fetchRecipes();
  }, [fetchRecipes]);

  useEffect(() => {
    filterRecipes();
  }, [searchTerm]);

  return (
    <Router>
      <div>
        <Navbar />
        <SearchBar />
        <Routes>
          <Route path="/" element={<RecipeList />} />
          <Route path="/add" element={<RecipeForm />} />
          <Route path="/edit/:id" element={<EditRecipe />} />
          <Route path="/recipes/:id" element={<RecipeDetails />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
