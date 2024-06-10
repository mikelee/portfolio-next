import Script from 'next/script';
import React from 'react';

import styles from './contact.module.scss';

import ContactForm from '../../components/contact-form/contact-form';

const Contact = () => (
    <>
        <Script src='https://www.google.com/recaptcha/api.js' />
        <div className={styles['contact']}>
            <h1>Contact</h1>
            <p>Let&apos;s get in touch!</p>
            <ContactForm />
        </div>
    </>
);

export default Contact;