import React from 'react';
import './App.css';
import Nav from './components/Navbar'
import Container from './components/Container'
import AboutMe from './components/AboutMe'
import ProjectPortfolio from './components/ProjectPortfolio'
import * as projects from "./utils/projects.json"


function App() {

  

  return (
    <div className="App">
      <Nav />
      <Container>
        <AboutMe />
        <ProjectPortfolio />
      </Container>
    </div>
  );
}

export default App;
