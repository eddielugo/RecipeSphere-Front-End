import React, { useState, useEffect } from 'react';
import './ProfilePage.css';

// TODO: ADD Error Boundary Component - see RecipeDetailPage.js for example



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
    const [userInfo, setUserInfo] = useState({});

    // TODO: Change to our URL
    useEffect(() => {
        fetch('http://your-django-api-url/user-info/') // Change this to your Django API URL
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => setUserInfo(data))
            .catch(error => console.error('Error fetching user information:', error));
    }, []);
   // Function to handle profile image upload
    const handleImageUpload = (event) => {
        const file = event.target.files[0];
        console.log(file);
        // Handle the image upload logic here (e.g., send to server or store locally)
    }

    return (
        <div className="user-info">
            <h2>User Information</h2>
            <div className="profile-picture">
                {/* TODO: Display user's profile picture */}
                <img src={userInfo.profilePicture || "/path/to/default/profile/picture.jpg"} alt="User Profile" />
                {/* Input for uploading a new profile picture */}
                <input type="file" onChange={handleImageUpload} />
            </div>
            {/* Sample data for demonstration */}
            <p><strong>Username:</strong>{userInfo.username || 'JohnDoe'}</p>
            <p><strong>Email:</strong> {userInfo.email || 'johndoe@example.com'}</p>
        </div>
    );
}

// Component to display recipes shared by the user
const SharedRecipes = () => {
    const [sharedRecipes, setSharedRecipes] = useState([]);
// Fetch shared recipes from Django REST API
useEffect(() => {
    fetch('http://your-django-api-url/shared-recipes/') // Replace with your Django REST API URL
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => setSharedRecipes(data))
        .catch(error => console.error('Error fetching shared recipes:', error));
}, []);

// Sample data for demonstration (commented out)
// const recipes = ['Recipe 1', 'Recipe 2', 'Recipe 3'];

    return (
        <div className="shared-recipes">
            <h2>Shared Recipes</h2>
            {/* List of shared recipes */}
            <ul>
            {sharedRecipes.map(recipe => <li key={recipe.id}>{recipe.name}</li>)}
            </ul>
        </div>
    );
}

// Component to display recipes saved or favorited by the user
const SavedRecipes = () => {
    const [savedRecipes, setSavedRecipes] = useState([]);

   // Fetch saved recipes from Django REST API
   useEffect(() => {
    fetch('http://your-django-api-url/saved-recipes/') // Replace with your Django REST API URL
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => setSavedRecipes(data))
        .catch(error => console.error('Error fetching saved recipes:', error));
}, []);


    // Sample data for demonstration (commented out)
    // const recipes = ['Recipe A', 'Recipe B', 'Recipe C'];

    return (
        <div className="saved-recipes">
            <h2>Saved/Favorite Recipes</h2>
            {/* List of saved or favorited recipes */}
            <ul>
            {savedRecipes.map(recipe => <li key={recipe.id}>{recipe.name}</li>)}
            </ul>
        </div>
    );
}

export default ProfilePage;  // Export the ProfilePage component for use in other parts of the application

