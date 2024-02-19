const fs = require("fs");
const path = require('path');
const inquirer = require('inquirer');
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
    {
        type: "input",
        name: "Name",
        message: "What is your name?"
    },
    {
        type: "input",
        name: "Username",
        message: "What is your Github username?",
    },
    {
        type: "input",
        name: "Email",
        message: "What is your email address?",
    },
    {
        type: "input",
        name: "Title",
        message: "What is the title for your project?",
    },
    {
        type: "input",
        name: "Description",
        message: "Please write a short description of the project."
    },
    {
        type: "checkbox",
        name: "License",
        message: "Which type of license will you be using?",
        choices: ["Press <space> to make your selection", "MIT", "Apache2.0", "GNU3.0", "GNU2.0", "BSD2", "BSD3", "Boost1.0", "CreativeCommons1.0", "Eclipse2.0", "Mozilla2.0", "Unlicense"]
    },
    {
        type: "input",
        name: "Install",
        message: "What command should be run to install dependancies?"
    },
    {
        type: "input",
        name: "Usage",
        message: "How should the user use this software?"
    },
    {
        type: "input",
        name: "Tests",
        message: "What should be run to initiate tests?"
    },
    {
        type: "input",
        name: "Credits",
        message: "Is there anyone that you need to credit for this project?"
    }
    ];

// function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data)
}

// function to initialize program
function init() {
    inquirer.prompt(questions).then((responses) => {
        console.log("Creating your README file!");
        writeToFile("./createdREADMEs/README.md", generateMarkdown({...responses}));
    });
}

// function call to initialize program
init();