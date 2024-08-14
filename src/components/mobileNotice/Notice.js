import React, { useEffect, useState } from 'react';
import './Notice.css';

const Notice = () => {
    return (
        <div className="mobile-notice">
            <p>For the best experience, please use a laptop or desktop.</p>
        </div>
    );
};

const MobileNotice = () => {
    const [showNotice, setShowNotice] = useState(window.innerWidth <= 768);

    useEffect(() => {
        const handleResize = () => {
            setShowNotice(window.innerWidth <= 768);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div>
            {showNotice && <Notice />}
        </div>
    );
};

export default MobileNotice;
