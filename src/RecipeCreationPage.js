import React, { useState } from 'react';
import './RecipeCreationPage.css';

// TODO: ADD Error Boundary Component - see RecipeDetailPage.js for example


// Represents the recipe creation page where users can input details for a new recipe.
const RecipeCreationPage = () => {
    // State variables for storing user input.
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [timeMinutes, setTimeMinutes] = useState('');
    const [ingredients, setIngredients] = useState('');
    const [instructions, setInstructions] = useState('');
    const [image, setImage] = useState(null);

// Handles the image file upload and sets the image state.
    const handleImageUpload = (event) => {
        const file = event.target.files[0];
        setImage(file);
    }
// Handles the form submission, logs the input values for now.
    const handleSubmit = () => {
        const recipeData = {
            title: title,
            description: description,
            time_minutes: timeMinutes,
            ingredients: ingredients,
            instructions: instructions,
            image: image // Assuming the backend can handle base64 encoded images or a file path
        };

        fetch('http://your-django-api-url/create-recipe/', {//TODO: Replace with our Django REST API URL
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Token ${localStorage.getItem('token')}`
            },
            body: JSON.stringify(recipeData)
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            // Handle successful form submission (e.g., navigate to another page or display a success message)
            console.log('Recipe successfully created:', data);
        })
        .catch(error => {
            console.log('Error creating recipe:', error);
        });
    }

    return (
        <div className="recipe-creation-page">
            <h2>Create a Recipe</h2>
              
            <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
            <textarea placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} />
            <input type="text" placeholder="Time (in minutes)" value={timeMinutes} onChange={(e) => setTimeMinutes(e.target.value)} />
            <textarea placeholder="Ingredients" value={ingredients} onChange={(e) => setIngredients(e.target.value)} />
            <textarea placeholder="Instructions" value={instructions} onChange={(e) => setInstructions(e.target.value)} />
            <input type="file" onChange={handleImageUpload} />
            <button onClick={handleSubmit}>Submit</button>
        </div>
    );
}

export default RecipeCreationPage;  // Export the RecipeCreationPage component for use in other parts of the application

