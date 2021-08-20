// returns a license badge based on which license is passed in
function renderLicenseBadge(license) {
var license = data.license 
if (license === 'MIT') {
  return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`; 
}
if (license === 'BSD') {
  return `[![License](https://img.shields.io/badge/License-BSD%202--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)`; 
}
if (license === 'GLP') {
  return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`; 
} 
// If there is no license, return an empty string
return ' '; 
}

// returns the license link
function renderLicenseLink(license) {
var license = data.license 
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
function renderLicenseSection(license) {
var license = data.license 

}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title} \n
  ## Description: \n
  ${data.description} \n 
  ## Table of Contents 
  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [License](#license)
  - [Contribution](#contribution)
  - [Tests](#tests)
  - [Questions](#questions)

  ## Installation \n
  ${data.installation} \n 

  ## Usage \n 
  ${data.usage} \n

  ## Credits \n
  ${data.credits} \n

  ## License \n
  
  ## Contribution \n
  ${data.contribution} \n
  
  ## Tests \n
  ${data.tests}
  
  ## Questions 
  ${data.questions} \n
  Please contact me using my GitHub profile: ${data.github}`
  renderLicenseBadge(); 
  renderLicenseLink();
  renderLicenseSection(); 
}

module.exports = generateMarkdown;
