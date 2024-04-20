// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const markdown = require('./utils/generateMarkdown.js')

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is the title of your project?',
        name: 'title',
     },
     {
        type: 'input',
        message: 'What is the description?',
        name: 'description',
     },
     {
        type: 'input',
        message: 'Installation instructions?',
        name: 'installation',
     },
     {
        type: 'input',
        message: 'What is the usage information?',
        name: 'usage',
     },
     {
        type: 'checkbox',
        message: 'Any licenses?',
        name: 'licenses',
        choices: ['placeholder', 'See the repo for license information.'],
     },
     {
        type: 'input',
        message: 'Did you have any contributors?',
        name: 'contributors',
     },
     {
        type: 'input',
        message: 'what testing did you do?',
        name: 'tests',
     },
     {
        type: 'input',
        message: 'What is your Github Username?',
        name: 'github',
     },
     {
        type: 'input',
        message: 'What is your email?',
        name: 'email',
     },
     {
        type: 'input',
        message: 'Any other details for contacting you?',
        name: 'addInfo',
     }];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then((answers) => {
            const newReadme = markdown.generateMarkdown(answers);
            writeToFile('README.md', newReadme);
        })
}

// Function call to initialize app
init();
