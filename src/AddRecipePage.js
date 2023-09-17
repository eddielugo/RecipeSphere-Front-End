// Import necessary dependencies
import React, { useState } from 'react';
//import axios from 'axios'; // Import axios for API calls
import './AddRecipePage.css';

// ADD Error Boundary Component

// Component for adding a new recipe
const AddRecipePage = () => {
    // State to hold the recipe details
    const [recipe, setRecipe] = useState({
        name: '',
        image: null,
        ingredients: '',
        instructions: '',
        /*added 9-16-23*/
        //decription: '',
        //time_minutes: ''
    });

    // Handler to update the state when text inputs change
    const handleChange = (e) => {
        const { name, value } = e.target;
        setRecipe(prevState => ({ ...prevState, [name]: value }));
    }

    // Handler to update the state when an image is selected
    const handleImageChange = (e) => {
        setRecipe(prevState => ({ ...prevState, image: e.target.files[0] }));
    }

    // Handler to submit the form
const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Create FormData object to handle image file
    const formData = new FormData();
    formData.append('name', recipe.name);
    formData.append('image', recipe.image);
    formData.append('ingredients', recipe.ingredients);
    formData.append('instructions', recipe.instructions);
    //added 9-16-23
    //formData.append('description', recipe.description); 
    //formData.append('time_minutes', recipe.time_minutes);
    

   

    console.log(recipe);
    // API call to your Django REST backend
    const apiUrl = 'http://your-django-api-url/recipes/';
    
    try {
        const response = await fetch(apiUrl, {
            method: 'POST',
            body: formData
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('Error submitting recipe:', error);
    }
}

    // Render the add recipe form
    return (
        <div className="add-recipe-page">
            <h2>Add Recipe</h2>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    name="name" 
                    placeholder="Recipe Name" 
                    value={recipe.name} 
                    onChange={handleChange} 
                />
                <input 
                    type="file" 
                    name="image" 
                    onChange={handleImageChange} 
                />
                {/*TODO: Ingredients has to be in Json */}
                <textarea 
                    name="ingredients" 
                    placeholder="Ingredients" 
                    value={recipe.ingredients} 
                    onChange={handleChange} 
                />
                
                <textarea 
                    name="instructions" 
                    placeholder="Instructions" 
                    value={recipe.instructions} 
                    onChange={handleChange} 
                />
                <button type="submit">Submit</button>
                <button type="button">Cancel</button>
            </form>
        </div>
    );
}

// Export the component for use in other parts of the app
export default AddRecipePage;

