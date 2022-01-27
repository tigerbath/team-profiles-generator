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
