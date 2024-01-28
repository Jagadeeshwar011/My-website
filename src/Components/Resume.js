import React from 'react';
import { Box, Typography } from '@mui/material';
const ResumeItem = ({ title, period, description, isRightAligned }) => (
    <Box sx={{
      display: 'flex',
      justifyContent: isRightAligned ? 'space-between' : 'flex-start',
      alignItems: 'center', // Align items to center to ensure they are aligned perfectly when flexDirection changes to column
      flexDirection: 'column', // Stack items vertically
      mb: 4,
    }}>
      <Box sx={{
        width: '100%', // Ensure full width for the title and period to align centrally above the description
        textAlign: 'center', // Center text alignment
      }}>
        <Typography variant="h6" sx={{ color: '#FFDF00', fontWeight: 'bold', m: 0 }}>{title}</Typography>
        <Typography variant="subtitle1" sx={{ color: 'white', mt: 1, mb: 1 }}>{period}</Typography>
      </Box>
      <Box sx={{
        width: '100%', // Full width for the description
        textAlign: 'center', // Center text alignment
      }}>
        <Typography variant="body1" sx={{ color: 'white', mt: 1, mb: 0 }}>{description}</Typography>
      </Box>
    </Box>
  );
  
  
  
  

const Resume = () => {
 

  const experience = [
    {
      title: "Interco - JavaScript-Frontend Developer",
      period: "September 2023 – Present",
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
    <Box id = "resume" sx={{
      backgroundColor: '#000',
      color: '#fff',
      p: 4,
      width : '100%',
      overflowX: 'hidden', // Hide horizontal scrollbar
    }}>
      <Typography variant="h4" gutterBottom sx={{
        color: '#FFDF00',
        textAlign: 'center',
        mb: 4
      }}>
        Experience
      </Typography>
      {experience.map((exp, index) => (
        <ResumeItem key={index} {...exp} isRightAligned={index % 2 !== 0} />
      ))}
    </Box>
  );
};

export default Resume;