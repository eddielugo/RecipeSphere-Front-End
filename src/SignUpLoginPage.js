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
          if (response.status === 'success') {
            // TODO: Redirect to verifyemail webpage after signup success
            //navigate('/verifyemail');
      
            // TODO: Send out an email to the user email using emailjs
            const templateParams = {
              to_email: email,
              username: username,
            };//TODO: Different email service?
            emailjs.send('your_service_id', 'your_template_id', templateParams, 'your_user_id')
            .then((result) => {
              console.log('Email sent:', result.text);
            }, (error) => {
              console.log('Email error:', error.text);
            });
          } else {
            //Show error message
            alert('Error during sign-up: ' + response.message);
          }
        })
        .then(data => {
          //Handle successful sign-up (e.g., show a successful signup message and navigate to Homepage.js)
          if (data && data.status === 'success') {
            alert('Sign-up successful! Please verify your email.');
            navigate('/verifyemail'); // Navigate VerifyEmail.js 
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
        .then(data => {
            //navigate('/verifyemail'); // Navigate VerifyEmail.js 
            localStorage.setItem('token', data.token);
            if (data && data.status === 'success') {
              alert('Log-in successful! Please verify your email and OTP.');
              navigate('/verifyemail'); // Navigate VerifyEmail.js 
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

