// Import necessary dependencies
import React, { useState } from 'react';
import './AddRecipePage.css';

// Component for adding a new recipe
const AddRecipePage = () => {
    // State to hold the recipe details
    const [recipe, setRecipe] = useState({
        name: '',
        image: null,
        ingredients: '',
        instructions: ''
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
    const handleSubmit = (e) => {
        e.preventDefault();
        // TODO: Handle the form submission logic here
        console.log(recipe);
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

