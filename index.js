const inquirer = require('inquirer');
const fs = require('fs');  
const generateMarkdown = require('./utils/generateMarkdown.js');

inquirer
  .prompt([
    /* Questions for User */
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
      name: 'contributing', 
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
    }
  ])
  .then((answers) => {
    // Use user feedback for... whatever!!
    fs.writeFile('./userREADME.md', generateMarkdown(answers), () => {
      console.log("file was written"); 
    })
  })
  .catch((error) => {
    if (error) {
      // Prompt couldn't be rendered in the current environment
      console.log(error); 
    } 
  });

// fs.writeFile('./README.md', generateMarkdown(answers), () => {
//   console.log("file was written"); 

// function writeFile(fileName, data) {
//   return fs.writeFileSync(path.join(process.cwd(), fileName), data)
// }

