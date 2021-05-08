const inquirer=require("inquirer");
const fs=require ("fs");

const utility=require('util');
const generationMarkDown=require("./utils/generateMarkdown");
const writeFileAsync=utility.promisify(fs.writeFile);

// array of questions for the user
const questions=inquirer.prompt([
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




])

questions.then((result)=>writeFileAsync('README.md',generationMarkDown(result)))
.then(()=>console.log("perfect you made it!"));
