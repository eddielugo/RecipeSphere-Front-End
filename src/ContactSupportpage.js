import React from 'react';
import './ContactSupportPage.css';

function ContactSupportPage() {
    return (
        <div className="contact-support-page">
            <h1>Contact Support</h1>
            <p>If you have any questions or need assistance, please reach out to us.</p>
            <form className="contact-form">
                <div className="contact-form-row"> {/* Wrap Name and Email in a div */}
                    <input type="text" name="name" placeholder="Name" required />
                    <input type="email" name="email" placeholder="Email" required />
                </div>
                <textarea name="message" placeholder="Message" required></textarea>
                <button type="submit">Submit</button>
            </form>
            <footer>We'll get back to you within 24 hours.</footer>
        </div>
    );
}

export default ContactSupportPage;

