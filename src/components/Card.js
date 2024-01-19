import React from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons"; // Brand icons
// import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
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


        {/*social media handles*/}

        {/* <div className="socialmedia-handles">
            <a href="" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a href="https://github.com/Sanjeevvarmabetter" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faGithub} />
            </a>
            <a href="mailto:sanjeevvarmacode@gmail.com" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faEnvelope} />
            </a>

        </div> */}


            </div>
        </div>
    );
}

export default Card;
