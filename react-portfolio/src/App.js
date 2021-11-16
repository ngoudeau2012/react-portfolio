import React from 'react';
import './App.css';
import Nav from './components/Navbar'
import Container from './components/Container'
import AboutMe from './components/AboutMe'
import ProjectPortfolio from './components/ProjectPortfolio'
import { ThemeProvider } from "./components/ThemeContext"

function App() {

  return (
    <div className="App">
      <ThemeProvider>
        <Nav />
        <Container>
          <AboutMe />
          <ProjectPortfolio />
        </Container>
      </ThemeProvider>
    </div>
  );
}

export default App;
