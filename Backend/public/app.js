document.addEventListener('DOMContentLoaded', () => {
    // Intersection Observer for sections
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

    // Modal functionality
    const modal = document.getElementById('modal');
    const loginButton = document.getElementById('loginButton');
    const closeButton = document.querySelector('.close');

    if (loginButton) {
        loginButton.addEventListener('click', () => {
            if (modal) modal.style.display = 'flex';
        });
    }

    if (closeButton) {
        closeButton.addEventListener('click', () => {
            if (modal) modal.style.display = 'none';
        });
    }

    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    };

    // Video controls on hover
    const video = document.getElementById('myVideo');

    if (video) {
        video.addEventListener('mouseover', () => {
            video.controls = true;
        });

        video.addEventListener('mouseout', () => {
            video.controls = false;
        });
    }
});

// Courses side nav
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

    if (loginButton) {
        loginButton.addEventListener('click', () => {
            if (modal) modal.style.display = 'flex';
        });
    }

    if (closeButton) {
        closeButton.addEventListener('click', () => {
            if (modal) modal.style.display = 'none';
        });
    }

    if (closePasswordChange) {
        closePasswordChange.addEventListener('click', () => {
            if (passwordChangeModal) passwordChangeModal.style.display = 'none';
        });
    }

    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        } else if (event.target == passwordChangeModal) {
            passwordChangeModal.style.display = 'none';
        }
    };

    const formLogin = document.getElementById('FormLogin');

    if (formLogin) {
        formLogin.addEventListener('submit', function (event) {
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
                        if (passwordChangeModal) passwordChangeModal.style.display = 'flex';
                    } else {
                        window.location.href = 'Enroll.html';
                    }
                } else {
                    alert(data.message);
                }
            })
            .catch(error => console.error('Error:', error));
        });
    }

    if (changePasswordForm) {
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
                if (passwordChangeModal) passwordChangeModal.style.display = 'none';
                if (modal) modal.style.display = 'none';
            })
            .catch(error => console.error('Error:', error));
        });
    }
});

const signUpForm = document.getElementById('signUpForm');

if (signUpForm) {
    signUpForm.addEventListener('submit', function (event) {
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
}

function populateEnrollmentForm(data) {
    const name = document.getElementById('name');
    const surname = document.getElementById('surname');
    const id = document.getElementById('id');
    const adr1 = document.getElementById('adr1');
    const adr2 = document.getElementById('adr2');
    const city = document.getElementById('city');
    const zip = document.getElementById('zip');
    const province = document.getElementById('province');
    const gender = document.querySelector(`input[name="gender"][value="${data.gender}"]`);
    const email = document.getElementById('email');
    const course = document.getElementById('course');
    const attendance = document.querySelector(`input[name="attendance"][value="${data.attendance}"]`);

    if (name) name.value = data.name;
    if (surname) surname.value = data.surname;
    if (id) id.value = data.id;
    if (adr1) adr1.value = data.address[0];
    if (adr2) adr2.value = data.address[1];
    if (city) city.value = data.address[2];
    if (zip) zip.value = data.address[3];
    if (province) province.value = data.province;
    if (gender) gender.checked = true;
    if (email) email.value = data.username;
    if (course) course.value = data.course;
    if (attendance) attendance.checked = true;
};

async function handleSubmit(event) {
    event.preventDefault();

    const form = document.getElementById('formGroup');
    const formData = new FormData(form);
    const data = {};

    let allFieldsFilled = true;

    formData.forEach((value, key) => {
        if (!value) {
            allFieldsFilled = false;
        }
        data[key] = value;
    });

    if (!allFieldsFilled) {
        alert('Please fill in all fields.');
        return;
    }

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

        const modal = document.getElementById('modal');
        const formLogin = document.getElementById('FormLogin');

        if (modal) modal.style.display = 'flex';
        if (formLogin) {
            formLogin.innerHTML = `
                <label for="StudentID">StudentID:</label>
                <input type="text" id="StudentID" name="StudentID" value="${result.studentId}" required>
                <label for="password">Password:</label>
                <input type="password" id="password" name="password" value="BelgiumCampus" required>
                <button type="submit">Login</button>`;
        }
    } catch (error) {
        console.error('Error:', error);
    }
}

// document.addEventListener('DOMContentLoaded', () => {
//     const dashContent = document.querySelector('.dashboardContent');

//     if (dashContent) {
//         dashContent.innerHTML = '<h1>Helaoo</h1>';

//         const tHead = document.createElement('thead');
//         const tBody = document.createElement('tbody');
//         const table = document.createElement('table');

//         const headings = ['Module', 'Module Code', 'NQF', 'Credits', 'Venues', 'Lecturers'];

//         headings.forEach(data => {
//             const th = document.createElement('th');
//             th.textContent = data;
//             tHead.appendChild(th);
//         });

//         table.appendChild(tHead);
//         table.appendChild(tBody); // Add tbody to the table

//         dashContent.appendChild(table);
//     }
// });

//Creating table for course
function createHome() {
    let dashContent = document.querySelector(".dashboardContent");
    dashContent.innerHTML = ''  

    let tHead = document.createElement("thead");
    let tBody = document.createElement("tbody");
    let table = document.createElement("table");
    let bcompData = [
      ["Academic Writing", "ACW181", 5, "4", "Phi", "Simba"],
      ["Computer Architecture 181", "COA181", 5, "4", "Chi", "Zuma"],
      ["Database Development 181", "DBD181", 5, "12", "Kappa", "Malema"],
      ["Information Systems 181", "INF181", 5, "5", "Lambda", "Neil"],
      ["Linear Programming 181", "LPR181", 5, "11", "Omega", "Gift"],
    ];

    let Heading = [
      "Module",
      "Module Code",
      "NQF",
      "Credits",
      "Venues",
      "Lecturers",
    ];

    // Create and append the heading
    // const heading = document.createElement('h1');
    // heading.textContent = 'Belgium Campus Home Dashboard';
    // heading.style.textAlign = 'center';
    // heading.style.color = '#333';
    // document.getElementsByClassName('dashboardContent').appendChild(heading);

    Heading.forEach((data) => {
      let th = document.createElement("th");
    th.style.padding = '10px';
    th.style.backgroundColor = 'rgba(0, 0, 0, 0.85)';
    th.style.color = 'white';
    th.style.textAlign = 'center';
    th.style.fontSize = '1.3em';

      th.textContent = data;
      tHead.appendChild(th);
    });

    table.appendChild(tHead);
    table.appendChild(tBody); // Add tbody to the table

    bcompData.forEach((rowData) => {
      const row = document.createElement("tr");
      rowData.forEach((cellData) => {
        const cell = document.createElement("td");
        cell.style.padding = "5px";
        cell.style.border = "1px solid black";
        cell.textContent = cellData;
        row.appendChild(cell);
      });
      tBody.appendChild(row);
    });

    const rows = table.querySelectorAll('tr');
            for (let i = 1; i < rows.length; i++) {
                if (i % 2 === 0) {
                    rows[i].style.backgroundColor = '#f2f2f2';
                }
            }

            // Add hover effect
            rows.forEach(row => {
                row.addEventListener('mouseover', () => {
                    row.style.backgroundColor = '#ddd';
                });
                row.addEventListener('mouseout', () => {
                    row.style.backgroundColor = '';
                    if (Array.from(rows).indexOf(row) % 2 === 0 && row !== headerRow) {
                        row.style.backgroundColor = '#f2f2f2';
                    }
                });
            });

    table.appendChild(tBody);
    // table.style.all = "1px solid black";
    // table.style.borderCollapse = "collapse";
    table.style.width = '70%';
    table.style.margin = '0 auto';
    table.style.borderCollapse = 'collapse';
    table.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.1)';
   
    dashContent.appendChild(table);
  }
