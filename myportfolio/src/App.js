import logo from './logo.svg';
import './App.css';
import Header from './components/Header.js';
import About from './components/About.js';
import Home from './components/Home.js';
import Contact from './components/Contact.js';
import Skills from './components/Skills.js';
import Hobbies from './components/Hobbies.js'
import Footor from './components/Footor.js';
function App() {
  return (
    <div>
      <Header mainHeading="PortFolio"/>
      <section id="home"><Home name="Yusra Shahid" fullword="Web developer learning react"/></section>
      <section id="about"><About mainHeading="About Me"/></section>
      <section id="skills"><Skills mainHeading="Skills"/></section>
      <section id="hobbies"><Hobbies mainHeading="Hobbies"/></section>
      <section id="contact"><Contact/></section>
      <section id="footer"><Footor/></section>
    </div>
  );
}

export default App;
