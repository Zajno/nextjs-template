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

// TODO:
// 1. Try to find out if we need our old lazy load for images, videos, lottie
// 2. Create some test cases for nextjs Image component
// 3. Add logger and app breakpoints
// 4. Find solution to add inview animations (intersaction observer, gsap st as on astro template)
// 5. Add more content. Header, footer, some sections to check inview animation
// 6. Find how to implement i11n and add page alternates to metadata
// 7. Add more common components from our proejcts, templates
