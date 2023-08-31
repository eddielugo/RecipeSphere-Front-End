import React, { useEffect, useState } from 'react';
import './RecipeDetailPage.css';
//import { sampleData } from './sampleData'; // Importing sample data for demonstration purposes
import { useParams } from 'react-router-dom'; // Hook to access route parameters
import { jsPDF } from "jspdf"; // Library to generate PDFs
import emailjs from 'emailjs-com'; // Library to send emails

// Component to display detailed information about a specific recipe
const RecipeDetailPage = () => {
    // Extracting the recipeId from the route parameters
    const { recipeId } = useParams();
    const [recipe, setRecipe] = useState(null);

   // Fetch recipe data from Django REST API
   useEffect(() => {
    fetch(`http://your-django-api-url/recipes/${recipeId}/`)
    .then(response => response.json())
    .then(data => setRecipe(data))
    .catch(error => console.error('Error fetching recipe:', error));
}, [recipeId]);

// Commented out for demonstration purposes
// let recipe = sampleData.find(r => r.id === parseInt(recipeId));
// if (!recipe) {
//     recipe = sampleData[0];
// }

    // Function to generate a PDF of the recipe details
    const printToPdf = () => {
        if (recipe) {
            const doc = new jsPDF();
            doc.text(recipe.name, 10, 10);
            doc.text(recipe.ingredients.join(', '), 10, 20);
            doc.text(recipe.instructions, 10, 30);
            doc.save("recipe.pdf");
        }
    };

    // Function to send the recipe details via email
    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', e.target, 'YOUR_USER_ID')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.error("Error sending email: ", error.text);
            });
    };

    // If the recipe is not found, display an error message
    if (!recipe) {
        return (
            <div className="recipe-detail-page">
                <h2>Recipe not found</h2>
                <p>The recipe you're looking for doesn't exist or has been removed.</p>
            </div>
        );
    }

    // Render the recipe details
    return (
        <div className="recipe-detail-page">
            {/* Display recipe image */}
            <img src={recipe.image} alt={recipe.name} />
            {/* Display recipe name */}
            <h2>{recipe.name}</h2>
            {/* List of ingredients */}
            <div className="ingredients">
                <h3>Ingredients</h3>
                <ul>
                    {recipe.ingredients.map(ingredient => <li key={ingredient}>{ingredient}</li>)}
                </ul>
            </div>
            {/* Cooking instructions */}
            <div className="instructions">
                <h3>Instructions</h3>
                <p>{recipe.instructions}</p>
            </div>
            {/* List of comments */}
            <div className="comments">
                <h3>Comments</h3>
                <ul>
                    {recipe.comments.map(comment => <li key={comment}>{comment}</li>)}
                </ul>
            </div>
            {/* Button to share the recipe via email */}
            <button onClick={sendEmail}>Share via Email</button>
            {/* Button to generate a printable PDF of the recipe */}
            <button onClick={printToPdf}>Generate Printable PDF</button>
        </div>
    );
}

export default RecipeDetailPage; // Exporting the component for use in other parts of the application





