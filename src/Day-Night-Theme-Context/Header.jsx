import React, { useContext } from 'react';
import { ThemeContext } from './ThemeContext';

const Header = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <header style={{ background: theme === 'light' ? '#fff' : '#333', color: theme === 'light' ? '#000' : '#fff' }}>
            <button onClick={toggleTheme}>Toggle Theme</button>
            <h1>Current Theme: {theme}</h1>
        </header>
    );
};

export default Header;
