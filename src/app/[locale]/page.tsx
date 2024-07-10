import { HeroSection } from '@/components/sections/home/heroSection';
import { HomePage as PageSettings } from '@/sitemap/pages';
import { Locales, defaultLang } from '@/sitemap/copyright';
import { createMetaData } from '@/utils/createMetadata';
import { ImageSection } from '@/components/sections/home/imageSection';

export const metadata = createMetaData(PageSettings.title, PageSettings.description);

export default function Page({ params: { locale } }: { params: { locale: string}}) {
    const copyright = PageSettings.copy[(locale as Locales) || defaultLang];

    return (
        <main>
            <HeroSection
                id="hero-section"
                copyright={copyright.heroSection}
            />
            <div style={{ width: '100vw', height: '100vh', border: '1px solid red' }}></div>

            <ImageSection id="image-section" />
        </main>
    );
}
