import React from "react";
import Header from "./components/Header";
import Particles from "react-particles";
import { BrowserRouter as Router,Routes,Route} from "react-router-dom";
// import DarkModeToggleComponent from "./components/DarkModeToggle";
// import Profilepic from "./components/Profilepic";
// import Card from "./components/Card";
import ProfileCardContainer from "./components/ProfileCardContainer";
import './App.css';
import About from "./pages/About";
import Projects from "./pages/Projects";
import Aboutme from "./pages/Aboutme";



function Home() {
  return (
    <div>
      <Header />
      {/* <MyParticles /> */}
      <ProfileCardContainer />
    </div>
  );
}


function App() {
  
  return (
    <Router>
      <Routes>
      
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/aboutme" element={<Aboutme />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  )
}

export default App;