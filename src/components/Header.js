import React, { useState } from 'react';

import '../App.css';

function Header() {

    return (
        <header>
            <nav>
                <a href='#'>Home</a>
                <a href='/projects'>Projects</a>
                <a href='/aboutme'>About Me</a>
                <a href='http://localhost:8000'>Blog</a>
            </nav>

        </header>
    );
}

export default Header;

//if i want to display the informantion about my project i need to create a new state