import Who_we_are from './components/body/Who_we_are';
import Why_choose_us from './components/body/Why_choose_us';
import Navbar from './components/header/Navbar';
import './App.css';
import Our_expertise from './components/body/Our_expertise';
import Projects from './components/body/Projects';
import Contact from './components/body/Contact';
import Footer from './components/footer/Footer';

function App() {
  
  return (
    <div className="App">
        <Navbar />
        <Who_we_are />
        <Why_choose_us />
        <Our_expertise />
        <Projects />
        <Contact />
        <Footer />
    </div>
  );
}

export default App;
