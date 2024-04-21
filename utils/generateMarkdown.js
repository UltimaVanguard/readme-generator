// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  let licensesMarkdown = ''
  if (data.licenses.length > 0) {
    for (license of data.license) {
      licenseMarkdown += `${renderLicenseSection(license)}\n`
    }
  }
  return `# ${data.title}

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
  
  ${data.licenses}

## Tests

  ${data.tests}

## Questions

  My Github is: [${data.github}](https://github.com/${data.github})\n
  My Email is: ${data.email}\t\t

  ${data.addInfo}
`;
}

module.exports = generateMarkdown;
