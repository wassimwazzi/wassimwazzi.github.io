import React, { useEffect, useState, useRef, useCallback } from 'react';
import './Scrollable.css';
import { Parallax } from 'react-parallax';

const Scrollable = ({ children }) => {
    const [componentIndex, setComponentIndex] = useState(0);
    const [currentComponent, setCurrentComponent] = useState(children[componentIndex]);
    const [fadeDirection, setFadeDirection] = useState('up');
    const touchStartY = useRef(0);
    const isTransitioning = useRef(false);

    useEffect(() => {
        setCurrentComponent(children[componentIndex]);
    }, [componentIndex, children]);

    const scrollTimeoutRef = useRef(null);

    const handleScroll = useCallback((event) => {
        if (isTransitioning.current) return; // Prevent scroll if transitioning

        clearTimeout(scrollTimeoutRef.current);

        scrollTimeoutRef.current = setTimeout(() => {
            if (event.deltaY > 0 && componentIndex < children.length - 1) {
                setComponentIndex((prevIndex) => prevIndex + 1);
                setFadeDirection('up');
            } else if (event.deltaY < 0 && componentIndex > 0) {
                setComponentIndex((prevIndex) => prevIndex - 1);
                setFadeDirection('down');
            }
        }, 100);
    }, [componentIndex, children.length]);

    const handleTouchStart = useCallback((event) => {
        touchStartY.current = event.touches[0].clientY;
    }, []);

    const handleTouchEnd = useCallback((event) => {
        if (isTransitioning.current) return; // Prevent scroll if transitioning

        const touchCurrentY = event.changedTouches[0].clientY;
        const deltaY = touchStartY.current - touchCurrentY;

        if (Math.abs(deltaY) > 30) { // Threshold for intentional scrolling
            if (deltaY > 0 && componentIndex < children.length - 1) {
                isTransitioning.current = true;
                setComponentIndex((prevIndex) => prevIndex + 1);
                setFadeDirection('up');
            } else if (deltaY < 0 && componentIndex > 0) {
                isTransitioning.current = true;
                setComponentIndex((prevIndex) => prevIndex - 1);
                setFadeDirection('down');
            }
            setTimeout(() => {
                isTransitioning.current = false;
            }, 500); // Adjust timeout based on animation duration
        }
    }, [componentIndex, children.length]);

    const handleProgressPointClick = useCallback((index) => {
        if (isTransitioning.current) return; // Prevent scroll if transitioning

        clearTimeout(scrollTimeoutRef.current);

        scrollTimeoutRef.current = setTimeout(() => {
            setComponentIndex(index);
            const fadeDirection = index > componentIndex ? 'up' : 'down'
            setFadeDirection(fadeDirection);
        }, 100);
    }, [componentIndex])

    useEffect(() => {
        window.addEventListener("wheel", handleScroll);
        window.addEventListener("touchstart", handleTouchStart);
        window.addEventListener("touchend", handleTouchEnd);

        return () => {
            window.removeEventListener("wheel", handleScroll);
            window.removeEventListener("touchstart", handleTouchStart);
            window.removeEventListener("touchend", handleTouchEnd);
        };
    }, [handleScroll, handleTouchStart, handleTouchEnd]);

    return (
        <Parallax strength={300} className='scrollable-parallax'>
            <div className="scrollable-container fade-in">
                <div key={componentIndex} className="scrollable-content" data-aos={`fade-${fadeDirection}`}>
                    <div className='progress-bar'>
                        {children.map((_, index) => (
                            <div
                                key={index}
                                className={`progress-point ${index <= componentIndex ? 'fill' : 'no-fill'}`}
                                onClick={() => handleProgressPointClick(index)}
                            />
                        ))}
                    </div>

                    <div className='current-component'>
                        {currentComponent}
                    </div>
                </div>
            </div>
        </Parallax>
    );
};

export default Scrollable;
