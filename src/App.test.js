/*If you plan to include tests that involve API calls to your Django REST backend, 
you can mock those API calls using libraries like jest-fetch-mock or msw (Mock Service Worker).*/

// Import necessary functions and components for testing
// Import necessary functions and components for testing
import { findByText, render, screen, waitFor } from '@testing-library/react'; // Importing rendering and screen utilities from React Testing Library
import fetchMock from 'jest-fetch-mock'; // Importing fetch mock utility
import App from './App'; // Importing the main App component to be tested
import { FindByText } from '@testing-library/react';

// Enable fetch mocks
fetchMock.enableMocks();

// Define a test suite for the App component
describe('App component', () => {
  // Reset all mock instances before each test
  beforeEach(() => {
    fetchMock.resetMocks();
  });

  test('renders learn react link', async () => {
    // Mock a fetch call to Django REST API
    fetchMock.mockResponseOnce(JSON.stringify({ data: 'some data' }));

    render(<App />); // Render the App component

    // Wait for the fetch call to complete and component to re-render
    await screen.findByText(() => screen.getByText(/learn react/i));

    // Search for an element with the text "learn react" (case-insensitive) within the rendered App component
    const linkElement = screen.getByText(/learn react/i);

    // Assert that the found element is indeed present in the document
    expect(linkElement).toBeInTheDocument();

    // Additional assertions to check if fetch was called
    expect(fetch).toHaveBeenCalledTimes(1);
    expect(fetch).toHaveBeenCalledWith('http://your-django-api-url/your-endpoint/', expect.anything()); // Replace with your actual Django REST API URL and endpoint
  });
});

