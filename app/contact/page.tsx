import { Metadata } from 'next';
import Script from 'next/script';
import React from 'react';

import styles from '../../styles/Contact.module.scss';

import ContactForm from '../../components/contact-form';

export const metadata: Metadata = {
    title: 'Contact',
    description: 'Send a message to contact Mike Lee.'
};

const Contact = () => (
    <>
        <Script src='https://www.google.com/recaptcha/api.js' />
        <main className={styles['contact']}>
            <h1>Contact</h1>
            <p>Let&apos;s get in touch!</p>
            <ContactForm />
        </main>
    </>
);

export default Contact;