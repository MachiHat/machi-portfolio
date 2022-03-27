import React, { createContext, useContext } from 'react';

const AnimationContext = createContext();

export const useAnimContext = () => useContext(AnimationContext);

export const AnimationContextProvider = ({ children }) => {

    // const leaveLeft = {x: -100};
    // const leaveRight = {x: 100};

    // const enterLeft = {x: 100}
    // const enterRight = {x: -100};

    // const slideToNext = () => { };

    // const slideToPrev = () => { };

    return (
        <AnimationContext.Provider>
            {children}
        </AnimationContext.Provider>
    );
};

export default AnimationContextProvider;