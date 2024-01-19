import React from "react";
import Toggle from "react-toggle";
import "../App.css";

function ToggleSwitch({label, checked, onChange}) {
    return (
        <div className="toggle-switch">  
        <label>
            <Toggle
                checked={checked}
                onChange={onChange}
        />
        {label}        
        </label>
        </div>
    );
}

export default ToggleSwitch;