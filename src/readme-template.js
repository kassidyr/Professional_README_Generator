module.exports = templateData => {
    console.log(templateData)

    return `
    # ${templateData.projectTitle}
    
    ## Description:
    ${templateData.description}

    ## Table of Contents
    1. [Installation]($Installation)
    2.
    3.
    4.
    5. [Questions](#Questions)

    
    ## Installation:
    ${templateData.installation}

    ## Usage:
    ${templateData.usage}
    
    ## Contributing:
    ${templateData.contributing}
    
    ## Tests:
    ${templateData.tests}
    
    ## Questions
    GitHub Profile: ${templateData.gitHubUserName} 
    For questions, please email ${templateData.email}
    `;
};