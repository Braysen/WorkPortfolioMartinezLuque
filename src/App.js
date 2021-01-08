import React from 'react';
import './prueba.css'
import AboutSection from './components/AboutSection';
import ContactSection from './components/ContactSection';
import FooterSection from './components/FooterSection';
import Header from './components/Header';
import HomeSection from './components/HomeSection';
import PortfolioSection from './components/PortfolioSection';
import SkillsSection from './components/SkillsSection';

function App() {

  return (
          <>
            <Header/>
            <main className="l-main">
              <HomeSection/>
              <AboutSection/>
              <SkillsSection/>
              <PortfolioSection/>
              <div></div>
              <ContactSection/>
              <FooterSection/>
            </main>
          </>
  );
}

export default App;