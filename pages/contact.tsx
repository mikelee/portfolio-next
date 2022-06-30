import Head from 'next/head';

import styles from '../styles/Contact.module.scss';

const Contact = () => (
    <>
        <Head>
            <title>Mike Lee: Contact</title>
            <meta name='description' content='Send a message to contact Mike Lee.' />
        </Head>
        <main className={styles['contact']}>
            <h1>Contact</h1>
            <p>Let's get in touch!</p>
            <form action='https://usebasin.com/f/e94fc554851b' method='POST'>
                <label htmlFor='name'>Name</label>
                <input type='text' name='name' placeholder='Your name' required autoFocus />
                <label htmlFor='email'>Email</label>
                <input type='email' name='email' placeholder='username@example.com' required autoFocus />
                <label htmlFor='message'>Message</label>
                <textarea name='message' rows={12} placeholder="What's on your mind..." required />
                <button type='submit'>Submit</button>
            </form>
        </main>
    </>
);

export default Contact;