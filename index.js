const inquirer=require("inquirer");
const fs=require ("fs");


inquirer.prompt([
    {
        type:"input",
        name:"firstName",
        message:"Enter your First Name"
    },
    {
        type:"input",
        name:"lastName",
        message:"Enter your Last Name"
    },
    {
        type:"input",
        name:"location",
        message:"Please enter your location"
    },
    {
        type:"input",
        name:"linkedin",
        message:"Enter your LinkedIn URL"
    },
    {
        type:"input",
        name:"gitHub",
        message:"Enter your GitHub URL"
    }
]).then(result=>{
    console.log(result.firstName,result.lastName, result.location, result.linkedin, result.gitHub);
    const info = result
    console.log(info);

    const html=`<!DOCTYPE html>
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
  </html>`;
 
  fs.writeFile("index.html",html,function(error) {
     if (error) {
         console.log ("There is an error");
     } else {
         console.log("Percet!");
     }});
 
 });
 