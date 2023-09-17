import React, { useState } from 'react';
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
    //const [nextTag, setNextTag] = useState(1);

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

    /*Code logic for Extracting the ID of the Newly Created Recipe:

      1. After successfully creating a new recipe, the response contains the details of the newly created recipe. 
         The code extracts the ID of this recipe using const newRecipeId = data.id;.
      2. Constructing the Base URL for Adding Tags:
            -The base URL for checking tag availability and adding tags is constructed using the extracted recipe ID. 
             The format is https://be.recipesphere.net/api/recipe/${newRecipeId}/....
      3. Logic to Find the Next Available Tag:
         -The code initializes a tagNumber variable with a value of 1.
         -The checkTagAvailability function is then called with this tagNumber and the newRecipeId as arguments.
         -Inside the checkTagAvailability function:
            *A fetch request is made to the endpoint https://be.recipesphere.net/api/recipe/${newRecipeId}/check_tag/${tagNumber}/ to check if the tag is available.
            *If the tag is available, it is added to the recipe using the endpoint https://be.recipesphere.net/api/recipe/${newRecipeId}/add_tag/.
            *If the tag is not available, the tagNumber is incremented, and the checkTagAvailability function is called recursively to check the next tag.
    */ 
    const checkTagAvailability = (tagNumber, newRecipeId) => {
        fetch(`https://be.recipesphere.net/api/recipe/${newRecipeId}/check_tag/${tagNumber}/`)
        .then(response => response.json())
        .then(data => {
            if (data.isAvailable) {
                // If the tag is available, add it to the recipe
                fetch(`https://be.recipesphere.net/api/recipe/${newRecipeId}/add_tag/`, {
                    method: 'POST',
                    headers: {
                        'Authorization': `Token ${window.sessionStorage.getItem('token')}`
                    },
                    body: JSON.stringify({ tag: tagNumber })
                })
                .then(response => {
                    if (response.ok) {
                        console.log(`Tag ${tagNumber} successfully added to recipe ${newRecipeId}`);
                        // Provide feedback to the user
                        alert('Recipe and tag successfully created!');
                        // Optionally, redirect to the recipe's detail page or another appropriate page
                        // window.location.href = `/recipe/${newRecipeId}`;
                    } else {
                        console.log('Error adding tag:', response);
                        alert('Error adding tag. Please try again.');
                    }
                });
            } else {
                // If the tag is not available, increment and check the next one
                tagNumber++;
                checkTagAvailability();
            }
        })
        .catch(error => {
            console.log('Error checking tag availability:', error);
            alert('Error checking tag availability. Please try again.');
        });
    };

    // Handles the form submission by creating a recipe data object and sending a POST request.
   const handleSubmit = () => {
    // Form validation
    if (!title || !description || !timeMinutes || ingredientsList.some(ingredient => !ingredient.value) || !instructions ) {
        alert('Please fill out all required fields.');
        return;
    }

    const formData = new FormData();
    
    formData.append('title', title);
    formData.append('description', description);
    formData.append('time_minutes', timeMinutes);
    formData.append('ingredients', ingredientsList);
    formData.append('instructions', instructions);
    formData.append('image', image);

    // Convert the ingredientsList array to a JSON string and append it
    let jsonIngredients = {};

    ingredientsList.forEach((v,i) => jsonIngredients[i+1]=v);
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
            'Authorization': `Token ${window.sessionStorage.getItem('token')}`
        },
        body: JSON.stringify(recipeData)
    })
    .then(response => {
        if (!response.ok) {
            console.log(response);
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        console.log('Recipe successfully created:', data);
        
        // Extract the ID of the newly created recipe
        const newRecipeId = data.id;

        // Start the process to find the next available tag
        let tagNumber = 1;

        // Call the checkTagAvailability function
        checkTagAvailability(tagNumber, newRecipeId);
    })
    .catch(error => {
        console.log('Error creating recipe:', error);
        alert('Error creating recipe. Please try again.');
    });
}
    
/* 
 * This return function renders the recipe creation form. 
 * 
 * The ingredients input fields are dynamically generated based on the ingredientsList state. 
 * Each ingredient in the ingredientsList is an object with a unique key and a value. 
 * The unique key ensures stable rendering and addresses the SonarLint warning about using array indices as keys.
 * 
 * The unique key for each ingredient is generated by adding the current timestamp to a random number. 
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

