const lecturers = [
    {
        name: 'Francois Venter',
        email: 'venter.f@belgiumcampus.ac.za',
        imgSrc: './Images/FrancoisVenter.png'
    },
    {
        name: 'Tendai Mkwaira',
        email: 'mkwaira.t@belgiumcampus.ac.za',
        imgSrc: './Images/TendaiMkwaira.png'
    },
    // Add more lecturers here
];

const modules = [
    {
        code: 'MTA 181',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam, tenetur?',
        year: 1,
        course: 'BCOMP'
    },
    {
        code: 'ACW 181',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam, tenetur?',
        year: 1,
        course: 'BCOMP'
    },
    // Add more modules here
];


document.addEventListener('DOMContentLoaded', () => {
    const lecturerContainer = document.querySelector('.lecturer');
    const moduleContainer = document.querySelector('.modules');

    lecturers.forEach(lecturer => {
        let lecturerCard = document.createElement('div');
        lecturerCard.innerHTML = `
            <div class="container">
                <div class="lecturerCard">
                    <div class="frontCard">
                        <img src="${lecturer.imgSrc}" alt="${lecturer.name}">
                        <h3>${lecturer.name}</h3>
                    </div>
                    <div class="backCard">
                        <p>${lecturer.email}</p>
                    </div>
                </div>
            </div>
        `;
        lecturerContainer.appendChild(lecturerCard)
    });

    modules.forEach(module => {
        const moduleCard = `
            <div class="module-card ${module.course} year${module.year}">
                <div class="module-header">
                    <h1>${module.code}</h1>
                </div>
                <div class="card-content">
                    <p>${module.description}</p>
                    <button>View More</button>
                </div>
            </div>
        `;
        moduleContainer.insertAdjacentHTML('beforeend', moduleCard);
    });
});



