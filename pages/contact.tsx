import Head from 'next/head';
import React, { useEffect, useRef } from 'react';

import styles from '../styles/Contact.module.scss';

declare global {
    interface Window {
        onSubmit: (token: string) => Promise<void>
    }
}

const Contact = () => {

    const formRef = useRef<HTMLFormElement>(null);

    useEffect(() => {
        (window).onSubmit = async function(token: string) {
            formRef.current?.submit();
        }
    }, [formRef]);

    return (
        <>
            <Head>
                <title>Mike Lee: Contact</title>
                <meta name='description' content='Send a message to contact Mike Lee.' />
            </Head>
            <main className={styles['contact']}>
                <h1>Contact</h1>
                <p>Let&apos;s get in touch!</p>
                <form ref={formRef} action={'https://usebasin.com/f/e94fc554851b'} method='POST' >
                    <label htmlFor='name'>Name</label>s
                    <input type='text' name='name' placeholder='Your name' required autoFocus />
                    <label htmlFor='email'>Email</label>
                    <input type='email' name='email' placeholder='username@example.com' required />
                    <label htmlFor='message'>Message</label>
                    <textarea name='message' rows={12} placeholder="What's on your mind..." required />
                    <button className='g-recaptcha' data-sitekey='6Lew3SMUAAAAAJ82QoS7gqOTkRI_dhYrFy1f7Sqy' data-callback='onSubmit' data-action='submit'>Submit</button>
                </form>
            </main>
        </>
    );
}

export default Contact;