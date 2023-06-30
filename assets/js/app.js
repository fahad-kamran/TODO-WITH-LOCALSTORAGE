let getStudents = document.getElementById('getStudents');
let stdName = document.getElementById('stdName');
let stdRoll = document.getElementById('stdRoll');
let stdEmail = document.getElementById('stdEmail');
let stdClass = document.getElementById('stdClass');
let stdSubject = document.getElementById('stdSubject');
let prevStds = localStorage.getItem('students');
let students = prevStds ? JSON.parse(prevStds) : [];

// add students function
const addStudent = event => {
    event.preventDefault();
    let std = {
        name: stdName.value,
        roll: stdRoll.value,
        email: stdEmail.value,
        class: stdClass.value,
        subject: stdSubject.value,
    };
    students.push(std);
    let stringify = JSON.stringify(students);
    localStorage.setItem('students', stringify);

    stdName.value = '';
    stdRoll.value = '';
    stdEmail.value = '';
    stdClass.value = '';
    stdSubject.value = '';

    window.location.href = '/index.html';
};

if (students.length > 0) {
    students.map((item, index) => {
        getStudents.innerHTML += `
            <tr key=${index}>
                <td>${index + 1}</td>
                <td>${item.roll}</td>
                <td>${item.name}</td>
                <td>${item.email.toLowerCase()}</td>
                <td>${item.class}</td>
                <td>${item.subject}</td>
                <td>
                    <button class='btn btn-danger btn-sm' onclick='deleteRow(${index})'>Delete</button>
                </td>
            </tr>
        `;
    });
}
else {
    getStudents.innerHTML = `<tr><td colspan='7' align='center'>No Student</td></tr>`;
};

// delete row function
const deleteRow = (id) => {
    students.splice(id, 1);
    let stringify = JSON.stringify(students);
    localStorage.setItem('students', stringify);
    location.reload();
}
