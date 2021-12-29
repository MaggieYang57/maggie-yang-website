import React from 'react'
import './App.css';
import About from './sections/About';
import Contact from './sections/Contact';
import Navigation from './sections/Navigation';
import Projects from './sections/Projects';
import Welcome from './sections/Welcome';

function App() {
  return (
    <div>
      <div className="p-12 pb-0 pt-0">
        <Navigation />
      </div>
      <div className="p-12 items-center justify-center">
          <Welcome/>
          <About/>
          <Projects/>
          <Contact/>
      </div>
    </div>
  );
}

export default App;
