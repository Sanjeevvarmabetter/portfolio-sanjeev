import React, { useState } from 'react';
import '../App.css';

function Header() {

    const [showprojects,setshowprojects] = useState(false);

    const handleprojectclick = () => {
        setshowprojects(!showprojects);
    };

    return (
        <header>
            <nav>
                <a href='#'>Home</a>
                <a href='#' onClick={handleprojectclick}>Projects</a>
                <a href='http://localhost:8000'>Blog</a>
            </nav>

            {showprojects && (
                <div>
                    Project 1: 
                </div>
            )}
        </header>
    );
}

export default Header;

//if i want to display the informantion about my project i need to create a new state
