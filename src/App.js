import React from 'react';
import './app.css'
import AboutSection from './components/AboutSection';
import ContactSection from './components/ContactSection';
import FooterSection from './components/FooterSection';
import Header from './components/Header';
import HomeSection from './components/HomeSection';
import PortfolioSection from './components/PortfolioSection';
import SkillsSection from './components/SkillsSection';

function App() {

  return (
          <div className="app">
            <Header/>
            <main className="l-main">
              <HomeSection/>
              <AboutSection/>
              <SkillsSection/>
              <PortfolioSection/>
              <ContactSection/>
              <FooterSection/>
            </main>
          </div>
  );
}

export default App;