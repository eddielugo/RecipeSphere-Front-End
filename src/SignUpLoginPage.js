import React, { useState } from 'react';
import './SignUpLoginPage.css';

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
const SignUpForm = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [f_name, setFirstName] = useState('');
    const [l_name, setLastName] = useState('');

    const handleSignUp = () => {
        // POST request to Django REST API for user sign-up
        fetch('https://be.recipesphere.net/api/createuser/', {// Replace with your Django API URL
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ 
                username:username,
                email:email,
                password:password, 
                first_name:f_name,
                last_name:l_name,

            }),
        })
        .then(response => response.json())
        .then(response => {
            // TODO: add message of error or redirect to verifyemail webpage after signup success. on success an 
            // email will be sent out to the user email 
        })
        .then(data => {
            // Handle successful sign-up (e.g., navigate to login page or show a success message)
        })
        // .catch(error => console.error('Error during sign-up:', error));
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
const LoginForm = () => {
    const [usernameOrEmail, setUsernameOrEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        // POST request to Django REST API for user login
        fetch('http://your-django-api-url/login/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username: usernameOrEmail, password }),
        })
        .then(response => response.json())
        .then(data => {
            // Handle successful login (e.g., navigate to the home page or store a session token)
        })
        .catch(error => console.error('Error during login:', error));
    };

    return (
        <div className="login-form">
            <h2>Login</h2>
            {/* Input field for entering username or email */}
            <input 
                type="text" 
                placeholder="Username or Email" 
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

