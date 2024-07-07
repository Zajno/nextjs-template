import './style.sass';
import React from 'react';

type SectionCopyright = {
    title: string,
    subtitle: string,
};

type Props = {
    id: string,
    copyright: SectionCopyright,
};

export const HeroSection = ({ id, copyright }: Props) => {
    return (
        <section className="hero-section" id={id}>
            <div className="container">
                <h1 className="title-h1">
                    {copyright.title}
                </h1>

                <h2 className="title-h2">
                    {copyright.subtitle}
                </h2>
            </div>
        </section>
    );
};
