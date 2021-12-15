const inquirer = require("inquirer");
const fs = require("fs");

const markdown = require("./utils/generateMarkdown");

inquirer
  .prompt([
    {
      type: "input",
      name: "title",
      message: "What is the name of your project?",
    },
    {
      type: "input",
      name: "description",
      message: "Describe your project in detail.",
    },
    {
      type: "input",
      name: "installation",
      message: "Describe the installation process if applicable.",
    },
    {
      type: "list",
      name: "license",
      message: "Choose your license",
      choices: ["Apache_2.0", "MIT", "Boost_1.0", "MPL_2.0"],
    },
    {
      type: "input",
      name: "username",
      message: "Please enter your Github username!",
    },
    {
      type: "input",
      name: "email",
      message: "Please enter your email address.",
    },
  ])
  .then((answers) => {
    fs.writeFile("README.md", markdown(answers), (err) =>
      err ? console.log(err) : console.log("Read me file has be created!")
    );
  });
