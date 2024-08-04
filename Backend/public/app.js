/*Login/sign up modal */
document.addEventListener('DOMContentLoaded', () => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.5 });

    document.querySelectorAll('.section').forEach(section => {
        observer.observe(section);
    });

    const modal = document.getElementById('modal');
    const loginButton = document.getElementById('loginButton');
    const closeButton = document.querySelector('.close');

    loginButton.addEventListener('click', () => {
        modal.style.display = 'flex';
    });

    closeButton.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    }
});

document.addEventListener('DOMContentLoaded', (event) => {
    const video = document.getElementById('myVideo');

    video.addEventListener('mouseover', () => {
        video.controls = true;
    });

    video.addEventListener('mouseout', () => {
        video.controls = false;
    });
});

/*Enrolment form modal */
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById("formGroup");
    const modal = document.getElementById("enrollModal");
    const studentNameSpan = document.getElementById("studentName");
    const container = document.getElementById("StudentEnroll");
    const modalMessage = document.getElementById("modalMessage");
    const continueButton = document.getElementById("continueButton");

    form.addEventListener("submit", (event) => {
        event.preventDefault();

        const name = document.getElementById("name").value;
        const surname = document.getElementById("surname").value;
        const id = document.getElementById("id").value;
        const address1 = document.getElementById("adr").value;
        const city = document.getElementById("city").value;
        const zip = document.getElementById("zip").value;
        const province = document.getElementById("province").value;
        const gender = document.querySelector('input[name="gender"]:checked');
        const email = document.getElementById("email").value;
        const course = document.getElementById("course").value;
        const attendance = document.querySelector('input[name="attendance"]:checked');

        if (name && surname && id && address1 && city && zip && province && gender && email && course && attendance) {
            studentNameSpan.textContent = name;
            modalMessage.textContent = "Welcome, " + name + "! You have successfully enrolled in the course.";
            continueButton.style.display = "none";  // Hide the continue button if the form is complete
        } else {
            modalMessage.textContent = "The form is incomplete. Please fill out all required fields.";
            continueButton.style.display = "inline-block";  // Show the continue button if the form is incomplete
        }

        container.classList.add("background");
        modal.style.display = 'block';
    });

    window.addEventListener("click", (event) => {
        if (event.target == modal) {
            modal.style.display = 'none';
            container.classList.remove("background");
        }
    });

    continueButton.addEventListener("click", () => {
        modal.style.display = 'none';
        container.classList.remove("background");
    });
});

/*courses side nav*/
function toggleNav() {
    var sidebar = document.querySelector('.sidebar');
    var toggleStrip = document.querySelector('.toggle-strip');
    var toggleIcon = document.getElementById('toggle-icon');

    if (sidebar.style.width === '250px') {
        sidebar.style.width = '0';
        toggleStrip.style.left = '0';
        toggleIcon.classList.remove('fa-arrow-left');
        toggleIcon.classList.add('fa-arrow-right');
    } else {
        sidebar.style.width = '250px';
        toggleStrip.style.left = '250px';
        toggleIcon.classList.remove('fa-arrow-right');
        toggleIcon.classList.add('fa-arrow-left');
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const loginButton = document.getElementById('loginButton');
    const closeButton = document.querySelector('.close');
    const passwordChangeModal = document.getElementById('passwordChangeModal');
    const closePasswordChange = document.getElementById('closePasswordChange');
    const changePasswordForm = document.getElementById('changePasswordForm');

    loginButton.addEventListener('click', () => {
        modal.style.display = 'flex';
    });

    closeButton.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    closePasswordChange.addEventListener('click', () => {
        passwordChangeModal.style.display = 'none';
    });

    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        } else if (event.target == passwordChangeModal) {
            passwordChangeModal.style.display = 'none';
        }
    }

    document.getElementById('FormLogin').addEventListener('submit', function (event) {
        event.preventDefault();
        const studentId = document.getElementById('StudentID').value;
        const password = document.getElementById('password').value;

        fetch('http://localhost:3000/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ studentId, password })
        })
        .then(response => response.json())
        .then(data => {
            if (data.message === 'Login successful') {
                if (password === 'BelgiumCampus') {
                    passwordChangeModal.style.display = 'flex';
                } else {
                    window.location.href = 'Enroll.html';
                }
            } else {
                alert(data.message);
            }
        })
        .catch(error => console.error('Error:', error));
    });

    changePasswordForm.addEventListener('submit', function (event) {
        event.preventDefault();
        const studentId = document.getElementById('StudentID').value;
        const newPassword = document.getElementById('newPassword').value;
        const confirmPassword = document.getElementById('confirmPassword').value;

        if (newPassword !== confirmPassword) {
            alert('Passwords do not match.');
            return;
        }

        fetch('http://localhost:3000/changePassword', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ studentId, newPassword })
        })
        .then(response => response.json())
        .then(data => {
            alert(data.message);
            passwordChangeModal.style.display = 'none';
            modal.style.display = 'none';
        })
        .catch(error => console.error('Error:', error));
    });
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

async function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(document.getElementById('formGroup'));
    const data = {};
    formData.forEach((value, key) => {
        data[key] = value;
    });

    try {
        const response = await fetch('http://localhost:3000/saveForm', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        const result = await response.json();
        alert(result.message);
        document.getElementById('modal').style.display = 'flex';
        document.getElementById('FormLogin').innerHTML = `
            <label for="StudentID">StudentID:</label>
            <input type="text" id="StudentID" name="StudentID" value="${result.studentId}" required>
            <label for="password">Password:</label>
            <input type="password" id="password" name="password" value="BelgiumCampus" required>
            <button type="submit">Login</button>`;
    } catch (error) {
        console.error('Error:', error);
    }
}




