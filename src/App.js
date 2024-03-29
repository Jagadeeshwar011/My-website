import React, { useEffect } from 'react';
import Header from './Components/Header'; // Adjust the import path as necessary
import Homepage from './Components/Homepage'; // Adjust the import path as necessary
import About from './Components/About';
import Projects from "./Components/Projects";
import Resume from "./Components/Resume"
import Contacts from './Components/Contacts';



function App() {

  
  useEffect(() => {
    const homeSection = document.getElementById('home');
    if (homeSection) {
      homeSection.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  return (
    <div className="App">
      <Header />
      <Homepage />
      <About/>
        <Projects/>
        <Resume/>
        <Contacts/>


      <section id="resume">
        {/* Content for Resume section */}
      </section>
      <section id="contact">
        {/* Content for Contact section */}
      </section>
      {/* Add other sections as needed */}
    </div>
  );
}

export default App;
