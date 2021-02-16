const inquirer = require('inquirer');
// const fs = require('fs');

inquirer
  .prompt([
  /* Pass your questions in here */
      {
          type: "input",
          name: "GitHub",
          message: "What is your GitHub user name?",
      },
      {
          type: "inout",
          name: "Email", 
          message: "What is your email?",
      },
      {
          type: "input", 
          name: "Readme",
          message: "What is your projects name?",
      },
      {
        type: "input",
        name: "description",
        message: "Please write a short description of your project.",
      },
      {
        type: "input",
        name: "license",
        message: "What kind of license should your project have?",
      },
      {
        type: "input",
        name: "dependencies",
        message: "What command should be run to install dependencies?",
      },
      {
        type: "input",
        name: "runtests",
        message: "What command should be run to run tests?",
      },
      {
        type: "input",
        name: "repo",
        message: "What does the user need to know about using the repo?",
      },
      {
        type: "input",
        name: "contributions",
        message: "What does the user need to know about contributing to the repo?",
      },
  ])


.then(answers => {
    // Use user feedback for... whatever!!
      console.log(answers.GitHub)
      console.log(answers.Email)
      console.log(answers.Project)
      console.log(answers.description)
      console.log(answers.dependencies)
      console.log(answers.runtests)
      console.log(answers.repo)
      console.log(answers.contributions)
  })

  .catch(error => {
    console.log(error)
  });
