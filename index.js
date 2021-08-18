const inquirer = require('inquirer');
const fs = require('fs'); 

inquirer
  .prompt([
    /* Pass your questions in here */

  ])
  .then((answers) => {
    // Use user feedback for... whatever!!
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });

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

// MIT License 
// [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

// BSD License 
// [![License](https://img.shields.io/badge/License-BSD%202--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)

// IBM License 
// [![License: IPL 1.0](https://img.shields.io/badge/License-IPL%201.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)
