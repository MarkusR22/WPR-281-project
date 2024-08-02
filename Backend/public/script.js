document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault();
    const username = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;

    fetch('http://localhost:3000/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
    })
        .then(response => response.json())
        .then(data => {
            if (data.message === 'Login successful') {
                if (data.enrollment) {
                    populateEnrollmentForm(data.enrollment);
                }
                window.location.href = 'Enroll.html';
            } else {
                alert(data.message);
            }
        })
        .catch(error => console.error('Error:', error));
});

document.getElementById('signUpForm').addEventListener('submit', function (event) {
    event.preventDefault();
    const username = document.getElementById('signUpUsername').value;
    const password = document.getElementById('signUpPassword').value;

    fetch('http://localhost:3000/signup', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
    })
        .then(response => response.json())
        .then(data => {
            alert(data.message);
        })
        .catch(error => console.error('Error:', error));
});

document.getElementById('formGroup').addEventListener('submit', function (event) {
    event.preventDefault();

    const enrollmentData = {
        username: document.getElementById('email').value,
        name: document.getElementById('name').value,
        surname: document.getElementById('surname').value,
        id: document.getElementById('id').value,
        address: [
            document.getElementById('adr').value,
            document.getElementById('adr').value,
            document.getElementById('city').value,
            document.getElementById('zip').value,
        ],
        province: document.getElementById('province').value,
        gender: document.querySelector('input[name="gender"]:checked').value,
        course: document.getElementById('course').value,
        attendance: document.querySelector('input[name="attendance"]:checked').value
    };

    fetch('http://localhost:3000/enroll', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(enrollmentData)
    })
    .then(response => response.json())
    .then(data => {
        alert(data.message);
    })
    .catch(error => console.error('Error:', error));
});

function populateEnrollmentForm(data) {
    document.getElementById('name').value = data.name;
    document.getElementById('surname').value = data.surname;
    document.getElementById('id').value = data.id;
    const addressFields = data.address;
    document.getElementById('adr').value = addressFields[0];
    document.getElementById('adr').value = addressFields[1];
    document.getElementById('city').value = addressFields[2];
    document.getElementById('zip').value = addressFields[3];
    document.getElementById('province').value = data.province;
    document.querySelector(`input[name="gender"][value="${data.gender}"]`).checked = true;
    document.getElementById('email').value = data.username;
    document.getElementById('course').value = data.course;
    document.querySelector(`input[name="attendance"][value="${data.attendance}"]`).checked = true;
};
