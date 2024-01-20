import React from "react";
import Header from "./components/Header";
import Particles from "react-particles";
import { BrowserRouter as Router, Route, Switch, Routes } from "react-router-dom";
import Projects from "./components/Projects";
// import DarkModeToggleComponent from "./components/DarkModeToggle";
// import Profilepic from "./components/Profilepic";
// import Card from "./components/Card";
import ProfileCardContainer from "./components/ProfileCardContainer";
import { Routes } from "./Routes";
import './App.css';


function App() {
  
  return (


    <div className="App">
      <Header />
      <Particles />
      {/* <Profilepic /> */}
      <ProfileCardContainer />

      <Routes />
      {/* <Card /> */}

{/*   
      <Switch>
        <Route path="/projects" element={<Projects />} />
      </Switch>
   */}
  </div>
  
  );
}

export default App;

