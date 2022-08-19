import { Html, Head, Main, NextScript } from 'next/document';
import Script from 'next/script';

export default function Document() {
    return (
        <Html lang='en'>
            <Head />
            <body>
                <Script src="https://www.google.com/recaptcha/api.js" async defer></Script>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}