import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { sampleData } from './sampleData'; // Adjust the path if necessary
import './EditRecipePage.css';

console.log("Rendering EditRecipePage");//debug

const EditRecipePage = () => {
    const { recipeId } = useParams();
    const [recipe, setRecipe] = useState(null);

    useEffect(() => {
        const fetchedRecipe = sampleData.find(r => r.id === parseInt(recipeId));
        setRecipe(fetchedRecipe);
    }, [recipeId]);

    const handleSave = () => {
        // Save the edited recipe details
        // Update the recipe in your database or state
    };

    if (!recipe) {
        return <div>Loading...</div>;
    }

    return (
        <div className="edit-recipe-page">
            <form onSubmit={handleSave}>
                <img src={recipe.image} alt={recipe.name} />
                <input type="text" value={recipe.name} onChange={(e) => setRecipe({ ...recipe, name: e.target.value })} />
                <div className="ingredients">
                    <h3>Ingredients</h3>
                    <textarea value={recipe.ingredients.join('\n')} onChange={(e) => setRecipe({ ...recipe, ingredients: e.target.value.split('\n') })}></textarea>
                </div>
                <div className="instructions">
                    <h3>Instructions</h3>
                    <textarea value={recipe.instructions} onChange={(e) => setRecipe({ ...recipe, instructions: e.target.value })}></textarea>
                </div>
                <div className="comments">
                    <h3>Comments</h3>
                    <textarea value={recipe.comments.join('\n')} onChange={(e) => setRecipe({ ...recipe, comments: e.target.value.split('\n') })}></textarea>
                </div>
                <button type="submit">Save Changes</button>
            </form>
        </div>
    );
}

export default EditRecipePage;

