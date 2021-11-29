import React from 'react';
import './App.css';
import Nav from './components/Navbar'
import Container from './components/Container'
import AboutMe from './components/AboutMe'
import ProjectPortfolio from './components/ProjectPortfolio'
import Wallpaper from "./components/Wallpaper"
import { ThemeProvider } from "./components/ThemeContext"

function App() {

  return (
    
      <ThemeProvider>
        <Wallpaper>
          <Nav />
            <Container>
              <AboutMe />
              <ProjectPortfolio />
            </Container>
        </Wallpaper>
      </ThemeProvider>
   
  );
}

export default App;
