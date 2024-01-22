import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import backgroundImage from '../Assests/Homepage.png'; // Update the path to where you've saved the image


const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
        const yOffset = -60; // Adjust the offset to the height of your fixed header if any
        const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({top: y, behavior: 'smooth'});

    }


};
function Homepage() {
    return (
        <Box
            id="home"
            sx={{
                '& *': { // Applies the style to all children inside the Box
                    marginRight: 0,
                    paddingRight: 0,
                    paddingLeft: 0,
                },
                minHeight: '100vh',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                m: 0,
                p: 0,
                color: '#fff',
                width: '100vw',
                backgroundImage: `url(${backgroundImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                position: 'relative', // Needed for absolute positioning of the ::after pseudo-element
                '::after': {
                    content: '""',
                    display: 'block',
                    position: 'absolute',
                    width: '100%',
                    height: '100%',
                    backgroundColor: 'rgba(0, 0, 0, 0.5)', // This adds a semi-transparent black overlay, adjust the rgba values as needed
                    top: 0,
                    left: 0,
                    zIndex: 1,
                },
                '> *': {
                    position: 'relative', // Ensure that content is positioned above the ::after pseudo-element
                    zIndex: 2,
                }
            }}
        >
            <Typography variant="h3" gutterBottom sx={{textAlign: 'center', p: 3}}>
                Hi, I'm <span style={{color: "#FFDF00", fontFamily: "'Montserrat', sans-serif", fontWeight: 700}}>Jagadeeshwar Dabbadi</span>

            </Typography>
            <Typography variant="h5" gutterBottom
                        sx={{textAlign: 'center', p: 3, fontFamily: 'Lato', fontWeight: '500'}}>
                Front-End Web Developer
            </Typography>
            <Button variant="contained" color="primary" href="/DabbadiResume.docx" download="Jagadeeshwar_Resume.docx"
                    sx={{
                        m: 3,
                        color: "black",
                        backgroundColor: "#FFDF00",
                        '&:hover': {backgroundColor: "#FFDF00", opacity: 0.9}
                    }}>
                Download CV
            </Button>
            <Typography
                variant="body2"
                sx={{
                    textAlign: 'center',
                    mt: 5, // Adds margin-top for spacing
                    fontSize: '1rem ',
                    cursor: 'pointer',
                    fontFamily: 'Lato', fontWeight: '500' // Changes the cursor to indicate it's clickable (if you make it a link)
                }}
                onClick={() => scrollToSection('about')} // Smooth scroll to the About section if you're using in-page anchors
            >
                Learn more about my journey and expertise below
            </Typography>
        </Box>
    );
}

export default Homepage;
