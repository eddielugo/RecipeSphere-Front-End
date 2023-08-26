import React from 'react';
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
    return (
        <div className="signup-form">
            <h2>Sign Up</h2>
            {/* Input field for entering username */}
            <input type="text" placeholder="Username" />
            {/* Input field for entering email */}
            <input type="email" placeholder="Email" />
            {/* Input field for entering password */}
            <input type="password" placeholder="Password" />
            {/* Button to submit the sign-up form */}
            <button>Sign Up</button>
        </div>
    );
}

// Component for the login form.
const LoginForm = () => {
    return (
        <div className="login-form">
            <h2>Login</h2>
            {/* Input field for entering username or email */}
            <input type="text" placeholder="Username or Email" />
            {/* Input field for entering password */}
            <input type="password" placeholder="Password" />
            {/* Button to submit the login form */}
            <button>Login</button>
        </div>
    );
}

// Export the SignUpLoginPage component for use in other parts of the application.
export default SignUpLoginPage;

