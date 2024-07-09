import './style.sass';
import React from 'react';
import ogImage from '@/assets/img/og-image/og-image.jpeg';
import Image from 'next/image';

type Props = {
    id: string,
};

export const ImageSection = ({ id }: Props) => {
    return (
        <section className="image-section" id={id}>
            <div className="container">
                <Image
                    className="zajno-image"
                    src={ogImage}
                    alt="Zajno image"
                    placeholder="blur"
                />
            </div>
        </section>
    );
};
