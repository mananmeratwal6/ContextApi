import React, { useContext } from 'react';
import { ThemeContext } from './ThemeContext';

const Content = () => {
    const { theme } = useContext(ThemeContext);

    return (
        <div style={{ background: theme === 'light' ? '#eee' : '#444', 
                       color: theme === 'light' ? '#000' : '#fff',padding:"30px" }}>
            <p>This is the content area. The current theme is {theme}.</p>
        </div>
    );
};

export default Content;
