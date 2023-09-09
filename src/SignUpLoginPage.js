import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import React, { useState } from 'react';
import emailjs from 'emailjs-com'; // Import emailjs for sending emails

import './SignUpLoginPage.css';

// TODO: ADD Error Boundary Component - see RecipeDetailPage.js for example


// Main component for the sign-up and login page.
const SignUpLoginPage = () => {
    
    return (
        <div className="signup-login-page">
            {/* Sign-up form component */}
            <SignUpForm />
            {/* Login form component */}
            <LoginForm />
        </div>
    );
}

// Component for the sign-up form.
export const SignUpForm = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [f_name, setFirstName] = useState('');
    const [l_name, setLastName] = useState('');

    const navigate = useNavigate();


    const handleSignUp = () => {
      
        // POST request to Django REST API for user sign-up
        fetch('https://be.recipesphere.net/api/createuser/', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            username: username,
            email: email,
            password: password,
            first_name: f_name,
            last_name: l_name,
          }),
        })
        .then(response => response.json())
        .then(response => {
          if (response.status === 201) {
            alert('Sign-up successful! Please verify your email.');
            navigate('/verifyemail'); // Navigate VerifyEmail.js   
          } else if (response.status === 400){
            //Show error message
            
            if (response.password){
              alert('Error Signing up. Password: ' + response.password)
            }
            if (response.username){
              alert('Error Signing up. Username: ' + response.username)
            }
            if (response.email){
              alert('Error Signing up. Email Field: ' + response.email)
            }

          }
        })
        .catch(error => {
          console.error('Error during sign-up:', error);
          alert('An error occurred during sign-up. Please try again.');
        });
      };


    return (
        
        <div className="signup-form">
            <h2>Sign Up</h2>
            {/* Input field for entering username */}
            <input 
                type="text" 
                placeholder="Username" 
                value={username} 
                onChange={(e) => setUsername(e.target.value)} 
            />
            {/* Input field for entering email */}
            <input 
                type="email" 
                placeholder="Email" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
            />
            {/* Input field for entering password */}
            <input 
                type="text" 
                placeholder="Password" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
            />
            <input 
                type="text" 
                placeholder="First Name" 
                value={f_name} 
                onChange={(e) => setFirstName(e.target.value)} 
            />
            <input 
                type="text" 
                placeholder="Last Name" 
                value={l_name} 
                onChange={(e) => setLastName(e.target.value)} 
            />
            {/* Button to submit the sign-up form */}
            <button onClick={handleSignUp}>Sign Up</button>
        </div>
    );
}

// Component for the login form.
export const LoginForm = () => {
    const navigate = useNavigate();
    const [usernameOrEmail, setUsernameOrEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        // TODO: POST request to Django REST API for user login
        fetch('https://be.recipesphere.net/api/login/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username: usernameOrEmail, password: password }),
        })
        .then(response => response.json())
        .then(response => {
            //navigate('/verifyemail'); // Navigate VerifyEmail.js 
            localStorage.setItem('token', response.token);
            if (response.status === 200) {
              alert('Log-in successful!');
              navigate('/'); // Navigate VerifyEmail.js 
            } else if (response.status === 403){
              alert('Email must be verified for this account.')
              navigate('/verifyemail')
            } else if (response.status === 400){
              if (response.username){
                alert('Username: ' + response.username)
              }
              if (response.password){
                alert('Password: ' + response.password)
              }
              if (response.non_field_errors){
                alert('Incorrect username and password combination.')
              }
            }
        })
        .catch(error => console.error('Error during login:', error));
    };

    return (
        <div className="login-form">
            <h2>Login</h2>
            {/* Input field for entering username or email */}
            <input 
                type="text" 
                placeholder="Username" 
                value={usernameOrEmail} 
                onChange={(e) => setUsernameOrEmail(e.target.value)} 
            />
            {/* Input field for entering password */}
            <input 
                type="password" 
                placeholder="Password" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
            />
            {/* Button to submit the login form */}
            <button onClick={handleLogin}>Login</button>
        </div>
    );
}

// Export the SignUpLoginPage component for use in other parts of the application.
export default SignUpLoginPage;

