import React from 'react';
import { Link } from 'react-router-dom';

import './HomePage.css';

/**
 * HomePage Component: Represents the main landing page of the application.
 * It includes the site header, login button, search bar, popular recipes, and new recipes sections.
 */
const HomePage = () => {
    return (
        <div className="home-page">
            <header>
                <h1>RecipeSphere</h1>  {/* Site title */}
                <LoginButton />  {/* Login button component */}
            </header>
            <SearchBar />  {/* Search bar component */}
            <PopularRecipes />  {/* Popular recipes list component */}
            <NewRecipes />  {/* New recipes list component */}
        </div>
    );
}
/**
 * LoginButton Component: Represents a button that redirects users to the signup/login page.
 */

const LoginButton = () => {
    return (
        <Link to="/signup-login">  {/* Link to the signup/login page */}
            <button className="login-btn">Login</button>
        </Link>
    );
}

/**
 * SearchBar Component: Represents a search bar where users can input text to search for recipes.
 */
const SearchBar = () => {
    return (
        <div className="search-bar">
            <input type="text" placeholder="Search for recipes..." />  {/* Input field for search queries */}
            <button>Search</button>  {/* Button to initiate the search */}
        </div>
    );
}

/**
 * PopularRecipes Component: Displays a list of popular recipes.
 */
const PopularRecipes = () => {
    // Sample data for demonstration
    const recipes = ['Recipe 1', 'Recipe 2', 'Recipe 3'];

    return (
        <div className="popular-recipes">
            <h2>Popular Recipes</h2>
            <ul>
                {recipes.map(recipe => <li key={recipe}>{recipe}</li>)}  {/* Map through the recipes array and display each recipe */}
            </ul>
        </div>
    );
}

/**
 * NewRecipes Component: Displays a list of newly added recipes.
 */
const NewRecipes = () => {
    // Sample data for demonstration
    const recipes = ['Recipe A', 'Recipe B', 'Recipe C'];

    return (
        <div className="new-recipes">
            <h2>New Recipes</h2>
            <ul>
                {recipes.map(recipe => <li key={recipe}>{recipe}</li>)}  {/* Map through the recipes array and display each recipe */}
            </ul>
        </div>
    );
}

export default HomePage;  // Export the HomePage component for use in other parts of the application
