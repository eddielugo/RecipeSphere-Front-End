import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './ProfilePage.css';



const ProfilePage = () => {
    return (
        <div className="profile-page">
        {/* User's personal information section */}
            <UserInformation />
            {/* List of recipes shared by the user */}
            <MyRecipes />
            {/* List of recipes saved or favorited by the user */}
            <FavoriteRecipes />
        </div>
    );
}

// Component to display user's personal information
const UserInformation = () => {
    const [userInfo, setUserInfo] = useState({});
    const [loading, setLoading] = useState(true); // Add loading state

// Fetch user information from Django REST API
    useEffect(() => {
        fetch('https://be.recipesphere.net/api/profile/', {
            headers: {
                'Authorization': `Token ${window.sessionStorage.getItem('token')}`
            }
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to fetch comments');
            }
            return response.json();
        })
        .then(data => {
            setUserInfo(data);
            setLoading(false); // Set loading to false once data is fetched
        })
        .catch(error => {
            console.error('Error fetching user information:', error);
            setLoading(false); // Set loading to false even if there's an error
        });
    }, []);

     if (loading) {
        return <div>Loading...</div>; // Display a loading message while fetching data
    }

    // Function to handle profile image upload
   //Commented outimage uplaod and display backend does not support profile pics yet. Do it in the future
    //const handleImageUpload = (event) => {
        //const file = event.target.files[0];
        //console.log(file);
        // Handle the image upload logic here (e.g., send to server or store locally)
    //}


    return (
        <div className="user-info">
            <h2>User Information</h2>
              {/* Display user's profile picture-future add */}
            {/*<img src={userInfo.profilePicture || "../Images/ProfileAvatar.jpg"} alt="User Profile" />*/}
            {/* : userInfo.user.username and userInfo.user.email work if you first load page with the original code and then change it to this*/} 
            {/*So i think something is wrong with the loading of the info. this work if you run this page with the commented*/}
            {/*code below and one it load uncomment and the correct username and email show*/}
            <p><strong>Username:</strong> {userInfo.user?.username || 'JohnDoe'}</p>
            <p><strong>Email:</strong> {userInfo.user?.email || 'johndoe@example.com'}</p> 
        </div>
    
    );
 }
// Component to display recipes shared by the user
const MyRecipes = () => {
    const [myRecipes, setMyRecipes] = useState([]);
    
// Fetch shared recipes from Django REST API
    useEffect(() => {
        fetch('https://be.recipesphere.net/api/recipe/my_recipes/', {
            headers: {
                'Authorization': `Token ${window.sessionStorage.getItem('token')}`
            }
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => setMyRecipes(data))
        .catch(error => console.error('Error fetching my recipes:', error));
    }, []);

    return (
        <div className="my-recipes">
            <h2>My Recipes</h2>
            {/* List of "My" recipes */}
            <ul>
                {myRecipes.map(recipe => (
                    <li key={recipe.id}>
                        {/* Wrap the recipe title in a Link component to route to EditRecipePage */}
                        <Link to={`/EditRecipePage/${recipe.id}`}>{recipe.title}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

// Component to display recipes favorited by the user
const FavoriteRecipes = () => {
    const [favoriteRecipes, setFavoriteRecipes] = useState([]);

// Fetch favorite recipes from Django REST API
    useEffect(() => {
        fetch('https://be.recipesphere.net/api/profile/', {
            headers: {
                'Authorization': `Token ${window.sessionStorage.getItem('token')}`
            }
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            // Check if the 'favorites' field exists in the response data
            if (data.favorites) {
                setFavoriteRecipes(data.favorites);
            }
        })
        .catch(error => console.error('Error fetching favorite recipes:', error));
    }, []);

    return (
        <div className="favorite-recipes">
            <h2>Favorite Recipes</h2>
            {/* List of favorited recipes */}
            <ul>
            {/* TODO: Fix map function from json object field favorites from response of profile*/}
                {favoriteRecipes.map(recipe => (
                    <li key={recipe.id}>
                        {/* Wrap the recipe title in a Link component */}
                        <Link to={`/EditRecipePage/${recipe.id}`}>{recipe.title}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}


export default ProfilePage;

