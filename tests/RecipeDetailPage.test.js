import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import RecipeDetailPage from '../src/RecipeDetailPage'; // Adjust the import to your file structure
import {  MemoryRouter, Route, Routes } from 'react-router-dom';
import { jsPDF } from "jspdf";
import emailjs from 'emailjs-com';


/* This test file includes three test cases:

1. It checks if the RecipeDetailPage component renders correctly.
2. It tests the printToPdf function.
3. It tests the sendEmail function. 
Note: TODO: Make sure to adjust the import paths according to our project's file structure.

*/

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
// Updated the mock to use the actual jsPDF class as a base
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
    ;

    // Wait for the fetch function to be called once
    await waitFor(() => expect(fetch).toHaveBeenCalledTimes(1));

    // Check if the recipe details are in the document
    expect(screen.getByText('Ingredients')).toBeInTheDocument();
    expect(screen.getByText('Instructions')).toBeInTheDocument();
    expect(screen.getByText('Comments')).toBeInTheDocument();
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

    // Wait for the fetch function to be called once
    //await waitFor(() => expect(fetch).toHaveBeenCalledTimes(1));
 
    
     
    // Spy on jsPDF constructor methods
    const jsPDFTextSpy = jest.spyOn(jsPDF.prototype, 'text');
    const jsPDFSaveSpy = jest.spyOn(jsPDF.prototype, 'save');

    // Check if jsPDF.prototype.text and jsPDF.prototype.save are defined
    if (!jsPDF.prototype.text || !jsPDF.prototype.save) {
  throw new Error("jsPDF methods are not defined");
    }   

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

    // Wait for the fetch function to be called once
    await waitFor(() => expect(fetch).toHaveBeenCalledTimes(1));

    // Simulate clicking the 'Share via Email' button
    fireEvent.click(screen.getByText('Share via Email'));

    // Check if emailjs.sendForm is called
    expect(emailjs.sendForm).toHaveBeenCalled();
  });
});

