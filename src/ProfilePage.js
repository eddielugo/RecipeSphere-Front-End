import React from 'react';
import './ProfilePage.css';

const ProfilePage = () => {
    return (
        <div className="profile-page">
            <UserInformation />
            <SharedRecipes />
            <SavedRecipes />
        </div>
    );
}

const UserInformation = () => {
    const handleImageUpload = (event) => {
        const file = event.target.files[0];
        // Handle the image upload logic here (e.g., send to server or store locally)
        console.log(file);
    }

    return (
        <div className="user-info">
            <h2>User Information</h2>
            <div className="profile-picture">
                <img src="/path/to/default/profile/picture.jpg" alt="User Profile" />
                <input type="file" onChange={handleImageUpload} />
            </div>
            {/* Sample data for demonstration */}
            <p><strong>Username:</strong> JohnDoe</p>
            <p><strong>Email:</strong> johndoe@example.com</p>
        </div>
    );
}

const SharedRecipes = () => {
    // Sample data for demonstration
    const recipes = ['Recipe 1', 'Recipe 2', 'Recipe 3'];

    return (
        <div className="shared-recipes">
            <h2>Shared Recipes</h2>
            <ul>
                {recipes.map(recipe => <li key={recipe}>{recipe}</li>)}
            </ul>
        </div>
    );
}

const SavedRecipes = () => {
    // Sample data for demonstration
    const recipes = ['Recipe A', 'Recipe B', 'Recipe C'];

    return (
        <div className="saved-recipes">
            <h2>Saved/Favorite Recipes</h2>
            <ul>
                {recipes.map(recipe => <li key={recipe}>{recipe}</li>)}
            </ul>
        </div>
    );
}

export default ProfilePage;
