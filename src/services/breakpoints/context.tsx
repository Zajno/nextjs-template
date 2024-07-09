'use client';

import React, { useEffect, useState } from 'react';
import { Breakpoints } from './appBreakpoints';

const updateRem = () => {
    const width = document.body.clientWidth;
    const height = window.innerHeight;

    Breakpoints.resize(width, height);

    return Breakpoints.Current.rem;
};

if (typeof window !== 'undefined') {
    updateRem();
}

export const GemContext = React.createContext(Breakpoints.Current.rem);
export const BreakpointContext = React.createContext(Breakpoints.Current.breakpoint?.id);

export const BreakpointsContextProvider = (props: React.PropsWithChildren) => {

    const [rem, setRem] = useState(Breakpoints.Current.rem);
    const [breakpointId, setBreakpointId] = useState(Breakpoints.Current.breakpoint?.id);

    useEffect(() => {
        const doResize = () => {
            updateRem();
            setRem(Breakpoints.Current.rem);
            setBreakpointId(Breakpoints.Current.breakpoint?.id);
        };

        doResize();
        window.addEventListener('resize', doResize);
        return () => window.removeEventListener('resize', doResize);
    }, []);

    return (
        <BreakpointContext.Provider value={breakpointId}>
            <GemContext.Provider value={rem}>
                {props.children}
            </GemContext.Provider>
        </BreakpointContext.Provider>
    );
};
