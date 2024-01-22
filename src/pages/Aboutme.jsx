// src/Aboutme.js
import React from 'react';

const Aboutme = () => {
  return (
    <div className="container mt-4 text-white">
      <h2>About Me</h2>
      <h2>Skills</h2>
      <ul className="list-unstyled">
        <li>Languages: C/C++, Python, Solidity, JavaScript</li>
        <li>Frameworks: Django, React, Nodejs, Hardhat, Truffle, Geth</li>
        <li>Database: PostgreSQL</li>
        <li>Tools: Git, Docker, IPFS, Linux, Ganache, Remix, Apache Spark</li>
        <li>Blockchain: Ethereum, Solana</li>
      </ul>

      <h2>Experience/Volunteering</h2>
      <h3>IEEE CS (Treasurer) - Jul 2023 to Present</h3>
      <ul>
        <li>Managed club finances, creating budgets for various events.</li>
        <li>Carefully monitored financial flow.</li>
        <li>Automated manual book entries using Python libraries.</li>
        <li>Documented detailed records of financial transactions.</li>
      </ul>
      <h3>CYSEC (Tech Team Member) - Feb 2022 to Oct 2023</h3>
      <ul>
        <li>Taught security and networking concepts to community members as part of CYSEC.</li>
        <li>Presented at various events, specializing in topics such as malware analysis and web hacking.</li>
        <li>Actively practiced and participated in Capture The Flag (CTF) security competitions.</li>
        <li>Enhanced and refined my cybersecurity skills through practical hands-on experience.</li>
        <li>Practiced effective teamwork skills, ensuring minimal errors in collaborative projects during my time in CYSEC.</li>
      </ul>
    </div>
  );
};

export default Aboutme;
