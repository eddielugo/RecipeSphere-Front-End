import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';

import logo from './Images/logo-icon.png'

/**
 * HomePage Component: Represents the main landing page of the application.
 * It includes the site header, login button, search bar, popular recipes, and new recipes sections.
 */

// TODO: ADD Error Boundary Component - see RecipeDetailPage.js for example

const HomePage = () => {
    return (
        <div className="home-page">
            <header>
                <img src={logo} alt="site logo"/> {/* Site logo */}
                <h1>RecipeSphere</h1>  {/* Site title */}
                <LoginButton />  {/*Login button component*/}
            </header>
            <SearchBar />  {/* Search bar component */}
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
 * NewRecipes Component: Displays a list of newly added recipes.
 */
const NewRecipes = () => {
    // Sample data for demonstration
    //const recipes = ['Recipe A', 'Recipe B', 'Recipe C'];
    const [recipes, setRecipes] = useState([]);  // State to hold new recipes

    // Fetching new recipes
useEffect(() => {
    console.log("Fetching new recipes...");
    // Fetch data from our Django REST API
    fetch('https://be.recipesphere.net/api/recipe/', {
        headers: {
            'Authorization': `Token ${localStorage.getItem('token')}`
          }
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            console.log("Fetched new recipes:", data);
            setRecipes(data);
        })
        .catch(error => console.error('Error fetching new recipes:', error));
}, []);

    return (
        <div className="new-recipes">
            <h2>New Recipes</h2>
            <ul>
                {recipes.map(recipe => (
                    <li key={recipe.id}>
                        {/* Wrap the recipe title in a Link component */}
                        <Link to={`/recipe-detail/${recipe.id}`}>
                            {recipe.title}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default HomePage;  // Export the HomePage component for use in other parts of the application
