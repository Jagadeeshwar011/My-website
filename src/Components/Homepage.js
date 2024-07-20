import React, { useState, useEffect } from 'react';
import useTypingEffect from './UseTypingEffect'; 
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
    const { text, blink } = useTypingEffect(['Front-End Web Developer', 'MERN Stack Developer']);


    return (
        <Box
            id="home"
            sx={{
                display: 'grid',
                placeItems: 'center', // This centers the content both horizontally and vertically
                minHeight: '100vh',
                width: '100vw',
                p: 3,
                backgroundImage: `url(${backgroundImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                position: 'relative',
                '::after': {
                    content: '""',
                    position: 'absolute',
                    width: '100%',
                    height: '100%',
                    backgroundColor: 'rgba(0, 0, 0, 0.5)',
                    top: 0,
                    left: 0,
                    zIndex: 1,
                },
                '> *': {
                    position: 'relative',
                    zIndex: 2,
                    // Ensure text wraps and maintains a responsive size
                    textAlign: 'center',
                    maxWidth: '90%', // Prevent text from stretching too wide on larger screens
                },
                // Responsive design using Material-UI breakpoints
                '@media (max-width: 600px)': {
                    // Styles for screens smaller than 600px
                    '> *': {
                        fontSize: 'smaller', // You can adjust the font size for small devices
                    },
                },
            }}
        >
            <Typography variant="h3" gutterBottom sx={{
                textAlign: 'center',
                mt: 15,
            }}>
                Hi, I'm <span style={{color: "#FFDF00", fontFamily: "'Montserrat', sans-serif", fontWeight: 700}}>Jagadeeshwar Dabbadi</span>

            </Typography>
            <Typography variant="h5" gutterBottom sx={{
                textAlign: 'center',


            }}>
                {text}<span className={blink ? 'blink' : ''}>|</span> {/* Add the cursor */}
            </Typography>

            <Button variant="contained" color="primary" href="/Jagadeesh_Resume.pdf" download="Jagadeesh_Resume.pdf"
                    sx={{
                        color: "black",
                        backgroundColor: "#FFDF00",
                        '&:hover': {backgroundColor: "#FFDF00", opacity: 0.9},
                    }}>
                Download CV
            </Button>
            <Typography
                variant="body2"
                sx={{
                    textAlign: 'center',
                    fontSize: '1rem ',
                    cursor: 'pointer',
                    fontFamily: 'Lato', fontWeight: '500'
                }}

                onClick={() => scrollToSection('about')} // Smooth scroll to the About section if you're using in-page anchors
            >
                Learn more about my journey and expertise below
            </Typography>
        </Box>
    );
}

export default Homepage;
