import React, { useEffect, useState, useRef } from 'react';
import './Scrollable.css';

const Scrollable = ({ children }) => {
    const [componentIndex, setComponentIndex] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);
    const [currentComponent, setCurrentComponent] = useState(children[componentIndex]);

    useEffect(() => {
        setCurrentComponent(children[componentIndex]);
    }, [componentIndex, children]);

    const scrollTimeoutRef = useRef(null);
    const transitionTimeoutRef = useRef(null);

    // Handle wheel or touch scroll to update the visible component
    const handleScroll = (event) => {
        clearTimeout(scrollTimeoutRef.current); // Clear any previous timeout

        // Set a small timeout to debounce the scroll event
        scrollTimeoutRef.current = setTimeout(() => {
            if (event.deltaY > 0 && componentIndex < children.length - 1) {
                setIsTransitioning(true);
                setComponentIndex((prevIndex) => prevIndex + 1);
            } else if (event.deltaY < 0 && componentIndex > 0) {
                setIsTransitioning(true);
                setComponentIndex((prevIndex) => prevIndex - 1);
            }
        }, 100);
    };

    useEffect(() => {
        window.addEventListener("wheel", handleScroll);
        window.addEventListener("touchmove", handleScroll);

        return () => {
            window.removeEventListener("wheel", handleScroll);
            window.removeEventListener("touchmove", handleScroll);
            clearTimeout(scrollTimeoutRef.current);
            clearTimeout(transitionTimeoutRef.current);
        };
    }, [componentIndex, children.length]);

    useEffect(() => {
        if (isTransitioning) {
            transitionTimeoutRef.current = setTimeout(() => {
                setIsTransitioning(false); // Turn off the transition after a delay
            }, 500); // Adjust the delay time as needed (1000ms = 1 second)
        }

        return () => {
            clearTimeout(transitionTimeoutRef.current); // Clean up the timeout on component unmount or update
        };
    }, [isTransitioning]);

    return (
        <div className="scrollable-container">
            <div key={componentIndex} className={`current-component ${isTransitioning ? 'slide-forward' : 'fade-in'}`}>
                {currentComponent}
            </div>
        </div>
    );
};

export default Scrollable;
