import React, { useState } from 'react';
import './RecipeCreationPage.css';


// TODO: ADD Error Boundary Component - see RecipeDetailPage.js for example


// Represents the recipe creation page where users can input details for a new recipe.
const RecipeCreationPage = () => {
    // State variables for storing user input.
    const [recipeName, setRecipeName] = useState('');
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
        // Log the input values (commented out)
        // console.log(recipeName, ingredients, instructions, image);

        // Create FormData object to hold the form data
        const formData = new FormData();
        formData.append('recipeName', recipeName);
        formData.append('ingredients', ingredients);
        formData.append('instructions', instructions);
        formData.append('image', image);

        fetch('http://your-django-api-url/create-recipe/', { //TODO: Replace with your Django REST API URL
            method: 'POST',
            body: formData
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
    // Handle errors (e.g., display an error message)
    console.log('Error creating recipe:', error);
        });
    }

    return (
        <div className="recipe-creation-page">
            <h2>Create a Recipe</h2>
            {/* Input field for the recipe name */}
            <input 
                type="text" 
                placeholder="Recipe Name" 
                value={recipeName} 
                onChange={(e) => setRecipeName(e.target.value)} 
            />
            {/* Textarea for entering the ingredients */}
            <textarea 
                placeholder="Ingredients" 
                value={ingredients} 
                onChange={(e) => setIngredients(e.target.value)} 
            />
            {/* Textarea for entering the cooking instructions */}
            <textarea 
                placeholder="Instructions" 
                value={instructions} 
                onChange={(e) => setInstructions(e.target.value)} 
            />
            {/* Input for uploading an image for the recipe */}
            <input type="file" onChange={handleImageUpload} />
            {/* Button to submit the form */}
            <button onClick={handleSubmit}>Submit</button>
        </div>
    );
}

export default RecipeCreationPage;  // Export the RecipeCreationPage component for use in other parts of the application

