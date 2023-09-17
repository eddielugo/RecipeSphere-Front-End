// Importing necessary React hooks and router utilities
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

// TODO: ADD Error Boundary Component - see RecipeDetailPage.js for example

// Sample data for demonstration purposes
//import { sampleData } from './sampleData'; 

// Styling for the EditRecipePage component
import './EditRecipePage.css';

// Debug log to check when the EditRecipePage component is rendered
console.log("Rendering EditRecipePage");

// Component to edit a recipe
const EditRecipePage = () => {
        // Extracting the recipeId from the URL parameters
    const { recipeId } = useParams();

    // State to hold the current recipe being edited
    const [recipe, setRecipe] = useState(null);

    
    /*Changes made to EditRecipePage to fix webpage error:
        -In the useEffect hook, after fetching the recipe data, we check if ingredients is a string. If it is, we convert it to an array using split('\n');
        -In the handleSave function, we check if ingredients is an array. If it is, we convert it back to a string using join('\n') before sending it to the backend;
        -In the render part, we check if ingredients and comments are arrays before calling the join method. If they're not arrays, we use them as they are. This ensures 
        that the join method is only called on arrays, preventing the error you encountered.
        */ 

// Effect hook to fetch the recipe data when the component mounts or when recipeId changes
    useEffect(() => {
        console.log("Fetching recipe data...");
    fetch(`https://be.recipesphere.net/api/recipe/${recipeId}/`, {
        headers: {
            'Authorization': `Token ${window.sessionStorage.getItem('token')}`
          }
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            console.log("Fetched recipe data:", data);
            // Convert ingredients to an array if it's not already
            if (typeof data.ingredients === 'string' || data.ingredients instanceof String) {
                data.ingredients = data.ingredients.split('\n');
            }
            setRecipe(data);
        })
        .catch(error => console.error('Error fetching recipe:', error));
    }, [recipeId]);

    const handleSave = (e) => {
        e.preventDefault();
        console.log("Updating recipe data...");

        // Convert the ingredients array back to JSON
        let ingredientsJSON = recipe.ingredients;
        if (Array.isArray(recipe.ingredients)) {
            ingredientsJSON = recipe.ingredients.join('\n');
        }

        // Updating recipe data through Django REST API using fetch
        fetch(`https://be.recipesphere.net/api/recipe/${recipeId}/`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Token ${window.sessionStorage.getItem('token')}`
            },
            body: JSON.stringify({
                ...recipe,
                ingredients: ingredientsJSON  // Send the ingredients in JSON format
            }),
        })
        .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
	    })
	    .then(data => {
	        console.log('Recipe updated:', data);
	    })
	    .catch(error => {
	        console.error('Error updating recipe:', error);
    	});
    };
	    // If the recipe data hasn't been loaded yet, display a loading message
	    if (!recipe) {
	        return <div>Loading...</div>;
	    }

        
    // Render the form to edit the recipe details
    return (
        <div className="edit-recipe-page">
            <form onSubmit={handleSave}>
                <img src={recipe.image} alt={recipe.title} />
                {/* Input field for the recipe name */}
                <input type="text" value={recipe.title} onChange={(e) => setRecipe({ ...recipe, title: e.target.value })} />
                <div className="ingredients">
                    <h3>Ingredients</h3>
                    <textarea value={Array.isArray(recipe.ingredients) ? recipe.ingredients.join('\n') : recipe.ingredients} onChange={(e) => setRecipe({ ...recipe, ingredients: e.target.value.split('\n') })}></textarea>
                </div>
                <div className="instructions">
                    <h3>Instructions</h3>
                    {/* Textarea for editing the cooking instructions */}
                    <textarea value={recipe.instructions} onChange={(e) => setRecipe({ ...recipe, instructions: e.target.value })}></textarea>
                </div>
                <div className="comments">
                    <h3>Comments</h3>
                    <textarea value={Array.isArray(recipe.comments) ? recipe.comments.join('\n') : recipe.comments} onChange={(e) => setRecipe({ ...recipe, comments: e.target.value.split('\n') })}></textarea>
                </div>
               {/* Button to save the changes made to the recipe */}
                <button type="submit">Save Changes</button>
            </form>
        </div>
    );
}

export default EditRecipePage;

