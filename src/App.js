// Importing necessary modules and components
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import NavigationBar from './NavigationBar'; 
import HomePage from './HomePage';
import SignUpLoginPage from './SignUpLoginPage';
import ProfilePage from './ProfilePage';
import SearchResultsPage from './SearchResultsPage';
import RecipeCreationPage from './RecipeCreationPage';
import RecipeDetailPage from './RecipeDetailPage';
import AddRecipePage from './AddRecipePage';
import EditRecipePage from './EditRecipePage'; 
import ContactSupportPage from './ContactSupportpage';
import FavoriteRecipePage from './FavoriteRecipePage';

// Main App component
function App() {
  return (
    // Wrapping the application with the Router component to enable routing
    <Router>
      {/* Including the NavigationBar component at the top of all pages */}
      <NavigationBar /> 
      {/* Defining the routes for the application */}
      <Routes>
        {/* Route for the home page */}
        <Route path="/" exact element={<HomePage />} />
        {/* Route for the sign-up and login page */}
        <Route path="/signup-login" element={<SignUpLoginPage />} />
        {/* Route for the user profile page */}
        <Route path="/profile" element={<ProfilePage />} />
        {/* Route for displaying search results */}
        <Route path="/search-results" element={<SearchResultsPage />} />
        {/* Route for the recipe creation page */}
        <Route path="/create-recipe" element={<RecipeCreationPage />} />
        {/* Default route for recipe details that navigates to a specific recipe */}
        <Route path="/recipe-detail" element={<Navigate to="/recipe-detail/1" />} />
        {/* Route for displaying details of a specific recipe */}
        <Route path="/recipe-detail/:recipeId" element={<RecipeDetailPage />} />
        {/* Route for adding a new recipe */}
        <Route path="/add-recipe" element={<AddRecipePage />} />
        {/* Default route for editing a recipe that navigates to a specific recipe for editing */}
        <Route path="/edit-recipe" element={<Navigate to="/edit-recipe/1" replace />} /> 
        {/* Route for editing a specific recipe */}
        <Route path="/edit-recipe/:recipeId" element={<EditRecipePage/>} />
        {/* The "replace" prop ensures that the navigation to "/edit-recipe/1" replaces the current entry 
            in the history stack instead of adding a new one. This is useful because if a user were to press 
            the back button after being redirected, they would go back to the previous page they were on 
            before "/edit-recipe", rather than getting stuck in a loop between "/edit-recipe" and "/edit-recipe/1".
        */}
        {/* Route for the contact support page */}
        <Route path="/contact-support" element={<ContactSupportPage />} />
        {/* Route for displaying favorite recipes */}
        <Route path="/favorites" element={<FavoriteRecipePage />} />
      </Routes>
    </Router>
  );
}

// Exporting the App component to be used in other parts of the application
export default App;

