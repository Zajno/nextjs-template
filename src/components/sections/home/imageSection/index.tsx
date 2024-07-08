import './style.sass';
import React from 'react';
import ogImage from '@/assets/img/og-image/og-image.jpeg';
import ExportedImage from 'next-image-export-optimizer';

type Props = {
    id: string,
};

export const ImageSection = ({ id }: Props) => {
    return (
        <section className="image-section" id={id}>
            <div className="container">
                <ExportedImage
                    className="zajno-image"
                    src={ogImage}
                    alt="Zajno image"
                    placeholder="blur"
                />
            </div>
        </section>
    );
};
