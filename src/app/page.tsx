import { HeroSection } from '@/components/sections/home/heroSection';
import { HomePage as PageSettings } from '@/sitemap/pages';
import { defaultLang } from '@/sitemap/copyright';
import { createMetaData } from '@/utils/createMetadata';
import { ImageSection } from '@/components/sections/home/imageSection';

const COPY = PageSettings.copy[defaultLang];

export const metadata = createMetaData(PageSettings.title, PageSettings.description);

export default function Home() {
    return (
        <main>
            <HeroSection
                id="hero-section"
                copyright={COPY.heroSection}
            />
            <div style={{ width: '100vw', height: '100vh', border: '1px solid red' }}></div>

            <ImageSection id="image-section" />
        </main>
    );
}
