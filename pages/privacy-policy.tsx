import Head from 'next/head';

import type { NextPage } from 'next';

import styles from './privacy-policy.module.scss';

const PrivacyPolicy: NextPage = () => {
    return (
        <>
            <Head>
                <title>Mike Lee | Privacy Policy</title>
                <meta name='description' content='My privacy policy takes my clients privacy seriously.' />
                <meta name='viewport' content='width=device-width, initial-scale=1.0, interactive-widget=resizes-content' />
            </Head>
            <div className={styles['privacyPolicy']}>
                <h1>Privacy Policy</h1>
                <p>We respect your privacy and are committed to protecting your information. Payments are processed securely through Stripe, Inc. When you choose to pay by bank transfer or ACH, Stripe may collect and process bank account information solely for the purpose of completing the payment. We do not store or have access to your full bank account details. We use customer information only as necessary to provide our services, communicate about projects, and process payments. We do not sell or share personal information with third parties except as required to operate our services or comply with the law. If you have any questions about this policy, please contact us.</p>
            </div>
        </>
    );
}

export default PrivacyPolicy;