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
        choices: [
         {
            name: 'Apache 2.0', 
            value: {name: 'Apache 2.0', badge: 'Apache_2.0-blue.svg', source: 'Apache-2.0'},
         },
         {
            name: 'BSD 3-Clause',
            value: {name: 'BSD 3-Clause', badge: 'BSD_3--Clause-orange.svg', source: 'BSD-3-Clause'},
         },
         {
            name: 'BSD 2-Clause',
            value: {name: 'BSD 2-Clause', badge: 'BSD_2--Clause-orange.svg', source: 'BSD-2-Clause'},
         },
         {
            name: 'Eclipse',
            value: {name: 'Eclipse', badge: 'EPL_1.0-red.svg', source: 'EPL-1.0'},
         },
         {
            name: 'IBM Public License',
            value: {name: 'IBM Public License', badge: 'IPL_1.0-blue.svg', source: 'IPL-1.0'},
         },
         {
            name: 'ISC',
            value: {name: 'ISC', badge: 'ISC-blue.svg', source: 'ISC'},
         },
         {
            name: 'MIT',
            value: {name: 'MIT', badge: 'MIT-yellow.svg', source: 'MIT'},
         },
         {
            name: 'Mozilla 2.0',
            value: {name: 'Mozilla Public License 2.0', badge: 'MPL_2.0-brightgreen.svg', source: 'MPL-2.0'},
         },
         {
            name: 'Perl',
            value: {name: 'Perl', badge: 'Perl-0298c3.svg', source: 'Perl'},
         },
         {
            name: 'Artistic License 2.0',
            value: {name: 'Artistic License 2.0', badge: 'Artistic_2.0-0298c3.svg', source: 'Artistic-2.0'},
         },
         {
            name: 'SIL Open Font License 1.1',
            value: {name: 'SIL Open Font License 1.1', badge: 'OFL_1.1-lightgreen.svg', source: 'OFL-1.1'},
         },
         {
            name: 'Zlib',
            value: {name: 'Zlib', badge: 'Zlib-lightgrey.svg', source: 'Zlib'},
         },
      ],
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
