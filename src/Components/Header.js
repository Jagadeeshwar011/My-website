import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import download from '../Assests/download.jpg';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

function Header() {
  const handleEmailClick = () => {
    window.location.href = "mailto:jagadeeshwarreddy7701@gmail.com";
  };

  const linkedInUrl = "https://www.linkedin.com/in/jagadeeshwar-reddy-dabbadi/";
  const gitHubUrl = "https://github.com/Jagadeeshwar011";

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const yOffset = -60;
      const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const buttonStyle = {
    margin: '0 10px',
  };

  return (
    <AppBar position="fixed" style={{ background: '#000' }}>
      <Toolbar style={{ justifyContent: 'space-between', alignItems: 'center' }}>
        <img src={download} alt="Logo" style={{ maxHeight: '50px', margin: '0 12px' }} />

        {/* Navigation Buttons */}
        <div className="desktop-menu">
          <Button color="inherit" onClick={() => scrollToSection('home')} style={buttonStyle}>Home</Button>
          <Button color="inherit" onClick={() => scrollToSection('about')} style={buttonStyle}>About</Button>
          <Button color="inherit" onClick={() => scrollToSection('projects')} style={buttonStyle}>Projects</Button>
          <Button color="inherit" onClick={() => scrollToSection('resume')} style={buttonStyle}>Resume</Button>
          <Button color="inherit" onClick={() => scrollToSection('contact')} style={buttonStyle}>Contact</Button>
        </div>

        {/* Mobile Navigation Button */}
        <div className="mobile-menu">
          <IconButton color="inherit" onClick={handleEmailClick} style={buttonStyle}>
            <EmailIcon />
          </IconButton>
          <IconButton color="inherit" href={linkedInUrl} target="_blank" rel="noopener noreferrer" style={buttonStyle}>
            <LinkedInIcon />
          </IconButton>
          <IconButton color="inherit" href={gitHubUrl} target="_blank" rel="noopener noreferrer" style={buttonStyle}>
            <GitHubIcon />
          </IconButton>
        </div>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
