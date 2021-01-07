import React from 'react';
import './app.css'
import AboutSection from './components/AboutSection';
import Header from './components/Header';
import HomeSection from './components/HomeSection';
import SkillsSection from './components/SkillsSection';

function App() {

  return (
          <div className="app">
            <Header/>
            <main className="l-main">
              <HomeSection/>
              <AboutSection/>
              <SkillsSection/>
            </main>
          </div>
  );
}

export default App;