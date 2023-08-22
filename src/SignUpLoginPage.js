
import React from 'react';
import './SignUpLoginPage.css';

const SignUpLoginPage = () => {
    return (
        <div className="signup-login-page">
            <SignUpForm />
            <LoginForm />
        </div>
    );
}

const SignUpForm = () => {
    return (
        <div className="signup-form">
            <h2>Sign Up</h2>
            <input type="text" placeholder="Username" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <button>Sign Up</button>
        </div>
    );
}

const LoginForm = () => {
    return (
        <div className="login-form">
            <h2>Login</h2>
            <input type="text" placeholder="Username or Email" />
            <input type="password" placeholder="Password" />
            <button>Login</button>
        </div>
    );
}

export default SignUpLoginPage;
