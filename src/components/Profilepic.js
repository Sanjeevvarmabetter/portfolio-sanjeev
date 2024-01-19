import { getDefaultNormalizer } from "@testing-library/react";
import React from "react";
import '../App.css';

function Profilepic() {
    return (
        <div className="profile-picture-container">
            <img src="heropic.jpeg" alt="Sanjeev Varma" className="profile-picture" />

        </div>
    );
}

export default Profilepic;