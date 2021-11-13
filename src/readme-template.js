module.exports = templateData => {
    console.log(templateData)

    //Generate Badge for top of README
    function licenseBadge(license) {
        if(license == "MIT License") {
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
            return`6. [License](#License)`
        }
    }

    return `
    # ${templateData.projectTitle}

    ${licenseBadge(templateData.license)}
    
    ## Description:
    ${templateData.description}

    ## Table of Contents
    1. [Installation](#Installation)
    2. [Usage](#Usage)
    3. [Contributing](#Contributing)
    4. [Tests](#Tests)
    5. [Questions](#Questions)
    ${licenseToc(templateData.license)}

    ## Installation: <a name="Installation"></a>
    ${templateData.installation}

    ## Usage: <a name="Usage"></a>
    ${templateData.usage}
    
    ## Contributing: <a name="Contributing"></a>
    ${templateData.contributing}
    
    ## Tests: <a name="Tests"></a>
    ${templateData.tests}
    
    ## Questions: <a name="Questions"></a>
    GitHub Profile: ${templateData.gitHubUserName} 
    For questions, please email ${templateData.email}
    
    ${licenseSection(templateData.license)}
    `;
};