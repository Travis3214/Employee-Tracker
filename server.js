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
                "View employees",
                "Add employee",
                "View roles",
                "Add role",
                "View departments",
                "Add department",
                "Update current employee's role",
                "Quit"
            ]
        })
}