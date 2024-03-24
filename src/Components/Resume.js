import React from 'react';
import { Box, Typography, Grid } from '@mui/material';
const ResumeItem = ({ title, period, description }) => (
    <Grid container spacing={2} sx={{ mb: 4 }}>
      <Grid item xs={12} sm={12} md={10} lg={8} sx={{ margin: 'auto', textAlign: 'center' }}>
        <Typography variant="h6" sx={{ color: '#FFDF00', fontWeight: 'bold' }}>{title}</Typography>
        <Typography variant="subtitle1" sx={{ color: 'white', mt: 1, mb: 1 }}>{period}</Typography>
        <Typography variant="body1" sx={{ color: 'white', mt: 1, wordWrap: 'break-word' }}>{description}</Typography>
      </Grid>
    </Grid>
);


  
  
  
  

const Resume = () => {
 

  const experience = [
    {
      title: "American National Insurance",
      period: "Feburary 2024 – Present",
      place: "Springfeild, MO",
      description: "At American National Insurance, I played a pivotal role in developing a cutting-edge call center portal using Vue.js and Vuex for frontend state management. Leveraging TypeScript and Next.js for backend development, I ensured robustness and scalability. Integrating with IBM API Connect and deploying on Azure, I contributed to seamless communication and reliable deployment. Active participation in Agile ceremonies facilitated collaboration and continuous improvement."
    },
    {
      title: "Interco - JavaScript-Frontend Developer",
      period: "September 2023 – February 2024",
      place: "St Louis, MO",
      description: "In this dynamic role, I led the initiation and architecture of a cutting-edge ERP system utilizing React for front-end development. My focus was on ensuring seamless UI/UX integration and optimizing performance to enhance user engagement. As an expert in state management, I utilized Redux to maintain system consistency and reliability. My proficiency in Jest enabled me to implement robust unit testing, ensuring the application's stability and smooth operation."
    },
    {
      title: "Duotronix - Full-Stack Developer",
      period: "January 2023 – August 2023",
      place: "McKinney, TX",
      description: "As a full-stack developer, I engineered comprehensive solutions using Angular 9 and TypeScript, prioritizing clean, maintainable code and asynchronous operations with RXJS. My role included the development of RESTful APIs, optimizing database schemas for performance, and crafting a user experience that was both intuitive and responsive. My collaborative efforts with UX designers ensured that the end product was both functional and visually appealing."
    },
    {
      title: "Northwest Missouri State University - Full-Stack Developer",
      period: "January 2022 – November 2022",
      place: "Maryville, MO",
      description: "In collaboration with a dedicated team at the university, I contributed to the development of a user-centric web application. My responsibilities encompassed implementing front-end features with React and Redux and managing a robust cloud deployment using Docker and Kubernetes. The project aimed to create a scalable infrastructure that could support the university's expanding digital needs"
    },
    {
      title: "[24.7] ai Private Limited - Software Engineer",
      period: "January 2020 – August 2021",
      place: "Hyderabad, Telangana",
      description: "During my tenure, I focused on the development of single-page applications (SPA) leveraging the React library to deliver an enhanced user experience. My role involved API integration and responsive design implementation, contributing to open-source projects, and leading the development of robust backend solutions. My efforts were instrumental in streamlining the user experience and facilitating seamless data flow across the platform."
    },
    {
      title: "ARS Technologies - Software Engineer",
      period: "January 2019 – December 2019",
      place: "Hyderabad, Telangana",
      description: "In my role at ARS Technologies, I was responsible for developing front-end applications using React and Redux, focusing on creating responsive designs with Bootstrap, and employing AngularJS for dynamic data binding. My work involved streamlining client-server communication with AJAX, ensuring fast and efficient data handling, and enhancing user interaction with the applications."
    },
  ];


  return (
      <Box id="resume" sx={{
        backgroundColor: '#000',
        color: '#fff',
        p: 4,
        width: '100%',
        overflowX: 'hidden',
      }}>
        <Typography variant="h4" gutterBottom sx={{
          color: '#FFDF00',
          textAlign: 'center',
          mb: 4,
          fontSize: {
            xs: '1.5rem', // smaller font size on extra-small screens
            sm: '2rem',   // larger font size on small screens and above
            md: '2.5rem', // etc.
            lg: '3rem',
          }
        }}>
          Experience
        </Typography>
        {experience.map((exp, index) => (
            <ResumeItem key={index} {...exp} />
        ))}
      </Box>
  );
};

export default Resume;
