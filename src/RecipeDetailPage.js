import React, { useEffect, useState } from 'react';
import './RecipeDetailPage.css';
//import { sampleData } from './sampleData'; // Importing sample data for demonstration purposes
import { useParams } from 'react-router-dom'; // Hook to access route parameters
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
    // New loading state to track when data is being fetched
    const [loading, setLoading] = useState(true); // <-- Added loading state
    // New error state to capture any errors during fetch
    const [error, setError] = useState(null); // <-- Added error state
    // State to handle the comment input
    const [comment, setComment] = useState('');
    // Additional states to handle loading and error messages
    const [isLoading, setIsLoading] = useState(false);
    const [message, setMessage] = useState('');

   // TODO: Fetch recipe data from Django REST API
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
        setRecipe(data);
        setLoading(false); // <-- Set loading to false after data is fetched
    })
    .catch(err => {
        console.error('Error fetching recipe:', err);
        setError(err.message); // <-- Set error message if there's an error
        setLoading(false); // <-- Also set loading to false in case of error
    });
  }, [recipeId]);
  
  // Function to handle posting the comment
  const postComment = () => {
    // Set loading state to true
    setIsLoading(true);
    //TODO: the comments api needs two POST fields. 'text' = the text for the comment. And 'recipe': which is the id for the recipe for the comment
    fetch(`https://be.recipesphere.net/api/comments/`, {
        method: 'POST',
        headers: {
          
            'Authorization': `Token ${window.sessionStorage.getItem('token')}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ comment: comment })
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Failed to post comment');
        }
        return response.json();
    })
    .then(data => {
        console.log("Comment posted:", data);
        setRecipe(prevRecipe => ({ ...prevRecipe, comments: [...prevRecipe.comments, comment] }));
        setComment('');
        setMessage('Comment posted successfully!');
    })
    .catch(error => {
        console.error("Error posting comment:", error);
        setMessage('Error posting comment. Please try again.');
    })
    .finally(() => {
        // Set loading state to false
        setIsLoading(false);
    });
};


   // Function to generate a PDF of the recipe details
   //TODO: we have to load an iframe window with the pdf from the endpoint {{base_url}}/api/recipe/{recipeId}/download/
const printToPdf = () => {
  const url = `https://be.recipesphere.net/api/recipe/${recipeId}/download/`
  const request = new Request(url,
            {
              method: "POST",
              headers: {
                Authorization: `Token ${window.sessionStorage.getItem('token')}`,
              },
              mode: "cors",
              cache: "default",
            }
          );
    
          fetch(request)
          .then(response => {
            response.blob().then(blob => {
                // Creating new object of PDF file
                const fileURL = window.URL.createObjectURL(blob);
                // Setting various property values
                let alink = document.createElement('a');
                alink.href = fileURL;
                alink.download = recipe.title;
                alink.click();
            })
        })
};      
  



    // TODO: Add form with field 'email' to send to endpoint {{base_url}}/api/recipe/{recipeID}/share/
    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', e.target, 'YOUR_USER_ID')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.error("Error sending email: ", error.text);
            });
    };
    // New: Check if data is still being loaded
    if (loading) {
      return <div className="recipe-detail-page">Loading...</div>;
    }

    // New: Check if there was an error during fetch
    if (error) {
      return (
          <div className="recipe-detail-page">
              <h2>Error</h2>
              <p>{error}</p>
          </div>
      );
    }
    // If the recipe is not found, display an error message
    if (!recipe || !recipe.ingredients ) {
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
        {/*TODO: The recipe object has no comments. The comments are to be retrieved from the endpoint
         {{base_url}}/api/comments/?recipe={recipeID} example {{base_url}}/api/comments/?recipe=1
         would get all the comments for recipeID 1
         */}
        <div className="comments">
          <h3>Comments</h3>
          <ul>
            {recipe.comments && recipe.comments.map(comment => <li key={comment}>{comment}</li>)}
          </ul>
        </div>
        {/* Comment input and button */}
        <div className="comment-section">
            <textarea 
                value={comment} 
                onChange={e => setComment(e.target.value)} 
                placeholder="Add a comment..."
            />
            <button onClick={postComment}>Post Comment</button>
        {/* Loading spinner */}
        {isLoading && <div className="loading">Submitting comment...</div>}
        {/* Message */}
        {message && <div className="message">{message}</div>}
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