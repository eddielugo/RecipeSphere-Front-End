import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './SearchResultsPage.css';

// TODO: ADD Error Boundary Component - see RecipeDetailPage.js for example


// Main component to display the search results page.
const SearchResultsPage = () => {
    const [searchQuery, setSearchQuery] = useState('');
    // const [results, setResults] = useState(sampleData); // Commented out for demonstration purposes only
    const [results, setResults] = useState([]); // Initialize with empty arrayults with sample data. Replace with actual data fetching logic in a real-world scenario.
    
    useEffect(() => {
        // TODO: Fetch search results from Django REST API when searchQuery changes
        if (searchQuery) {
            fetch(`https://be.recipesphere.net/api/tags/?name=${searchQuery}`)
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    console.log(response)
                    return response.json();
                })
                .then(data => setResults(data))
                .catch(error => console.error('Error fetching search results:', error));
        }
    }, [searchQuery]);

            // Function to handle the search logic.
    const handleSearch = () => {
       // Implement search logic here (if needed)
        // The useEffect will handle fetching based on searchQuery
    }

    return (
        <div className="search-results-page">
            {/* Search bar component */}
            <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} handleSearch={handleSearch} />
            
            {/* List of search results */}
            <SearchResultsList results={results} />
        </div>
    );
}

// Component for the search bar.
const SearchBar = ({ searchQuery, setSearchQuery, handleSearch }) => {
    return (
        <div className="search-bar">
            {/* Input field for search queries */}
            <input 
                type="text" 
                value={searchQuery} 
                onChange={(e) => setSearchQuery(e.target.value)} // Update the search query state on input change
                placeholder="Search for recipes..." 
            />
            {/* Button to initiate the search */}
            <button onClick={handleSearch}>Search</button>
        </div>
    );
}

// Component to display the list of search results.
const SearchResultsList = ({ results }) => {
    return (
        <div className="search-results-list">
            {/* Map through the results and display each recipe */}
            {results.map(recipe => (
                <RecipeCard key={recipe.id} recipe={recipe} />
            ))}
        </div>
    );
}

// Component to display individual recipe cards.
const RecipeCard = ({ recipe }) => {
    return (
        <div className="recipe-card">
            {/* Display recipe thumbnail */}
            <img src={recipe.thumbnail} alt={recipe.name} />
            
            {/* Display recipe name */}
            <h3>{recipe.name}</h3>
            
            {/* Display recipe description */}
            <p>{recipe.description}</p>
            
            {/* Link to view the full recipe details */}
            <Link to={`/recipe-detail/${recipe.id}`}>
                <button>View Recipe</button>
            </Link>
        </div>
    );
}

// Sample data for demonstration purposes.
//const sampleData = [
//    { id: 1, name: 'Recipe A', description: 'Description A', thumbnail: 'imageA.jpg' },
//    { id: 2, name: 'Recipe B', description: 'Description B', thumbnail: 'imageB.jpg' },
//    { id: 3, name: 'Recipe C', description: 'Description C', thumbnail: 'imageC.jpg' },
//    { id: 4, name: 'Recipe D', description: 'Description D', thumbnail: 'imageD.jpg' } // Added fourth recipe
//];

export default SearchResultsPage; // Export the SearchResultsPage component for use in other parts of the application.

