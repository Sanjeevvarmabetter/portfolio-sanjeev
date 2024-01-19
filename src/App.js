import React from "react";
import Header from "./components/Header";
import Particles from "react-particles";

// import DarkModeToggleComponent from "./components/DarkModeToggle";
// import Profilepic from "./components/Profilepic";
// import Card from "./components/Card";


import ProfileCardContainer from "./components/ProfileCardContainer";
import './App.css';

function App() {
  
  return (
    <div className="App">
      <Header />
      <Particles />
      {/* <Profilepic /> */}
      <ProfileCardContainer />
      {/* <Card /> */}
      </div>
  
  );
}

export default App;