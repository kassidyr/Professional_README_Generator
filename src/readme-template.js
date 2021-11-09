module.exports = (projectTitle, description, tableOfContents, installation, usage, contributing, tests, emailQuestions) => {
    return `
    # ${projectTitle}
    
    ## ${description}
    
    ## ${tableOfContents}
    
    ## ${installation}
    
    ## ${usage}
    
    ## ${contributing}
    
    ## ${tests}
    
    ## For questions, please email ${emailQuestions}
    `;
};