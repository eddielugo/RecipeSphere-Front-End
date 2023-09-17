import React, { useEffect, useState } from 'react';
import './RecipeDetailPage.css';
import { useParams } from 'react-router-dom';

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

    // New state to hold comments
    const [comments, setComments] = useState([]);
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

   //Fetch recipe data from Django REST API
   useEffect(() => {
    // Fetch recipe details
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
    })
    .then(() => {
        // Fetch comments for the given recipe after fetching recipe details
        return fetch(`https://be.recipesphere.net/api/comments/?recipe=${recipeId}`, {
            headers: {
                'Authorization': `Token ${window.sessionStorage.getItem('token')}`
            }
        });
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Failed to fetch comments');
        }
        return response.json();
    })
    .then(data => {
        console.log("Fetched comments:", data);
        setComments(data);
        setLoading(false); // <-- Set loading to false here
    })
    .catch(error => {
        console.error("Error fetching data:", error);
        setError(error.message); // <-- Set the error state here
        setLoading(false); // <-- Also set loading to false here
    });
}, [recipeId]);


  // Function to handle posting the comment
    const postComment = () => {
         // Set loading state to true
        setIsLoading(true);
        fetch(`https://be.recipesphere.net/api/comments/`, {
            method: 'POST',
            headers: {
                'Authorization': `Token ${window.sessionStorage.getItem('token')}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ text: comment, recipe: recipeId }) // Updated to include 'text' and 'recipe' fields
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
   //load an iframe window with the pdf from the endpoint {{base_url}}/api/recipe/{recipeId}/download/
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

    const sendEmail = (e) => {
        e.preventDefault();

        // Assuming we have a form with an input field named 'email'
        //TODO (Mike): Review this code
        const email = e.target.email.value;

        fetch(`https://be.recipesphere.net/api/recipe/${recipeId}/share/`, {
            method: 'POST',
            headers: {
                'Authorization': `Token ${window.sessionStorage.getItem('token')}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email: email })
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to send email');
            }
            return response.json();
        })
        .then(data => {
            console.log("Email sent:", data);
            setMessage('Email sent successfully!');
        })
        .catch(error => {
            console.error("Error sending email:", error);
            setMessage('Error sending email. Please try again.');
        })
        .finally(() => {
            setIsLoading(false);
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
        {/* The comments are to be retrieved from the endpoint
         {{base_url}}/api/comments/?recipe={recipeID} example {{base_url}}/api/comments/?recipe=1
         would get all the comments for recipeID 1
         */}
        <div className="comments">
            <h3>Comments</h3>
            <ul>
                {comments && comments.map(comment => 
                    <li key={comment.id}>{comment.text}</li> // Assuming each comment has an 'id' and 'text' field
                )}
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
        {/* Email form to share the recipe */}
        <form onSubmit={sendEmail}>
            <input type="email" name="email" placeholder="Enter email to share" required />
            <button type="submit">Share via Email</button>
        </form>

        <button onClick={printToPdf}>Generate Printable PDF</button>
      </div>
    </ErrorBoundary>
     );
}

export default RecipeDetailPage;