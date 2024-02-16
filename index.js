const fs = require("fs");
const path = require('path');
const inquirer = require('inquirer');
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
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
        choices: ["MIT", "Apache License 2.0", "GNU General Public License v3.0", "GNU General Public License v2.0", "BSD 2-Clause", "BSD 3-Clause", "Boost 1.0", "Creative Commons 1.0", "Eclipse Public 2.0", "Mozilla Public 2.0", "The Unlicense"]
    },
    {
        type: "input",
        name: "Commands",
        message: "What command should be run to install dependancies?"
    },
    {
        type: "input",
        name: "Tests",
        message: "What command should be run to initiate tests?"
    },
    {
        type: "input",
        name: "Credits",
        message: "Is there anyone that you need to credit for this project?"
    }
    ];

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();