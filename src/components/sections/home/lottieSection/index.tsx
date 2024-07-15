import { Lottie } from '@/components/common/Lottie';
import './style.sass';
import React from 'react';


type Props = {
    id: string,
};

export const LottieSection = ({ id }: Props) => {
    return (
        <section className="hero-section" id={id}>
            <h1 className="title-h2">Lottie</h1>
            <Lottie src="https://lottie.host/4e0114b5-7c07-44aa-971b-ed804d521227/YuhRcJOBVU.json" />
        </section>
    );
};
