import { useEffect, useRef } from 'react';

import styles from './contact-form.module.scss';

declare global {
    interface Window {
        onSubmit: (token: string) => Promise<void>
    }
}

const ContactForm = () => {
    const formRef = useRef<HTMLFormElement>(null);

    useEffect(() => {
        (window).onSubmit = async function(token: string) {
            const requiredFieldsValid = areRequiredFieldsValid();

            if (requiredFieldsValid) {
                formRef.current?.submit();
            } else {
                (window as any).grecaptcha.reset();
            }
        }
    }, [formRef]);

    const areRequiredFieldsValid = () => {
        const requiredElements = document.querySelectorAll("[required]");

        for (let i = 0; i < requiredElements.length; i++) {
            // if not valid
            if (!(requiredElements[i] as HTMLFormElement).reportValidity()) {
                return false;
            }
        }

        return true;
    }
    return (
        <form className={styles['contact-form']} ref={formRef} action={'https://usebasin.com/f/e94fc554851b'} method='POST' >
            <label htmlFor='name'>Name</label>
            <input type='text' name='name' placeholder='Your name' required />
            <label htmlFor='email'>Email</label>
            <input type='email' name='email' placeholder='username@example.com' required />
            <label htmlFor='message'>Message</label>
            <textarea name='message' rows={12} placeholder="What's on your mind..." required />
            <button className='g-recaptcha' data-sitekey='6Lew3SMUAAAAAJ82QoS7gqOTkRI_dhYrFy1f7Sqy' data-callback='onSubmit' data-action='submit'>Submit</button>
        </form>
    );
}

export default ContactForm;