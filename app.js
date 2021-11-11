const inquirer = require('inquirer');
// const fs = require('fs');
// const generatePage = require('./src/readme-template');

const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'gitHubUserName',
            message: 'Enter your GitHub Username'
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter your emaile address'
        },
    ]);
};

const promptProject = () => {
    console.log(`
    =================
    Add a New Project
    =================
    `);
    return inquirer.prompt([
        {
            type: 'input',
            name: 'projectTitle',
            message: 'What is the title of your project?'
        },
        {
            type: 'input',
            name: 'description',
            message: 'Provide a description of the project (required).'
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Provide a step-by-step description of how to get the development environment running.'
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Provide instructions and examples for use.'
        },
        {
            type: 'checkbox',
            name: 'license',
            message: 'Please choose whether you prefer an MIT license or a General Public License (GNU).',
            choices: ['MIT license', 'General Public License']
        },
        {
            type: 'confirm',
            name: 'contributing',
            message: 'Would you like to add a contributor covenant with guidelines so that other developers can contribute to your project?',
            default: false
        },
        {
            type: 'input',
            name: 'tests',
            message: 'Provide test examples.'
        }
    ])
}
        
promptUser()
    .then(answers => console.log(answers))
    .then(promptProject)
    .then(projectAnswers => console.log(projectAnswers));

// const pageMD = generatePage(projectTitle, description, tableOfContents, installation, usage, contributing, tests, emailQuestions);

// fs.writeFile('./README.md', pageMD, err => {
//     if (err) throw err;

//     console.log('README complete! Check out README.md to see the output!');
// });
