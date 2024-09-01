import { useState } from 'react';

import styles from './netlify-form.module.scss';

interface Props {
    children: React.ReactNode,
    name: string,
    successMessage: string,
    errorMessage: string
}

const NetlifyForm: React.FC<Props> = ({ children, name, successMessage, errorMessage }) => {
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);

    const submitForm = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const myForm = (e.target as HTMLFormElement);
        const formData = new FormData(myForm);
      
        const res = await fetch('/_netlify-forms.html', {
          method: 'POST',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          body: new URLSearchParams(formData as any).toString()
        });

        if (res.ok) {
            myForm.reset();

            setSuccess(true);
            setError(false);
            setTimeout(() => setSuccess(false), 10000);
        } else {
            setSuccess(false);
            setError(true);
            setTimeout(() => setError(false), 10000);
        }
    }
    
    return (
        <form className={styles['netlify-form']} method='POST' name={name} onSubmit={(e) => submitForm(e)}>
            <input type='hidden' name='form-name' value={name} />
            {
                success
                ? <p className={styles['success-message']}>{successMessage}</p>
                : null
            }
            {
                error
                ? <p className={styles['error-message']}>{errorMessage}</p>
                : null
            }
            {children}
        </form>
    );
}

export default NetlifyForm;