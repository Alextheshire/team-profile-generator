const Employee = require('./lib/Employee')
const Engineer = require('./lib/Engineer')
const Manager = require('./lib/Manager')
const Intern = require('./lib/Intern')
const generateHtml = require("./util/generateHtml")
const inquirer = require("inquirer")
const fs = require("fs")
const team = []

function init() {
    inquirer.prompt([
        {
            type: 'confirm',
            name: 'start',
            message: 'Would you like to start building your team HTML page?'
        }
    ]).then((data) => {
        if(data.start == false) {
            console.log('Goodbye')
        } else{
            generateTeamMember()
        }
    })
}

function generateTeamMember() {
    inquirer.prompt([
        {
            type: 'list',
            choices: ['Engineer', 'Manager', 'Intern'],
            message: 'What type of employee is this team member?',
            name: 'position'
        }
    ]).then((data) => {
        switch (data.position) {
            case "Engineer": 
            inquirer.prompt([
                {
                    type: 'input',
                    name: 'name',
                    message: "What is your employee's name?"
                },
                {
                    type: 'input',
                    name: 'id',
                    message: "What is your employee's ID?"
                },
                {
                    type: 'input',
                    name: 'email',
                    message: "What is your employee's email?"
                },
                {
                    type: 'input',
                    name: 'github',
                    message: "What is your employee's Github username?"
                }
            ]).then((data) => {
                team.push(new Engineer(data.name,data.id,data.email,data.github))
                promptContinue()
            })
                
                break;
            case "Manager":
                inquirer.prompt([
                    {
                        type: 'input',
                        name: 'name',
                        message: "What is your employee's name?"
                    },
                    {
                        type: 'input',
                        name: 'id',
                        message: "What is your employee's ID?"
                    },
                    {
                        type: 'input',
                        name: 'email',
                        message: "What is your employee's email?"
                    },
                    {
                        type: 'input',
                        name: 'officenumber',
                        message: "What is your employee's office number?"
                    }
                ]).then((data) => {
                    team.push(new Manager(data.name,data.id,data.email,data.officenumber))
                    promptContinue()
                })
                    
                
                break;
            case "Intern":
                inquirer.prompt([
                    {
                        type: 'input',
                        name: 'name',
                        message: "What is your employee's name?"
                    },
                    {
                        type: 'input',
                        name: 'id',
                        message: "What is your employee's ID?"
                    },
                    {
                        type: 'input',
                        name: 'email',
                        message: "What is your employee's email?"
                    },
                    {
                        type: 'input',
                        name: 'school',
                        message: "What is your employee's school name?"
                    }
                ]).then((data) => {
                    team.push(new Intern(data.name,data.id,data.email,data.school))
                    promptContinue()
                    
                })
                break;
        
            
        }
    })
}

function promptContinue() {
    inquirer.prompt(
        {
            type: 'confirm',
            name: 'continue',
            message: "Would you like to add another member to your team?"
        }
    ).then((data)=> {
        if(data.continue) {
            generateTeamMember()
        } else {
            generateWebpage()
        }
    })

}

function generateWebpage() {
fs.writeFileSync('./output/index.html',generateHtml(team))
console.log("Webpage created in output folder!")
}

init()