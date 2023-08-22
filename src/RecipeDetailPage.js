import React from 'react';
import './RecipeDetailPage.css';
import { jsPDF } from "jspdf";// For PDF generation
import emailjs from 'emailjs-com';// For sending emails

const RecipeDetailPage = () => {
    // Sample data for demonstration
    const recipe = {
        name: 'Sample Recipe',
        image: '/path/to/recipe/image.jpg',
        ingredients: ['Ingredient 1', 'Ingredient 2', 'Ingredient 3'],
        instructions: 'Step 1: ...\nStep 2: ...\nStep 3: ...',
        comments: ['Great recipe!', 'Loved it!', 'Thanks for sharing!']
    };

    const printToPdf = () => {
        try {
            const doc = new jsPDF();
            doc.text(recipe.name, 10, 10);
            doc.text(recipe.ingredients.join(', '), 10, 20);
            doc.text(recipe.instructions, 10, 30);
            doc.save("recipe.pdf");
        } catch (error) {
            console.error("Error generating PDF: ", error);
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





