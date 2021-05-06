import React, { useEffect } from 'react';
import Home from './components/body/Home';
import { Switch, Route, useLocation } from 'react-router-dom';
import PROJECT_SINGLE from './components/body/PROJECT_SINGLE';
import Navbar from './components/header/Navbar';
import './App.css';
import AOS from 'aos';
import "aos/dist/aos.css";
import Contact from './components/body/Contact';
import Footer from './components/footer/Footer';

function App() {
  const location = useLocation();

  useEffect(() => {
    AOS.init({
      once: true
    });
    // window.scrollTo(0, 0);
  });

  return (
    <div className="App">
        <Navbar />
        <Switch location={location} key={location.key}>
          <Route path="/" exact component = {() => <Home />} />
          <Route path="/projects" exact component = {() => <PROJECT_SINGLE />} />
        </Switch> 
        <Contact />
        <Footer />
    </div>
  );
}

export default App;

