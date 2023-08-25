import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import NavigationBar from './NavigationBar'; // Adjust the path if you placed it in a different directory
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


function App() {
  return (
    <Router>
      <NavigationBar /> 
      <Routes>
        <Route path="/" exact element={<HomePage />} />
        <Route path="/signup-login" element={<SignUpLoginPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/search-results" element={<SearchResultsPage />} />
        <Route path="/create-recipe" element={<RecipeCreationPage />} />
        <Route path="/recipe-detail" element={<Navigate to="/recipe-detail/1" />} />
        <Route path="/recipe-detail/:recipeId" element={<RecipeDetailPage />} />
        <Route path="/add-recipe" element={<AddRecipePage />} />
        <Route path="/edit-recipe" element={<Navigate to="/edit-recipe/1" replace />} /> 
        <Route path="/edit-recipe/:recipeId" element={<EditRecipePage/>} />
        {
         // The "replace" prop ensures that the navigation to "/edit-recipe/1" replaces the current entry 
         // in the history stack instead of adding a new one. This is useful because if a user were to press 
         // the back button after being redirected, they would go back to the previous page they were on 
         // before "/edit-recipe", rather than getting stuck in a loop between "/edit-recipe" and "/edit-recipe/1".
       }

        <Route path="/contact-support" element={<ContactSupportPage />} />
        <Route path="/favorites" element={<FavoriteRecipePage />} />
        
      </Routes>
    </Router>
  );
}


export default App;
