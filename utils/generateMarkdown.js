// // returns a license badge based on which license is passed in
function renderLicenseBadge(license) {
  // if(license) {
  //   return `![License](https://img.shields.io/badge/License-${license}-yellow.svg)`
  // } else {
  //   return " "
  // }
  if (license === 'MIT') {
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`; 
  }
  if (license === 'BSD') {
    return `[![License: BSD](https://img.shields.io/badge/License-BSD%202--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)`; 
  }
  if (license === 'GLP') {
    return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`; 
  } 
  return ' '
}

// returns the license link
function renderLicenseLink(license) { 
if (license === 'MIT') {
  return `https://opensource.org/licenses/MIT`; 
}
if (license === 'BSD') {
  return `https://opensource.org/licenses/BSD-2-Clause`; 
}
if (license === 'GLP') {
  return `https://www.gnu.org/licenses/gpl-3.0`; 
} 
// If there is no license, return an empty string
return ' '; 
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
// function renderLicenseSection(license) {
// var license = data.license 

// }

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

${renderLicenseBadge(data.license)}

## Description: 
${data.description}

  ## Table of Contents 
  1. [Installation](#installation)
  2. [Usage](#usage)
  3. [Credits](#credits)
  4. [License](#license)
  5. [Contribution](#contribution)
  6. [Tests](#tests)
  7. [Questions](#questions)

  ## Installation  
  ${data.installation} 

  ## Usage  
  ${data.usage}

  ## Credits 
  ${data.credits}

  ## License 
  ${renderLicenseLink(data.license)}

  ## Contribution
  ${data.contribution}
  
  ## Tests 
  ${data.tests}
  
  ## Questions 
  ${data.questions} 
  Please contact me using my GitHub profile: ${data.github}`

 
}

// renderLicenseBadge(); 
// renderLicenseLink();
// renderLicenseSection();

module.exports = generateMarkdown;
