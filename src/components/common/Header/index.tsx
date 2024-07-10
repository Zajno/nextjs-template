import './style.sass';
import React from 'react';
import { HeaderCopyright, Locales, defaultLang } from '@/sitemap/copyright';
import Link from 'next/link';
import { LanguageSelect } from '../LangSelect';

type Props = {
    locale: string;
};


export const Header = ({ locale }: Props) => {
    const copyright = HeaderCopyright[(locale as Locales) || defaultLang];

    const createHref = (path: string) => locale ? `/${locale}${path}` : `${path}`;

    return (
        <header className="header">
            <div className="container">
                <ul className="menu">
                    {copyright.links.map(link => (
                        <li className="menu__item" key={link.title}>
                            <Link
                                className="label-1"
                                href={createHref(link.href)}
                                locale={locale}
                            >
                                {link.title}
                            </Link>
                        </li>
                    ))}
                </ul>

                <LanguageSelect />
            </div>
        </header>
    );
};
