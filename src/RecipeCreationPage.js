import React, { useState } from 'react';
import './RecipeCreationPage.css';

// Represents the recipe creation page where users can input details for a new recipe.
const RecipeCreationPage = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [timeMinutes, setTimeMinutes] = useState('');
    // Initialize with one empty string for the first ingredient input
    const [ingredientsList, setIngredientsList] = useState(['']);
    const [instructions, setInstructions] = useState('');
    const [image, setImage] = useState(null);

    // Handles the image file upload and updates the image state.
    const handleImageUpload = (event) => {
        const file = event.target.files[0];
        setImage(file);
    }

    // Updates the specific ingredient value in the ingredientsList state.
    const handleIngredientChange = (index, value) => {
        const newIngredientsList = [...ingredientsList];
        newIngredientsList[index] = value;
        setIngredientsList(newIngredientsList);
    }

    // Adds a new empty ingredient input field by updating the ingredientsList state.
    const addIngredientInput = () => {
        setIngredientsList([...ingredientsList, '']);
    }

    // Handles the form submission by creating a recipe data object and sending a POST request.
    const handleSubmit = () => {
        
        var jsonIngredients = {};

        ingredientsList.forEach((v,i) => jsonIngredients[i+1]=v)
        const recipeData = {
            title: title,
            description: description,
            time_minutes: timeMinutes,
            ingredients: jsonIngredients, // Convert the array to a JSON string
            instructions: instructions,
            image: image // Assuming the backend can handle base64 encoded images or a file path
        };
        console.log('Recipe data:', recipeData);
        fetch('https://be.recipesphere.net/api/recipe/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Token ${localStorage.getItem('token')}`
            },
            body: JSON.stringify(recipeData)
        })
        .then(response => {
            if (!response.ok) {
                console.log(response)
            }
            return response.json();
        })
        .then(data => {
            console.log('Recipe successfully created:', data);
        })
        // .catch(error => {
        //     console.log('Error creating recipe:', error);
        // });
    }

        /*This code allows users to dynamically add ingredient input fields by clicking the "Add Ingredient" button. 
        Each ingredient's value is stored in the ingredientsList array, which is then used in the handleSubmit function 
        to create the recipe data.*/
    return (
        <div className="recipe-creation-page">
            <h2>Create a Recipe</h2>
            <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
            <textarea placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} />
            <input type="text" placeholder="Time (in minutes)" value={timeMinutes} onChange={(e) => setTimeMinutes(e.target.value)} />
            
            {/* Map through ingredientsList and render an input for each ingredient */}
            {ingredientsList.map((ingredient, index) => (
                <input 
                    key={index}
                    type="text"
                    placeholder={`Ingredient ${index + 1}`}
                    value={ingredient}
                    onChange={(e) => handleIngredientChange(index, e.target.value)}
                />
            ))}
            {/* Button to add a new ingredient input field */}
            <button onClick={addIngredientInput}>Add Ingredient</button>

            <textarea placeholder="Instructions" value={instructions} onChange={(e) => setInstructions(e.target.value)} />
            <input type="file" onChange={handleImageUpload} />
            <button onClick={handleSubmit}>Submit</button>
        </div>
    );
}


export default RecipeCreationPage;
