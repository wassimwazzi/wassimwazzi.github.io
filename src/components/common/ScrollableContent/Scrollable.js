import React, { useEffect, useState, useRef } from 'react';
import './Scrollable.css';
import { Parallax } from 'react-parallax';

const Scrollable = ({ title, children }) => {
    const [componentIndex, setComponentIndex] = useState(0);
    const [currentComponent, setCurrentComponent] = useState(children[componentIndex]);
    const [fadeDirection, setFadeDirection] = useState('up');
    const scrollableRef = useRef(null); // Reference for the scrollable component

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
                setFadeDirection('up')
            } else if (event.deltaY < 0 && componentIndex > 0) {
                setComponentIndex((prevIndex) => prevIndex - 1);
                setFadeDirection('down')
            }
        }, 100);
    };

    useEffect(() => {
        const scrollableContainer = scrollableRef.current;

        if (scrollableContainer) {
            scrollableContainer.addEventListener("wheel", handleScroll);
            scrollableContainer.addEventListener("touchmove", handleScroll);
        }

        return () => {
            if (scrollableContainer) {
                scrollableContainer.removeEventListener("wheel", handleScroll);
                scrollableContainer.removeEventListener("touchmove", handleScroll);
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
