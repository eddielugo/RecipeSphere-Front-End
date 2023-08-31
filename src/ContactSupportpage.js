// Importing necessary modules
import React, { useState } from 'react';
import './ContactSupportPage.css';

// Functional component for the Contact Support Page
function ContactSupportPage() {
 // State variables to hold form input values
 const [name, setName] = useState('');
 const [email, setEmail] = useState('');
 const [message, setMessage] = useState('');

 // Function to handle form submission
 const handleSubmit = (e) => {
     e.preventDefault(); // Prevent default form submission behavior

     // POST request to Django REST API to submit user query
     fetch('http://your-django-api-url/contact-support/', {// Replace with your Django API URL for handling contact support queries.
         method: 'POST',
         headers: {
             'Content-Type': 'application/json',
         },
         body: JSON.stringify({ name, email, message }),
     })
     .then(response => response.json())
     .then(data => {
         // Handle successful form submission (e.g., show a success message)
     })
     .catch(error => console.error('Error during form submission:', error));
 };

    return (
        // Main container for the Contact Support Page
        <div className="contact-support-page">
            {/* Heading for the Contact Support Page */}
            <h1>Contact Support</h1>
            
            {/* Brief description/instruction for users */}
            <p>If you have any questions or need assistance, please reach out to us.</p>
            
            {/* Form for users to submit their queries */}
            <form className="contact-form" onSubmit={handleSubmit}>
                {/* Row container for Name and Email inputs */}
                <div className="contact-form-row">
                    {/* Input field for user's name */}
                    <input 
                        type="text" 
                        name="name" 
                        placeholder="Name" 
                        required 
                        value={name} 
                        onChange={(e) => setName(e.target.value)} 
                    />
                    
                    {/* Input field for user's email */}
                    <input 
                        type="email" 
                        name="email" 
                        placeholder="Email" 
                        required 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} 
                    /> 
                </div>
                
                {/* Textarea for users to type in their message/query */}
                <textarea 
                    name="message" 
                    placeholder="Message" 
                    required 
                    value={message} 
                    onChange={(e) => setMessage(e.target.value)} 
                ></textarea>
                
                {/* Submit button for the form */}
                <button type="submit">Submit</button>
            </form>
            
            {/* Footer note indicating response time */}
            <footer>We'll get back to you within 24 hours.</footer>
        </div>
    );
}

// Exporting the ContactSupportPage component for use in other parts of the application
export default ContactSupportPage;


