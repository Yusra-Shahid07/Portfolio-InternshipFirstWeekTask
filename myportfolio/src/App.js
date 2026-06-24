import './App.css';
import Header from './components/Header.js';
import Home from './components/Home.js';
import About from './components/About.js';
import Education from './components/Education.js';
import Skills from './components/Skills.js';
import Projects from './components/Projects.js';
import Experience from './components/Experience.js';
import Contact from './components/Contact.js';
import Footer from './components/Footor.js';
import ParticleBackground from './components/ParticleBackground.js';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => {
        if (e.isIntersecting) e.target.classList.add('visible');
      }),
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );
    document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale')
      .forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div>
      <ParticleBackground />
      <div className="orb orb-1"></div>
      <div className="orb orb-2"></div>
      <div className="orb orb-3"></div>
      <Header />
      <section id="home"><Home /></section>
      <section id="about"><About /></section>
      <section id="education"><Education /></section>
      <section id="skills" className="skills-full"><Skills /></section>
      <section id="projects"><Projects /></section>
      <section id="experience" className="exp-full"><Experience /></section>
      <section id="contact"><Contact /></section>
      <Footer />
    </div>
  );
}

export default App;