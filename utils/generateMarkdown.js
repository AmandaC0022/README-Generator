var moment = require('moment'); 

// returns a license badge based on which license is passed in
function renderLicenseBadge(license) {
  if (license === 'MIT') {
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`; 
  }
  if (license === 'BSD') {
    return `[![License: BSD](https://img.shields.io/badge/License-BSD%202--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)`; 
  }
  if (license === 'GLP') {
    return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`; 
  } 
// If there is no license, return an empty string
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
function renderLicenseSection(license) {
if (license === 'MIT') {
  return `Copyright @ ${moment().format('YYYY')}

  Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
  
  The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
  
  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.`
} 
if (license === 'BSD') {
  return 
}
if (license === 'GLP') {
  return 
}
return " "; 
}

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
  5. [Contributing](#contributing)
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
  ${renderLicenseSection(data.license)}

  ## Contribution
  ${data.contributing}
  
  ## Tests 
  ${data.tests}
  
  ## Questions 
  ${data.questions} 
  Please contact me using my GitHub profile: ${data.github}
`
}

module.exports = generateMarkdown;
