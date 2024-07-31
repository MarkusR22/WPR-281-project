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
  





