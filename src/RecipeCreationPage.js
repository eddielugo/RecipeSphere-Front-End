import React, { useState } from 'react';
import './RecipeCreationPage.css';

const RecipeCreationPage = () => {
    const [recipeName, setRecipeName] = useState('');
    const [ingredients, setIngredients] = useState('');
    const [instructions, setInstructions] = useState('');
    const [image, setImage] = useState(null);

    const handleImageUpload = (event) => {
        const file = event.target.files[0];
        setImage(file);
    }

    const handleSubmit = () => {
        // Handle the form submission logic here (e.g., send data to server)
        console.log(recipeName, ingredients, instructions, image);
    }

    return (
        <div className="recipe-creation-page">
            <h2>Create a Recipe</h2>
            <input 
                type="text" 
                placeholder="Recipe Name" 
                value={recipeName} 
                onChange={(e) => setRecipeName(e.target.value)} 
            />
            <textarea 
                placeholder="Ingredients" 
                value={ingredients} 
                onChange={(e) => setIngredients(e.target.value)} 
            />
            <textarea 
                placeholder="Instructions" 
                value={instructions} 
                onChange={(e) => setInstructions(e.target.value)} 
            />
            <input type="file" onChange={handleImageUpload} />
            <button onClick={handleSubmit}>Submit</button>
        </div>
    );
}

export default RecipeCreationPage;
