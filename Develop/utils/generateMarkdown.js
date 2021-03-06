function renderLicenseBadge(license) {
  if (license === 'MIT') {
    return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
} 
    else if (license === 'APACHE') {
      return '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
}
    else if (license === 'GNU') {
      return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
}
    else if (license === 'Mozilla Public License 2.0')
       return "[![[License](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)"
    }
  // TODO: Create a function that returns the license link
 // If there is no license, return an empty string 
  function renderLicenseLink(license) { }
  

  // TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) { }

// TODO: Create a function to generate markdown for README
  function generateMarkdown(data,) {
    let licenseBadge = renderLicenseBadge(data.license)
    return`# ${data.title} 

## Table of Contents
* [Description](#description)
* [License](#license)
* [Installation](#installation)
* [Test](#test)
* [Questions](#questions)
    
## Description
${data.description}

  ## License
  ${licenseBadge}

  ## Installation
  \`\`\`
  ${data.installation}
  \`\`\`
    
   ## Test
   ${data.test}
   \`\`\

     
  ## Questions
  ${data.email}.[${data.github}](https://github.com/${data.github}).
  `;
}
module.exports = generateMarkdown;  