import React from 'react';
import ReactDOM from 'react-dom';
import About from './pages/About';
import Contact from './pages/Contact';
import Projects from './pages/Projects';
import Navbar from './components/Nav/Navbar'
import './index.css';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Navbar />
    <Projects />
    <About />
    <Contact />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
