const inquirer = require('inquirer');
const fs = require('fs');  
const generateMarkdown = require('./utils/generateMarkdown.js');

inquirer
  .prompt([
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
    // fs.writeFile('./README.md', generateMarkdown(answers), () => {
    //   console.log("file was written"); 
    // })
    // console.log("file was written"); 
    // writeFile("userREADME.md", generateMarkdown({ ...answers }));
    // })
    console.log(answers)
  })
  .catch((error) => {
    if (error) {
      console.log(error); 
    }
  });


  function writeFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data)
  }

