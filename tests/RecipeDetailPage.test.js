import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import RecipeDetailPage from '../src/RecipeDetailPage'; // Adjust the import to your file structure
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { jsPDF } from "jspdf"; // Import jsPDF

// Reset fetch mock and other mocks before each test
beforeEach(() => {
  jest.clearAllMocks();
});

// Mock fetch function to simulate API calls
global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve({ status: 'success' }),
  })
);

// Mock jsPDF function to simulate PDF generation
jest.mock("jspdf", () => {
    const originalJsPDF = jest.requireActual("jspdf");
    return {
      __esModule: true,
      ...originalJsPDF,
      prototype: {
        ...originalJsPDF.prototype,
        text: jest.fn(),
        save: jest.fn(),
      },
    };
});

// Mock emailjs function to simulate email sending
jest.mock('emailjs-com', () => {
  return {
    sendForm: jest.fn(() => Promise.resolve({ text: 'Email sent' })),
  };
});

// Mock window.open to simulate opening email client
global.window.open = jest.fn();

// Test suite for RecipeDetailPage component
describe('RecipeDetailPage', () => {

  // Test case for rendering RecipeDetailPage component
  it('renders RecipeDetailPage component', async () => {
      render(
        <MemoryRouter initialEntries={['/recipe/1']}>
          <Routes>
            <Route path="/recipe/:recipeId" element={<RecipeDetailPage />} />
          </Routes>
        </MemoryRouter>
      );

    // Wait for the fetch function to be called twice (once for recipe and once for comments)
    await waitFor(() => expect(fetch).toHaveBeenCalledTimes(2));

    // Check if the recipe details are in the document
    expect(screen.getByText('ingredients')).toBeInTheDocument();
    expect(screen.getByText('instructions')).toBeInTheDocument();
    expect(screen.getByText('comments')).toBeInTheDocument();
    expect(screen.getByText('title')).toBeInTheDocument(); // Assuming 'Title' is the label or placeholder
    expect(screen.getByText('description')).toBeInTheDocument();
    expect(screen.getByText('time_minutes')).toBeInTheDocument(); // Assuming 'Time Minutes' is the label or placeholder
    expect(screen.getByAltText('image')).toBeInTheDocument(); // Assuming the image has alt text 'Recipe Image'
  });


  // Test case for printToPdf function
  it('handles printToPdf correctly', async () => {
    render(
      <MemoryRouter initialEntries={['/recipe/1']}>
        <Routes>
          <Route path="/recipe/:recipeId" element={<RecipeDetailPage />} />
        </Routes>
      </MemoryRouter>
    );

    // Spy on jsPDF constructor methods
    const jsPDFTextSpy = jest.spyOn(jsPDF.prototype, 'text');
    const jsPDFSaveSpy = jest.spyOn(jsPDF.prototype, 'save');

    // Simulate clicking the 'Generate Printable PDF' button
    fireEvent.click(screen.getByText('Generate Printable PDF'));

    // Check if jsPDF functions are called
    expect(jsPDFTextSpy).toHaveBeenCalled();
    expect(jsPDFSaveSpy).toHaveBeenCalled();
  });

  // Test case for sendEmail function
	it('handles sendEmail correctly', async () => {
	    render(
	      <MemoryRouter initialEntries={['/recipe/1']}>
	        <Routes>
	          <Route path="/recipe/:recipeId" element={<RecipeDetailPage />} />
	        </Routes>
	      </MemoryRouter>
	    );

	    // Fill in the email input
	    fireEvent.change(screen.getByPlaceholderText('Enter email to share'), { target: { value: 'test@example.com' } });

	    // Simulate clicking the 'Share via Email' button
	    fireEvent.click(screen.getByText('Share via Email'));

	    // Check if window.open is called with a mailto link
	    expect(global.window.open).toHaveBeenCalledWith(
	      'mailto:test@example.com?subject=Check out this recipe!&body=Here is a great recipe for you to try out: [Recipe Link]'
	    );
	});

});