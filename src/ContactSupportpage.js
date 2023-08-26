// Importing necessary modules
import React from 'react';
import './ContactSupportPage.css';

// Functional component for the Contact Support Page
function ContactSupportPage() {
    return (
        // Main container for the Contact Support Page
        <div className="contact-support-page">
            {/* Heading for the Contact Support Page */}
            <h1>Contact Support</h1>
            
            {/* Brief description/instruction for users */}
            <p>If you have any questions or need assistance, please reach out to us.</p>
            
            {/* Form for users to submit their queries */}
            <form className="contact-form">
                {/* Row container for Name and Email inputs */}
                <div className="contact-form-row">
                    {/* Input field for user's name */}
                    <input type="text" name="name" placeholder="Name" required />
                    
                    {/* Input field for user's email */}
                    <input type="email" name="email" placeholder="Email" required />
                </div>
                
                {/* Textarea for users to type in their message/query */}
                <textarea name="message" placeholder="Message" required></textarea>
                
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


