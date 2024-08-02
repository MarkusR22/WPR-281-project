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

    window.onclick = function(event) {
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



