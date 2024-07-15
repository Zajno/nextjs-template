'use client';

import React from 'react';
import { Player, Controls } from '@lottiefiles/react-lottie-player';

type Props = {
    src: string;
    className?: string;
};

export const Lottie = ({ src, className }: Props) => {
    return (
        <Player
            autoplay
            loop
            src={src}
            className={`lottie-player ${className ? className : ''}`}
            style={{ height: '500px', width: '500px' }}
        >
            <Controls
                visible={true}
                buttons={['play', 'repeat', 'frame', 'debug']}
            />
        </Player>
    );
};
