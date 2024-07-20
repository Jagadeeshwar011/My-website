import {React, useEffect} from 'react';
import { Box, Typography, Grid, Avatar, Button , Paper} from '@mui/material';
import profilePic from "../Assests/profilepic.jpeg" // Replace with the path to your profile picture
import HTML5Icon from "../Assests/HTML.png"
import CSS3Icon from "../Assests/css3t.jpg"
import JavaScriptIcon from "../Assests/JS.jpg"
import NodejsIcon from "../Assests/Node js.jpg"
import react  from "../Assests/React.webp"
import Mui from "../Assests/ui.png"
import Ex from "../Assests/Ex.png"
import Tailwind from "../Assests/TAIlwind.jpg"
import AWS from "../Assests/aws.png"
import Mongo from "../Assests/Mongo.png"
import Git from "../Assests/Github.png"
import Figma from "../Assests/Figma.png"
import Skillsimage from "../Assests/Skills image.png"
import useTypingEffect from './UseTypingEffect'; 




const skills = {
    Languages: [
        {icon: HTML5Icon},
        {icon: CSS3Icon},
        {icon: JavaScriptIcon},
        {icon: NodejsIcon},

    ],
  "Library & Frameworks": [
    {  icon: react },
    {  icon: Tailwind },
    {  icon: Mui },
    {  icon: Ex },

  ],
  "Tools & Technologies": [
    {  icon: AWS },
    {  icon: Mongo },
    {  icon: Git },
    {  icon: Figma },

  ],
};
const SkillIcon = ({ icon, name }) => (
    <Box sx={{ textAlign: 'center', margin: 2 }}>
        <Avatar src={icon} sx={{ width: 56, height: 56, mx: 'auto', mb: 1 }} />
        <Typography variant="caption" sx={{ mt: 1, color: 'white' }}>
            {name}
        </Typography>
    </Box>
);





const About = () => {
  const { text, blink } = useTypingEffect(['Frontend Developer', 'MERN Stack Developer'], 100, 50, 2000);

// Add this useEffect to ensure that the body does not overflow horizontally
useEffect(() => {
  document.body.style.overflowX = 'hidden';
  // Cleanup function to reset the overflowX when the component unmounts
  return () => {
    document.body.style.overflowX = '';
  };
}, []);
  return (
    <Box
      id="about"
      sx={{
        minHeight: 'auto',
        backgroundColor: '#000',
        color: '#fff',
        m: 0,
        p: 0,
          alignItems: 'flex-start',
        maxWidth: '100vw', // This ensures that the Box does not exceed the viewport width
        overflowX: 'hidden',
        width: '100vw',
        mt: 0,

      }}
    >

      <Grid container spacing={2} alignItems="center" justifyContent="center" sx={{ maxWidth: '100%', m: 0, p: 0 }}>

      {/* Profile Picture */}
        <Grid item xs={12} md={4} lg={3}>
          <Avatar
            alt="Jagadeeshwar Dabbadi"
            src={profilePic}
            sx={{ width: 250, height: 250, mb: 4, mt: 4, mx: 'auto' }}
          />

        </Grid>
        {/* Text Content */}
        <Grid item xs={12} md={8} lg={9} sx={{ p: 4, backgroundColor: 'rgba(255, 255, 255, 0.1)', width: '100%' }}>

          <Typography variant="h4" component="h4" gutterBottom sx={{ fontWeight: 500 }}>
            Jagadeeshwar Dabbadi
          </Typography>
          <Typography variant="h5" sx={{ fontWeight: 500, mb: 2 }}>
            {text}<span className={blink ? 'blink' : ''}>|</span> {/* Display the animated text with cursor */}
          </Typography>
          <Typography variant="body1" paragraph>
          As a MERN stack developer, I am committed to building high-quality web applications that meet the needs of my clients. With 4+ years of experience in full-stack web development, I specialize in using React.js, Next js, Typescript, MongoDB, Express.js, and Node.js to create scalable and robust web applications
          </Typography>
          <Typography variant="body1" paragraph>
          My passion for solving complex problems and creating innovative solutions drives me to stay up-to-date with the latest technologies and trends in the industry
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <Typography variant="body1">Name: Jagadeeshwar Dabbadi</Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography variant="body1">Phone: +1 660-528-0181</Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography variant="body1">Email: Jagadeeshwarreddy7701@gmail.com</Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography variant="body1">Address: Springfield, USA</Typography>
            </Grid>
          </Grid>
          <Button variant="contained" href="https://github.com/Jagadeeshwar011/My-website/raw/main/public/Jagadeesh_Resume.pdf" download="Jagadeesh_Resume.pdf" sx={{ mt: 4, backgroundColor: '#FFDF00', '&:hover': { backgroundColor: "#e6c300" }, color: '#000' }}>
            MY RESUMES
          </Button>
        </Grid>
        <Grid container item spacing={2} justifyContent="flex-end" alignItems="flex-start">

        {/* Skills List */}
          <Grid item xs={12} md={4}>
            <Typography variant="h4" gutterBottom sx={{ color: '#fff', mt: 4 }}>
              My Skills
            </Typography>
            {Object.entries(skills).map(([category, skillsArray]) => (
                <Box key={category}>
                  <Typography variant="h6" gutterBottom sx={{ color: '#FFD700' }}>
                    {category}:
                  </Typography>
                    <Grid container spacing={{ xs: 2, sm: 3, md: 4 }} justifyContent="flex-start" alignItems="center">
                        {skillsArray.map((skill, index) => (
                            <Grid item xs={6} sm={4} md={2} lg={2} key={index}>
                                <SkillIcon icon={skill.icon} name={skill.name} />
                            </Grid>
                        ))}
                    </Grid>


                </Box>
            ))}
          </Grid>

          {/* Image next to Skills */}
          <Grid item xs={12} md={7}>
              <Box
                  sx={{
                      backgroundColor: 'black', // Sets the background color of the image container to black
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      height: '100%', // Adjust the height as needed
                      width: '100%',

                  }}
              >
                  <img
                      src={Skillsimage}
                      alt="Skill Image"
                      style={{
                          maxHeight: '50%', // Adjust the maximum height as needed
                          maxWidth: '50%', // Adjust the maximum width as needed
                          opacity: 0.7// Set the opacity of the image itself to 1 (fully visible)
                      }}
                  />
              </Box>
          </Grid>
        </Grid>


        </Grid>
        </Box>


  );
};
export default About;
