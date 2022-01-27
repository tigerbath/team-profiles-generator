// require packages

const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");
const inquirer = require("inquirer");
const fs = require("fs");
const generateHTML = require("./lib/generateHTML");

const employees = [];
let isTeam = false;

const validateInput = (userInput) => {
  if (userInput === "") {
    return "the type of answer";
  } else {
    return true;
  }
};

const addManager = async () => {
  const managerQuestions = [
    {
      type: "input",
      name: "name",
      message: "Please enter the manager name",
      validate: validateInput,
    },

    {
      type: "input",
      name: "id",
      message: "What's the id of your employee?",
      validate: validateInput,
    },

    {
      type: "input",
      name: "officeNumber",
      message: "Please enter your office number",
      validate: validateInput,
    },

    {
      type: "input",
      name: "email",
      message: "Please enter your work email",
      validate: validateInput,
    },
  ];

  const { name, id, officeNumber, email } = await inquirer.prompt(
    managerQuestions
  );
  const manager = new Manager(name, id, email, officeNumber);
  return manager;
};

const addEngineer = async () => {
  const engineerQuestions = [
    {
      type: "input",
      name: "name",
      message: "Please enter the engineer name",
      validate: validateInput,
    },

    {
      type: "input",
      name: "id",
      message: "Please enter the engineer id",
      validate: validateInput,
    },

    {
      type: "input",
      name: "email",
      message: "Please enter the engineer email",
      validate: validateInput,
    },

    {
      type: "input",
      name: "github",
      message: "Please enter the engineer github profile",
      validate: validateInput,
    },
  ];
  const { name, id, email, github } = await inquirer.prompt(engineerQuestions);
  const engineer = new Engineer(name, id, email, github);
  return engineer;
};

const addIntern = async () => {
    const internQuestions = [
      {
        type: "input",
        name: "name",
        message: "Please enter the intern name",
        validate: validateInput,
      },
  
      {
        type: "input",
        name: "id",
        message: "Please enter the intern id",
        validate: validateInput,
      },
  
      {
        type: "input",
        name: "email",
        message: "Please enter the intern email address",
        validate: validateInput,
      },
  
      {
        type: "input",
        name: "school",
        message: "Please enter the intern school name",
        validate: validateInput,
      },
    ];