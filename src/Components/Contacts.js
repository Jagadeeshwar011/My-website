import React from 'react';
import { Box, Typography, Button, Grid, useMediaQuery } from '@mui/material';
import { styled } from '@mui/material/styles';
import EmailIcon from '@mui/icons-material/Email'; // Replace with your email icon
import LinkedInIcon from '@mui/icons-material/LinkedIn'; // Replace with your LinkedIn icon
import GitHubIcon from '@mui/icons-material/GitHub'; // Replace with your GitHub icon
import contactImage from '../Assests/contact.png'; // Path to your contact image

const ContactButton = styled(Button)(({ theme }) => ({


    
  margin: theme.spacing(1),
  borderColor: 'white',
  color: 'white',
  '&:hover': {
    borderColor: 'grey',
    color: 'grey',
  },
  textTransform: 'none',
  fontSize: '1rem',
}));

const Contact = () => {
  const isMobile = useMediaQuery('(max-width:600px)');
  const handleEmailClick = () => {
    window.location.href = "mailto:jagadeeshwarreddy7701@gmail.com"; // Replace with your email address
  };

  // URLs to your LinkedIn and GitHub profiles
  const linkedInUrl = "https://www.linkedin.com/in/jagadeeshwar-reddy-dabbadi/"; // Replace with your LinkedIn profile URL
  const gitHubUrl = "https://github.com/Jagadeeshwar011"; // Replace with your GitHub profile URL


  return (
    <Box id = "contact"sx={{ flexGrow: 1, backgroundColor: '#000', color: '#fff', overflowX: 'hidden', width: '100vw' }}>
      <Grid container spacing={2} alignItems="center" justifyContent="center" style={{ minHeight: '100vh', padding: '0 10vw' }}>
        <Grid item xs={12} sm={6} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: { xs: 'center', sm: 'flex-start' }, textAlign: { xs: 'center', sm: 'left' } }}>
          <Typography variant="h3" gutterBottom>
            Let's Talk
          </Typography>
          <Typography variant="body1" paragraph>
            You've made this far!<br/> <br/>  My inbox is always open. Whether you’d like to chat about a project, have a question or just want to say hi, don't feel shy to message me.
          </Typography>
          <Typography variant="body1" paragraph>
            I am always ready to work on something challenging and fun! <br/> <br/>Feel free to use the links below. I'll try my best to get back to you!
          </Typography>
          <Box sx={{ '& > *': { mb: 2 }, mt: 2 }}>
            <ContactButton variant="outlined" startIcon={<EmailIcon />} onClick={handleEmailClick}>
              Email
            </ContactButton>
            <ContactButton variant="outlined" startIcon={<LinkedInIcon />} component="a" href={linkedInUrl} target="_blank" rel="noopener noreferrer">
              LinkedIn
            </ContactButton>
            <ContactButton variant="outlined" startIcon={<GitHubIcon />} component="a" href={gitHubUrl} target="_blank" rel="noopener noreferrer">
              GitHub
            </ContactButton>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} sx={{ display: 'flex', justifyContent: 'center' }}>
          <Box component="img" src={contactImage} sx={{ width: isMobile ? '75%' : '100%', maxWidth: '600px' }} />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Contact;
