import { Righteous } from 'next/font/google';
import '../styles/base.sass';

const righteous = Righteous({ weight: ['400'], subsets: ['latin'] });

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={righteous.className}>
                {children}
            </body>
        </html>
    );
}
