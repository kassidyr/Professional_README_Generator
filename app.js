const fs = require('fs');
const generatePage = require('./src/readme-template');

const profileDataArgs = process.argv.slice(9);

console.log(profileDataArgs);

const [projectTitle, description, tableOfContents, installation, usage, contributing, tests, emailQuestions] = profileDataArgs;

console.log (projectTitle, description, tableOfContents, installation, usage, contributing, tests, emailQuestions);

const pageMD = generatePage(projectTitle, description, tableOfContents, installation, usage, contributing, tests, emailQuestions);

fs.writeFile('./README.md', pageMD, err => {
    if (err) throw err;

    console.log('README complete! Check out README.md to see the output!');
});
