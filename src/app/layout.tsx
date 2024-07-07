import { Righteous } from 'next/font/google';
import '../styles/base.sass';

const righteous = Righteous({
    weight: ['400'],
    subsets: ['latin'],
    variable: '--main-font',
});

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={righteous.variable}>
                {children}
            </body>
        </html>
    );
}
