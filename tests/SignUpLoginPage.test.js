import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // for the "toBeInTheDocument" matcher
import SignUpLoginPage, { SignUpForm, LoginForm } from '../src/SignUpLoginPage'; // Adjust the import to your file structure
import { MemoryRouter, Route, Routes } from 'react-router-dom';

/*This test file includes three test cases:

1. It checks if the SignUpLoginPage component renders correctly.
2. It tests the handleSignUp function in the SignUpForm component.
3. It tests the handleLogin function in the LoginForm component.      

Breakdown of what each function is doing:

1. describe: This function defines a test suite. It groups together related test cases.
2. it: This function defines a single test case.
3. render: This function from @testing-library/react renders a React component for testing.
4. fireEvent: This function simulates user events like typing, clicking, etc.
5. screen: This object provides various methods to query the rendered output.
6. expect: This function checks if a certain condition is met (an assertion).
7. waitFor: This function waits for some condition to be met before proceeding.
8. global.fetch = jest.fn(...): This line mocks the global fetch function to simulate API calls.
*/

// Mock fetch function to simulate API calls
global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve({ status: 'success' }),
  })
);

// Test suite for SignUpLoginPage component
describe('SignUpLoginPage', () => {
  // Mock the fetch function
  global.fetch = jest.fn(() => Promise.resolve({ json: () => Promise.resolve({}) }));
  // Test case for rendering SignUpLoginPage component
  it('renders SignUpLoginPage component', () => {
    render(
    <MemoryRouter>
      <SignUpLoginPage />
    </MemoryRouter>);
    // Check if the first occurrence of 'Sign Up' is in the document
    // Use getAllByText to handle multiple elements with the same text
    expect(screen.getAllByText('Sign Up')[0]).toBeInTheDocument();
    expect(screen.getAllByText('Login')[0]).toBeInTheDocument();
  });

  // Test case for handleSignUp function in SignUpForm component
  it('handles sign-up correctly', async () => {
    // Render SignUpForm component with routing
    render(
      <MemoryRouter initialEntries={['/signup']}>
        <Routes>
          <Route path="/signup" element={<SignUpForm />} />
        </Routes>
      </MemoryRouter>
    );

    // Simulate typing in the input fields
    fireEvent.change(screen.getByPlaceholderText('Username'), {
      target: { value: 'testuser' },
    });
    fireEvent.change(screen.getByPlaceholderText('Email'), {
      target: { value: 'test@email.com' },
    });
    fireEvent.change(screen.getByPlaceholderText('Password'), {
      target: { value: 'testpassword' },
    });
    fireEvent.change(screen.getByPlaceholderText('First Name'), {
      target: { value: 'Test' },
    });
    fireEvent.change(screen.getByPlaceholderText('Last Name'), {
      target: { value: 'User' },
    });

  
    // Simulate clicking the first occurrence of the 'Sign Up' button
    fireEvent.click(screen.getAllByText('Sign Up')[0]);


    // Wait for the fetch function to be called once
    // Use getAllByText to handle multiple elements with the same text
    await waitFor(() => expect(fetch).toHaveBeenCalledTimes(1));
  });

  // Test case for handleLogin function in LoginForm component
  it('handles login correctly', async () => {
    // Render LoginForm component with routing
    render(
      <MemoryRouter initialEntries={['/login']}>
        <Routes>
          <Route path="/login" element={<LoginForm />} />
        </Routes>
      </MemoryRouter>
    );

    // Simulate typing in the input fields
    fireEvent.change(screen.getByPlaceholderText('Username or Email'), {
      target: { value: 'testuser' },
    });
    fireEvent.change(screen.getByPlaceholderText('Password'), {
      target: { value: 'testpassword' },
    });

  
    // Use getAllByText to handle multiple elements with the same text
     // Simulate clicking the first occurrence of the 'Login' button
     fireEvent.click(screen.getAllByText('Login')[0]);

    // Wait for the fetch function to be called once
    await waitFor(() => expect(fetch).toHaveBeenCalledTimes(1));
  });
});

