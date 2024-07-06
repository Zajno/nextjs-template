import { Metadata } from "next";
import DefaultOgImageUrl from '@/assets/img/og-image/og-image.jpeg';
import AppleFav from '@/assets/favicon/apple-touch.png';
import Manifest from '@/assets/favicon/manifest.json';
import FavLight from '@/assets/favicon/fav-light.svg';
import FavDark from '@/assets/favicon/fav-dark.svg';

const ogImage = {
    url: DefaultOgImageUrl.src,
    width: 1200,
    height: 1200,
};

// TODO metadataBase from config.

export const createMetaData = (title: string = '', description: string = '') => {
    return {
        title,
        description,
        icons: {
            icon: [
                {
                    media: '(prefers-color-scheme: light)',
                    url: FavLight.src,
                    href: FavLight.src,
                },
                {
                    media: '(prefers-color-scheme: dark)',
                    url: FavDark.src,
                    href: FavDark.src,
                },
            ],
            apple: AppleFav.src,
        },
        openGraph: {
            type: 'website',
            title,
            description,
            url: '',
            siteName: title,
            images: {
                width: ogImage.width,
                height: ogImage.height,
                url: ogImage.url,
                alt: description,
            }
        },
        twitter: {
            title,
            description,
            images: {
                width: ogImage.width,
                height: ogImage.height,
                url: ogImage.url,
                alt: description,
            }
        }
    } as Metadata;
}