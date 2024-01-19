import React from "react";
import Profilepic from "./Profilepic";
import Card from "./Card";
import "../App.css";

function ProfileCardContainer() {
    return (
        <div className="profile-card-container">
            <Profilepic />
            <Card />
        </div>
    );
}

export default ProfileCardContainer;