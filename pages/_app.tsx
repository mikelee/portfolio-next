import type { AppProps } from 'next/app';
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';

import '../styles/globals.scss';

import PageLayout from '../components/page-layout.component';

const sitekey = '6Lew3SMUAAAAAJ82QoS7gqOTkRI_dhYrFy1f7Sqy';

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <GoogleReCaptchaProvider reCaptchaKey={sitekey} >
            <PageLayout>
                <Component {...pageProps} />
            </PageLayout>
        </GoogleReCaptchaProvider>
    );
}

export default MyApp;