const inquirer = require('inquirer');
const fs = require('fs');
const generatePage = require('./src/readme-template');


const promptProject = () => {

    return inquirer.prompt([
        {
            type: 'input',
            name: 'gitHubUserName',
            message: 'Enter your GitHub Username (required)',
            validate: gitHubUserNameInput => {
                if(gitHubUserNameInput) {
                    return true;
                } else {
                    console.log('Please enter your name!');
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter your email address (required)',
            validate: emailInput => {
                if(emailInput) {
                    return true;
                } else {
                    console.log('Please enter your email!');
                }
            }
        },
        {
            type: 'input',
            name: 'projectTitle',
            message: 'What is the title of your project?',
            validate: projectTitleInput => {
                if(projectTitleInput) {
                    return true;
                } else {
                    console.log('Please enter your project title!');
                }
            }
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
            type: 'list',
            name: 'license',
            message: 'Please choose whether you prefer an MIT license, a General Public License (GNU), or none.',
            choices: ['MIT license', 'General Public License', 'None']
        },
        {
            type: 'input',
            name: 'contributing',
            message: 'Please provide what the user needs to know about contributing to the repository',
        },
        {
            type: 'input',
            name: 'tests',
            message: 'Provide test examples.'
        }
    ])
}
        
promptProject()
  .then(portfolioData => {
    const pageMD = generatePage(portfolioData);

    fs.writeFile('./README.md', pageMD, err => {
      if (err) throw new Error(err);

      console.log('Page created! Check out README.md in this directory to see it!');
    });
  });

