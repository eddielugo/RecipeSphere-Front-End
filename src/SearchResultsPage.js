import React, { useState } from 'react';
import './SearchResultsPage.css';

const SearchResultsPage = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [results, setResults] = useState(sampleData); // Replace sampleData with actual data fetching logic

    const handleSearch = () => {
        // Implement search logic here
    }

    return (
        <div className="search-results-page">
            <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} handleSearch={handleSearch} />
            <SearchResultsList results={results} />
        </div>
    );
}

const SearchBar = ({ searchQuery, setSearchQuery, handleSearch }) => {
    return (
        <div className="search-bar">
            <input 
                type="text" 
                value={searchQuery} 
                onChange={(e) => setSearchQuery(e.target.value)} 
                placeholder="Search for recipes..." 
            />
            <button onClick={handleSearch}>Search</button>
        </div>
    );
}

const SearchResultsList = ({ results }) => {
    return (
        <div className="search-results-list">
            {results.map(recipe => (
                <RecipeCard key={recipe.id} recipe={recipe} />
            ))}
        </div>
    );
}

const RecipeCard = ({ recipe }) => {
    return (
        <div className="recipe-card">
            <img src={recipe.thumbnail} alt={recipe.name} />
            <h3>{recipe.name}</h3>
            <p>{recipe.description}</p>
            <button>View Recipe</button>
        </div>
    );
}

// Sample data for demonstration
const sampleData = [
    { id: 1, name: 'Recipe A', description: 'Description A', thumbnail: 'imageA.jpg' },
    { id: 2, name: 'Recipe B', description: 'Description B', thumbnail: 'imageB.jpg' },
    { id: 3, name: 'Recipe C', description: 'Description C', thumbnail: 'imageC.jpg' }
];

export default SearchResultsPage;
