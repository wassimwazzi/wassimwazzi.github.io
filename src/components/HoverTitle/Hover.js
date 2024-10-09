import React, { useState } from 'react';
import './Hover.css'

const HoverTitle = ({ top, below, outerStyle }) => {
    const [hovered, setHovered] = useState(false);


    return (
        <div
            className={`outer ${hovered ? 'hovered' : ''}`}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            style={outerStyle}
        >
            <div className={`top ${hovered ? 'hovered' : ''}`}>{top}</div>
            <div className={`below ${hovered ? 'hovered' : ''}`}> {below} </div>
        </div >
    );
};

export default HoverTitle;
