module.exports = templateData => {
    console.log(templateData)

    return `
    # ${templateData.projectTitle}
    
    ## Description:
    ${templateData.description}

    ## Table of Contents
    1. [Installation](#Installation)
    2. [Usage](#Usage)
    3. [Contributing](#Contributing)
    4. [Tests](#Tests)
    5. [Questions](#Questions)

    ## Installation <a name="Installation"></a>
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
    `;
};