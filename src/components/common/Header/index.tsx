import './style.sass';
import React from 'react';
import { HeaderCopyright, defaultLang } from '@/sitemap/copyright';
import Link from 'next/link';

const COPY = HeaderCopyright[defaultLang];

type Props = {
 //
};

export const Header = (props: Props) => {
    return (
        <header className="header">
            <div className="container">
                <ul className="menu">
                    {COPY.links.map(link => (
                        <li className="menu__item" key={link.href}>
                            <Link className="label-1" href={link.href}>
                                {link.title}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </header>
    );
};
