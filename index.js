// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const markdown = require('./utils/generateMarkdown.js');

console.log(markdown)


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
        choices: ['placeholder'],
     },
     {
        type: 'input',
        message: 'Did you have any contributors?',
        name: 'contributions',
     },
     {
        type: 'input',
        message: 'What testing did you do?',
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
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (error) => 
    error ? console.error(error) : console.log(`${fileName} successfully written!`));
};

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then((answers) => {
            const newReadme = markdown(answers);
            writeToFile('test.md', newReadme);
        });
};

// Function call to initialize app
init();
