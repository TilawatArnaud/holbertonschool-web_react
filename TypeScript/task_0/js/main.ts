interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

// Create two student objects
const student1: Student = {
    firstName: 'John',
    lastName: 'Doe',
    age: 20,
    location: 'New York'
};

const student2: Student = {
    firstName: 'Jane',
    lastName: 'Smith',
    age: 22,
    location: 'Los Angeles'
};

// Create an array of students
const studentsList: Student[] = [student1, student2];

// Render the table
const table = document.createElement('table');
const tbody = document.createElement('tbody');

table.style.border = '1px solid black';
table.style.borderCollapse = 'collapse';
table.style.width = '50%';
table.style.margin = '20px 0';

// Create table header
const thead = document.createElement('thead');
const headerRow = document.createElement('tr');
const headers = ['First Name', 'Location'];

headers.forEach(headerText => {
    const th = document.createElement('th');
    th.textContent = headerText;
    th.style.border = '1px solid black';
    th.style.padding = '8px';
    th.style.textAlign = 'left';
    headerRow.appendChild(th);
});

thead.appendChild(headerRow);
table.appendChild(thead);

// Add student data to the table
studentsList.forEach(student => {
    const row = document.createElement('tr');
    
    const firstNameCell = document.createElement('td');
    firstNameCell.textContent = student.firstName;
    firstNameCell.style.border = '1px solid black';
    firstNameCell.style.padding = '8px';
    
    const locationCell = document.createElement('td');
    locationCell.textContent = student.location;
    locationCell.style.border = '1px solid black';
    locationCell.style.padding = '8px';
    
    row.appendChild(firstNameCell);
    row.appendChild(locationCell);
    tbody.appendChild(row);
});

table.appendChild(tbody);
document.body.appendChild(table);