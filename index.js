const inquirer = require('inquirer');
const fs = require('fs'); 
const markdownTemplate = require('./utils/generateMarkdown.js'); 

inquirer
  .prompt([
    /* Pass your questions in here */
    {
      type:'input', 
      name: 'title', 
      message:'What is the title of your project?', 
    },
    {
      type:'input', 
      name: 'description', 
      message:'Describe your project in two to three sentences.', 
    },
    {
      type:'input', 
      name: 'installation', 
      message:'How do you install this project?', 
    },
    {
      type:'input', 
      name: 'usage', 
      message:'How do you use this project?', 
    },
    {
      type:'input', 
      name: 'credits', 
      message:'List any collaborators that you worked with and their github profile for this project. EX Sam: Samuel123', 
    },
    {
      type:'list', 
      name: 'license', 
      message:'Choose a license for this project.', 
      choices: ['MIT', 'BSD', 'GLP', 'none'], 
    },
    {
      type:'input', 
      name: 'contribution', 
      message:'How would you like others to contribute to this project?', 
    },
    {
      type:'input', 
      name: 'tests', 
      message:'Describe any tests that you have run on your project.', 
    },
    {
      type:'input', 
      name: 'questions', 
      message:'How would you like others to reach you if they have questions?', 
    },
    {
      type:'input', 
      name: 'github', 
      message:'What is your GitHub username?', 
    },
  ])
  .then((answers) => {
    // Use user feedback for... whatever!!

  })
  .catch((error) => {
    if (error) {
      console.log(error); 
    }
  });

//this will write the README file 
//   function writeToFile(fileName, data) {

//   }

//intializes the app
// funtion init() {

// }
// init(); 

//   The README should include: 
//   Project Title 
//   Description 
//   Table of Contents 
//     Installation - how do you install this project? 
//     Usage - instructors for use
//     Credits - list of collaborators with links to their github profile 
//     License
//     Contributing 
//     Tests 
//     Questions 

// You can make them a clickable link by: - [Installation](#installation) 

// WHEN I choose a license for my application from a list of options
// THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
// WHEN I enter my GitHub username
// THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
// WHEN I enter my email address
// THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions

// MIT License Badge 
// [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

// BSD License Badge
// [![License](https://img.shields.io/badge/License-BSD%202--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)

// GLP License Badge 
// [![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)
