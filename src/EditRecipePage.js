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

    // SampleData: Effect hook to fetch the recipe data (recipeData) when the component mounts or when recipeId changes
    /*useEffect(() => {
        // Finding the recipe from the sample data based on the recipeId
        const fetchedRecipe = sampleData.find(r => r.id === parseInt(recipeId));
        // Setting the found recipe to the state
        setRecipe(fetchedRecipe);
    }, [recipeId]);*/
// Effect hook to fetch the recipe data when the component mounts or when recipeId changes
useEffect(() => {
    // TODO: Fetching recipe data from Django REST API using fetch
    fetch(`http://your-django-api-url/recipes/${recipeId}/`)
        .then(response => response.json())
        .then(data => setRecipe(data))
        .catch(error => console.error('Error fetching data:', error));

    
}, [recipeId]);

// Handler function to save the edited recipe details
const handleSave = (e) => {
    e.preventDefault();
    // TODO: Updating recipe data through Django REST API using fetch
    fetch(`http://your-django-api-url/recipes/${recipeId}/`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(recipe),
    })
    .then(response => response.json())
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
                <img src={recipe.image} alt={recipe.name} />
                {/* Input field for the recipe name */}
                <input type="text" value={recipe.name} onChange={(e) => setRecipe({ ...recipe, name: e.target.value })} />
                <div className="ingredients">
                    <h3>Ingredients</h3>
                    {/* Textarea for editing the ingredients list */}
                    <textarea value={recipe.ingredients.join('\n')} onChange={(e) => setRecipe({ ...recipe, ingredients: e.target.value.split('\n') })}></textarea>
                </div>
                <div className="instructions">
                    <h3>Instructions</h3>
                    {/* Textarea for editing the cooking instructions */}
                    <textarea value={recipe.instructions} onChange={(e) => setRecipe({ ...recipe, instructions: e.target.value })}></textarea>
                </div>
                <div className="comments">
                    <h3>Comments</h3>
                    {/* Textarea for editing the comments about the recipe */}
                    <textarea value={recipe.comments.join('\n')} onChange={(e) => setRecipe({ ...recipe, comments: e.target.value.split('\n') })}></textarea>
                </div>
                {/* Button to save the changes made to the recipe */}
                <button type="submit">Save Changes</button>
            </form>
        </div>
    );
}

// Exporting the EditRecipePage component for use in other parts of the application
export default EditRecipePage;

