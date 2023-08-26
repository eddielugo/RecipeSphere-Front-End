import React, { useState } from 'react';
import './RecipeCreationPage.css';

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
        // Handle the form submission logic here (e.g., send data to server)
        console.log(recipeName, ingredients, instructions, image);
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

