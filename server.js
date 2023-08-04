// Made const for modules required
const inquirer = require('inquirer');
const mySQL = require('mysql');

// Making a connection to the SQL database
var connection = mysql.createConnection({
    host: "localhost",
    port: 3001,
    user: "root",
    password: "rootroot",
    database: "employees_db"
  });

// Creating the first prompt that will display when application is started
function firstPrompt() {
    inquirer
        .prompt({
            type: 'list',
            choices: [
                "Add department",
                "Add role",
                "Add employee",
                "View departments",
                "View roles",
                "View employees",
                "Update employee role",
                "Quit"
            ]
        })
}