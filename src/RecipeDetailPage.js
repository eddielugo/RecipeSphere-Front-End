import React from 'react';
import './RecipeDetailPage.css';
import { sampleData } from './sampleData'; // Adjust the path if necessary
import { useParams } from 'react-router-dom';
import { jsPDF } from "jspdf";
import emailjs from 'emailjs-com';

const RecipeDetailPage = () => {
    const { recipeId } = useParams();


    let recipe = sampleData.find(r => r.id === parseInt(recipeId));

    // If no recipe matches the provided recipeId, use the first recipe from sampleData as a fallback
    if (!recipe) {
        recipe = sampleData[0];
    }

    const printToPdf = () => {
        if (recipe) {
            const doc = new jsPDF();
            doc.text(recipe.name, 10, 10);
            doc.text(recipe.ingredients.join(', '), 10, 20);
            doc.text(recipe.instructions, 10, 30);
            doc.save("recipe.pdf");
        }
    };

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', e.target, 'YOUR_USER_ID')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.error("Error sending email: ", error.text);
            });
    };

    if (!recipe) {
        return (
            <div className="recipe-detail-page">
                <h2>Recipe not found</h2>
                <p>The recipe you're looking for doesn't exist or has been removed.</p>
            </div>
        );
    }

    return (
        <div className="recipe-detail-page">
            <img src={recipe.image} alt={recipe.name} />
            <h2>{recipe.name}</h2>
            <div className="ingredients">
                <h3>Ingredients</h3>
                <ul>
                    {recipe.ingredients.map(ingredient => <li key={ingredient}>{ingredient}</li>)}
                </ul>
            </div>
            <div className="instructions">
                <h3>Instructions</h3>
                <p>{recipe.instructions}</p>
            </div>
            <div className="comments">
                <h3>Comments</h3>
                <ul>
                    {recipe.comments.map(comment => <li key={comment}>{comment}</li>)}
                </ul>
            </div>
            <button onClick={sendEmail}>Share via Email</button>
            <button onClick={printToPdf}>Generate Printable PDF</button>
        </div>
    );
}

export default RecipeDetailPage;





