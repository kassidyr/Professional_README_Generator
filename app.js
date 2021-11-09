const inquirer = require('inquirer');
// const fs = require('fs');
// const generatePage = require('./src/readme-template');

inquirer
    .prompt([
        {
            type: 'input',
            name: 'projectTitle',
            message: 'What is the title of your project?'
        }
    ])
    .then(answers => console.log(answers));

// const pageMD = generatePage(projectTitle, description, tableOfContents, installation, usage, contributing, tests, emailQuestions);

// fs.writeFile('./README.md', pageMD, err => {
//     if (err) throw err;

//     console.log('README complete! Check out README.md to see the output!');
// });
