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

// returns the license section of README
// function renderLicenseSection(license) {
//   if (license === 'MIT') {
//     return `Copyright @ ${moment().format('YYYY')}

//     Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
    
//     The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
    
//     THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.`
//   } 
//   if (license === 'BSD') {
//     return `Copyright ${moment().format('YYYY')}

//     Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
    
//     1. Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
    
//     2. Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
    
//     3. Neither the name of the copyright holder nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.
    
//     THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.`
//   }
//   if (license === 'GLP') {
//     return `Copyright (C) ${moment().format('YYYY')}

//     This program is free software: you can redistribute it and/or modify
//     it under the terms of the GNU General Public License as published by
//     the Free Software Foundation, either version 3 of the License, or
//     (at your option) any later version.

//     This program is distributed in the hope that it will be useful,
//     but WITHOUT ANY WARRANTY; without even the implied warranty of
//     MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
//     GNU General Public License for more details.

//     You should have received a copy of the GNU General Public License
//     along with this program.  If not, see http://www.gnu.org/licenses.`
//   }
//   return " "; 
//}

console.log(data.license); 

function renderLicenseSection(license) {
  switch(license) {
    case 'MIT': 
      `MIT License Text Here`;
      break; 
    case 'BGL': 
      `BGL License Text here`;
      break; 
    case 'GLP':
      `GLP license text here`;
      break; 
    default: 
      " "; 
  }
}

// README Template 
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
