import React from 'react';
import ReactDOM from 'react-dom';
import About from './components/About';
import Facts from './components/Facts';
import Hero from './components/Hero';
import Navigation from './components/Navigation';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Services from './components/Services';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import Copyright from './components/Copyright';
// import Testimonials from './components/Testimonials';

ReactDOM.render(
  <React.StrictMode>
    <Navigation />
    <Hero />
    <About />
    <Facts />
    <Resume />
    <Services />
    {/* <Testimonials /> */}
    <Contact />
    <Copyright />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
