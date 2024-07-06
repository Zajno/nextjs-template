import { HeroSection } from "@/components/sections/home/heroSection";
import { HomePage as PageSettings } from '@/sitemap/pages';
import { defaultLang } from '@/sitemap/copyright';
import { createMetaData } from "@/scripts/utils/createMetadata";

const COPY = PageSettings.copy[defaultLang];

export const metadata = createMetaData(PageSettings.title, PageSettings.description);

export default function Home() {
    return (
        <main>
            <HeroSection
                id='hero-section'
                copyright={COPY.heroSection}
            />
        </main>
    );
}
