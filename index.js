const inquirer = require("inquirer");
const fs = require("fs");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

const questions = {
    manager: [
        {
            name: "managerName",
            type: "input",
            message: "What is the manager's name?",
            validate: (value) => {
                if (value) {
                    return true
                } else {
                    return "Please enter the manager's name."
                }
            }
        },
        {
            name: "managerId",
            type: "input",
            message: "What is the manager's ID?",
            validate: (value) => {
                if (value) {
                    return true
                } else {
                    return "Please enter the manager's ID."
                }
            }
        },
        {
            name: "managerEmail",
            type: "input",
            message: "What is the manager's email address?",
            validate: (value) => {
                if (value) {
                    return true
                } else {
                    return "Please enter the manager's email address."
                }
            }
        },
        {
            name: "officeNumber",
            type: "input",
            message: "What is the manager's office number?",
            validate: (value) => {
                if (value) {
                    return true
                } else {
                    return "Please enter the manager's office number."
                }
            }
        }
    ],

    engineer: [
        {
            name: "engineerName",
            type: "input",
            message: "What is the engineer's name?",
            validate: (value) => {
                if (value) {
                    return true
                } else {
                    return "Please enter the engineer's name."
                }
            }
        },
        {
            name: "engineerId",
            type: "input",
            message: "What is the engineer's ID?",
            validate: (value) => {
                if (value) {
                    return true
                } else {
                    return "Please enter the engineer's ID."
                }
            }
        },
        {
            name: "engineerEmail",
            type: "input",
            message: "What is the engineer's email address?",
            validate: (value) => {
                if (value) {
                    return true
                } else {
                    return "Please enter the engineer's email."
                }
            }
        },
        {
            name: "github",
            type: "input",
            message: "What is the engineer's GitHub username?",
            validate: (value) => {
                if (value) {
                    return true
                } else {
                    return "Please enter the engineer's GitHub."
                }
            }
        }
    ],

    intern: [
        {
            name: "internName",
            type: "input",
            message: "What is the intern's name?",
            validate: (value) => {
                if (value) {
                    return true
                } else {
                    return "Please enter the intern's name."
                }
            }
        },
        {
            name: "internId",
            type: "input",
            message: "What is the intern's ID?",
            validate: (value) => {
                if (value) {
                    return true
                } else {
                    return "Please enter the intern's ID."
                }
            }
        },
        {
            name: "internEmail",
            type: "input",
            message: "What is the intern's email address?",
            validate: (value) => {
                if (value) {
                    return true
                } else {
                    return "Please enter the intern's email."
                }
            }
        },
        {
            name: "school",
            type: "input",
            message: "What school does the intern go to?",
            validate: (value) => {
                if (value) {
                    return true
                } else {
                    return "Please enter the intern's school."
                }
            }
        }
    ],

    addEmployee: [
        {
            name: "addEmployee",
            type: "list",
            message: "Do you want to add another employee?",
            choices: ["Add Engineer", "Add Intern", "Done creating team"]
        }
    ]
};