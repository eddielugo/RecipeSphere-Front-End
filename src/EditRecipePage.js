// Importing necessary React hooks and router utilities
import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import './EditRecipePage.css';

// Debug log to check when the EditRecipePage component is rendered
console.log("Rendering EditRecipePage");

// Component to edit a recipe
const EditRecipePage = () => {
    // Extracting the recipeId from the URL parameters
    const { recipeId } = useParams();
    // State to hold the current recipe being edited
    const [recipe, setRecipe] = useState(null);
    const [description, setDescription] = useState(''); // Added state for description
    const [instructions, setInstructions] = useState(''); // Added state for instructions
    const [ingredientsList, setIngredientsList] = useState([{ key: Date.now(), value: '' }]);
    const [title, setTitle] = useState('');
    const [image, setImage] = useState(null);
    const [timeMinutes, setTimeMinutes] = useState('');
    const navigate = useNavigate();
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
            // Convert ingredients from JSON to array format
            const ingredientsArray = Object.values(data.ingredients).map(ingredient => ({ key: Date.now() + Math.random(), value: ingredient }));
            setIngredientsList(ingredientsArray);
            setRecipe(data);
            setTitle(data.title);
            setTimeMinutes(data.time_minutes);
            setDescription(data.description); // Set description from fetched data
            setInstructions(data.instructions); // Set instructions from fetched data
        })
        .catch(error => console.error('Error fetching recipe:', error));
    }, [recipeId]);

    // Handles the image file upload and updates the image state.
    const handleImageUpload = (event) => {
        const file = event.target.files[0];
        setImage(file);
    }

    const handleIngredientChange = (key, value) => {
        const newIngredientsList = ingredientsList.map(ingredient => 
            ingredient.key === key ? { ...ingredient, value } : ingredient
        );
        setIngredientsList(newIngredientsList);
    }

    const addIngredientInput = () => {
        setIngredientsList([...ingredientsList, { key: Date.now() + Math.random(), value: '' }]);
    }

    const handleSave = (e) => {
        e.preventDefault();
        console.log("Updating recipe data...");
        // Convert the ingredientsList array to JSON format
        let jsonIngredients = {};
        ingredientsList.forEach((ingredient, index) => jsonIngredients[index + 1] = ingredient.value);
        const formData = new FormData();
        
        formData.append('title', title);
        formData.append('description', description);
        formData.append('time_minutes', timeMinutes);
        formData.append('ingredients', JSON.stringify(jsonIngredients));
        formData.append('instructions', instructions);
        
        if(image){
            formData.append('image', image);
        };

        for (const value of formData.keys()) {
            console.log(value);
        };
        // Updating recipe data through Django REST API using fetch
        fetch(`https://be.recipesphere.net/api/recipe/${recipeId}/`, {
            method: 'PATCH',
            headers: {
                'Authorization': `Token ${window.sessionStorage.getItem('token')}`
            },
            body: formData
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            console.log('Recipe updated:', data);
            navigate(`/recipe-detail/${recipeId}`);
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
                <input type="file" onChange={handleImageUpload} />
                {/* Input field for the recipe name */}
                <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
                <textarea placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} /> {/* Added input for description */}
                <input type="text" placeholder="Time (in minutes)" value={timeMinutes} onChange={(e) => setTimeMinutes(e.target.value)} />
               
                <div className="ingredients">
                <h3>Ingredients</h3>
                {ingredientsList.map(ingredient => (
                    <input 
                        key={ingredient.key}
                        type="text"
                        placeholder={`Ingredient`}
                        value={ingredient.value}
                        onChange={(e) => handleIngredientChange(ingredient.key, e.target.value)}
                    />
                ))}
                
                <div className="button-container">
                    <button onClick={addIngredientInput}>Add Ingredient</button>
                </div>
                
            </div>
            <textarea placeholder="Instructions" value={instructions} onChange={(e) => setInstructions(e.target.value)} /> {/* Added input for instructions */}
            
                <button type="submit">Save Changes</button>
                
            </form>
        </div>
    );
}

export default EditRecipePage;





