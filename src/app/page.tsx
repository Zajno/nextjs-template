import { HeroSection } from "@/components/sections/home/heroSection";
import Image from "next/image";
import { HomePage as PageSettings } from '../sitemap/pages';
import { defaultLang } from '../sitemap/copyright';

const COPY = PageSettings.copy[defaultLang];

export default function Home() {
    return (
        <main>
            <HeroSection 
                id={'hero-section'}
                copyright={COPY.heroSection}
            />
        </main>
    );
}
