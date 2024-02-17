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
        choices: ["Press <space> to make your selection", "MIT License", "Apache License 2.0", "GNU General Public License v3.0", "GNU General Public License v2.0", "BSD 2-Clause License", "BSD 3-Clause License", "Boost 1.0 License", "Creative Commons 1.0 License", "Eclipse Public 2.0 License", "Mozilla Public 2.0 License", "The Unlicense"]
    },
    {
        type: "input",
        name: "Install",
        message: "What command should be run to install dependancies?"
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