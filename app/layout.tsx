import { Metadata } from 'next';
import PageLayout from '../components/page-layout.component';

import '../styles/globals.scss'

export const metadata: Metadata = {
    title: {
        template: 'Mike Lee | %s', // %s is replaced with the descendent page's title
        default: 'Mike Lee | Full Stack Developer',
    },
    description: 'Mike Lee is a Full Stack Web Developer.'
  };

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body>
                <PageLayout>
                    {children}
                </PageLayout>
            </body>
        </html>
    );
}