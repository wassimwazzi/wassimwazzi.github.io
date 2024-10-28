import React, { useEffect, useRef } from 'react';
import './Spotlight.css';

const Spotlight = ({ children }) => {
    const spotlightRef = useRef(null);

    useEffect(() => {
        const handleMouseMove = (event) => {
            if (spotlightRef.current) {
                spotlightRef.current.style.left = `${event.clientX}px`;
                spotlightRef.current.style.top = `${event.clientY}px`;
            }
        };

        document.addEventListener('mousemove', handleMouseMove);

        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <div style={{ position: 'relative', overflow: 'hidden' }}>
            <div className="spotlight" ref={spotlightRef}></div>
            {children}
        </div>
    );
};

export default Spotlight;
