const employees = [
    {name:"Alison Jhonson", age:23, salary:48000},
    {name:"Michael", age:29, salary:40000},
    {name:'Carol Davis', age: 32, salary: 52000},
    {name:"Priya", age:39, salary:30000},
    {name:"Miya", age:50, salary:60000},
    {name:"Arjun", age:41, salary:100000}
];

const employeeList = document.getElementById('employee-database-list');
const resultsOutput = document.getElementById('results-output'); 

// Function to display all employees on page load
const displayEmployees = (employeeArr) => {
    employeeList.innerHTML = "";
    employeeArr.forEach(employee => {
        const {name, age, salary} = employee; 
        const listItem = document.createElement('li');
        listItem.innerHTML = `<strong>${name}</strong> - Age: ${age}, Salary: $${salary}`;
        employeeList.appendChild(listItem);
    });
};

displayEmployees(employees);

// Show Names using .map()
const showNames = () => {
    const names = employees.map(employee => employee.name);
    resultsOutput.innerHTML = `<h3>Employee Names</h3><p>${names.join(', ')}</p>`;
};

// Filter Salary using .filter()
const filterBySalary = () => {
    const highEarners = employees.filter(employee => employee.salary > 40000);
    const highEarnersList = highEarners.map(employee => {
        const {name, age, salary} = employee;
        return `<li>${name} (Age: ${age}, Salary: $${salary})</li>`;
    }).join('');
    resultsOutput.innerHTML = `<h3>High Salary Employees (> $40,000)</h3><ul>${highEarnersList}</ul>`;
};

// Calculate Total Salary Expense using .reduce()
const calculateTotalExpense = () => {
    const totalSalary = employees.reduce((total, employee) => total + employee.salary, 0);
    resultsOutput.innerHTML = `<h3>Total Salary Expense</h3><p>$${totalSalary}</p>`;
};

// Reset Results
const resetResults = () => {
    resultsOutput.innerHTML = '';
};

// Event Listeners
document.getElementById('showNamesBtn').addEventListener('click', showNames);
document.getElementById('filterSalaryBtn').addEventListener('click', filterBySalary);

document.getElementById('totalSalaryBtn').addEventListener('click', calculateTotalExpense);
document.getElementById('resetBtn').addEventListener('click', resetResults);