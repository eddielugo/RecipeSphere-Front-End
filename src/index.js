import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Create a context to hold initial data
export const InitialDataContext = React.createContext();

const RootComponent = () => {
  // State variable to hold initial data
  const [initialData, setInitialData] = useState(null);

  // Fetch initial data from Django REST API
  useEffect(() => {
    fetch('https://be.recipesphere.net/api/recipe/', {// Replace with your Django API URL endpoint for fetching initial data.
      method: 'GET',
      headers: {
        'Authorization': `Token ${window.sessionStorage.getItem('token')}`, // Assuming JWT token is stored in window.sessionStorage
      },
    })
    .then(response => response.json())
    .then(data => {
      setInitialData(data);
    })
    .catch(error => console.error('Error fetching initial data:', error));
  }, []); // Empty dependency array means this useEffect runs once after the initial render

  return (
    //The fetch API handles the GET request, and the .then() and .catch() methods handle the response 
    //and errors, respectively.The initial data is then stored in a React context (InitialDataContext), 
    //which you can use in child components to access this data.
    <InitialDataContext.Provider value={initialData}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </InitialDataContext.Provider>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RootComponent />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

