import type { AppProps } from 'next/app';

import '../styles/globals.scss';

import PageLayout from '../components/page-layout.component';

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <PageLayout>
            <Component {...pageProps} />
        </PageLayout>
    );
}

export default MyApp;