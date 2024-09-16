import React from 'react';

import styles from './contact.module.scss';

import NetlifyForm from '../../components/netlify-form/netlify-form';

const Contact = () => (
    <div id='contact' className={styles['contact']}>
        <h1>Contact</h1>
        <p>Let&apos;s get in touch!</p>
        <div className={styles['form-container']}>
            <NetlifyForm
                name='contact'
                successMessage='Thank you for your message!'
                errorMessage='Oh no! Something went wrong.'
            >
                <label>
                    Name
                    <input type='text' name='name' placeholder='Your name' required />
                </label>
                <label>
                    Email
                    <input type='email' name='email' placeholder='username@example.com' required />
                </label>
                <label>
                    Message
                    <textarea name='message' rows={12} placeholder="What's on your mind..." required />
                </label>
                <button type='submit'>Send</button>
            </NetlifyForm>
        </div>
    </div>
);

export default Contact;