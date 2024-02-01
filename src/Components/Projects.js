import React from 'react';
import { Grid,  Typography, Button, Box } from '@mui/material';
import Todo from "../Assests/Todo.png"
import Slider from 'react-slick';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import notes from '../Assests/Notesapp.png'
import quiz from '../Assests/Quizapp.png'
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
        image: quiz, // Replace with the path to your Notes App image
        description: `Dive into the world of quizzes with React Quiz Master, an innovative app leveraging React.js for a dynamic learning experience. Its clean design and user-friendly navigation offer a diverse array of quizzes for all levels of knowledge. React Quiz Master is not just an app; it's a gateway to engaging and interactive education. Perfect for quiz enthusiasts and learners alike, it combines entertainment with learning in a sleek, responsive package. Explore React.js through each quiz and make learning a delight with React Quiz Master.
        `,
        link: 'https://github.com/Jagadeeshwar011/QuizApp.git' // Replace with your Notes App GitHub link
    },
    {
        title: 'Notes App',
        image: notes, // Replace with the path to your Quiz App image
        description: 'Discover the convenience of modern note-taking with our React Native-powered Notes App. Designed for both iOS and Android, this app offers a seamless and intuitive experience, perfect for quickly capturing thoughts and organizing tasks. Enjoy features like rich text editing, voice-to-text input, and effortless synchronization across devices. Whether you\'re a student, a professional, or just someone who loves staying organized, our Notes App is your go-to solution for keeping your ideas and tasks aligned and accessible anytime, anywhere',
        link: 'https://github.com/Jagadeeshwar011/NotesApp.git' // Replace with your Quiz App GitHub link
    },
];

function NextArrow(props) {
    const { onClick } = props;
    return (
        <Box
            onClick={onClick}
            sx={{
                position: 'absolute',
                top: '50%',
                right: '40px',
                transform: 'translateY(-50%)',
                zIndex: 2,
                cursor: 'pointer',
            }}
        >
            <ArrowForwardIosIcon sx={{ color: 'white', fontSize: '30px' }} />
        </Box>
    );
}

function PrevArrow(props) {
    const { onClick } = props;
    return (
        <Box
            onClick={onClick}
            sx={{
                position: 'absolute',
                top: '50%',
                transform: 'translateY(-50%)',
                zIndex: 2,
                cursor: 'pointer',
            }}
        >
            <ArrowBackIosIcon sx={{ color: 'white', fontSize: '30px' }} />
        </Box>
    );
}


const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    autoplay: true,
    autoplaySpeed: 3000,
};

function Projects() {
    return (
        <Box id="projects" sx={{
            position: 'relative', // Ensure the arrows are positioned relative to this container

            backgroundColor: '#000',
            color: '#fff',
            p: 4,
            width: '100%',
            overflow: 'hidden',

        }}>
            <Slider {...settings} sx={{ position: 'relative' }}>
                {projects.map((project, index) => (
                    <Box key={index} sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        height: '100vh',
                        padding: '4rem',
                        boxSizing: 'border-box',
                        pt: 15,

                    }}>
                        <Grid container spacing={2} justifyContent="center" alignItems="center">
                            <Grid item xs={12} md={6}>
                                <Typography variant="h3" gutterBottom sx={{ color: '#FFDF00', mb: 1 }}>
                                    {`Project.0${index + 1}`}
                                </Typography>
                                <Typography variant="h5" gutterBottom sx={{ mb: 2 }}>
                                    {project.title}
                                </Typography>
                                <Typography variant="body1" sx={{ mb: 2 }}>
                                    {project.description}
                                </Typography>
                                <Button variant="contained" href={project.link} target="_blank" rel="noopener noreferrer" sx={{
                                    backgroundColor: "#FFDF00",
                                    color: "#000",
                                    '&:hover': { backgroundColor: "#e6c300" },
                                }}>
                                    View on GitHub
                                </Button>
                            </Grid>
                            <Grid item xs={12} md={6} sx={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}>
                                <Box component="img" src={project.image} alt={project.title} sx={{
                                    maxHeight: { xs: '300px', md: '400px' },
                                    maxWidth: '100%',
                                    objectFit: 'contain',
                                }} />
                            </Grid>
                        </Grid>
                    </Box>
                ))}
            </Slider>
        </Box>
    );
}

export default Projects;
