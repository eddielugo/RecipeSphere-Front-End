import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './NavigationBar.css';

function NavigationBar() {
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path ? 'active' : '';
  };

  return (
    <div className="nav-container">
      <button className={`nav-button ${isActive("/")}`} onClick={() => navigate("/")}>Home</button>
      <button className={`nav-button ${isActive("/signup-login")}`} onClick={() => navigate("/signup-login")}>Sign Up / Login</button>
      <button className={`nav-button ${isActive("/profile")}`} onClick={() => navigate("/profile")}>Profile</button>
      <button className={`nav-button ${isActive("/search-results")}`} onClick={() => navigate("/search-results")}>Search Recipe</button>
      <button className={`nav-button ${isActive("/create-recipe")}`} onClick={() => navigate("/create-recipe")}>Create Recipe</button>
      <button className={`nav-button ${isActive("/recipe-detail")}`} onClick={() => navigate("/recipe-detail")}>Recipe Detail</button>
      <button className={`nav-button ${isActive("/add-recipe")}`} onClick={() => navigate("/add-recipe")}>Add Recipe</button>
      <button className={`nav-button ${isActive("/edit-recipe")}`} onClick={() => navigate("/edit-recipe")}>Edit Recipe</button>
      <button className={`nav-button ${isActive("/favorites")}`} onClick={() => navigate("/favorites")}>Favorite Recipes</button>
      <button className={`nav-button ${isActive("/contact-support")}`} onClick={() => navigate("/contact-support")}>Contact Support</button>
    </div>
  );
}

export default NavigationBar;



