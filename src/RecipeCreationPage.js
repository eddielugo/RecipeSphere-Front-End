import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './RecipeCreationPage.css';

// Represents the recipe creation page where users can input details for a new recipe.
const RecipeCreationPage = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [timeMinutes, setTimeMinutes] = useState('');
    // Initialize with one object for the first ingredient input
    const [ingredientsList, setIngredientsList] = useState([{ key: Date.now(), value: '' }]);
    const [instructions, setInstructions] = useState('');
    const [image, setImage] = useState(null);
    // State to manage the next available tag number.
    const [nextTag, setNextTag] = useState(1);
    const navigate = useNavigate();
    // Handles the image file upload and updates the image state.
    const handleImageUpload = (event) => {
        const file = event.target.files[0];
        setImage(file);
    }

    // Updates the specific ingredient value in the ingredientsList state.
    const handleIngredientChange = (key, value) => {
        const newIngredientsList = ingredientsList.map(ingredient => 
            ingredient.key === key ? { ...ingredient, value } : ingredient
        );
        setIngredientsList(newIngredientsList);
    }

    // Adds a new ingredient input field with a unique key
    const addIngredientInput = () => {
        setIngredientsList([...ingredientsList, { key: Date.now() + Math.random(), value: '' }]);
    }

    // Function to find the next available tag number.
    const findNextAvailableTag = async () => {
        let tag = nextTag;
        let isTagAvailable = false;

        while (!isTagAvailable) {
            const response = await fetch(`https://be.recipesphere.net/api/recipe/${tag}/`, {
                headers: {
                    'Authorization': `Token ${window.sessionStorage.getItem('token')}`
                }
            });
            //check for available tag number
            if (!response.ok) {
                isTagAvailable = true;
            } else {
                tag++;
            }
        }

        setNextTag(tag);
        return tag;
    }
    // Handles the form submission by creating a recipe data object and sending a POST request.
    const handleSubmit = () => {
        const formData = new FormData();

        // Convert the ingredientsList array to a JSON string and append it
        let jsonIngredients = {};

        ingredientsList.forEach((v,i) => jsonIngredients[i+1]=v)
        formData.append('title', title);
        formData.append('description', description);
        formData.append('time_minutes', timeMinutes);
        formData.append('ingredients', JSON.stringify(jsonIngredients));
        formData.append('instructions', instructions);
        formData.append('image', image);
        fetch('https://be.recipesphere.net/api/recipe/', {
            method: 'POST',
            headers: {
                'Authorization': `Token ${window.sessionStorage.getItem('token')}`
            },
            body: formData
        })
        .then(response => {
            if (!response.ok) {
                console.log(response);
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(async data => {
            console.log('Recipe successfully created:', data);
            navigate(`/recipe-detail/${data.id}`)
            
            // Find the next available tag and assign it to the recipe
            const tag = await findNextAvailableTag();
            fetch(`https://be.recipesphere.net/api/recipe/${data.id}/add_tag/`, {
                method: 'POST',
                headers: {
                    'Authorization': `Token ${window.sessionStorage.getItem('token')}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ tag: tag.toString() }) // Convert tag number to string
            })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(tagData => {
                console.log('Tag successfully added:', tagData);
            })
            .catch(error => {
                console.log('Error adding tag:', error);
            });
        })
        .catch(error => {
            console.log('Error creating recipe:', error);
        });
    }
    
/* 
 * This return function renders the recipe creation form. 
 * 
 * The ingredients input fields are dynamically generated based on the ingredientsList state. 
 * Each ingredient in the ingredientsList is an object with a unique key and a value. 
 * The unique key ensures stable rendering and addresses the SonarLint warning about using array indices as keys.
 * 
 * The unique key for each ingredient is generated using a combination of the current timestamp and a random number. 
 * This ensures that even if ingredients are added in quick succession, they will have distinct keys.
 * 
 * When an ingredient's value is updated, the handleIngredientChange function is called with the ingredient's unique key 
 * and the new value. This allows us to update the specific ingredient in the ingredientsList state without affecting others.
 * 
 * The addIngredientInput function adds a new ingredient input field to the form by updating the ingredientsList state 
 * with a new ingredient object.
 * 
 * This approach provides a flexible and scalable way to manage dynamic input fields in the form and ensures stable rendering 
 * of the ingredient inputs.
 */
    return (
        <div className="recipe-creation-page">
            <h2>Create a Recipe</h2>
            <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
            <textarea placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} />
            <input type="text" placeholder="Time (in minutes)" value={timeMinutes} onChange={(e) => setTimeMinutes(e.target.value)} />
            
            {/* Map through ingredientsList and render an input for each ingredient */}
            {ingredientsList.map(ingredient => (
                <input 
                    key={ingredient.key}
                    type="text"
                    placeholder={`Ingredient`}
                    value={ingredient.value}
                    onChange={(e) => handleIngredientChange(ingredient.key, e.target.value)}
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

