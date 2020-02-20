// import variables
const inquirer = require("inquirer");
const Employee = require("./lib/Employee")
const Intern = require("./lib/Intern")
const Engineer = require("./lib/Engineer")
const Manager = require("./lib/Manager")
var fs = require("fs")

var role;
var employeeId;
var employeeEmail;
var employeeName;
var employeeExtra;
getCard()

function getCard(){
    var info = inquirer
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
    }
    )
    return info
    .then(function(res){
        if(res.employeeRole === 'Engineer'){
            return inquirer
            .prompt({
                type: "input",
                message: "Github Username:",
                name: "github"
            })
            .then(function(res2){
                var newEmployee = new Engineer(res.name, res.id, res.email, res2.github)
                role = newEmployee.getRole();
                employeeName = newEmployee.getName();
                employeeId = newEmployee.getId();
                employeeEmail = newEmployee.getEmail();
                employeeExtra = "Github: " + newEmployee.getGithub();
                console.log(employeeEmail)
            })
        }
        else if(employeeRole === 'Intern'){
            return inquirer
            .prompt({
                type: "input",
                message: "School:",
                name: "school"
            })
            .then(function(res2){
                 newEmployee = new Engineer(name, id, email, school)
                 role = newEmployee.getRole();
                 employeeName = newEmployee.getName();
                 employeeId = newEmployee.getId();
                 employeeEmail = newEmployee.getEmail();
                 employeeExtra = "School: " + newEmployee.getSchool();
            })
        }
        else if(employeeRole === 'Manager'){
            return inquirer
            .prompt({
                type: "input",
                message: "Office Number:",
                name: "office"
            })
            .then(function(res2){
                 newEmployee = new Engineer(name, id, email, office)
                 role = newEmployee.getRole();
                 employeeName = newEmployee.getName();
                 employeeId = newEmployee.getId();
                 employeeEmail = newEmployee.getEmail();
                 employeeExtra = "Office Number: " + newEmployee.getOfficeNumber();
            })
        }
        var fileRout = "templates/" + role + ".html"
        var template = fs.readFile(fileRout, "utf8", function(error, data) {
            if (error) {
              return console.log(error);
            }
                      console.log(data);
        });
    })
}

