import React, { useEffect } from 'react';
import Header from './Components/Header'; // Adjust the import path as necessary
import Homepage from './Components/Homepage'; // Adjust the import path as necessary
import About from './Components/About';
// Import other section components as necessary

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
     
      <section id="projects">
        {/* Content for Projects section */}
      </section>
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
