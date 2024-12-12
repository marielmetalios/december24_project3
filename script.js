// Mar checking live html
console.log (document);


// TODO: Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');
// id = add-employees-btn 

//  
  // TODO: Get user input to create and return an array of employee objects

// define the array for collectEmployees so the entries can be logged

// define collectEmployees and employee Info as arrays to populate with data from the new arrays (based on user input) BUT stop when the array hits a length of 6 [0],[1],[2],[3],[4],[5])     !
const collectEmployees = []
let employeeInfo = [firstName, lastName, salary];

function employeeInfo () {
// while loop to stop collecting data after 5 [0-6] users have been added
  while (employeeInfo.length < 6) {
    let firstName = prompt ("Hi there, what is your first name?", "Please enter your first name");
    let lastName = prompt ("Hi again, what is your last name?", "Please enter your last name");
    let salary = prompt ("One more thing! $$$", "Please enter your target salary");
    
// check if salary input is a number 
  if (isNaN(salary)) {
    console.log('Not a Number');
  } else {
    console.log(`Salary is a #, ${salary}`);
  }

// add each data entry (objects - numbers and strings) into the array
employeeInfo.push(`${firstName}, ${lastName}, ${salary}`);
  }
  console.log("New User:", newUser);

// OK / Cancel. Confirm here is a boolean! True = OK, False = Cancel
if (confirm ("Add more employees?")) {
  console.log ("Another employee added");
} else {
  console.log ("No more employees to add");
}

  return collectEmployees (firstName, lastName, salary);
}

// Mar test for console.log to make sure prompt function is working
console.log (firstName, lastName, salary);

// Mar test to make sure collectEmployees array is actually populating with objects
console.log (collectEmployees);



//  do we need to call the collect employees function again?? 
// collectEmployees ();


//FIRST PASS CODE BELOW

// MAR TESTING CONSOLE.LOG
 if (firstName = 'Mariel') {
  console.log(`${firstName}`);
}

if (lastName = 'Metalios') {
  console.log(`${lastName}`);
}

// Mar starting code -- created employeesArray as test variable and allow it to be populated!
let employeesArray = [firstName, lastName, salary];
// // create newEmployee as variable and allow it to be populated! But we also have employeesArray below...
let newEmployee = [firstName, lastName, salary];





TODO:// Display the average salary
  // TODO: Calculate and display the average salary
// MAR TESTING FOR AVERAGE
// the constant variable displayAverageSalary is assigned to employeesArray function.
// from there, run a for loop to count all salaries [i] within the employeesArray
//  then calc the average!

const displayAverageSalary = function(employeesArray) {
  let sum = 0;
  for (let i = 0; i < employeesArray.length; i++) { 
    sum += employeesArray[i].salary ;
  }
    return (sum / employeesArray.length);
  }
  

  console.log (`The average employee salary between our" ${employeeInfo.firstName.length} "employee(s) is" `displayAverageSalary`); 

// MAR - NEED TO ASK ABOUT THE SUM + EMPLOYEES.ARRAY[I]???? and +=

// // Select a random employee
// const getRandomEmployee = function(employeesArray) {
//   // TODO: Select and display a random employee
// }

// trackEmployeeData ();


/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function(employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US",{
      style:"currency",
      currency:"USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function() {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function(a,b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);
