import React from 'react';
import { useTheme } from './ThemeContext';
import './ThemeToggle.css';

const ThemeToggle = () => {
    const { isLight, toggleTheme } = useTheme();

    const theme = () => (
        isLight() ? 'light' : 'dark'
    )

    return (
        <div className="theme-toggle-container">
            <div className={`theme-toggle ${theme()}` } onClick={toggleTheme}>
                <div className={`toggle-slider ${theme()}`} />
            </div>
            <div className="toggle-label">Dark Theme</div>
        </div>
    );
};

export default ThemeToggle;
