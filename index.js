const generateMarkdown = require("./generateMarkdown");
const inquirer = require("inquirer");
const fs = require("fs");

const questions = [ 
{
    type: "input",
    name: "title",
    message: "What is the project Repo name?"
},
{
    type: "input",
    name: "description",
    message: "Enter a description of your project"
},
{
    type: "input",
    name: "toc",
    message: "Enter your Table of Content"
},
{
    type: "input",
    name: "installation",
    message: "What are the steps to install your project?"
},
{
    type: "input",
    name: "usage",
    message: "Please provide explanation and examples for use"
},
{
    type: "input",
    name: "license",
    message: "Please enter one of the following [ BSD, Apache, GNU ]"
},
{
    type: "input",
    name: "contribute",
    message: "Enter your guidelines for other developers to contiribute"
},
{
    type: "input",
    name: "test",
    message: "Enter your steps for testing"
},
{
    type: "input",
    name: "github",
    message: "Enter your Github username"
},
];

function writeToFile(fileName, data) {
   fs.writeFile(fileName, data, function (error){
    console.log("Success!");
   });
}  

function init() {
inquirer.prompt(questions).then (function(answers) {
    console.log(answers);

const markDownString = generateMarkdown(answers) 
console.log(markDownString);

writeToFile("./README.md", markDownString)
})

}

init();
