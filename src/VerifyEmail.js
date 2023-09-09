import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './VerifyEmail.css';

const VerifyEmail = () => {
    const [email, setEmail] = useState(''); // State for email input
    const [otp, setOtp] = useState(''); // State for OTP input
    const navigate = useNavigate();

    const handleVerification = () => {
        // TODO: Update URL
        //POST request to Django REST API for email and OTP verification
        fetch('https://be.recipesphere.net/api/verifyemail/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Token ${localStorage.getItem('token')}`,
            },
            body: JSON.stringify({
                email: email,
                otp: otp,
            }),
        })
        .then(response => response.json())
        .then(data => {
            if (data && data.status === 'success') {
                alert('Email verified successfully!');
                navigate('/'); // Navigate to HomePage
            } else {
                // Show error message from the backend
                alert('Error during email verification: ' + data.message);
            }
        })
        .catch(error => {
            console.error('Error during email verification:', error);
            alert('An error occurred during email verification. Please try again.');
        });
    };
    

    return (
        <div className="verify-email">
            <h2>Verify Email</h2>
            <input 
                type="email" 
                placeholder="Enter your email" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
            />
            <input 
                type="text" 
                placeholder="Enter OTP" 
                value={otp} 
                onChange={(e) => setOtp(e.target.value)} 
            />
            <button onClick={handleVerification}>Verify</button>
        </div>
    );
}

export default VerifyEmail;
