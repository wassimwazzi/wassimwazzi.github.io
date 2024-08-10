import React, { useEffect, useState } from 'react';
import { Parallax } from 'react-parallax';

const AnimatedBackground = ({ image, children }) => {
    const [isIdle, setIsIdle] = useState(false);

    useEffect(() => {
        let idleTimeout;

        const handleActivity = () => {
            clearTimeout(idleTimeout);
            if (isIdle) {
                setIsIdle(false);
            }
            idleTimeout = setTimeout(() => {
                setIsIdle(true);
            }, 10000); // 10 seconds of inactivity
        };

        window.addEventListener('mousemove', handleActivity);
        window.addEventListener('keydown', handleActivity);
        window.addEventListener('scroll', handleActivity);

        return () => {
            clearTimeout(idleTimeout);
            window.removeEventListener('mousemove', handleActivity);
            window.removeEventListener('keydown', handleActivity);
            window.removeEventListener('scroll', handleActivity);
        };
    }, [isIdle]);

    return (
        <Parallax bgImage={image} strength={500}>
            <div className={`animated-background${isIdle ? '-active' : ''}`} style={{ backgroundImage: `url(${image})` }}>
                {children}
            </div>
        </Parallax>
    )
};

export default AnimatedBackground;