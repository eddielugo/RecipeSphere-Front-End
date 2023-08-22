import React from 'react';
import './FavoriteRecipePage.css';

const FavoriteRecipePage = () => {
    const favoritedRecipes = sampleData; // Replace sampleData with actual data fetching logic

    return (
        <div className="favorite-recipe-page">
            <UserProfile />
            <FavoritedRecipesList recipes={favoritedRecipes} />
        </div>
    );
}

const UserProfile = () => {
    return (
        <div className="user-profile">
            <img src="path_to_user_image.jpg" alt="User Profile" />
            <h2>Username</h2>
        </div>
    );
}

const FavoritedRecipesList = ({ recipes }) => {
    return (
        <div className="favorited-recipes-list">
            {recipes.map(recipe => (
                <RecipeCard key={recipe.id} recipe={recipe} />
            ))}
        </div>
    );
}

const RecipeCard = ({ recipe }) => {
    return (
        <div className="recipe-card">
            <img src={recipe.thumbnail} alt={recipe.name} />
            <h3>{recipe.name}</h3>
            <p>{recipe.description}</p>
            <button className="view-btn">View Recipe</button>
            <button className="remove-btn">Remove from Favorites</button>
        </div>
    );
}

// Sample data for demonstration
const sampleData = [
    { id: 1, name: 'Recipe A', description: 'Description A', thumbnail: 'imageA.jpg' },
    { id: 2, name: 'Recipe B', description: 'Description B', thumbnail: 'imageB.jpg' },
    { id: 3, name: 'Recipe C', description: 'Description C', thumbnail: 'imageC.jpg' }
];

export default FavoriteRecipePage;
