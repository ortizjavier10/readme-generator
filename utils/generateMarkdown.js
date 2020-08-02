const fs = require('fs')


// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
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
    To install dependencies, run the following command:
   
    ${data.installation}
   

## Usage
${data.usage}

## License
${data.license}

## Contribution
${data.contribution}


## Tests
${data.test}


## Questions
If you have any question please check out my github https://github.com/${data.github} or email me at ${data.email} .

`;
}

module.exports = generateMarkdown;
