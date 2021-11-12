module.exports = templateData => {
    console.log(templateData)

    return `
    # ${templateData.projectTitle}
    
    ## Description:
    ${templateData.description}

    ## Table of Contents
    1. [Questions](#questions)

    
    ## Installation:
    ${templateData.installation}
    
    ## Usage:
    ${templateData.usage}
    
    ## Contributing:
    ${templateData.contributing}
    
    ## Tests:
    ${templateData.tests}
    
    ## <a name="questions">Questions<a>
    GitHub Profile: ${templateData.gitHubUserName} 
    For questions, please email ${templateData.email}
    `;
};