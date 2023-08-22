import React, { useState } from 'react';
import './AddEditRecipePage.css';

const AddEditRecipePage = () => {
    const [recipe, setRecipe] = useState({
        name: '',
        image: null,
        ingredients: '',
        instructions: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setRecipe(prevState => ({ ...prevState, [name]: value }));
    }

    const handleImageChange = (e) => {
        setRecipe(prevState => ({ ...prevState, image: e.target.files[0] }));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle the form submission logic here
        console.log(recipe);
    }

    return (
        <div className="add-edit-recipe-page">
            <h2>Add/Edit Recipe</h2>
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

export default AddEditRecipePage;
