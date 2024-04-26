// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  // returning license badge render
  return `[![License](https://img.shields.io/badge/License-${license.badge})]`
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  // returning license link
  return `(https://opensource.org/licenses/${license.source})`
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  const licenseBadge = renderLicenseBadge(license);
  const licenseLink = renderLicenseLink(license);
  return `${licenseBadge}${licenseLink}`;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  let licensesMarkdown = ''
  let licenseSection = '';

  // Looping though licenses if there are any, or setting a generic response if there isn't
  if (data.licenses.length > 0) {
    for (let license of data.licenses) {
      licensesMarkdown += `${renderLicenseSection(license)} `
      licenseSection += `This software licensed under ${license.name} license<br>`
    } 
  } else {
    licenseSection = 'Please refer to the LICENSE in the repo';
  };

  // Returning Markdown file
  return `# ${data.title}
  ${licensesMarkdown}

# Description

  ${data.description}

## Table of Contents
  [Installation](#installation)\n
  [Usage](#usage)\n
  [Contributions](#contributions)\n
  [Licenses](#licenses)\n
  [Tests](#tests)\n
  [Questions](#questions)
  
## Installation
  
  ${data.installation}
  
## Usage
  
  ${data.usage}
  
## Contributions
  
  ${data.contributions}
  
## Licenses
  
  ${licenseSection}

## Tests

  ${data.tests}

## Questions

  My Github is: [${data.github}](https://github.com/${data.github})\n
  My Email is: ${data.email}

  ${data.addInfo}
`;
}

module.exports = generateMarkdown;
