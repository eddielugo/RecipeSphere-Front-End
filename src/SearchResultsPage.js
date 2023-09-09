import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './SearchResultsPage.css';

// Main component to display the search results page.
const SearchResultsPage = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [results, setResults] = useState([]);

    useEffect(() => {
        if (searchQuery) {
            // First, fetch the tag ID based on the search query
            fetch(`https://be.recipesphere.net/api/tags/?name=${searchQuery}`, {
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
                // Assuming the API returns an array and we're interested in the first result
                const tagId = data[0]?.id;
                if (tagId) {
                    // Fetch recipes based on the tag ID
                    return fetch(`https://be.recipesphere.net/api/recipe/?tags=${tagId}`, {
                        headers: {
                            'Authorization': `Token ${localStorage.getItem('token')}`
                        }
                    });
                }
                throw new Error('Tag not found');
            })
            .then(response => response.json())
            .then(data => setResults(data))
            .catch(error => console.error('Error fetching search results:', error));
        }
    }, [searchQuery]);

    const handleSearch = () => {
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

const SearchBar = ({ searchQuery, setSearchQuery, handleSearch }) => {
    return (
        <div className="search-bar">
          {/* Input field for search queries */}
            <input 
                type="text" 
                value={searchQuery} 
                onChange={(e) => setSearchQuery(e.target.value)}
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

export default SearchResultsPage; // Export the SearchResultsPage component for use in other parts of the application.

