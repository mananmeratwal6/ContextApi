import React, { createContext, useState } from 'react';

// Create a Context
const ThemeContext = createContext();

// Create a provider component
const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState('light');

    // Function to toggle theme
    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export { ThemeContext, ThemeProvider };
