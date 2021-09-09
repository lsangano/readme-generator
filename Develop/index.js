const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const generateMarkdown = require("./utils/generateMarkdown");
const  writeFilesAsync = util.promisify(fs.writeFile);


//Inquirer questions asked through the console to be used to generate read me
  const questions = () => {
    return inquirer.prompt ([  
        {
            type: "input",
            name: "title",
            message: "What is your project title?",
       },
       {
            type: "input",
            name: "description",
            message: "What is the project's description?",
        },
        {
            type: "input",
            name: "installation",
            message: "What are the steps to install your project?",
        },
        {
            type: "input",
            name: "usage",
            message: "What is the Project's usage information?",
        },
        {
            type: "list",
            name: "license",
            message: "Which licenses do you need?",
            choices: [
            "MIT", "Apache 2.0", "GPLv 3.0", "Mozilla Public License 2.0", 
         ],
        },
        {
            type: "input",
            name: "contributing",
            message: "Please provide contribution guildeines for the project?",
        },
        {
            type: "input",
            name: "tests",
            message: "What are the Project's test instructions?",
            default: 'npm test',
        },
        {
           type: "input",
           name: "github",
           message: "What is your GitHub user name?",
        },
        {
           type: "input",
           name: "email",
           message: "What is your email?",
        },     
  
      ]);
  };

const init = () => {
   questions()
      .then((answers) => writeFilesAsync("README.md", generateMarkdown(answers)))
      .then(() => console.log("Successfully creaded README.md"))
      .catch((err) => console.error(err));
};

init();