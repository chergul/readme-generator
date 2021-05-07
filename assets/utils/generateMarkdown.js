function generateMarkdown(data) {  
  let licenseLink = "";
  return `
  
  # ${result.projectTitle}
  [![GitHub license](https://img.shields.io/badge/license-${result.license}-important.svg)](${result.gitHub})

    ## Description
    ${result.projectDescription}

    ## Table of Contents
    * [Installation](#installation)
    * [Usage](#usage)
    * [License](#license)
    * [Contributing](#contributing)
    * [Tests](#tests)
    * [Questions](#questions)
    * 
    ## Installation
    To install the necessary dependencies, run the following command:
    ${result.installSec}

    ## Usage
    ${result.usageSec}

    ## License
    This project uses the following license: [${result.license}].

    ## Contributing
    ${result.contSec}

    ## Tests
    To run tests, run the following command:
    ${result.testSec}

    ## Questions
    If you have any questions about this repo, you can open an issue, or contact ${result.userName} directly at ${result.email}.
    `;
}

module.exports = generateMarkdown;
