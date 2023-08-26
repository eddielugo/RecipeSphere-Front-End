import React from 'react';
import './ProfilePage.css';

// Main Profile Page Component
const ProfilePage = () => {
    return (
        <div className="profile-page">
            {/* User's personal information section */}
            <UserInformation />
            {/* List of recipes shared by the user */}
            <SharedRecipes />
            {/* List of recipes saved or favorited by the user */}
            <SavedRecipes />
        </div>
    );
}

// Component to display user's personal information
const UserInformation = () => {
    // Function to handle profile image upload
    const handleImageUpload = (event) => {
        const file = event.target.files[0];
        // Handle the image upload logic here (e.g., send to server or store locally)
        console.log(file);
    }

    return (
        <div className="user-info">
            <h2>User Information</h2>
            <div className="profile-picture">
                {/* Display user's profile picture */}
                <img src="/path/to/default/profile/picture.jpg" alt="User Profile" />
                {/* Input for uploading a new profile picture */}
                <input type="file" onChange={handleImageUpload} />
            </div>
            {/* Sample data for demonstration */}
            <p><strong>Username:</strong> JohnDoe</p>
            <p><strong>Email:</strong> johndoe@example.com</p>
        </div>
    );
}

// Component to display recipes shared by the user
const SharedRecipes = () => {
    // Sample data for demonstration
    const recipes = ['Recipe 1', 'Recipe 2', 'Recipe 3'];

    return (
        <div className="shared-recipes">
            <h2>Shared Recipes</h2>
            {/* List of shared recipes */}
            <ul>
                {recipes.map(recipe => <li key={recipe}>{recipe}</li>)}
            </ul>
        </div>
    );
}

// Component to display recipes saved or favorited by the user
const SavedRecipes = () => {
    // Sample data for demonstration
    const recipes = ['Recipe A', 'Recipe B', 'Recipe C'];

    return (
        <div className="saved-recipes">
            <h2>Saved/Favorite Recipes</h2>
            {/* List of saved or favorited recipes */}
            <ul>
                {recipes.map(recipe => <li key={recipe}>{recipe}</li>)}
            </ul>
        </div>
    );
}

export default ProfilePage;  // Export the ProfilePage component for use in other parts of the application

