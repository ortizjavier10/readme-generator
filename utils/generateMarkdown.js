const fs = require('fs')

// const licenseBadge = (license) => {
//   if (data.license === 'MIT') {
//     badgeImage = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
//   }
//   if (data.license === 'ISC') {
//     badgeImage = '[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)';
//   }
//   if (data.license === 'GNU GPLv3') {
//     badgeImage = '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
//   }
//   if (data.license === 'Apache License 2.0') {
//     badgeImage = '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
  
// }
// };


// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
    ${badgeImage(data.license)}
    ## Description
    ${data.description}

    ## Table of Contents
    * [Installation](#installation)
    * [Usage](#usage)
    * [License](#license)
    * [Contribution](#contribution)
    * [Tests](#tests)
    * [Questions](#questions)

    ## Installation
    To install this project, run the following command:
   
    ${data.installation}
   

    ## Usage
    ${data.usage}


    ## License
    This Project can be used under ${data.license} license.

    ## Contribution Guidelines:
    * ${data.contribution}


    ## Tests
    To test the application please use:
    
    ${data.test}
   


    ## Questions
    If you have any question please check out my GitHub https://github.com/${data.github} or email me at ${data.email} .

  `;
};
  let badgeImage = (license) => {
    return '![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)'
  };


module.exports = generateMarkdown;
