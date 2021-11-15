module.exports = templateData => {
    console.log(templateData)

    //Generate Badge for top of README
    function licenseBadge (license) {
        if(license == "MIT license") {
            return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]`;
        }
        else if (license == "General Public License") {
            return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)]`;
        }
        else {
            return ``;
        }
    }

    //Create Section 6 Function
    function licenseSection (license) {
        if(license =="None") {
            return``;
        }
        else {
            return `### Licensed under ${license}`
        }
    }

    //Create Section 6 Table of Contents Function
    function licenseToc (license) {
        if(license == "None") {
            return ``;
        }
        else{
            return`6. [License](#license)`
        }
    }

    return `
    # ${templateData.projectTitle}

    ${licenseBadge(templateData.license)}
    
    ## Description:
    ${templateData.description}

    ## Table of Contents
    1. [Installation](#installation)
    2. [Usage](#usage)
    3. [Contributing](#contributing)
    4. [Tests](#tests)
    5. [Questions](#questions)
    ${licenseToc(templateData.license)}

    ## Installation:
    ${templateData.installation}

    ## Usage:
    ${templateData.usage}
    
    ## Contributing:
    ${templateData.contributing}
    
    ## Tests:
    ${templateData.tests}
    
    ## Questions:
    GitHub Profile: ${templateData.gitHubUserName} 
    For questions, please email ${templateData.email}
    
    ${licenseSection(templateData.license)}
    `;
};