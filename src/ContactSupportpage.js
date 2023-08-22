import React from 'react';

function ContactSupportPage() {
    return (
        <div className="contact-support-page">
            <h1>Contact Support</h1>
            <p>If you have any questions or need assistance, please reach out to us.</p>
            <form className="contact-form">
                <input type="text" placeholder="Name" required />
                <input type="email" placeholder="Email" required />
                <textarea placeholder="Message" required></textarea>
                <button type="submit">Submit</button>
            </form>
            <footer>We'll get back to you within 24 hours.</footer>
        </div>
    );
}

export default ContactSupportPage;
