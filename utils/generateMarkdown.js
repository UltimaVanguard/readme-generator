// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  return `[![License](https://img.shields.io/badge/License-${license.badge})]`
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
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

  if (data.licenses.length > 0) {
    for (let license of data.licenses) {
      licensesMarkdown += `${renderLicenseSection(license)} `
    } 
  } else {
    data.licenses = 'Please refer to the LICENSE in the repo';
  };

  for (let license of data.licenses) {
    licenseSection += `${license.name}\n`
  }
  return `# ${data.title}
  ${licensesMarkdown}

# Description

  ${data.description}

## Table of Contents
  [Installation](#Installation)\n
  [Usage](#Usage)\n
  [Contributions](#Contributions)\n
  [Licenses](#Licenses)\n
  [Tests](#Tests)\n
  [Questions](#Questions)
  
## Installation
  
  ${data.installation}
  
## Usage
  
  ${data.usage}
  
## Contributions
  
  ${data.contributions}
  
## License
  
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
