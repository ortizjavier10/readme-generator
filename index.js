const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');


// array of questions for user
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project? (Required)',
        validate: titleInput => {
            if (titleInput) {
                return true;
            } else {
                console.log('Please enter a title for your project!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'description',
        message: 'Enter a description for your poject. (Reuired)',
        validate: descriptionInput => {
            if (descriptionInput) {
                return true;
            } else {
                console.log('Please enter a description for your project!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Enter installation instructions for your project. (Required)',
        validate: installtionInput => {
            if (installtionInput) {
                return true;
            } else {
                console.log('Please enter ionstalltion instructions for your project!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Enter instructions for usage. (Required)',
        validate: usageInput => {
            if (usageInput) {
                return true;
            } else {
                console.log('Please enter instructions for usage!');
                return false;
            }
        }
    },
    {
        type: 'checkboxes',
        name: 'license',
        message:  'Please choose a license for your project. (Please choose at least one)',
        choices: ['MIT', 'ISC', 'GNU GPLv3', 'Apache License 2.0'],
        validate: licenseInput => {
            if (licenseInput) {
                return true;
            } else {
                console.log('Please choose at least one option!')
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'Please enter contribution guidelines.'
    },
    {
        type: 'input',
        name: 'test',
        message: 'Enter project testing instructions.'
    },
    {
        type: 'input',
        name: 'github',
        message: 'Enter your GitHub username. (Required)',
        validate: githubInput => {
            if (githubInput) {
                return true;
            } else {
                console.log('Please enter your GitHub username');
                return false;
            }
        }

    },
    {
        type: 'input',
        name: 'email',
        maessage: 'Enter your email address. (Required)',
        validate: emailInput => {
            if (emailInput) {
                return true;
            } else {
                console.log('Please enter your email address!');
                return false;
            }
        }
    }

];

// function to write README file
const writeToFile = (fileName, data) => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./dist/readme.md', filename, err => {
            if (err) {
                reject(err);
                return;
            }
            resolve({
                ok: true, 
                message: 'Readme created!'
            });
        });
    });
};

// function to initialize program
function init() {

}

// function call to initialize program
init();
