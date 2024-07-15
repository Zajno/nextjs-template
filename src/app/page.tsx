import { HeroSection } from '@/components/sections/home/heroSection';
import { HomePage as PageSettings } from '@/sitemap/pages';
import { defaultLang } from '@/sitemap/copyright';
import { createMetaData } from '@/utils/createMetadata';
import { ImageSection } from '@/components/sections/home/imageSection';
import { LottieSection } from '@/components/sections/home/lottieSection';

const COPY = PageSettings.copy[defaultLang];

export const metadata = createMetaData(PageSettings.title, PageSettings.description);

export default function Page() {
    return (
        <main>
            <HeroSection
                id="hero-section"
                copyright={COPY.heroSection}
            />
            <LottieSection id="lottie-section" />

            <ImageSection id="image-section" />
        </main>
    );
}
