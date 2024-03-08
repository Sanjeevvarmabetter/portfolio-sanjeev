import React from "react";
import { SocialIcon } from 'react-social-icons'; // Importing SocialIcon instead of specific icons
import '../App.css';

function Card() {
    return (
        <div className="card">
            <div className="text-container">
                <h2>Hi, I'm Sanjeev Varma
                    <span className="hand">🤚</span>
                </h2>
                <h3>A Blockchain Developer from India 🇮🇳</h3>
                <h4>🌐✨Exploring the Blockchain Universe </h4>
                <h4>📈 Financial Markets Enthusiast </h4>
                <h4>🌐 Love Decentralization </h4>
                <h4>🔐 CyberSecurity Evangelist </h4>
                <div className="social-icons">
                    
                <SocialIcon url="https://github.com/Sanjeevvarmabetter" network="github" />
                <SocialIcon url="https://www.linkedin.com/in/sanjeev-varma7/" network="linkedin" />
                <SocialIcon url="mailto:sanjeevvarmacode@gmail.com" network="email" />

                </div>
            </div>
        </div>
    );
}

export default Card;
