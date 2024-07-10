'use client';

import { defaultLang, languages } from '@/sitemap/copyright';
import './style.sass';
import React from 'react';
import { createLangLink } from '@/utils/createLangLink';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export const LanguageSelect = () => {
    const pathname = usePathname();

    return (
        <ul className="lang-select">
            {Object.entries(languages).map(([langCode, label]) => {
                const langSelectHref = createLangLink(pathname, langCode, languages, defaultLang);

                return (
                    <li className="lang-select__item" key={`${langCode}__${label}`}>
                        <Link href={langSelectHref}>
                            {label}
                        </Link>
                    </li>
                );
            })}
        </ul>
    );
};
