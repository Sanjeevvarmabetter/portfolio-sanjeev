import React, { useState,useEffect} from "react";

const Projects = ()  => {
    const [visible,setisvisible] = useState(true);

    useEffect(() => {
        //we need to set an interval
        const intervalId = setInterval(() => {
            setisvisible((previsible) => !previsible);
        }, 1000);
        return () => clearInterval(intervalId);
    },[]);
    return (
        <div className="container mt-4 text-light">
            <h2>{ visible ? "This page is under construction":""}</h2>
        </div>
    );

};

export default Projects;


