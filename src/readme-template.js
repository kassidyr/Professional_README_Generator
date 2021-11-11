module.exports = (projectTitle, description, installation, usage, contributing, tests, gitHubUserName, email) => {
    return `
    # ${projectTitle}
    
    ## ${description}
    
    ## ${installation}
    
    ## ${usage}
    
    ## ${contributing}
    
    ## ${tests}
    
    ## GitHub Profile: ${gitHubUserName} 
    For questions, please email ${email}
    `;
};