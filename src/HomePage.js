import React from 'react';
import { Link } from 'react-router-dom';

import './HomePage.css';

// Home Page Component
const HomePage = () => {
    return (
        <div className="home-page">
            <header>
                <h1>RecipeSphere</h1>
                <LoginButton />
            </header>
            <SearchBar />
            <PopularRecipes />
            <NewRecipes />
        </div>
    );
}

// Login Button Component
const LoginButton = () => {
    return (
        <Link to="/signup-login">
            <button className="login-btn">Login</button>
        </Link>
    );
}

// Search Bar Component
const SearchBar = () => {
    return (
        <div className="search-bar">
            <input type="text" placeholder="Search for recipes..." />
            <button>Search</button>
        </div>
    );
}

// Popular Recipes Component
const PopularRecipes = () => {
    // Sample data for demonstration
    const recipes = ['Recipe 1', 'Recipe 2', 'Recipe 3'];

    return (
        <div className="popular-recipes">
            <h2>Popular Recipes</h2>
            <ul>
                {recipes.map(recipe => <li key={recipe}>{recipe}</li>)}
            </ul>
        </div>
    );
}

// New Recipes Component
const NewRecipes = () => {
    // Sample data for demonstration
    const recipes = ['Recipe A', 'Recipe B', 'Recipe C'];

    return (
        <div className="new-recipes">
            <h2>New Recipes</h2>
            <ul>
                {recipes.map(recipe => <li key={recipe}>{recipe}</li>)}
            </ul>
        </div>
    );
}

export default HomePage;