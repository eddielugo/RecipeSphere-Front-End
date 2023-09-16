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
        fetch('https://be.recipesphere.net/api/profile/', {
            headers: {
                'Authorization': `Token ${window.sessionStorage.getItem('token')}`
              }
            }) // Change this to your Django API URL
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
   //TODO: remove image uplaod and display backend does not support profile pics yet. I could do it in the future
    const handleImageUpload = (event) => {
        const file = event.target.files[0];
        console.log(file);
        // Handle the image upload logic here (e.g., send to server or store locally)
    }

    return (
        <div className="user-info">
            <h2>User Information</h2>
            <div className="profile-picture">
                {console.log(userInfo)}
                {/* TODO: Display user's profile picture */}
                <img src={userInfo.profilePicture || "../Images/ProfileAvatar.jpg"} alt="User Profile" />
                {/* Input for uploading a new profile picture */}
                <input type="file" onChange={handleImageUpload} />
            </div>
            {/* Sample data for demonstration */}
            {/* TODO: userInfo.user.username and userInfo.user.email work if you first load page with the original code and then change it to this 
            So i think something is wrong with the loading of the info. this work if you run this page with the commented
            code below and one it load uncomment and the correct username and email show*/}

            {/* <p><strong>Username:</strong>{userInfo.user.username || 'JohnDoe'}</p>
            <p><strong>Email:</strong> {userInfo.user.email || 'johndoe@example.com'}</p> */}
            
        </div>
    );
}

// Component to display recipes shared by the user
const SharedRecipes = () => {
    const [sharedRecipes, setSharedRecipes] = useState([]);
// Fetch shared recipes from Django REST API
useEffect(() => {
    fetch('https://be.recipesphere.net/api/recipe/my_recipes/', {
            headers: {
                'Authorization': `Token ${window.sessionStorage.getItem('token')}`
              }
            }) // Change this to your Django API URL
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
            {/*TODO: add edit recipe button here*/}
            {sharedRecipes.map(recipe => <li key={recipe.id}>{recipe.title}</li>)}
            </ul>
        </div>
    );
}

// Component to display recipes saved or favorited by the user
const SavedRecipes = () => {
    const [savedRecipes, setSavedRecipes] = useState([]);

   // Fetch saved recipes from Django REST API
   useEffect(() => {
    fetch('https://be.recipesphere.net/api/profile/', {
            headers: {
                'Authorization': `Token ${window.sessionStorage.getItem('token')}`
              }
            }) // Change this to your Django API URL
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
            {/* TODO: Fix map function from json object field favorites from response of profile*/}
            {console.log(savedRecipes)}
            {/* {savedRecipes.favorites.map(recipe => <li key={recipe.id}>{recipe.title}</li>)} */}
            </ul>
        </div>
    );
}

export default ProfilePage;  // Export the ProfilePage component for use in other parts of the application

