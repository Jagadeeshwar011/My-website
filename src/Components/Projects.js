import React from 'react';
import { Box, Grid, Typography, Button } from '@mui/material';
import Todo from "../Assests/Todo.png"
import Slider from 'react-slick';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import notes from '../Assests/Notesapp.png'

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
const projects = [
    {
        title: 'Todo App',
        image: Todo,
        description: `EStreamline your daily task management with our Todo App, a perfect blend of simplicity and functionality. Developed using the essential web trio - JavaScript, HTML, and CSS - this app stands out with its intuitive interface and responsive design, ensuring a seamless experience across various devices. Our Todo App is designed to make the process of adding, editing, and checking off tasks both swift and satisfying. It's not just about organizing your tasks; it's about enhancing your productivity and enjoyment in managing your daily to-dos. Experience the unique features that set our app apart and make your day more organized and efficient. Discover the ease and simplicity of effective task management with our Todo App`,
        link: 'https://github.com/Jagadeeshwar011/ToDo-App.git'
    },
    {
        title: 'Quiz App',
        image: 'path/to/notes-app-image.jpg', // Replace with the path to your Notes App image
        description: 'A convenient notes application for managing daily tasks and notes, developed using React.',
        link: 'https://github.com/Jagadeeshwar011/QuizApp.git' // Replace with your Notes App GitHub link
    },
    {
        title: 'Notes App',
        image: notes, // Replace with the path to your Quiz App image
        description: 'Discover the convenience of modern note-taking with our React Native-powered Notes App. Designed for both iOS and Android, this app offers a seamless and intuitive experience, perfect for quickly capturing thoughts and organizing tasks. Enjoy features like rich text editing, voice-to-text input, and effortless synchronization across devices. Whether you\'re a student, a professional, or just someone who loves staying organized, our Notes App is your go-to solution for keeping your ideas and tasks aligned and accessible anytime, anywhere',
        link: 'https://github.com/Jagadeeshwar011/NotesApp.git' // Replace with your Quiz App GitHub link
    },
];

// Arrow components for custom navigation arrows
function NextArrow(props) {
    const { onClick } = props;
    return (
        <div
            style={{
                display: 'block',
                background: 'none',
                position: 'absolute',
                top: '50%',
                right: '25px',
                zIndex: 2, // Ensure this is above other content
                cursor: 'pointer',

            }}
            onClick={onClick}
        >
            <ArrowForwardIosIcon style={{ color: 'white', fontSize: '30px' }} /> {/* Customize color and size as needed */}

        </div>
    );
}
function PrevArrow(props) {
    const { onClick } = props;
    return (
        <div
            style={{
                display: 'block',
                background: 'none',
                position: 'absolute',
                top: '50%',
                left: '25px',
                zIndex: 2, // Ensure this is above other content
                cursor: 'pointer',
                // Add more styles as necessary
            }}
            onClick={onClick}
        >
            <ArrowBackIosIcon style={{ color: 'white', fontSize: '30px' }} /> {/* Customize color and size as needed */}
        </div>
    );
}
const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    autoplay: true,
    autoplaySpeed: 2000,
    lft: true,
};

function Projects() {
    return (
        <Box sx={{
            backgroundColor: '#000',
            color: '#fff',
            p: 4,
            overflow: 'hidden',
            width: '100%',
            '& .slick-slide': {
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '2rem', // Uniform padding
                position: 'relative', // Needed for the ::after pseudo-element
                '::after': {
                    // Similar overlay as in Homepage
                    content: '""',
                    display: 'block',
                    position: 'absolute',
                    width: '100%',
                    height: '100%',
                    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent overlay
                    top: 0,
                    left: 0,
                    zIndex: 1,
                },
                '> *': {
                    position: 'relative', // Content above the overlay
                    zIndex: 2,
                },
            },
        }}>
            <Slider {...settings}>
                {projects.map((project, index) => (
                    <Box key={index}>
                        <Box sx={{
                            width: '100%',
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'center',
                            alignItems: 'center',
                            padding: '2rem', // Reduced padding for tighter layout
                        }}>
                            {/* Text container */}
                            <Box sx={{ width: '43%', marginRight: '5rem' }}> {/* Adjusted right margin */}
                                <Typography variant="h3" component="div" gutterBottom sx={{ color: '#FFDF00' }}>{`Project.0${index + 1}`}</Typography>
                                <Typography variant="h5" component="h2" gutterBottom>{project.title}</Typography>
                                <Typography variant="body1" gutterBottom>{project.description}</Typography>
                                <Button variant="contained" href={project.link} target="_blank" rel="noopener noreferrer" sx={{
                                    mt: 2,
                                    backgroundColor: "#FFDF00", // Consistent button color
                                    color: "#000",
                                    '&:hover': {
                                        backgroundColor: "#e6c300", // Consistent hover effect
                                    },
                                }}>
                                    View on GitHub
                                </Button>
                            </Box>
                            {/* Image container */}
                            <Box sx={{ width: '50%', marginLeft: '-1rem' }}> {/* Adjusted left margin */}
                                <Box component="img" src={project.image} alt={project.title} sx={{
                                    maxHeight: '55vh',
                                    objectFit: 'contain',
                                    maxWidth: '100%' // Ensure the image is not bigger than its container
                                }} />
                            </Box>
                        </Box>
                    </Box>
                ))}
            </Slider>
        </Box>
    );
}

export default Projects;