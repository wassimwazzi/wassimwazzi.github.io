import React, { useEffect, useState, useRef, useCallback } from 'react';
import './Scrollable.css';
import { Parallax } from 'react-parallax';

const ScrollableContent = ({ titles, children }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <div className="scrollable-content-container">
      {/* Titles */}
      <div className="scrollable-content-titles">
        {titles.map((title, index) => (
          <div
            key={index}
            className={`tab-title ${index === selectedIndex ? "active" : ""}`}
            onClick={() => setSelectedIndex(index)}
          >
            {title}
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="scrollable-content-display">
        {React.Children.toArray(children)[selectedIndex]}
      </div>
    </div>
  );
};

export default ScrollableContent;
