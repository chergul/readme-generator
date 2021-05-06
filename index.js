const inquirer=require("inquirer");
const fs=require ("fs");


inquirer.prompt([
    {
        type:"input",
        name:"projectTitle",
        message:"What is the title of your project?"
    },
    {
        type:"input",
        name:"projectDescription",
        message:"Write a description of your project."
    },
    {
        type:"input",
        name:"installSec",
        message:"Describe the steps required to install your project for the Installation section."
    },
    {
        type:"input",
        name:"usageSec",
        message:"Provide instructions and examples of your project in use for the Usage section."
    },
    {
        type:"input",
        name:"contSec",
        message:"Provide guidelines on how other developers can contribute to your project."
    },
    {
        type: 'input',
        name:"testSec",
        message:"Provide any tests written for your application and provide examples on how to run them."
    },
    {
        type:"list",
        name:"license",
        message: "Choose a license for your project.",
        choices: ['GNU AGPLv3', 'GNU GPLv3', 'GNU LGPLv3', 'Mozilla Public License 2.0', 'Apache License 2.0', 'MIT License', 'Boost Software License 1.0', 'The Unlicense'],  
    },
    {
        type:"input",
        name:"gitHub",
        message:"Enter your GitHub URL"
    },
    {
        type:"input",
        name:"userName",
        message:"Enter your GitHub username"
    },
    {
        type:"input",
        name:"email",
        message:"Enter your e-mail"
    },




]).then(result=>{
        console.log(result.projectTitle,result.projectDescription,result.installSec, result.usageSec,result.constSec,result.testSec,result.license,result.gitHub,result.userName,result.email);
    const info = result
    console.log(info);


  const readMe = `
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
  ## Installation
  To install the necessary dependencies, run the following command:
  ${result.installSec}
  ## Usage
  ${result.usageSec}
  ## License
  This project is licensed under the ${result.license} license.
  ## Contributing
  ${result.contSec}
  ## Tests
  To run tests, run the following command:
  ${result.testSec}
  ## Questions
  If you have any questions about this repo, you can open an issue, or contact ${result.userName} directly at ${result.email}.
  `;
 
  fs.writeFile("README.md",readMe,function(error) {
     if (error) {
         console.log ("There is an error");
     } else {
         console.log("Perfect!");
     }});
 
 });
 