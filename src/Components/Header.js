import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import download from '../Assests/download.jpg'
import Button from '@mui/material/Button';

function Header() {
 
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const yOffset = -60; // Adjust the offset to the height of your fixed header if any
      const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <AppBar position="fixed" style={{ background: '#000' }}>
    <Toolbar>
        
        <div style={{ flexGrow: 1 }}>
          <img src={download} alt="Logo" style={{ maxHeight: '50px', margin: '0 30px' }} />
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', width: '100%'}}>


        <Button color="inherit" onClick={() => scrollToSection('home')} style={{ margin: '0 30px' }}>Home</Button>
        <Button color="inherit" onClick={() => scrollToSection('about')} style={{ margin: '0 30px' }}>About</Button>
        <Button color="inherit" onClick={() => scrollToSection('projects')}style={{ margin: '0 30px' }}>Projects</Button>
        <Button color="inherit" onClick={() => scrollToSection('resume')}style={{ margin: '0 30px' }}>Resume</Button>
        <Button color="inherit" onClick={() => scrollToSection('contact')}style={{ margin: '0 30px' }}>Contact</Button>
        </div>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
