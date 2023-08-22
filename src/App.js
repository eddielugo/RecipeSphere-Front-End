import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavigationBar from './NavigationBar'; // Adjust the path if you placed it in a different directory
import HomePage from './HomePage';
import SignUpLoginPage from './SignUpLoginPage';
import ProfilePage from './ProfilePage';
import SearchResultsPage from './SearchResultsPage';
import RecipeCreationPage from './RecipeCreationPage';
import RecipeDetailPage from './RecipeDetailPage';
import AddEditRecipePage from './AddEditRecipePage';
import ContactSupportPage from './ContactSupportpage';
import FavoriteRecipePage from './FavoriteRecipePage';

function App() {
  return (
    <Router>
      <NavigationBar /> {/* Add the NavigationBar component here */}
      <Routes>
        <Route path="/" exact element={<HomePage />} />
        <Route path="/signup-login" element={<SignUpLoginPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/search-results" element={<SearchResultsPage />} />
        <Route path="/create-recipe" element={<RecipeCreationPage />} />
        <Route path="/recipe-detail" element={<RecipeDetailPage />} />
        <Route path="/edit-recipe" element={<AddEditRecipePage />} />
        <Route path="/contact-support" element={<ContactSupportPage />} />
        <Route path="/favorites" element={<FavoriteRecipePage />} />
      </Routes>
    </Router>
  );
}


export default App;
