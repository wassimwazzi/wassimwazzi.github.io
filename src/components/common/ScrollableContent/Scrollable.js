import React, { useEffect, useState, useRef } from 'react';
import './Scrollable.css';
import { Parallax } from 'react-parallax';

const Scrollable = ({ title, children }) => {
    const [componentIndex, setComponentIndex] = useState(0);
    const [currentComponent, setCurrentComponent] = useState(children[componentIndex]);
    const [fadeDirection, setFadeDirection] = useState('up');
    const scrollableRef = useRef(null); // Reference for the scrollable component
    const touchStartY = useRef(0); // Ref to track the starting touch position

    useEffect(() => {
        setCurrentComponent(children[componentIndex]);
    }, [componentIndex, children]);

    const scrollTimeoutRef = useRef(null);

    // Handle wheel or touch scroll to update the visible component
    const handleScroll = (event) => {
        clearTimeout(scrollTimeoutRef.current); // Clear any previous timeout

        // Set a small timeout to debounce the scroll event
        scrollTimeoutRef.current = setTimeout(() => {
            if (event.deltaY > 0 && componentIndex < children.length - 1) {
                setComponentIndex((prevIndex) => prevIndex + 1);
                setFadeDirection('up');
            } else if (event.deltaY < 0 && componentIndex > 0) {
                setComponentIndex((prevIndex) => prevIndex - 1);
                setFadeDirection('down');
            }
        }, 100);
    };

    const handleTouchStart = (event) => {
        // Store the initial touch position
        touchStartY.current = event.touches[0].clientY;
    };

    const handleTouchMove = (event) => {
        // Prevent the default scroll behavior
        event.preventDefault();
        
        const touchCurrentY = event.touches[0].clientY;
        const deltaY = touchStartY.current - touchCurrentY;

        // Call the scroll handler with the deltaY value
        if (Math.abs(deltaY) > 30) { // Threshold to prevent accidental scrolling
            if (deltaY > 0 && componentIndex < children.length - 1) {
                setComponentIndex((prevIndex) => prevIndex + 1);
                setFadeDirection('up');
            } else if (deltaY < 0 && componentIndex > 0) {
                setComponentIndex((prevIndex) => prevIndex - 1);
                setFadeDirection('down');
            }
        }
    };

    useEffect(() => {
        const scrollableContainer = scrollableRef.current;

        if (scrollableContainer) {
            scrollableContainer.addEventListener("wheel", handleScroll);
            scrollableContainer.addEventListener("touchstart", handleTouchStart);
            scrollableContainer.addEventListener("touchmove", handleTouchMove, { passive: false }); // Use passive: false to prevent default scrolling
        }

        return () => {
            if (scrollableContainer) {
                scrollableContainer.removeEventListener("wheel", handleScroll);
                scrollableContainer.removeEventListener("touchstart", handleTouchStart);
                scrollableContainer.removeEventListener("touchmove", handleTouchMove);
            }
            clearTimeout(scrollTimeoutRef.current);
        };
    }, [componentIndex, children.length]);

    return (
        <Parallax strength={300} className='scrollable-parallax'>
            <div ref={scrollableRef} className="scrollable-container fade-in">
                {/* <h1 className="title">{title}</h1> */}
                <div key={componentIndex} className="scrollable-content" data-aos={`fade-${fadeDirection}`}>
                    <div className='progress-bar'>
                        {children.map((_, index) => (
                            <div key={index} className={`progress-point ${index <= componentIndex ? 'fill' : 'no-fill'}`}>
                            </div>
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
