// Import necessary functions and components for testing
import { render, screen } from '@testing-library/react'; // Importing rendering and screen utilities from React Testing Library
import App from './App'; // Importing the main App component to be tested

// Define a test suite for the App component
test('renders learn react link', () => {
  render(<App />); // Render the App component

  // Search for an element with the text "learn react" (case-insensitive) within the rendered App component
  const linkElement = screen.getByText(/learn react/i);

  // Assert that the found element is indeed present in the document
  expect(linkElement).toBeInTheDocument();
});
