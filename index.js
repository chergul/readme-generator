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




]).then(result=>{
        console.log(result.projectTitle,result.projectDescription,result.installSec, result.usageSec,result.constSec,result.testSec,result.license,result.gitHub);
    const info = result
    console.log(info);

 /*   const html=`<!DOCTYPE html>
    <html>
  <head>
     <title>Portfolio</title>
     <link
     rel="stylesheet"
     href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
   />
     <link rel="stylesheet" href="./style.css" />
  </head>
  <body>
  <div class="container">
 
 
  <h1>Hi, my name is ${result.firstName} ${result.lastName}<h1>
  <br>
 
  <h3>I currently live in ${result.location}<h3>
  
  <div class="card" style="width: 18rem;">
  <ul class="list-group list-group-flush">
    <li class="list-group-item">My linkedIn profile is ${result.linkedin}</li>
    <li class="list-group-item">Here you can find my work: ${result.gitHub}</li>
  </ul>
 </div>
 
  
  
 
  </div>
  </body>
  </html>`*/;
 
  fs.writeFile("README.md",md,function(error) {
     if (error) {
         console.log ("There is an error");
     } else {
         console.log("Perfect!");
     }});
 
 });
 