import React, { useState, useEffect } from 'react';
import './FavoriteRecipePage.css';

// Main component to display the user's favorite recipes
const FavoriteRecipePage = () => {
    //The favoritedRecipes state variable will hold the fetched data
    const [favoritedRecipes, setFavoritedRecipes] = useState([]);

    // Fetch favorite recipes from Django REST API
    useEffect(() => {
        fetch('http://your-django-api-url/favorite-recipes/')//TODO: Replace with our Django REST API URL
            .then(response => response.json())
            .then(data => setFavoritedRecipes(data))
            .catch(error => console.error('Error fetching favorite recipes:', error));
    }, []);

    // Sample data for demonstration purposes (commented out)
    // const favoritedRecipes = sampleData;

    return (
        <div className="favorite-recipe-page">
            {/* Display user profile section */}
            <UserProfile />
            {/* Display list of favorited recipes */}
            <FavoritedRecipesList recipes={favoritedRecipes} />
        </div>
    );
}

// Component to display user profile information
const UserProfile = () => {
    return (
        <div className="user-profile">
            {/* User profile image */}
            <img src="path_to_user_image.jpg" alt="User Profile" />
            {/* Display username (replace with dynamic data in the future) */}
            <h2>Username</h2>
        </div>
    );
}

// the FavoritedRecipesList component to display a list of favorited recipes
const FavoritedRecipesList = ({ recipes }) => {
    return (
        <div className="favorited-recipes-list">
            {/* Map through the recipes and display each one using the RecipeCard component */}
            {recipes.map(recipe => (
                <RecipeCard key={recipe.id} recipe={recipe} />
            ))}
        </div>
    );
}

// Component to display individual recipe card
const RecipeCard = ({ recipe }) => {
    return (
        <div className="recipe-card">
            {/* Display recipe thumbnail */}
            <img src={recipe.thumbnail} alt={recipe.name} />
            {/* Display recipe name */}
            <h3>{recipe.name}</h3>
            {/* Display recipe description */}
            <p>{recipe.description}</p>
            {/* Button to view full recipe */}
            <button className="view-btn">View Recipe</button>
            {/* Button to edit the recipe */}
            <button className="edit-btn" onClick={() => handleEdit(recipe.id)}>Edit Recipe</button>
            {/* Button to remove recipe from favorites */}
            <button className="remove-btn">Remove from Favorites</button>
        </div>
    );
}

// Function to handle the edit action and navigate to the edit page for the selected recipe
const handleEdit = (id) => {
    window.location.href = `/edit-recipe/${id}`;
}

// Sample data for demonstration purposes
//const sampleData = [
//    { id: 1, name: 'Recipe A', description: 'Description A', thumbnail: 'imageA.jpg' },
//    { id: 2, name: 'Recipe B', description: 'Description B', thumbnail: 'imageB.jpg' },
//    { id: 3, name: 'Recipe C', description: 'Description C', thumbnail: 'imageC.jpg' }
//];

// Export the main component
export default FavoriteRecipePage;
