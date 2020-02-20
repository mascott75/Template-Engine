// import variables
const inquirer = require("inquirer");
const Employee = require("./lib/Employee")
const Intern = require("./lib/Intern")
const Engineer = require("./lib/Engineer")
const Manager = require("./lib/Manager")

function getCard(){
    return inquirer
    .prompt({
        type: "list",
        message: "Type of Employee:",
        name: "employeeRole",
        choices: ['Engineer', 'Intern', 'Manager']
    },
    {
        type: "input",
        message: "Employee Name:",
        name: "name"
    },
    {
        type: "input",
        message: "Employee ID:",
        name: "id"
    },
    {
        type: "input",
        message: "Employee Email:",
        name: "email"
    })
    .then(function(inquirer){
        if(employeeRole === 'Engineer'){
            return inquirer
            .prompt({
                type: "input",
                message: "Github Username:",
                name: "github"
            })
            .then(function(inquirer){
                var newEmployee = new Engineer(name, id, email, github)
                var role = newEmployee.getRole();
                var employeeName = newEmployee.getName();
                var employeeId = newEmployee.getId();
                var employeeEmail = newEmployee.getEmail();
                var employeeExtra = newEmployee.getGithub();
            })
        }
        else if(employeeRole === 'Intern'){
            return inquirer
            .prompt({
                type: "input",
                message: "School:",
                name: "school"
            })
            .then(function(inquirer){
                var newEmployee = new Engineer(name, id, email, school)
                var role = newEmployee.getRole();
                var employeeName = newEmployee.getName();
                var employeeId = newEmployee.getId();
                var employeeEmail = newEmployee.getEmail();
                var employeeExtra = newEmployee.getSchool();
            })
        }
        else if(employeeRole === 'Manager'){
            return inquirer
            .prompt({
                type: "input",
                message: "Office Number:",
                name: "office"
            })
            .then(function(inquirer){
                var newEmployee = new Engineer(name, id, email, office)
                var role = newEmployee.getRole();
                var employeeName = newEmployee.getName();
                var employeeId = newEmployee.getId();
                var employeeEmail = newEmployee.getEmail();
                var employeeExtra = newEmployee.getOfficeNumber();
            })
        }
    })
}

