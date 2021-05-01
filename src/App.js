import WhoWeAre from './components/body/Who_we_are';
import WhyChooseUs from './components/body/Why_choose_us';
import Navbar from './components/header/Navbar';
import './App.css';
import OurExpertise from './components/body/Our_expertise';
import Projects from './components/body/Projects';
import Contact from './components/body/Contact';
import Footer from './components/footer/Footer';

function App() {
  
  return (
    <div className="App">
        <Navbar />
        <WhoWeAre />
        <WhyChooseUs />
        <OurExpertise />
        <Projects />
        <Contact />
        <Footer />
    </div>
  );
}

export default App;
