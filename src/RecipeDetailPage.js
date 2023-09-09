import React, { useEffect, useState } from 'react';
import './RecipeDetailPage.css';
//import { sampleData } from './sampleData'; // Importing sample data for demonstration purposes
import { useParams } from 'react-router-dom'; // Hook to access route parameters
import { jsPDF } from "jspdf"; // Library to generate PDFs
import emailjs from 'emailjs-com'; // Library to send emails


// Error Boundary Component. Note: While this is good for production, 
//this may affect our tests. If the component throws an error, 
//the ErrorBoundary will catch it, potentially making the test pass when it should fail.
class ErrorBoundary extends React.Component {
    constructor(props) {
      super(props);
      this.state = { hasError: false };
    }
  
    static getDerivedStateFromError(error) {
      return { hasError: true };
    }
  
    componentDidCatch(error, errorInfo) {
      console.error("Caught error:", error, errorInfo);
    }
  
    render() {
      if (this.state.hasError) {
        return <h1>Something went wrong.</h1>;
      }
  
      return this.props.children;
    }
  }

// Component to display detailed information about a specific recipe
const RecipeDetailPage = () => {
    // Extracting the recipeId from the route parameters
    const { recipeId } = useParams();
    //initialize the recipe state with an object that has default values 
    //for ingredients and comments as empty arrays
    const [recipe, setRecipe] = useState({ ingredients: [], comments: [] });


   // TODO: Fetch recipe data from Django REST API
   useEffect(() => {
    console.log("Fetching recipe data...");
    fetch(`https://be.recipesphere.net/api/recipe/${recipeId}/`, {
      headers: {
          'Authorization': `Token ${localStorage.getItem('token')}`
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
        setRecipe(data);
      })
      .catch(error => console.error('Error fetching recipe:', error));
  }, [recipeId]);
  

// Commented out: demonstration purposes
// let recipe = sampleData.find(r => r.id === parseInt(recipeId));
// if (!recipe) {
//     recipe = sampleData[0];
// }

   // Function to generate a PDF of the recipe details
const printToPdf = () => {
  if (recipe) {
      const doc = new jsPDF();
      doc.text(`Title: ${recipe.title}`, 10, 10);
      doc.text(`Description: ${recipe.description}`, 10, 20);
      doc.text(`Cooking Time: ${recipe.time_minutes} minutes`, 10, 30);
      doc.text('Ingredients:', 10, 40);
      const ingredients = Object.values(recipe.ingredients);
      ingredients.forEach((ingredient, index) => {
          doc.text(ingredient, 20, 50 + (index * 10));
      });
      const instructionsStartY = 50 + (ingredients.length * 10);
      doc.text('Instructions:', 10, instructionsStartY);
      doc.text(recipe.instructions, 20, instructionsStartY + 10);
      doc.save("recipe.pdf");
  }
};


    // TODO: Different service? Function to send the recipe details via email
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
    if (!recipe || !recipe.ingredients || !recipe.comments ) {
        return (
            <div className="recipe-detail-page">
                <h2>Recipe not found</h2>
                <p>The recipe you're looking for doesn't exist or has been removed.</p>
            </div>
        );
    }

    // Render the recipe details
    return (
      <ErrorBoundary>
      <div className="recipe-detail-page">
       {/* Display recipe image */}
        <img src={recipe.image} alt={recipe.title} /> {/* Changed recipe.name to recipe.title */}
        {/* Display recipe title */}
        <h2>{recipe.title}</h2>
        {/* Display recipe description */}
        <p>{recipe.description}</p>
        {/* Display cooking time */}
        <p>Cooking time: {recipe.time_minutes} minutes</p>
        {/* List of ingredients */}
        <div className="ingredients">
          <h3>Ingredients</h3>
          <ul>
            {recipe.ingredients && Object.values(recipe.ingredients).map((ingredient, index) => <li key={index}>{ingredient}</li>)}
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
            {recipe.comments && recipe.comments.map(comment => <li key={comment}>{comment}</li>)}
          </ul>
        </div>
        {/* Button to share the recipe via email */}
        <button onClick={sendEmail}>Share via Email</button>
        {/* Button to generate a printable PDF of the recipe */}
        <button onClick={printToPdf}>Generate Printable PDF</button>
      </div>
    </ErrorBoundary>
      );
}

export default RecipeDetailPage; // Exporting the component for use in other parts of the application





