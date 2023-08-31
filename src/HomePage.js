import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
//import axios from 'axios';  // Import axios for API calls if we use instead of fetch

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
                <LoginButton />  {/*Login button component*/}
            </header>
            <SearchBar />  {/* Search bar component */}
            <PopularRecipes />  {/* Popular recipes list component. TODO: Link to DB Search*/}
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
    //const recipes = ['Recipe 1', 'Recipe 2', 'Recipe 3'];
    const [recipes, setRecipes] = useState([]);  // State to hold popular recipes

    useEffect(() => {
        // Using fetch to get popular recipes
        fetch('http://your-django-api-url/popular-recipes/')
            .then(response => response.json())
            .then(data => setRecipes(data))
            .catch(error => console.error('Error fetching popular recipes:', error));

        // Using axios to get popular recipes
        //Replace http://your-django-api-url/ with the actual URL of our Django REST API
        //axios.get('http://your-django-api-url/popular-recipes/')
        //    .then(response => {
        //        setRecipes(response.data);
        //    })
        //    .catch(error => {
        //        console.error('Error fetching popular recipes:', error);
        //    });
    }, []);

    return (
        <div className="popular-recipes">
            <h2>Popular Recipes</h2>
            <ul>
                {/* Map through the recipes array and display each recipe */}
                {recipes.map(recipe => <li key={recipe.id}>{recipe.name}</li>)}  
            </ul>
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

    useEffect(() => {
        // Using fetch to get new recipes from Django REST API
        fetch('http://your-django-api-url/new-recipes/')
            .then(response => response.json())
            .then(data => setRecipes(data))
            .catch(error => console.error('Error fetching new recipes:', error));
        //  Using axios to get new recipes
        //Replace http://your-django-api-url/ with the actual URL to new recipes of our Django REST API
        //axios.get('http://your-django-api-url/new-recipes/')
        //    .then(response => {
        //        setRecipes(response.data);
        //    })
        //    .catch(error => {
        //       console.error('Error fetching new recipes:', error);
        //    });
    }, []);

    return (
        <div className="new-recipes">
            <h2>New Recipes</h2>
            <ul>
                {recipes.map(recipe => <li key={recipe.id}>{recipe.name}</li>)}  {/* Map through the recipes array and display each recipe */}
            </ul>
        </div>
    );
}

export default HomePage;  // Export the HomePage component for use in other parts of the application
