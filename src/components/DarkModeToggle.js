import React from "react";
import DarkModeToggle from 'react-toggle-dark-mode';


const DarkModeToggleComponent = ({ isDarkMode, toggleDarkMode }) => {
    return (
        <DarkModeToggle
        onChange={toggleDarkMode}
        checked={isDarkMode}
        size={50}
        />
    );
};

export default DarkModeToggleComponent;