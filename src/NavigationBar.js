import React from 'react';
import { useNavigate } from 'react-router-dom';

function NavigationBar() {
  const navigate = useNavigate();

  return (
    <div className="nav-container">
      <button className="nav-button" onClick={() => navigate("/")}>Home</button>
      <button className="nav-button" onClick={() => navigate("/signup-login")}>Sign Up / Login</button>
      <button className="nav-button" onClick={() => navigate("/profile")}>Profile</button>
      <button className="nav-button" onClick={() => navigate("/search-results")}>Search Recipe</button>
      <button className="nav-button" onClick={() => navigate("/create-recipe")}>Create Recipe</button>
      <button className="nav-button" onClick={() => navigate("/recipe-detail")}>Recipe Detail</button>
      <button className="nav-button" onClick={() => navigate("/edit-recipe")}>Add/Edit Recipe</button>
      <button className="nav-button" onClick={() => navigate("/favorites")}>Favorite Recipes</button>
      <button className="nav-button" onClick={() => navigate("/contact-support")}>Contact Support</button>
    </div>
  );
}

export default NavigationBar;


