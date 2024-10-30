import React, { useEffect, useState, useRef } from 'react';
import './Scrollable.css';

const Scrollable = ({ title, children }) => {
    const [componentIndex, setComponentIndex] = useState(0);
    const [currentComponent, setCurrentComponent] = useState(children[componentIndex]);

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
            } else if (event.deltaY < 0 && componentIndex > 0) {
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
        };
    }, [componentIndex, children.length]);

    return (
        <div className="scrollable-container">
            <h1 className="title">{title}</h1>
            <div key={componentIndex} className={`scrollable-content`} data-aos="fade-up">

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
    );
};

export default Scrollable;
