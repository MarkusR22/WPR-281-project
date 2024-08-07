const port = 3000;

let sName = "";
let sSurname = "";
let sID = "";
let sAdr = "";
let sCity = "";
let sZip = "";
let sProvince = "";
let sGender = "";
let sEmail = "";
let sCourse = "";
let sAttendance = "";
let sStudentId = "";
let sPassword = "";

const CourseStartDates = {
    BCOMP: `December 1, 2024 00:00:00`,
    BIT: `November 1, 2024 00:00:00`,
    DIT: "October 1, 2024 00:00:00",
    CIT: "September 1, 2024 00:00:00",
};

const courseDescriptions = {
    BCOMP: {
        cName: "BA of Computer Science",
        cDescription: `The Bachelor of Computer Science (BSc CS) is an undergraduate degree program designed to provide students with a strong foundation in 
                                    computer science and its applications. This program typically spans four years, including three years of academic coursework and one year of workplace training or 
                                    internship. The curriculum combines theoretical knowledge with practical skills, preparing graduates for various roles in the technology and computing industries.`,
        Duration: `3 years academic
                                    1 year workplace training`,
        NQF: "Level 8",
        Credits: "506",
        SAQAID: "62689",
        Location: `Pretoria Campus
                                    Kempton Park Campus`,
    },
    BIT: {
        cName: "BA in IT",
        cDescription: `A Bachelor in Information Technology (BIT) is an undergraduate degree program focused on the study of information systems, software 
                                    development, computer networks, and related technologies. This program typically spans three to four years and is designed to equip students 
                                    with both theoretical knowledge and practical skills needed to excel in the IT industry.`,
        Duration: `3 years academic`,
        NQF: "Level 7",
        Credits: "360",
        SAQAID: "94121",
        Location: `Pretoria Campus
                                    Kempton Park Campus`,
    },
    DIT: {
        cName: "Diploma in IT",
        cDescription: `A Diploma in Information Technology (IT) is a vocational qualification designed to provide students with foundational knowledge and practical 
                                    skills in the field of IT. This program usually spans one to two years and serves as a stepping stone for further studies or entry-level positions 
                                    in the IT industry. `,
        Duration: `2½ years of academic training
                                    6 months of workplace training`,
        NQF: "Level 6",
        Credits: "360",
        SAQAID: "120097",
        Location: `Pretoria Campus
                                    Kempton Park Campus`,
    },
    CIT: {
        cName: "Certificate in IT",
        cDescription: `A Certificate in Information Technology (IT) is a short-term educational program designed to provide foundational knowledge and practical 
                                    skills in various areas of IT. This program is ideal for individuals looking to enter the IT field quickly, enhance their current job skills, 
                                    or prepare for further education in IT.`,
        Duration: `1 year academic`,
        NQF: "Level 6",
        Credits: "120",
        SAQAID: "71850",
        Location: `Pretoria Campus
                                    Kempton Park Campus`,
    },
};

const lecturers = [
    {
        name: "Francois Venter",
        email: "venter.f@belgiumcampus.ac.za",
        imgSrc: "./Images/FrancoisVenter.png",
        modules: ["MAT 181", "MAT 281", "MAT 381", "DWH 281", "PRG 381", "	DBA 381", "INF 251", "MAT 151", "DWH 271"],
    },
    {
        name: "Tendai Mkwaira",
        email: "mkwaira.t@belgiumcampus.ac.za",
        imgSrc: "./Images/TendaiMkwaira.png",
        modules: ["ACW 181", "ACW 171", "PRG 371", "PRG 261", "PRG 262", "UAX 381", "OPS 251", "SAD 271"],
    },
    {
        name: "Alfred Mazorodze",
        email: "mazorodze.a@belgiumcampus.ac.za",
        imgSrc: "./Images/AlfredMazorodze.png",
        modules: ["COA 181", "COA 171", "COA 161", "MAT 181", "MAT 281", "DBA 381", "DOP 361", "SEN 371", "DWH 271"],
    },
    {
        name: "Anila Mundackal",
        email: "joy.a@belgiumcampus.ac.za",
        imgSrc: "./Images/AnilaMundackal.png",
        modules: ["DBD 181", "DBD 281", "DBD 381", "DBD 261", "DBA 361", "OPS 263", "INL 221", "SAD 271", "MAT 371"],
    },
    {
        name: "Charmaine Tavagwisa",
        email: "tavagwisa.p@belgiumcampus.ac.za",
        imgSrc: "./Images/CharmaineTavagwisa.png",
        modules: ["INF 181", "INF 271", "INF 281", "WPR 252", "WPR 161", "WPR 281", "OPS 251", "OPS 361"],
    },
    {
        name: "Edward Van Niekerk",
        email: "edward@belgiumcampus.ac.za",
        imgSrc: "./Images/EdwardVanNiekerk.png",
        modules: ["INL 101", "INL 102", "INL 201", "INL 202", "INL 321", "INL 161", "INM 381", "INF 251"],
    },
    {
        name: "Raymond Hood",
        email: "hood.r@belgiumcampus.ac.za",
        imgSrc: "./Images/RaymondHood.png",
        modules: ["LPR 181", "LPR 271", "LPR 381", "PRG 181", "PRG 182", "PRG 281", "INM 381", "PET 361", "WPR 371"],
    },
    {
        name: "Francois Smit",
        email: "smit.f@belgiumcampus.ac.za",
        imgSrc: "./Images/FrancoisSmit.png",
        modules: ["NWD 181", "NWD 171", "NWD 361", "WPR 271", "WPR 381", " WPR 281", "SEN 381", "MAT 151", "INL 221"],
    },
    {
        name: "Gift Mudare",
        email: "mudare.g@belgiumcampus.ac.za",
        imgSrc: "./Images/GiftMudare.png",
        modules: [
            "PRG 181",
            "PRG 182",
            "PRG 281",
            "PRG 282",
            "PRG 371",
            "PRG 261",
            "PRG 262",
            "PRG 251",
            "PRG 252",
            "PRG 381"
        ],
    },
    {
        name: "Kudzayi Matekaire",
        email: "matekaire.k@belgiumcampus.ac.za",
        imgSrc: "./Images/KudzayiMatekaire.png",
        modules: ["PRG 171", "PRG 172", "PRG 272", "PMM 381", "MAT 151", "ILE 261", "CNA 261", "MFR 361", "MAT 371"],
    },
    {
        name: "Matildah Chiruka",
        email: "chiruka.m@belgiumcampus.ac.za",
        imgSrc: "./Images/MatildahChiruka.png",
        modules: ["STA 181", "STA 171", "STA 271", "STA 281", "STA 381", "STA 161", "EHA 361", "DBC 161", "LPR 371"],
    },
    {
        name: "Nsuku Ngoveni",
        email: "ngoveni.n@belgiumcampus.ac.za",
        imgSrc: "./Images/NsukuNgoveni.png",
        modules: [
            "WPR 181",
            "WPR 171",
            "WPR 271",
            "WPR 381",
            "WPR 251",
            "WPR 252",
            "WPR 161",
        ],
    },
    {
        name: "Catharina Boshoff",
        email: "boshoff.c@belgiumcampus.ac.za",
        imgSrc: "./Images/CatharinaBoshoff.png",
        modules: ["BUM 181", "BUM 171", "DBA 361", "DWH 281", "PMM 381", "DBD 251", "CNA 261", "WPR 371"],
    },
    {
        name: "Caviner Ruiters",
        email: "ruiters.c@belgiumcampus.ac.za",
        imgSrc: "./Images/CavinerRuiters.png",
        modules: ["ENT 181", "ENT 171", "PRJ 371", "PRJ 381", "SWT 281", "ILE 261", "DBA 371", "MAT 271"],
    },
    {
        name: "Desire Sundire",
        email: "sundire.d@belgiumcampus.ac.za",
        imgSrc: "./Images/DesireSundire.png",
        modules: ["DBD 261", "DBA 361", "DBR 361", "DBD 251", "INL 261", "EHA 361", "DBC 161", "MAT 271", "LPR 371"],
    },
    {
        name: "Dino Giovannoni",
        email: "giovannoni.d@belgiumcampus.ac.za",
        imgSrc: "./Images/DinoGiovannoni.png",
        modules: ["ERP 261", "ERP 271", "ERP 251", "PMM 251", "PRJ 371", "PRJ 381", "DBA 371", "MLG 371"],
    },
    {
        name: "Elaine Rynners",
        email: "rynners.e@belgiumcampus.ac.za",
        imgSrc: "./Images/ElaineRynners.png",
        modules: ["PMM 261", "PMM 271", "SEC 261", "SEC 251", "DBM 251", "INL 261", "OPS 261", "STA 371", "MLG 371"],
    },
    {
        name: "Evangelistars Shayamano",
        email: "shayamano.e@belgiumcampus.ac.za",
        imgSrc: "./Images/EvangelistarsShayamano.png",
        modules: ["ENT 181", "ENT 171", , "SWT 271", "IOT 281", "IOT 271", "PRP 161", "CNA 361", "DST 471"],
    },
    {
        name: "Galaletsang Modimola",
        email: "Modimola.g@belgumcampus.ac.za",
        imgSrc: "./Images/GalaletsangModimola.png",
        modules: ["IOT 261", "IOT 281", "IOT 271", "IOT 161", "IOT 251", "SWT 281", "OPS 261", "STA 371"],
    },
    {
        name: "Lungile Saula",
        email: "saula.l@belgiumcampus.ac.za",
        imgSrc: "./Images/LungileSaula.png",
        modules: [
            "PMM 261",
            "PMM 271",
            "PMM 281",
            "PMM 371",
            "PMM 251",
            "PRJ 371",
            "PRJ 381",
            "DBM 251",
            "PRG 361",
            "PRG 271"
        ],
    },
    {
        name: "Masimba Zengeni",
        email: "zengeni.s@belgiumcampus.ac.za",
        imgSrc: "./Images/MasimbaZengeni.png",
        modules: ["PRJ 361", "PRJ 371", "PRJ 381", "PRJ 251", "PMM 371", "PMM 251", "PRG 361", "INM 371", "DBD 171"],
    },
    {
        name: "Michael Combrinck",
        email: "combrinck.m@belgiumcampus.ac.za",
        imgSrc: "./Images/MichaelCombrinck.png",
        modules: ["WDB 361", "WPR 381", "WPR 251", "DBC 361", "DDB 361", "WSP 361", "PRS 161", "WPR 261", "DBD 271"],
    },
    {
        name: "Philip van Huyssteen",
        email: "vanhuyssteen.p@belgiumcampus.ac.za",
        imgSrc: "./Images/PhilipvanHuyssteen.png",
        modules: ["AIT 481", "AIT 482", "AIT 361", "WPR 381", "PRG 361", "PRS 161", "OPS 262", "MLG 372", "DBD 171"],
    },
    {
        name: "Sannie Zwane",
        email: "zwane.s@belgiumcampus.ac.za",
        imgSrc: "./Images/SannieZwane.png",
        modules: ["DST 481", "DBD 381", "PRG 371", "PRG 261", "PRG 262", "SSX 361", "PRP 161", "DST 471"],
    },
    {
        name: "Shakeng Thamaga",
        email: "thamaga.s@belgiumcampus.ac.za",
        imgSrc: "./Images/ShakengThamaga.png",
        modules: ["COA 161", "COA 171", "WPR 271", "WPR 381", "WPR 251", "SSX 361", "NWD 161", "MLG 372"],
    },
    {
        name: "Stanley Makweche",
        email: "makweche.s@belgiumcampus.ac.za",
        imgSrc: "./Images/StanleyMakweche.png",
        modules: ["PRG 261", "PRG 262", "ENT 181", "ENT 171", "SWA 361", "DBD 361", "NWD 161", 'UAX 371'],
    },
    {
        name: "Tshegofatso Hutang",
        email: "hutang.t@belgiumcampus.ac.za",
        imgSrc: "./Images/TshegofatsoHutang.png",
        modules: ["MAT 171", "MAT 161", "INL 202", "INL 321", "INL 161", "PRG 361", "PRG 161", "AIT 472"],
    },
    {
        name: "Raymond Hood",
        email: "hood.r@belgiumcampus.ac.za",
        imgSrc: "./Images/RaymondHood.png",
        modules: ["LPR 181", "LPR 271", "LPR 381", "DBC 361", "DBF 161", "PRG 161", "UXD 261", "UAX 371"],
    },
    {
        name: "Michael Combrinck",
        email: "combrinck.m@belgiumcampus.ac.za",
        imgSrc: "./Images/MichaelCombrinck.png",
        modules: ["DBD 371", "WFS 361", "WSE 361", "SWA 361", "DBD 361", "DBC 16", "SWA 261", "AIT 471", "INF 171"],
    },
    {
        name: "Philip van Huyssteen",
        email: "vanhuyssteen.p@belgiumcampus.ac.za",
        imgSrc: "./Images/PhilipvanHuyssteen.png",
        modules: ["EUC 161", "MLG 381", "MLG 382", "SAD 281", "SAD 371", "WSP 361", "BME 161", "SWT 261", "PRG 271"],
    },
    {
        name: "Tshegofatso Hutang",
        email: "hutang.t@belgiumcampus.ac.za",
        imgSrc: "./Images/TshegofatsoHutang.png",
        modules: ["ENG 171", "ENG 161", "ENT 181", "ENT 171", "PMM 361", "DDB 361", "BUC 161", "DBF 161", "AIT 471"],
    },
    {
        name: "Raymond Hood",
        email: "hood.r@belgiumcampus.ac.za",
        imgSrc: "./Images/RaymondHood.png",
        modules: ["RSH 381", "BIN 371", "BIN 381", "SWA 361", "PMM 361", "DDB 361", "BUC 161", "	WPR 261", "AIT 472"],
    },
];

const modules = [
    {
        code: 'MAT 181',
        description: 'Mathematics 181',
        year: 1,
        course: 'BCOMP',
        overview: 'This module provides an introduction to fundamental mathematical concepts and techniques. Topics include algebra, calculus, and basic statistical methods, which are essential for solving problems in computer science and engineering.',
        video: 'MAT-Introduction.mp4'
    },
    {
        code: 'ACW 181',
        description: 'Academic Writing 181',
        year: 1,
        course: 'BCOMP',
        overview: 'Academic Writing 181 focuses on improving students\' writing skills in an academic context. The module covers essay writing, research papers, citation styles, and effective communication techniques, helping students to articulate their ideas clearly and persuasively.',
        video: 'ACW-Introduction.mp4'
    },
    {
        code: 'COA 181',
        description: 'Computer Architecture 181',
        year: 1,
        course: 'BCOMP',
        overview: 'An introduction to the fundamental concepts of computer architecture. This module covers the structure and function of computer systems, including hardware components, instruction sets, and the basics of assembly language programming.',
        video: 'COA-Introduction.mp4'
    },
    {
        code: 'DBD 181',
        description: 'Database Development 181',
        year: 1,
        course: 'BCOMP',
        overview: 'This module introduces students to the principles of database design and development. Topics include relational database concepts, SQL, and basic database management, providing a foundation for managing and manipulating data effectively.',
        video: 'DBD-Introduction.mp4'
    },
    {
        code: 'INF 181',
        description: 'Information Systems 181',
        year: 1,
        course: 'BCOMP',
        overview: 'Information Systems 181 provides an overview of how information systems are used in organizations. The module covers system components, data management, and the role of information systems in decision-making and operational processes.',
        video: 'INF-Introduction.mp4'
    },
    {
        code: 'INL 101',
        description: 'Innovation and Leadership 101',
        year: 1,
        course: 'BCOMP',
        overview: 'This module focuses on the fundamentals of innovation and leadership. Students will explore theories and practices related to creativity, strategic thinking, and leadership skills necessary for driving innovation in various contexts.',
        video: 'All-Other-Introduction.mp4'
    },
    {
        code: 'INL 102',
        description: 'Innovation and Leadership 102',
        year: 1,
        course: 'BCOMP',
        overview: 'Building on the concepts from INL 101, this module delves deeper into innovation strategies and leadership skills. Students will engage in case studies and projects to apply these concepts in real-world scenarios.',
        video: 'All-Other-Introduction.mp4'
    },
    {
        code: 'LPR 181',
        description: 'Linear Programming 181',
        year: 1,
        course: 'BCOMP',
        overview: 'An introductory module in linear programming, covering techniques and applications in optimization. Students will learn about problem formulation, the simplex method, and duality, with applications in various fields such as economics and engineering.',
        video: 'LPR-Introduction.mp4'
    },
    {
        code: 'NWD 181',
        description: 'Networking Development 181',
        year: 1,
        course: 'BCOMP',
        overview: 'This module covers the basics of networking concepts and development. Topics include network topologies, protocols, and the OSI model, providing students with the knowledge to understand and work with computer networks.',
        video: 'All-Other-Introduction.mp4'
    },
    {
        code: 'PRG 181',
        description: 'Programming 181',
        year: 1,
        course: 'BCOMP',
        overview: 'An introductory module to programming, focusing on fundamental concepts and practices. Students will learn to write and debug programs using a high-level programming language, covering topics such as variables, control structures, and functions.',
        video: 'PRG-Introduction.mp4'
    },
    {
        code: 'PRG 182',
        description: 'Programming 182',
        year: 1,
        course: 'BCOMP',
        overview: 'A continuation of Programming 181, this module focuses on advanced programming techniques and concepts. Topics include data structures, algorithms, and object-oriented programming, preparing students for more complex programming challenges.',
        video: 'PRG-Introduction.mp4'
    },
    {
        code: 'STA 181',
        description: 'Statistics 181',
        year: 1,
        course: 'BCOMP',
        overview: 'An introductory module in statistics, covering basic statistical methods and applications. Students will learn about descriptive statistics, probability, and inferential statistics, with a focus on practical applications in data analysis.',
        video: 'STA-Introduction.mp4'
    },
    {
        code: 'WPR 181',
        description: 'Web Programming 181',
        year: 1,
        course: 'BCOMP',
        overview: 'This module introduces students to web programming, including HTML, CSS, and JavaScript. Students will learn to create and style web pages, and implement interactive features, providing a foundation for web development.',
        video: 'PRG-Introduction.mp4'
    },
    {
        code: 'BUM 181',
        description: 'Business Management 181',
        year: 1,
        course: 'BCOMP',
        overview: 'An introduction to the principles of business management. Topics include organizational structure, management theories, and business strategy, equipping students with the knowledge to understand and manage business operations.',
        video: 'All-Other-Introduction.mp4'
    },
    {
        code: 'ENT 181',
        description: 'Entrepreneurship 181',
        year: 1,
        course: 'BCOMP',
        overview: 'This module provides an introduction to entrepreneurship and the development of business ideas. Students will explore the entrepreneurial process, including opportunity recognition, business planning, and venture creation.',
        video: 'All-Other-Introduction.mp4'
    },
    {
        code: 'DBD 281',
        description: 'Database Development 281',
        year: 2,
        course: 'BCOMP',
        overview: 'An advanced module in database design, development, and management. Students will explore complex database concepts, including normalization, indexing, and transaction management, building on the foundations of Database Development 181.',
        video: 'DBD-Introduction.mp4'
    },
    {
        code: 'MAT 281',
        description: 'Mathematics 281',
        year: 2,
        course: 'BCOMP',
        overview: 'A continuation of Mathematics 181, this module covers more advanced mathematical concepts and techniques. Topics include advanced calculus, linear algebra, and differential equations, essential for higher-level problem-solving in computer science.',
        video: 'MAT-Introduction.mp4'
    },
    {
        code: 'INF 281',
        description: 'Information Systems 281',
        year: 2,
        course: 'BCOMP',
        overview: 'Building on Information Systems 181, this module delves into advanced topics in information systems. Students will study system development methodologies, enterprise systems, and the strategic use of information technology in organizations.',
        video: 'INF-Introduction.mp4'
    },
    {
        code: 'INL 201',
        description: 'Innovation and Leadership 201',
        year: 2,
        course: 'BCOMP',
        overview: 'This module continues the exploration of innovation and leadership, focusing on advanced strategies and techniques. Students will engage in practical projects and case studies to apply innovative solutions and leadership practices.',
        video: 'All-Other-Introduction.mp4'
    },
    {
        code: 'INL 202',
        description: 'Innovation and Leadership 202',
        year: 2,
        course: 'BCOMP',
        overview: 'A further exploration of innovation and leadership, this module builds on the concepts from INL 201. Students will learn about advanced leadership theories, innovation management, and the implementation of strategic initiatives.',
        video: 'All-Other-Introduction.mp4'
    },
    {
        code: 'PRG 281',
        description: 'Programming 281',
        year: 2,
        course: 'BCOMP',
        overview: 'An advanced programming module, building on Programming 181 and 182. Students will explore complex programming concepts, including data structures, algorithms, and software design patterns, preparing them for sophisticated programming tasks.',
        video: 'PRG-Introduction.mp4'
    },
    {
        code: 'PRG 282',
        description: 'Programming 282',
        year: 2,
        course: 'BCOMP',
        overview: 'A continuation of Programming 281, focusing on more advanced programming challenges. Topics include algorithm optimization, advanced data structures, and real-world problem-solving, enhancing students\' programming proficiency.',
        video: 'PRG-Introduction.mp4'
    },
    {
        code: 'PMM 281',
        description: 'Project Management 281',
        year: 2,
        course: 'BCOMP',
        overview: 'An introduction to project management principles and practices. This module covers project planning, execution, and control, providing students with the skills to manage projects effectively in various contexts.',
        video: 'All-Other-Introduction.mp4'
    },
    {
        code: 'STA 281',
        description: 'Statistics 281',
        year: 2,
        course: 'BCOMP',
        overview: 'An advanced module in statistics, building on Statistics 181. Students will learn about advanced statistical methods, including hypothesis testing, regression analysis, and ANOVA, with applications in data analysis and research.',
        video: 'STA-Introduction.mp4'
    },
    {
        code: 'WPR 281',
        description: 'Web Programming 281',
        year: 2,
        course: 'BCOMP',
        overview: 'An advanced module in web programming, building on Web Programming 181. Students will learn about server-side programming, web frameworks, and database integration, enabling them to develop dynamic and interactive web applications.',
        video: 'PRG-Introduction.mp4'
    },
    {
        code: 'SAD 281',
        description: 'Systems Analysis and Design 281',
        year: 2,
        course: 'BCOMP',
        overview: 'This module introduces students to systems analysis and design methodologies. Topics include requirements gathering, system modeling, and design techniques, providing a foundation for developing efficient and effective information systems.',
        video: 'All-Other-Introduction.mp4'
    },
    {
        code: 'DWH 281',
        description: 'Data Warehousing 281',
        year: 2,
        course: 'BCOMP',
        overview: 'An introduction to data warehousing concepts and practices. Students will learn about data warehouse design, ETL processes, and data mining techniques, preparing them to manage and analyze large volumes of data effectively.',
        video: 'All-Other-Introduction.mp4'
    },
    {
        code: 'IOT 281',
        description: 'Internet of Things 281',
        year: 2,
        course: 'BCOMP',
        overview: 'This module provides an introduction to the Internet of Things (IoT) and its applications. Topics include IoT architecture, communication protocols, and sensor networks, with a focus on developing IoT solutions.',
        video: 'All-Other-Introduction.mp4'
    },
    {
        code: 'SWT 281',
        description: 'Software Testing 281',
        year: 2,
        course: 'BCOMP',
        overview: 'An introduction to software testing principles and practices. Students will learn about test planning, test case design, and test automation, with a focus on ensuring software quality and reliability.',
        video: 'All-Other-Introduction.mp4'
    },
    {
        code: 'RSH 381',
        description: 'Research Methods 381',
        year: 3,
        course: 'BCOMP',
        overview: 'This module introduces students to research methods and techniques. Topics include research design, data collection, and data analysis, equipping students with the skills to conduct independent research in computer science.',
        video: 'All-Other-Introduction.mp4'
    },
    {
        code: 'MAT 381',
        description: 'Mathematics 381',
        year: 3,
        course: 'BCOMP',
        overview: 'An advanced module in mathematics, building on Mathematics 281. Students will explore topics such as advanced calculus, numerical methods, and mathematical modeling, with applications in computer science and engineering.',
        video: 'MAT-Introduction.mp4'
    },
    {
        code: 'DBD 381',
        description: 'Database Development 381',
        year: 3,
        course: 'BCOMP',
        overview: 'An advanced module in database development, building on Database Development 281. Students will learn about complex database architectures, performance optimization, and advanced SQL techniques, preparing them for high-level database management.',
        video: 'DBD-Introduction.mp4'
    },
    {
        code: 'INL 321',
        description: 'Innovation and Leadership 321',
        year: 3,
        course: 'BCOMP',
        overview: 'This module covers advanced topics in innovation and leadership, building on earlier modules. Students will engage in strategic planning, change management, and leadership development, preparing them for leadership roles in technology-driven environments.',
        video: 'All-Other-Introduction.mp4'
    },
    {
        code: 'LPR 381',
        description: 'Linear Programming 381',
        year: 3,
        course: 'BCOMP',
        overview: 'An advanced module in linear programming, building on Linear Programming 181. Students will learn about advanced optimization techniques, network flows, and integer programming, with applications in operations research and engineering.',
        video: 'LPR-Introduction.mp4'
    },
    {
        code: 'MLG 381',
        description: 'Machine Learning 381',
        year: 3,
        course: 'BCOMP',
        overview: 'This module introduces students to machine learning concepts and techniques. Topics include supervised and unsupervised learning, neural networks, and deep learning, with applications in data analysis and artificial intelligence.',
        video: 'All-Other-Introduction.mp4'
    },
    {
        code: 'PRJ 381',
        description: 'Project 381',
        year: 3,
        course: 'BCOMP',
        overview: 'A capstone project integrating knowledge from various modules. Students will work on real-world projects, applying their skills in programming, database management, and systems analysis to develop comprehensive solutions.',
        video: 'All-Other-Introduction.mp4'
    },
    {
        code: 'PMM 381',
        description: 'Project Management 381',
        year: 3,
        course: 'BCOMP',
        overview: 'An advanced module in project management, building on Project Management 281. Students will learn about advanced project planning, risk management, and project evaluation techniques, preparing them to manage large-scale projects effectively.',
        video: 'All-Other-Introduction.mp4'
    },
    {
        code: 'PRG 381',
        description: 'Programming 381',
        year: 3,
        course: 'BCOMP',
        overview: 'An advanced programming module, building on earlier programming courses. Students will explore complex algorithms, software design patterns, and advanced programming languages, enhancing their software development skills.',
        video: 'PRG-Introduction.mp4'
    },
    {
        code: 'SEN 381',
        description: 'Software Engineering 381',
        year: 3,
        course: 'BCOMP',
        overview: 'This module covers the principles and practices of software engineering. Topics include software development methodologies, project management, and quality assurance, preparing students for professional software engineering roles.',
        video: 'All-Other-Introduction.mp4'
    },
    {
        code: 'WPR 381',
        description: 'Web Programming 381',
        year: 3,
        course: 'BCOMP',
        overview: 'An advanced module in web programming, building on Web Programming 281. Students will learn about advanced web technologies, server-side scripting, and web security, preparing them to develop sophisticated web applications.',
        video: 'PRG-Introduction.mp4'
    },
    {
        code: 'BIN 381',
        description: 'Business Intelligence 381',
        year: 3,
        course: 'BCOMP',
        overview: 'This module introduces students to business intelligence concepts and practices. Topics include data analytics, business reporting, and decision support systems, with a focus on leveraging data for strategic decision-making.',
        video: 'All-Other-Introduction.mp4'
    },
    {
        code: 'DBA 381',
        description: 'Database Administration 381',
        year: 3,
        course: 'BCOMP',
        overview: 'An advanced module in database administration, covering topics such as database security, backup and recovery, and performance tuning, equipping students with the skills to manage and maintain complex database systems.',
        video: 'All-Other-Introduction.mp4'
    },
    {
        code: 'STA 381',
        description: 'Statistics 381',
        year: 3,
        course: 'BCOMP',
        overview: 'An advanced module in statistics, building on Statistics 281. Students will explore topics such as multivariate analysis, time series analysis, and statistical modeling, with applications in research and data analysis.',
        video: 'STA-Introduction.mp4'
    },
    {
        code: 'INM 381',
        description: 'Information Management 381',
        year: 3,
        course: 'BCOMP',
        overview: 'This module covers the principles and practices of information management. Topics include information governance, data quality, and information lifecycle management, preparing students to manage information assets effectively.',
        video: 'All-Other-Introduction.mp4'
    },
    {
        code: 'MLG 382',
        description: 'Machine Learning 382',
        year: 3,
        course: 'BCOMP',
        overview: 'A continuation of Machine Learning 381, focusing on more advanced topics. Students will learn about reinforcement learning, advanced neural networks, and machine learning in practice, enhancing their skills in artificial intelligence.',
        video: 'All-Other-Introduction.mp4'
    },
    {
        code: 'UAX 381',
        description: 'User Experience 381',
        year: 3,
        course: 'BCOMP',
        overview: 'This module covers the principles and practices of user experience (UX) design. Students will learn about UX research, usability testing, and interaction design, with a focus on creating user-centered digital products.',
        video: 'All-Other-Introduction.mp4'
    },
    {
        code: 'AIT 481',
        description: 'Advanced Information Technology 481',
        year: 4,
        course: 'BCOMP',
        overview: 'An advanced module in information technology, covering topics such as emerging technologies, IT strategy, and IT management. Students will explore the latest trends and developments in the IT field, preparing them for leadership roles.',
        video: 'All-Other-Introduction.mp4'
    },
    {
        code: 'AIT 482',
        description: 'Advanced Information Technology 482',
        year: 4,
        course: 'BCOMP',
        overview: 'A continuation of Advanced Information Technology 481, focusing on more advanced topics. Students will delve deeper into IT strategy, technology management, and innovation in the IT industry.',
        video: 'All-Other-Introduction.mp4'
    },
    {
        code: 'DST 481',
        description: 'Distributed Systems 481',
        year: 4,
        course: 'BCOMP',
        overview: 'This module covers the principles and practices of distributed systems. Topics include distributed architectures, distributed algorithms, and the challenges of building scalable and reliable distributed applications.',
        video: 'All-Other-Introduction.mp4'
    },
    {
        code: 'ACW 171',
        description: 'Academic Writing 171',
        year: 1,
        course: 'BIT',
        overview: 'Academic Writing 171 focuses on developing writing skills for academic purposes. The module covers essay writing, research papers, and effective communication techniques, helping students to articulate their ideas clearly and persuasively in an academic context.',
        video: 'ACW-Introduction.mp4'
    },
    {
        code: 'COA 171',
        description: 'Computer Architecture 171',
        year: 1,
        course: 'BIT',
        overview: 'An introduction to computer architecture, covering the structure and function of computer systems. Students will learn about hardware components, instruction sets, and the basics of assembly language programming.',
        video: 'COA-Introduction.mp4'
    },
    {
        code: 'DBD 171',
        description: 'Database Development 171',
        year: 1,
        course: 'BIT',
        overview: 'This module introduces students to the principles of database design and development. Topics include relational database concepts, SQL, and basic database management, providing a foundation for managing and manipulating data effectively.',
        video: 'DBD-Introduction.mp4'
    },
    {
        code: 'ENG 171',
        description: 'English 171',
        year: 1,
        course: 'BIT',
        overview: 'An introductory module in English language skills, covering reading, writing, and comprehension. Students will develop their ability to communicate effectively in both academic and professional contexts.',
        video: 'All-Other-Introduction.mp4'
    },
    {
        code: 'INF 171',
        description: 'Information Systems 171',
        year: 1,
        course: 'BIT',
        overview: 'Information Systems 171 provides an overview of how information systems are used in organizations. The module covers system components, data management, and the role of information systems in decision-making and operational processes.',
        video: 'INF-Introduction.mp4'
    },
    {
        code: 'MAT 171',
        description: 'Mathematics 171',
        year: 1,
        course: 'BIT',
        overview: 'This module provides an introduction to fundamental mathematical concepts and techniques. Topics include algebra, calculus, and basic statistical methods, which are essential for solving problems in computer science and engineering.',
        video: 'MAT-Introduction.mp4'
    },
    {
        code: 'NWD 171',
        description: 'Networking Development 171',
        year: 1,
        course: 'BIT',
        overview: 'This module covers the basics of networking concepts and development. Topics include network topologies, protocols, and the OSI model, providing students with the knowledge to understand and work with computer networks.',
        video: 'All-Other-Introduction.mp4'
    },
    {
        code: 'PRG 171',
        description: 'Programming 171',
        year: 1,
        course: 'BIT',
        overview: 'An introductory module to programming, focusing on fundamental concepts and practices. Students will learn to write and debug programs using a high-level programming language, covering topics such as variables, control structures, and functions.',
        video: 'PRG-Introduction.mp4'
    },
    {
        code: 'PRG 172',
        description: 'Programming 172',
        year: 1,
        course: 'BIT',
        overview: 'A continuation of Programming 171, this module focuses on advanced programming techniques and concepts. Topics include data structures, algorithms, and object-oriented programming, preparing students for more complex programming challenges.',
        video: 'PRG-Introduction.mp4'
    },
    {
        code: 'STA 171',
        description: 'Statistics 171',
        year: 1,
        course: 'BIT',
        overview: 'An introductory module in statistics, covering basic statistical methods and applications. Students will learn about descriptive statistics, probability, and inferential statistics, with a focus on practical applications in data analysis.',
        video: 'STA-Introduction.mp4'
    },
    {
        code: 'WPR 171',
        description: 'Web Programming 171',
        year: 1,
        course: 'BIT',
        overview: 'This module introduces students to web programming, including HTML, CSS, and JavaScript. Students will learn to create and style web pages, and implement interactive features, providing a foundation for web development.',
        video: 'PRG-Introduction.mp4'
    },
    {
        code: 'BUM 171',
        description: 'Business Management 171',
        year: 1,
        course: 'BIT',
        overview: 'An introduction to the principles of business management. Topics include organizational structure, management theories, and business strategy, equipping students with the knowledge to understand and manage business operations.',
        video: 'All-Other-Introduction.mp4'
    },
    {
        code: 'ENT 171',
        description: 'Entrepreneurship 171',
        year: 1,
        course: 'BIT',
        overview: 'This module provides an introduction to entrepreneurship and the development of business ideas. Students will explore the entrepreneurial process, including opportunity recognition, business planning, and venture creation.',
        video: 'All-Other-Introduction.mp4'
    },
    {
        code: 'DBD 271',
        description: 'Database Development 271',
        year: 2,
        course: 'BIT',
        overview: 'An advanced module in database design, development, and management. Students will explore complex database concepts, including normalization, indexing, and transaction management, building on the foundations of Database Development 171.',
        video: 'DBD-Introduction.mp4'
    },
    {
        code: 'MAT 271',
        description: 'Mathematics 271',
        year: 2,
        course: 'BIT',
        overview: 'A continuation of Mathematics 171, this module covers more advanced mathematical concepts and techniques. Topics include advanced calculus, linear algebra, and differential equations, essential for higher-level problem-solving in computer science.',
        video: 'MAT-Introduction.mp4'
    },
    {
        code: 'INF 271',
        description: 'Information Systems 271',
        year: 2,
        course: 'BIT',
        overview: 'Building on Information Systems 171, this module delves into advanced topics in information systems. Students will study system development methodologies, enterprise systems, and the strategic use of information technology in organizations.',
        video: 'INF-Introduction.mp4'
    },
    {
        code: 'INL 221',
        description: 'Innovation and Leadership 221',
        year: 2,
        course: 'BIT',
        overview: 'This module continues the exploration of innovation and leadership, focusing on advanced strategies and techniques. Students will engage in practical projects and case studies to apply innovative solutions and leadership practices.',
        video: 'All-Other-Introduction.mp4'
    },
    {
        code: 'PRG 271',
        description: 'Programming 271',
        year: 2,
        course: 'BIT',
        overview: 'An advanced programming module, building on Programming 171 and 172. Students will explore complex programming concepts, including data structures, algorithms, and software design patterns, preparing them for sophisticated programming tasks.',
        video: 'PRG-Introduction.mp4'
    },
    {
        code: 'PRG 272',
        description: 'Programming 272',
        year: 2,
        course: 'BIT',
        overview: 'A continuation of Programming 271, focusing on more advanced programming challenges. Topics include algorithm optimization, advanced data structures, and real-world problem-solving, enhancing students\' programming proficiency.',
        video: 'PRG-Introduction.mp4'
    },
    {
        code: 'PMM 271',
        description: 'Project Management 271',
        year: 2,
        course: 'BIT',
        overview: 'An introduction to project management principles and practices. This module covers project planning, execution, and control, providing students with the skills to manage projects effectively in various contexts.',
        video: 'All-Other-Introduction.mp4'
    },
    {
        code: 'STA 271',
        description: 'Statistics 271',
        year: 2,
        course: 'BIT',
        overview: 'An advanced module in statistics, building on Statistics 171. Students will learn about advanced statistical methods, including hypothesis testing, regression analysis, and ANOVA, with applications in data analysis and research.',
        video: 'STA-Introduction.mp4'
    },
    {
        code: 'WPR 271',
        description: 'Web Programming 271',
        year: 2,
        course: 'BIT',
        overview: 'An advanced module in web programming, building on Web Programming 171. Students will learn about server-side programming, web frameworks, and database integration, enabling them to develop dynamic and interactive web applications.',
        video: 'PRG-Introduction.mp4'
    },
    {
        code: 'SAD 271',
        description: 'Systems Analysis and Design 271',
        year: 2,
        course: 'BIT',
        overview: 'This module introduces students to systems analysis and design methodologies. Topics include requirements gathering, system modeling, and design techniques, providing a foundation for developing efficient and effective information systems.',
        video: 'All-Other-Introduction.mp4'
    },
    {
        code: 'DWH 271',
        description: 'Data Warehousing 271',
        year: 2,
        course: 'BIT',
        overview: 'An introduction to data warehousing concepts and practices. Students will learn about data warehouse design, ETL processes, and data mining techniques, preparing them to manage and analyze large volumes of data effectively.',
        video: 'All-Other-Introduction.mp4'
    },
    {
        code: 'IOT 271',
        description: 'Internet of Things 271',
        year: 2,
        course: 'BIT',
        overview: 'This module provides an introduction to the Internet of Things (IoT) and its applications. Topics include IoT architecture, communication protocols, and sensor networks, with a focus on developing IoT solutions.',
        video: 'All-Other-Introduction.mp4'
    },
    {
        code: 'SWT 271',
        description: 'Software Testing 271',
        year: 2,
        course: 'BIT',
        overview: 'An introduction to software testing principles and practices. Students will learn about test planning, test case design, and test automation, with a focus on ensuring software quality and reliability.',
        video: 'All-Other-Introduction.mp4'
    },
    {
        code: 'MAT 371',
        description: 'Mathematics 371',
        year: 3,
        course: 'BIT',
        overview: 'An advanced module in mathematics, building on Mathematics 271. Students will explore topics such as advanced calculus, numerical methods, and mathematical modeling, with applications in computer science and engineering.',
        video: 'MAT-Introduction.mp4'
    },
    {
        code: 'DBD 371',
        description: 'Database Development 371',
        year: 3,
        course: 'BIT',
        overview: 'An advanced module in database development, building on Database Development 271. Students will learn about complex database architectures, performance optimization, and advanced SQL techniques, preparing them for high-level database management.',
        video: 'DBD-Introduction.mp4'
    },
    {
        code: 'INL 321',
        description: 'Innovation and Leadership 321',
        year: 3,
        course: 'BIT',
        overview: 'This module covers advanced topics in innovation and leadership, building on earlier modules. Students will engage in strategic planning, change management, and leadership development, preparing them for leadership roles in technology-driven environments.',
        video: 'All-Other-Introduction.mp4'
    },
    {
        code: 'LPR 371',
        description: 'Linear Programming 371',
        year: 3,
        course: 'BIT',
        overview: 'An advanced module in linear programming, building on Linear Programming 181. Students will learn about advanced optimization techniques, network flows, and integer programming, with applications in operations research and engineering.',
        video: 'LPR-Introduction.mp4'
    },
    {
        code: 'MLG 371',
        description: 'Machine Learning 371',
        year: 3,
        course: 'BIT',
        overview: 'This module introduces students to machine learning concepts and techniques. Topics include supervised and unsupervised learning, neural networks, and deep learning, with applications in data analysis and artificial intelligence.',
        video: 'All-Other-Introduction.mp4'
    },
    {
        code: 'PRJ 371',
        description: 'Project 371',
        year: 3,
        course: 'BIT',
        overview: 'A capstone project integrating knowledge from various modules. Students will work on real-world projects, applying their skills in programming, database management, and systems analysis to develop comprehensive solutions.',
        video: 'All-Other-Introduction.mp4'
    },
    {
        code: 'PMM 371',
        description: 'Project Management 371',
        year: 3,
        course: 'BIT',
        overview: 'An advanced module in project management, building on Project Management 271. Students will learn about advanced project planning, risk management, and project evaluation techniques, preparing them to manage large-scale projects effectively.',
        video: 'All-Other-Introduction.mp4'
    },
    {
        code: 'PRG 371',
        description: 'Programming 371',
        year: 3,
        course: 'BIT',
        overview: 'An advanced programming module, building on earlier programming courses. Students will explore complex algorithms, software design patterns, and advanced programming languages, enhancing their software development skills.',
        video: 'PRG-Introduction.mp4'
    },
    {
        code: 'SEN 371',
        description: 'Software Engineering 371',
        year: 3,
        course: 'BIT',
        overview: 'This module covers the principles and practices of software engineering. Topics include software development methodologies, project management, and quality assurance, preparing students for professional software engineering roles.',
        video: 'All-Other-Introduction.mp4'
    },
    {
        code: 'WPR 371',
        description: 'Web Programming 371',
        year: 3,
        course: 'BIT',
        overview: 'An advanced module in web programming, building on Web Programming 271. Students will learn about advanced web technologies, server-side scripting, and web security, preparing them to develop sophisticated web applications.',
        video: 'PRG-Introduction.mp4'
    },
    {
        code: 'BIN 371',
        description: 'Business Intelligence 371',
        year: 3,
        course: 'BIT',
        overview: 'This module introduces students to business intelligence concepts and practices. Topics include data analytics, business reporting, and decision support systems, with a focus on leveraging data for strategic decision-making.',
        video: 'All-Other-Introduction.mp4'
    },
    {
        code: 'DBA 371',
        description: 'Database Administration 371',
        year: 3,
        course: 'BIT',
        overview: 'An advanced module in database administration, covering topics such as database security, backup and recovery, and performance tuning, equipping students with the skills to manage and maintain complex database systems.',
        video: 'All-Other-Introduction.mp4'
    },
    {
        code: 'STA 371',
        description: 'Statistics 371',
        year: 3,
        course: 'BIT',
        overview: 'An advanced module in statistics, building on Statistics 271. Students will explore topics such as multivariate analysis, time series analysis, and statistical modeling, with applications in research and data analysis.',
        video: 'STA-Introduction.mp4'
    },
    {
        code: 'INM 371',
        description: 'Information Management 371',
        year: 3,
        course: 'BIT',
        overview: 'This module covers the principles and practices of information management. Topics include information governance, data quality, and information lifecycle management, preparing students to manage information assets effectively.',
        video: 'All-Other-Introduction.mp4'
    },
    {
        code: 'MLG 372',
        description: 'Machine Learning 372',
        year: 3,
        course: 'BIT',
        overview: 'A continuation of Machine Learning 371, focusing on more advanced topics. Students will learn about reinforcement learning, advanced neural networks, and machine learning in practice, enhancing their skills in artificial intelligence.',
        video: 'All-Other-Introduction.mp4'
    },
    {
        code: 'UAX 371',
        description: 'User Experience 371',
        year: 3,
        course: 'BIT',
        overview: 'This module covers the principles and practices of user experience (UX) design. Students will learn about UX research, usability testing, and interaction design, with a focus on creating user-centered digital products.',
        video: 'All-Other-Introduction.mp4'
    },
    {
        code: 'AIT 471',
        description: 'Advanced Information Technology 471',
        year: 4,
        course: 'BIT',
        overview: 'An advanced module in information technology, covering topics such as emerging technologies, IT strategy, and IT management. Students will explore the latest trends and developments in the IT field, preparing them for leadership roles.',
        video: 'All-Other-Introduction.mp4'
    },
    {
        code: 'AIT 472',
        description: 'Advanced Information Technology 472',
        year: 4,
        course: 'BIT',
        overview: 'A continuation of Advanced Information Technology 471, focusing on more advanced topics. Students will delve deeper into IT strategy, technology management, and innovation in the IT industry.',
        video: 'All-Other-Introduction.mp4'
    },
    {
        code: 'DST 471',
        description: 'Distributed Systems 471',
        year: 4,
        course: 'BIT',
        overview: 'This module covers the principles and practices of distributed systems. Topics include distributed architectures, distributed algorithms, and the challenges of building scalable and reliable distributed applications.',
        video: 'All-Other-Introduction.mp4'
    },
    {
        code: 'BUC 161',
        description: 'Business Communication 161',
        year: 1,
        course: 'DIT',
        overview: 'Business Communication 161 covers the basics of effective communication in a business context. Topics include professional writing, presentation skills, and interpersonal communication, preparing students to communicate effectively in the workplace.',
        video: 'All-Other-Introduction.mp4'
    },
    {
        code: 'BME 161',
        description: 'Business Management 161',
        year: 1,
        course: 'DIT',
        overview: 'An introduction to the principles of business management. Students will learn about organizational structures, management theories, and business strategy, providing a foundation for understanding and managing business operations.',
        video: 'All-Other-Introduction.mp4'
    },
    {
        code: 'COA 161',
        description: 'Computer Architecture 161',
        year: 1,
        course: 'DIT',
        overview: 'An introductory module in computer architecture, covering the structure and function of computer systems. Topics include hardware components, instruction sets, and basic assembly language programming, providing a foundation for understanding computer systems.',
        video: 'COA-Introduction.mp4'
    },
    {
        code: 'DBC 161',
        description: 'Database Concepts 161',
        year: 1,
        course: 'DIT',
        overview: 'This module covers the basics of database concepts, including design, development, and management. Students will learn about relational databases, SQL, and database management systems, providing a foundation for working with databases.',
        video: 'DBD-Introduction.mp4'
    },
    {
        code: 'DBF 161',
        description: 'Database Fundamentals 161',
        year: 1,
        course: 'DIT',
        overview: 'An introductory module in database fundamentals, covering key concepts and practices. Students will learn about database design, SQL, and basic database management, providing a foundation for managing and manipulating data effectively.',
        video: 'DBD-Introduction.mp4'
    },
    {
        code: 'EUC 161',
        description: 'End User Computing 161',
        year: 1,
        course: 'DIT',
        overview: 'This module covers the basics of end user computing, including software and hardware use. Topics include office applications, internet use, and basic troubleshooting, preparing students to use and support computer systems effectively.',
        video: 'All-Other-Introduction.mp4'
    },
    {
        code: 'INL 161',
        description: 'Information Literacy 161',
        year: 1,
        course: 'DIT',
        overview: 'An introduction to information literacy, focusing on research skills and information management. Students will learn about information sources, research strategies, and ethical use of information, preparing them for academic and professional research.',
        video: 'All-Other-Introduction.mp4'
    },
    {
        code: 'IOT 161',
        description: 'Internet of Things 161',
        year: 1,
        course: 'DIT',
        overview: 'This module introduces students to the Internet of Things (IoT) and its applications. Topics include IoT architecture, communication protocols, and sensor networks, providing a foundation for developing IoT solutions.',
        video: 'All-Other-Introduction.mp4'
    },
    {
        code: 'MAT 161',
        description: 'Mathematics 161',
        year: 1,
        course: 'DIT',
        overview: 'An introductory module in mathematics, covering fundamental concepts and techniques. Topics include algebra, calculus, and basic statistics, essential for solving problems in computer science and information technology.',
        video: 'MAT-Introduction.mp4'
    },
    {
        code: 'NWD 161',
        description: 'Networking and Web Development 161',
        year: 1,
        course: 'DIT',
        overview: 'This module covers the basics of networking and web development. Students will learn about network topologies, protocols, and web technologies, providing a foundation for developing and managing networked systems and web applications.',
        video: 'All-Other-Introduction.mp4'
    },
    {
        code: 'PRS 161',
        description: 'Professional Skills 161',
        year: 1,
        course: 'DIT',
        overview: 'An introduction to the professional skills needed in the IT industry. Topics include teamwork, communication, and problem-solving, preparing students to work effectively in professional environments.',
        video: 'All-Other-Introduction.mp4'
    },
    {
        code: 'PRG 161',
        description: 'Programming 161',
        year: 1,
        course: 'DIT',
        overview: 'An introductory module to programming, focusing on fundamental concepts and practices. Students will learn to write and debug programs using a high-level programming language, covering topics such as variables, control structures, and functions.',
        video: 'PRG-Introduction.mp4'
    },
    {
        code: 'PRP 161',
        description: 'Programming Principles 161',
        year: 1,
        course: 'DIT',
        overview: 'This module covers the basic principles of programming and problem-solving techniques. Students will learn about algorithm design, data structures, and programming best practices, providing a foundation for further programming studies.',
        video: 'PRG-Introduction.mp4'
    },
    {
        code: 'WPR 161',
        description: 'Web Programming 161',
        year: 1,
        course: 'DIT',
        overview: 'This module introduces students to web programming, including HTML, CSS, and JavaScript. Students will learn to create and style web pages, and implement interactive features, providing a foundation for web development.',
        video: 'PRG-Introduction.mp4'
    },
    {
        code: 'STA 161',
        description: 'Statistics 161',
        year: 1,
        course: 'DIT',
        overview: 'An introductory module in statistics, covering basic statistical methods and applications. Students will learn about descriptive statistics, probability, and inferential statistics, with a focus on practical applications in data analysis.',
        video: 'STA-Introduction.mp4'
    },
    {
        code: 'DBD 261',
        description: 'Database Development 261',
        year: 2,
        course: 'DIT',
        overview: 'An advanced module in database development, building on Database Concepts 161. Students will learn about advanced database design, SQL optimization, and database management techniques, preparing them for complex database tasks.',
        video: 'DBD-Introduction.mp4'
    },
    {
        code: 'ERP 261',
        description: 'Enterprise Resource Planning 261',
        year: 2,
        course: 'DIT',
        overview: 'This module introduces students to enterprise resource planning (ERP) systems and their applications. Topics include ERP architecture, implementation, and management, providing a foundation for understanding and using ERP systems effectively.',
        video: 'All-Other-Introduction.mp4'
    },
    {
        code: 'INL 261',
        description: 'Information Literacy 261',
        year: 2,
        course: 'DIT',
        overview: 'An advanced module in information literacy, building on Information Literacy 161. Students will learn about advanced research techniques, information management, and ethical use of information, preparing them for professional research and information management.',
        video: 'All-Other-Introduction.mp4'
    },
    {
        code: 'ILE 261',
        description: 'Information Literacy and Ethics 261',
        year: 2,
        course: 'DIT',
        overview: 'This module covers information literacy and ethical considerations in the IT industry. Topics include research skills, information management, and ethical issues related to information use, preparing students to handle information responsibly.',
        video: 'All-Other-Introduction.mp4'
    },
    {
        code: 'PMM 261',
        description: 'Project Management 261',
        year: 2,
        course: 'DIT',
        overview: 'An introduction to project management principles and practices. This module covers project planning, execution, and control, providing students with the skills to manage projects effectively in various contexts.',
        video: 'All-Other-Introduction.mp4'
    },
    {
        code: 'CNA 261',
        description: 'Computer Networks and Architecture 261',
        year: 2,
        course: 'DIT',
        overview: 'This module covers the principles of computer networks and architecture. Topics include network design, protocols, and network security, providing students with the knowledge to design, implement, and manage networked systems.',
        video: 'All-Other-Introduction.mp4'
    },
    {
        code: 'IOT 261',
        description: 'Internet of Things 261',
        year: 2,
        course: 'DIT',
        overview: 'An advanced module in the Internet of Things (IoT), building on IoT 161. Students will learn about IoT architectures, protocols, and applications, with a focus on developing and deploying IoT solutions.',
        video: 'All-Other-Introduction.mp4'
    },
    {
        code: 'OPS 261',
        description: 'Operating Systems 261',
        year: 2,
        course: 'DIT',
        overview: 'An introduction to operating systems concepts and practices. Students will learn about operating system architecture, process management, and memory management, providing a foundation for understanding and managing operating systems.',
        video: 'All-Other-Introduction.mp4'
    },
    {
        code: 'OPS 262',
        description: 'Operating Systems 262',
        year: 2,
        course: 'DIT',
        overview: 'A continuation of Operating Systems 261, focusing on more advanced topics. Students will learn about file systems, device management, and operating system security, preparing them for advanced operating system management tasks.',
        video: 'All-Other-Introduction.mp4'
    },
    {
        code: 'OPS 263',
        description: 'Operating Systems 263',
        year: 2,
        course: 'DIT',
        overview: 'An advanced module in operating systems, building on Operating Systems 262. Students will learn about distributed operating systems, virtualization, and operating system performance optimization, preparing them for complex operating system tasks.',
        video: 'All-Other-Introduction.mp4'
    },
    {
        code: 'SEC 261',
        description: 'Security 261',
        year: 2,
        course: 'DIT',
        overview: 'This module introduces students to security principles and practices in the IT industry. Topics include network security, cryptography, and security management, providing a foundation for understanding and implementing security measures.',
        video: 'All-Other-Introduction.mp4'
    },
    {
        code: 'PRG 261',
        description: 'Programming 261',
        year: 2,
        course: 'DIT',
        overview: 'An advanced programming module, building on Programming 161. Students will explore complex programming concepts, including data structures, algorithms, and software design patterns, preparing them for sophisticated programming tasks.',
        video: 'PRG-Introduction.mp4'
    },
    {
        code: 'PRG 262',
        description: 'Programming 262',
        year: 2,
        course: 'DIT',
        overview: 'A continuation of Programming 261, focusing on more advanced programming challenges. Topics include algorithm optimization, advanced data structures, and real-world problem-solving, enhancing students\' programming proficiency.',
        video: 'PRG-Introduction.mp4'
    },
    {
        code: 'SWA 261',
        description: 'Software Architecture 261',
        year: 2,
        course: 'DIT',
        overview: 'This module introduces students to software architecture principles and practices. Topics include architectural styles, design patterns, and software architecture documentation, providing a foundation for designing and developing robust software systems.',
        video: 'All-Other-Introduction.mp4'
    },
    {
        code: 'SWT 261',
        description: 'Software Testing 261',
        year: 2,
        course: 'DIT',
        overview: 'An introduction to software testing principles and practices. Students will learn about test planning, test case design, and test automation, with a focus on ensuring software quality and reliability.',
        video: 'All-Other-Introduction.mp4'
    },
    {
        code: 'UXD 261',
        description: 'User Experience Design 261',
        year: 2,
        course: 'DIT',
        overview: 'This module covers the principles and practices of user experience (UX) design. Students will learn about UX research, usability testing, and interaction design, with a focus on creating user-centered digital products.',
        video: 'All-Other-Introduction.mp4'
    },
    {
        code: 'WPR 261',
        description: 'Web Programming 261',
        year: 2,
        course: 'DIT',
        overview: 'An advanced module in web programming, building on Web Programming 161. Students will learn about server-side programming, web frameworks, and database integration, enabling them to develop dynamic and interactive web applications.',
        video: 'PRG-Introduction.mp4'
    },
    {
        code: 'CNA 361',
        description: 'Computer Networks and Architecture 361',
        year: 3,
        course: 'DIT',
        overview: 'An advanced module in computer networks and architecture, building on CNA 261. Students will learn about advanced networking concepts, network design, and network security, preparing them for complex network management tasks.',
        video: 'All-Other-Introduction.mp4'
    },
    {
        code: 'EHA 361',
        description: 'Ethics in HCI and AI 361',
        year: 3,
        course: 'DIT',
        overview: 'This module covers ethical considerations in human-computer interaction (HCI) and artificial intelligence (AI). Topics include privacy, bias, and ethical decision-making, preparing students to address ethical challenges in technology development.',
        video: 'All-Other-Introduction.mp4'
    },
    {
        code: 'PET 361',
        description: 'Petroleum Engineering Technology 361',
        year: 3,
        course: 'DIT',
        overview: 'An introduction to petroleum engineering technology and its applications. Students will learn about drilling, production, and reservoir engineering, providing a foundation for working in the petroleum industry.',
        video: 'All-Other-Introduction.mp4'
    },
    {
        code: 'DOP 361',
        description: 'DevOps 361',
        year: 3,
        course: 'DIT',
        overview: 'This module covers the principles and practices of DevOps. Students will learn about continuous integration, continuous delivery, and infrastructure as code, preparing them to implement and manage DevOps processes in IT projects.',
        video: 'All-Other-Introduction.mp4'
    },
    {
        code: 'MFR 361',
        description: 'Manufacturing 361',
        year: 3,
        course: 'DIT',
        overview: 'An introduction to manufacturing technology and its applications. Topics include manufacturing processes, automation, and quality control, providing a foundation for working in the manufacturing industry.',
        video: 'All-Other-Introduction.mp4'
    },
    {
        code: 'NWD 361',
        description: 'Networking and Web Development 361',
        year: 3,
        course: 'DIT',
        overview: 'An advanced module in networking and web development, building on NWD 161. Students will learn about advanced networking technologies, web server programming, and web security, preparing them for complex web and network development tasks.',
        video: 'All-Other-Introduction.mp4'
    },
    {
        code: 'OPS 361',
        description: 'Operating Systems 361',
        year: 3,
        course: 'DIT',
        overview: 'An advanced module in operating systems, building on earlier operating systems courses. Students will learn about distributed operating systems, virtualization, and operating system performance optimization, preparing them for complex operating system tasks.',
        video: 'All-Other-Introduction.mp4'
    },
    {
        code: 'DBA 361',
        description: 'Database Administration 361',
        year: 3,
        course: 'DIT',
        overview: 'An advanced module in database administration, covering topics such as database security, backup and recovery, and performance tuning. Students will learn to manage and maintain complex database systems effectively.',
        video: 'All-Other-Introduction.mp4'
    },
    {
        code: 'DBC 361',
        description: 'Database Concepts 361',
        year: 3,
        course: 'DIT',
        overview: 'An advanced module in database concepts, building on DBC 161. Students will learn about advanced database design, SQL optimization, and database management techniques, preparing them for complex database tasks.',
        video: 'DBD-Introduction.mp4'
    },
    {
        code: 'DBD 361',
        description: 'Database Development 361',
        year: 3,
        course: 'DIT',
        overview: 'An advanced module in database development, building on earlier database courses. Students will learn about complex database architectures, performance optimization, and advanced SQL techniques, preparing them for high-level database management.',
        video: 'DBD-Introduction.mp4'
    },
    {
        code: 'DBR 361',
        description: 'Database Recovery 361',
        year: 3,
        course: 'DIT',
        overview: 'This module covers the principles and practices of database recovery. Students will learn about backup strategies, disaster recovery, and data restoration techniques, preparing them to ensure data integrity and availability.',
        video: 'All-Other-Introduction.mp4'
    },
    {
        code: 'DDB 361',
        description: 'Distributed Database 361',
        year: 3,
        course: 'DIT',
        overview: 'An introduction to distributed database systems and their applications. Students will learn about distributed database architectures, data replication, and consistency models, preparing them to design and manage distributed databases.',
        video: 'All-Other-Introduction.mp4'
    },
    {
        code: 'WDB 361',
        description: 'Web Database 361',
        year: 3,
        course: 'DIT',
        overview: 'This module covers the principles and practices of web databases. Students will learn about database-driven web applications, web database integration, and web security, preparing them to develop robust web database solutions.',
        video: 'PRG-Introduction.mp4'
    },
    {
        code: 'WFS 361',
        description: 'Web Frameworks and Services 361',
        year: 3,
        course: 'DIT',
        overview: 'An introduction to web frameworks and services. Students will learn about popular web frameworks, service-oriented architecture, and web services integration, preparing them to develop sophisticated web applications.',
        video: 'All-Other-Introduction.mp4'
    },
    {
        code: 'WSE 361',
        description: 'Web Security 361',
        year: 3,
        course: 'DIT',
        overview: 'This module covers the principles and practices of web security. Students will learn about common web vulnerabilities, secure coding practices, and web application firewalls, preparing them to develop and maintain secure web applications.',
        video: 'All-Other-Introduction.mp4'
    },
    {
        code: 'PRG 361',
        description: 'Programming 361',
        year: 3,
        course: 'DIT',
        overview: 'An advanced programming module, building on earlier programming courses. Students will explore complex algorithms, software design patterns, and advanced programming languages, enhancing their software development skills.',
        video: 'PRG-Introduction.mp4'
    },
    {
        code: 'SSX 361',
        description: 'System Security and Forensics 361',
        year: 3,
        course: 'DIT',
        overview: 'This module introduces students to system security and forensics principles and practices. Topics include system security measures, incident response, and digital forensics techniques, preparing students to secure systems and investigate security incidents.',
        video: 'All-Other-Introduction.mp4'
    },
    {
        code: 'SWA 361',
        description: 'Software Architecture 361',
        year: 3,
        course: 'DIT',
        overview: 'An advanced module in software architecture, building on SWA 261. Students will learn about architectural design patterns, microservices architecture, and architecture evaluation techniques, preparing them to design and develop robust software systems.',
        video: 'All-Other-Introduction.mp4'
    },
    {
        code: 'PMM 361',
        description: 'Project Management 361',
        year: 3,
        course: 'DIT',
        overview: 'An advanced module in project management, building on PMM 261. Students will learn about advanced project planning, risk management, and project evaluation techniques, preparing them to manage large-scale projects effectively.',
        video: 'All-Other-Introduction.mp4'
    },
    {
        code: 'DBA 361',
        description: 'Database Administration 361',
        year: 3,
        course: 'DIT',
        overview: 'An advanced module in database administration, covering topics such as database security, backup and recovery, and performance tuning. Students will learn to manage and maintain complex database systems effectively.',
        video: 'All-Other-Introduction.mp4'
    },
    {
        code: 'DBC 361',
        description: 'Database Concepts 361',
        year: 3,
        course: 'DIT',
        overview: 'An advanced module in database concepts, building on DBC 161. Students will learn about advanced database design, SQL optimization, and database management techniques, preparing them for complex database tasks.',
        video: 'DBD-Introduction.mp4'
    },
    {
        code: 'DBD 361',
        description: 'Database Development 361',
        year: 3,
        course: 'DIT',
        overview: 'An advanced module in database development, building on earlier database courses. Students will learn about complex database architectures, performance optimization, and advanced SQL techniques, preparing them for high-level database management.',
        video: 'DBD-Introduction.mp4'
    },
    {
        code: 'DBR 361',
        description: 'Database Recovery 361',
        year: 3,
        course: 'DIT',
        overview: 'This module covers the principles and practices of database recovery. Students will learn about backup strategies, disaster recovery, and data restoration techniques, preparing them to ensure data integrity and availability.',
        video: 'All-Other-Introduction.mp4'
    },
    {
        code: 'DDB 361',
        description: 'Distributed Database 361',
        year: 3,
        course: 'DIT',
        overview: 'An introduction to distributed database systems and their applications. Students will learn about distributed database architectures, data replication, and consistency models, preparing them to design and manage distributed databases.',
        video: 'All-Other-Introduction.mp4'
    },
    {
        code: 'PRJ 361',
        description: 'Project 361',
        year: 3,
        course: 'DIT',
        overview: 'A capstone project integrating knowledge from various modules. Students will work on real-world projects, applying their skills in programming, database management, and systems analysis to develop comprehensive solutions.',
        video: 'All-Other-Introduction.mp4'
    },
    {
        code: 'AIT 361',
        description: 'Advanced Information Technology 361',
        year: 3,
        course: 'DIT',
        overview: 'An advanced module in information technology, building on earlier IT courses. Students will explore topics such as emerging technologies, IT strategy, and IT management, preparing them for leadership roles in the IT industry.',
        video: 'All-Other-Introduction.mp4'
    },
    {
        code: 'WSP 361',
        description: 'Web Server Programming 361',
        year: 3,
        course: 'DIT',
        overview: 'This module covers the principles and practices of web server programming. Students will learn about server-side scripting, web server configuration, and web security, preparing them to develop and manage web servers effectively.',
        video: 'PRG-Introduction.mp4'
    },
    {
        code: 'INF 251',
        description: 'Information Systems 251',
        year: 1,
        course: 'CIT',
        overview: 'This module provides an introduction to information systems and their role in organizations. Topics include system components, data management, and the use of information systems for decision-making and operational processes.',
        video: 'INF-Introduction.mp4'
    },
    {
        code: 'OPS 251',
        description: 'Operating Systems 251',
        year: 1,
        course: 'CIT',
        overview: 'An introduction to operating systems concepts and practices. Students will learn about operating system architecture, process management, and memory management, providing a foundation for understanding and managing operating systems.',
        video: 'All-Other-Introduction.mp4'
    },
    {
        code: 'PRJ 251',
        description: 'Project 251',
        year: 1,
        course: 'CIT',
        overview: 'A capstone project integrating knowledge from various modules. Students will work on real-world projects, applying their skills in programming, database management, and systems analysis to develop comprehensive solutions.',
        video: 'All-Other-Introduction.mp4'
    },
    {
        code: 'PMM 251',
        description: 'Project Management 251',
        year: 1,
        course: 'CIT',
        overview: 'An introduction to project management principles and practices. This module covers project planning, execution, and control, providing students with the skills to manage projects effectively in various contexts.',
        video: 'All-Other-Introduction.mp4'
    },
    {
        code: 'SEC 251',
        description: 'Security 251',
        year: 1,
        course: 'CIT',
        overview: 'This module introduces students to security principles and practices in the IT industry. Topics include network security, cryptography, and security management, providing a foundation for understanding and implementing security measures.',
        video: 'All-Other-Introduction.mp4'
    },
    {
        code: 'MAT 151',
        description: 'Mathematics 151',
        year: 1,
        course: 'CIT',
        overview: 'An introductory module in mathematics, covering fundamental concepts and techniques. Topics include algebra, calculus, and basic statistics, essential for solving problems in computer science and information technology.',
        video: 'MAT-Introduction.mp4'
    },
    {
        code: 'DBD 251',
        description: 'Database Development 251',
        year: 1,
        course: 'CIT',
        overview: 'This module covers the basics of database design, development, and management. Students will learn about relational database concepts, SQL, and database management systems, providing a foundation for working with databases.',
        video: 'DBD-Introduction.mp4'
    },
    {
        code: 'DBM 251',
        description: 'Database Management 251',
        year: 1,
        course: 'CIT',
        overview: 'An introduction to database management principles and practices. Students will learn about database administration, performance tuning, and security, preparing them to manage and maintain database systems effectively.',
        video: 'All-Other-Introduction.mp4'
    },
    {
        code: 'PRG 251',
        description: 'Programming 251',
        year: 1,
        course: 'CIT',
        overview: 'An introductory module to programming, focusing on fundamental concepts and practices. Students will learn to write and debug programs using a high-level programming language, covering topics such as variables, control structures, and functions.',
        video: 'PRG-Introduction.mp4'
    },
    {
        code: 'PRG 252',
        description: 'Programming 252',
        year: 1,
        course: 'CIT',
        overview: 'A continuation of Programming 251, focusing on advanced programming techniques and concepts. Topics include data structures, algorithms, and object-oriented programming, preparing students for more complex programming challenges.',
        video: 'PRG-Introduction.mp4'
    },
    {
        code: 'WPR 251',
        description: 'Web Programming 251',
        year: 1,
        course: 'CIT',
        overview: 'This module introduces students to web programming, including HTML, CSS, and JavaScript. Students will learn to create and style web pages, and implement interactive features, providing a foundation for web development.',
        video: 'PRG-Introduction.mp4'
    },
    {
        code: 'WPR 252',
        description: 'Web Programming 252',
        year: 1,
        course: 'CIT',
        overview: 'A continuation of Web Programming 251, focusing on more advanced topics. Students will learn about server-side programming, web frameworks, and web security, enabling them to develop robust web applications.',
        video: 'PRG-Introduction.mp4'
    },
    {
        code: 'ERP 251',
        description: 'Enterprise Resource Planning 251',
        year: 1,
        course: 'CIT',
        overview: 'This module introduces students to enterprise resource planning (ERP) systems and their applications. Topics include ERP architecture, implementation, and management, providing a foundation for understanding and using ERP systems effectively.',
        video: 'All-Other-Introduction.mp4'
    },
    {
        code: 'IOT 251',
        description: 'Internet of Things 251',
        year: 1,
        course: 'CIT',
        overview: 'This module introduces students to the Internet of Things (IoT) and its applications. Topics include IoT architecture, communication protocols, and sensor networks, providing a foundation for developing IoT solutions.',
        video: 'All-Other-Introduction.mp4'
    }
];

const venues = [
  { 
    course: ['BCOMP', 'BIT', 'DIT'], 
    modules: ['MAT 181', 'WPR 181', 'WPR 281', 'PRG 381', 'ACW 171', 'ENT 171', 'DWH 271', 'WPR 371', 'BUC 161', 'ERP 261', 'CNA 361', 'SSX 361'],
    name: "Iota", 
    seats: 30, 
    location: "main campus", 
    hasPCs: true 
  },
  { 
    course: ['BCOMP', 'BIT', 'DIT'], 
    modules: ['ACW 181', 'BUM 181', 'SAD 281', 'SEN 381', 'COA 171', 'DBD 271', 'IOT 271', 'BIN 371', 'BME 161', 'INL 261', 'EHA 361', 'SWA 361'],
    name: "Phi", 
    seats: 40, 
    location: "main campus", 
    hasPCs: false 
  },
  { 
    course: ['BCOMP', 'BIT', 'DIT'], 
    modules: ['COA 181', 'ENT 181', 'DWH 281', 'WPR 381', 'DBD 171', 'MAT 271', 'SWT 271', 'DBA 371', 'COA 161', 'ILE 261', 'PET 361', 'PMM 361'],
    name: "Omega", 
    seats: 50, 
    location: "main campus", 
    hasPCs: true 
  },
  { 
    course: ['BIT', 'DIT', 'CIT'], 
    modules: ['ENG 171', 'INF 271', 'MAT 371', 'STA 371', 'DBC 161', 'PMM 261', 'DOP 361', 'AIT 361', 'INF 251', 'SEC 251', 'PRG 251', 'ERP 251'],
    name: "Sigma", 
    seats: 60, 
    location: "main campus", 
    hasPCs: false 
  },
  { 
    course: ['BCOMP', 'BIT', 'DIT', 'CIT'], 
    modules: ['INF 181', 'DBD 281', 'IOT 281', 'BIN 381', 'INF 171', 'INL 221', 'DBD 371', 'INM 371', 'DBF 161', 'CNA 261', 'MFR 361', 'WSP 361', 'OPS 251', 'MAT 251', 'PRG 252', 'IOT 251'],
    name: "Kappa", 
    seats: 35, 
    location: "south campus", 
    hasPCs: true 
  },
  { 
    course: ['BCOMP', 'DIT'], 
    modules: ['INL 101', 'MAT 281', 'SWT 281', 'DBA 381', 'EUC 161', 'IOT 261', 'NWD 361'],
    name: "Pi", 
    seats: 45, 
    location: "south campus", 
    hasPCs: false 
  },
  { 
    course: ['BIT', 'DIT'], 
    modules: ['MAT 171', 'PRG 271', 'INL 321', 'MLG 372', 'INL 161', 'OPS 261', 'OPS 361'],
    name: "Roh", 
    seats: 25, 
    location: "south campus", 
    hasPCs: true 
  },
  { 
    course: ['BCOMP', 'BIT', 'DIT'], 
    modules: ['DBD 181', 'INF 281', 'RSH 381', 'STA 381', 'NWD 171', 'PRG 272', 'LPR 371', 'UAX 371', 'IOT 161', 'OPS 262', 'DBA 361'],
    name: "Tau", 
    seats: 55, 
    location: "south campus", 
    hasPCs: false 
  },
  { 
    course: ['BCOMP', 'BIT', 'DIT', 'CIT', 'DBD 381'], 
    modules: ['INL 102', 'INL 201', 'INM 381', 'PRG 171', 'PMM 271', 'MLG 371', 'AIT 471', 'MAT 161', 'OPS 263', 'DBC 361', 'PRJ 251', 'DBD 251', 'WPR 251'],
    name: "Eta", 
    seats: 40, 
    location: "main campus", 
    hasPCs: true 
  },
  { 
    course: ['BIT', 'DIT'], 
    modules: ['PRG 172', 'STA 271', 'PRJ 371', 'AIT 4712', 'NWD 161', 'SEC 261', 'DBD 361'],
    name: "Gamma", 
    seats: 50, 
    location: "main campus", 
    hasPCs: false 
  },
  { 
    course: ['BCOMP', 'BIT', 'DIT', 'CIT'], 
    modules: ['LPR 181', 'INL 202', 'INL 321', 'MLG 382', 'STA 171', 'WPR 271', 'PMM 371', 'DST 471', 'PRS 161', 'PRG 261', 'DBR 361', 'PMM 251', 'DBM 251', 'WPR 252'],
    name: "Zeta", 
    seats: 60, 
    location: "main campus", 
    hasPCs: true 
  },
  { 
    course: ['BCOMP', 'BIT', 'DIT'], 
    modules: ['NWD 181', 'PRG 281', 'LPR 381', 'UAX 381', 'WPR 171', 'SAD 271', 'PRG 371', 'PRG 161', 'PRG 262', 'DDB 361'],
    name: "Omnikron", 
    seats: 70, 
    location: "south campus", 
    hasPCs: false 
  },
  { 
    course: ['BCOMP', 'DIT'], 
    modules: ['PRG 181', 'PRG 282', 'MLG 381', 'AIT 481', 'PRP 161', 'SWA 261', 'WDB 361'],
    name: "Lambda", 
    seats: 30, 
    location: "south campus", 
    hasPCs: true 
  },
  { 
    course: ['BIT', 'DIT'], 
    modules: ['BUM 171', 'SAD 271', 'SEN 371', 'WPR 161', 'SWT 261', 'WFS 361'],
    name: "Theta", 
    seats: 45, 
    location: "south campus", 
    hasPCs: false 
  },
  { 
    course: ['BCOMP', 'DIT'], 
    modules: ['PRG 182', 'PMM 281', 'PRJ 381', 'AIT 482', 'STA 161', 'UXD 261', 'WSE 361'],
    name: "Delta", 
    seats: 55, 
    location: "main campus", 
    hasPCs: true 
  },
  { 
    course: ['BCOMP', 'DIT'], 
    modules: ['STA 181', 'STA 281', 'PMM 381', 'DST 481', 'DBD 261', 'WPR 261', 'PRG 361'],
    name: "Alpha", 
    seats: 35, 
    location: "main campus", 
    hasPCs: false 
  },
];

document.addEventListener("DOMContentLoaded", () => {
    // Intersection Observer for sections
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = "1";
                    entry.target.style.transform = "translateY(0)";
                }
            });
        },
        { threshold: 0.5 }                                                                    
    );

    document.querySelectorAll(".section").forEach((section) => {
        observer.observe(section);
    });

    // Modal functionality
    const modal = document.getElementById("modal");
    const loginButton = document.getElementById("loginButton");
    const closeButton = document.querySelector(".close");

    if (loginButton) {
        loginButton.addEventListener("click", () => {
            if (modal) modal.style.display = "flex";
        });
    }

    if (closeButton) {
        closeButton.addEventListener("click", () => {
            if (modal) modal.style.display = "none";
        });
    }

    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    };

    // Video controls on hover
    const video = document.getElementById("myVideo");

    if (video) {
        video.addEventListener("mouseover", () => {
            video.controls = true;
        });

        video.addEventListener("mouseout", () => {
            video.controls = false;
        });
    }

    const formLogin = document.getElementById("FormLogin");

    if (formLogin) {
        formLogin.addEventListener("submit", async function (event) {
            event.preventDefault();
            const studentId = document.getElementById("StudentID").value;
            const password = document.getElementById("password").value;

            try {
                const response = await fetch(`http://localhost:${port}/login`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ studentId, password }),
                });

                const data = await response.json();
                if (data.message === "Login successful") {
                    if (password === "BelgiumCampus") {
                        if (passwordChangeModal) passwordChangeModal.style.display = "flex";
                    }
                    await getStudentDetails();
                    console.log(`${sID} ${sName} ${sSurname}`);
                    if (sPassword !== 'BelgiumCampus') {
                        window.location.href = "./Dashboard.html";
                    }
                    // Additional code if needed
                } else {
                    alert(data.message);
                }
            } catch (error) {
                console.error("Error:", error);
            }
        });
    }
});

// Courses side nav
function toggleNav() {
    var sidebar = document.querySelector(".sidebar");
    var toggleStrip = document.querySelector(".toggle-strip");
    var toggleIcon = document.getElementById("toggle-icon");

    if (sidebar.style.width === "250px") {
        sidebar.style.width = "0";
        toggleStrip.style.left = "0";
        toggleIcon.classList.remove("fa-arrow-left");
        toggleIcon.classList.add("fa-arrow-right");
    } else {
        sidebar.style.width = "250px";
        toggleStrip.style.left = "250px";
        toggleIcon.classList.remove("fa-arrow-right");
        toggleIcon.classList.add("fa-arrow-left");
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const passwordChangeModal = document.getElementById("passwordChangeModal");
    const closePasswordChange = document.getElementById("closePasswordChange");
    const changePasswordForm = document.getElementById("changePasswordForm");

    if (closePasswordChange) {
        closePasswordChange.addEventListener("click", () => {
            if (passwordChangeModal) passwordChangeModal.style.display = "none";
        });
    }

    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        } else if (event.target == passwordChangeModal) {
            passwordChangeModal.style.display = "none";
        }
    };

    if (changePasswordForm) {
        changePasswordForm.addEventListener("submit", function (event) {
            event.preventDefault();
            const studentId = document.getElementById("StudentID").value;
            const newPassword = document.getElementById("newPassword").value;
            const confirmPassword = document.getElementById("confirmPassword").value;

            if (newPassword !== confirmPassword) {
                alert("Passwords do not match.");
                return;
            }

            fetch(`http://localhost:${port}/changePassword`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ studentId, newPassword }),
            })
                .then((response) => response.json())
                .then((data) => {
                    alert(data.message);
                    if (passwordChangeModal) passwordChangeModal.style.display = "none";
                    if (modal) modal.style.display = "none";
                    window.location.href = "./Dashboard.html";
                })
                .catch((error) => console.error("Error:", error));
        });
    }
});

const signUpForm = document.getElementById("signUpForm");

if (signUpForm) {
    signUpForm.addEventListener("submit", function (event) {
        event.preventDefault();
        const username = document.getElementById("signUpUsername").value;
        const password = document.getElementById("signUpPassword").value;

        fetch(`http://localhost:${port}/signup`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ username, password }),
        })
            .then((response) => response.json())
            .then((data) => {
                alert(data.message);
            })
            .catch((error) => console.error("Error:", error));
    });
}

function populateEnrollmentForm(data) {
    const name = document.getElementById("name");
    const surname = document.getElementById("surname");
    const id = document.getElementById("id");
    const adr1 = document.getElementById("adr1");
    const adr2 = document.getElementById("adr2");
    const city = document.getElementById("city");
    const zip = document.getElementById("zip");
    const province = document.getElementById("province");
    const gender = document.querySelector(
        `input[name="gender"][value="${data.gender}"]`
    );
    const email = document.getElementById("email");
    const course = document.getElementById("course");
    const attendance = document.querySelector(
        `input[name="attendance"][value="${data.attendance}"]`
    );

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
}

async function handleSubmit(event) {
    event.preventDefault();

    const form = document.getElementById("formGroup");
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
        alert("Please fill in all fields.");
        return;
    }

    try {
        const response = await fetch(`http://localhost:${port}/saveForm`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });

        const result = await response.json();
        alert(result.message);

        const modal = document.getElementById("modal");
        const formLogin = document.getElementById("FormLogin");

        if (modal) modal.style.display = "flex";
        if (formLogin) {
            formLogin.innerHTML = `
                <label for="StudentID">StudentID:</label>
                <input type="text" id="StudentID" name="StudentID" value="${result.studentId}" required>
                <label for="password">Password:</label>
                <input type="password" id="password" name="password" value="BelgiumCampus" required>
                <button type="submit">Login</button>`;
        }
    } catch (error) {
        console.error("Error:", error);
    }
}



async function createHome() {
    let dashContent = document.querySelector(".dashboardContent");
    dashContent.innerHTML = ``;
    await getStudentDetails();
    dashContent.innerHTML = `
        <div class="course">
          
        </div>
        <div class="countdown-container">
          <h2>Starts 1 December 2024 </h2>
          <div id="countdown" class="countdown"></div>
        </div>
        <div class = "info-container">
            <div class="info-box">
                <div class="info-item">
                    <span class="icon"><i class="fa fa-calendar" aria-hidden="true"></i></span>
                    <span class="label">Duration:</span>
                    <span ID="Duration" class="value"></span>
                </div>
                <div class="info-item">
                    <span class="icon"><i class="fa fa-plus" aria-hidden="true"></i></span>
                    <span class="label">NQF:</span>
                    <span ID="NQF" class="value"></span>
                </div>
                <div class="info-item">
                    <span class="icon"><i class="fa fa-folder" aria-hidden="true"></i></span>
                    <span class="label">Credits:</span>
                    <span ID="Credits" class="value"></span>
                </div>
                <div class="info-item">
                    <span class="icon"><i class="fa fa-id-badge" aria-hidden="true"></i></span>
                    <span class="label">SAQA ID:</span>
                    <span ID="SAQAID" class="value"></span>
                </div>
                <div class="info-item">
                    <span class="icon"><i class="fa fa-map-pin" aria-hidden="true"></i></span>
                    <span class="label">Location:</span>
                    <span ID="Location" class="value"></span>
                </div>
            </div>
            <p id ="cDesc"> </p>
        </div>`;

    let courseHeading = document.createElement("h1");
    let courseDesc = document.querySelector("#cDesc");
    let Duration = document.querySelector("#Duration");
    let NQF = document.querySelector("#NQF");
    let Credits = document.querySelector("#Credits");
    let SAQAID = document.querySelector("#SAQAID");
    let Location = document.querySelector("#Location");

    Object.keys(courseDescriptions).forEach((course) => {
        if (sCourse == course) {
            courseHeading.textContent = courseDescriptions[course].cName;
            courseDesc.textContent = courseDescriptions[course].cDescription;
            Duration.textContent = courseDescriptions[course].Duration;
            NQF.textContent = courseDescriptions[course].NQF;
            Credits.textContent = courseDescriptions[course].Credits;
            SAQAID.textContent = courseDescriptions[course].SAQAID;
            Location.textContent = courseDescriptions[course].Location;
        }
    });

    let course = document.querySelector(".course");
    course.appendChild(courseHeading);

    Object.keys(CourseStartDates).forEach((course) => {
        console.log(sCourse);
        if (sCourse == course) {
            let eventDate = new Date(CourseStartDates[course]).getTime();
            const timerInterval = setInterval(function () {
                const now = new Date().getTime();
                const timeRemaining = eventDate - now;

                const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
                const hours = Math.floor(
                    (timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
                );
                const minutes = Math.floor(
                    (timeRemaining % (1000 * 60 * 60)) / (1000 * 60)
                );
                const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

                document.querySelector("#countdown").innerHTML = `
            ${days}d ${hours}h ${minutes}m ${seconds}s
          `;

                if (timeRemaining < 0) {
                    clearInterval(timerInterval);
                    document.querySelector("#countdown").innerHTML =
                        "The event has started!";
                }
            }, 1000);
        }
    });

    // Create table
    let tHead = document.createElement("thead");
    let tBody = document.createElement("tbody");
    let table = document.createElement("table");

    let Heading = ["Module", "Module Code", "NQF", "Credits", "Venues", "Lecturers"];

    Heading.forEach((data) => {
        let th = document.createElement("th");
        th.textContent = data;
        tHead.appendChild(th);
    });
    tHead.style.position = "sticky";
    tHead.style.top = "0";

    table.appendChild(tHead);
    table.appendChild(tBody); 

    
    const filteredModules = modules.filter((module) => module.course === sCourse);

    filteredModules.forEach((module) => {
        const row = document.createElement("tr");

        const cellModule = document.createElement("td");
        cellModule.textContent = module.description;
        row.appendChild(cellModule);

        const cellCode = document.createElement("td");
        cellCode.textContent = module.code;
        row.appendChild(cellCode);

        const cellNQF = document.createElement("td");
        cellNQF.textContent = "NQF Level"; 
        row.appendChild(cellNQF);

        const cellCredits = document.createElement("td");
        cellCredits.textContent = "Credits"; 
        row.appendChild(cellCredits);

        const cellVenues = document.createElement("td");
        cellVenues.textContent = "Venues"; 
        row.appendChild(cellVenues);

        const cellLecturers = document.createElement("td");
        const lecturerNames = lecturers
            .filter((lecturer) => lecturer.modules.includes(module.code))
            .map((lecturer) => lecturer.name)
            .join(", ");
        cellLecturers.textContent = lecturerNames;
        row.appendChild(cellLecturers);

        tBody.appendChild(row);
    });

    const rows = table.querySelectorAll("tr");
    for (let i = 1; i < rows.length; i++) {
        if (i % 2 === 0) {
            rows[i].style.backgroundColor = "#f2f2f2";
        }
    }

    rows.forEach((row) => {
        row.addEventListener("mouseover", () => {
            row.style.backgroundColor = "#ddd";
        });
        row.addEventListener("mouseout", () => {
            row.style.backgroundColor = "";
            if (Array.from(rows).indexOf(row) % 2 === 0 && row !== tHead) {
                row.style.backgroundColor = "#f2f2f2";
            }
        });
    });

    let tableContainer = document.createElement("div");
    tableContainer.style.maxHeight = "50vh";
    tableContainer.style.overflow = "auto";
    tableContainer.style.width = "80%";
    tableContainer.style.marginLeft = "10%"
    tableContainer.classList.add("table");

    table.style.width = "100%";
    table.style.borderCollapse = "collapse";
    table.style.boxShadow = "0 2px 4px rgba(0, 0, 0, 0.1)";
    table.classList.add("Print")


    tableContainer.appendChild(table);
    dashContent.appendChild(tableContainer);

    let button=document.createElement('button');
    button.id = 'printTableButton';
    button.innerText = 'Print Table';
    button.style.display = 'block';
    button.style.marginLeft = 'auto';
    button.style.marginTop='0.5vw';
    button.style.marginRight = '4.1vw';
    button.style.padding = '10px 30px';
    button.style.backgroundColor = "grey";
    button.style.color = 'white';
    button.style.border = 'none';
    button.style.borderRadius = '5px';
    button.style.cursor = 'pointer';
    button.onclick=function(){
        window.print()
    }
    dashContent.appendChild(button);
}

//Create Venues tab on Dashboard
async function createVenues(){
    await getStudentDetails()
    let pageHeading = document.createElement('h1')
    pageHeading.textContent = "Venues"
    let tHead = document.createElement('thead')
    let tBody = document.createElement('tbody')
    let table = document.createElement('table')
    let dashContent = document.querySelector('.dashboardContent')
    let contentContainer = document.createElement('div')
    contentContainer.classList.add('contentContainer')
    dashContent.innerHTML = ''
    dashContent.appendChild(pageHeading)
    let tableHeadings = ['Name', 'Seats', 'Location', 'Has PCs']

    tableHeadings.forEach(heading => {
        let th = document.createElement('th')
        th.textContent = heading
        tHead.appendChild(th)
    });

    table.appendChild(tHead)

    
    venues.forEach(data => {
        let bFound = false
        for (let i = 0; i < data.course.length; i++) {
          
          
            if (sCourse === data.course[i]) {
              bFound = true
            }
          
        }
        if (bFound){
        let tRow = document.createElement('tr')
        let cellName = document.createElement('td')
        cellName.textContent = data.name
        let cellSeats = document.createElement('td')
        cellSeats.textContent = data.seats
        let cellLocations = document.createElement('td')
        cellLocations.textContent = data.location
        let cellHasPcs = document.createElement('td')
        if (data.hasPCs) {
          cellHasPcs.innerHTML = '<i class="fa fa-check" aria-hidden="true"></i>'
        }
        else {
          cellHasPcs.innerHTML = '<i class="fa fa-times" aria-hidden="true"></i>'
        }
        tRow.appendChild(cellName)
        tRow.appendChild(cellSeats)
        tRow.appendChild(cellLocations)
        tRow.appendChild(cellHasPcs)
        tBody.appendChild(tRow)
        }
    });
    table.appendChild(tBody)
    contentContainer.innerHTML = `<img src="Images/Map.png" alt="">`
    contentContainer.appendChild(table)
    dashContent.appendChild(contentContainer)
    const rows = table.querySelectorAll("tr");
    rows.forEach((row) => {
        row.addEventListener("mouseover", () => {
            row.style.backgroundColor = "#ddd";
        });
        row.addEventListener("mouseout", () => {
            row.style.backgroundColor = "";
            if (Array.from(rows).indexOf(row) % 2 === 0 && row !== headerRow) {
                row.style.backgroundColor = "#f2f2f2";
            }
        });
    });
}

async function createMyModules() {
  let dashContent = document.querySelector(".dashboardContent");
  dashContent.innerHTML = ''; 
  await getStudentDetails();

    let pageHeading = document.createElement('h1')
    pageHeading.textContent = "My modules"
  let filteredModules = modules.filter(module => module.course === sCourse);

  let moduleTable = document.createElement('table');
  moduleTable.className = 'moduleTable';

  let moduleTblHeader = document.createElement('thead');
  let headerRow = document.createElement('tr');
  let headers = ['Description', 'Code', 'More Info', 'Completed'];

  headers.forEach(text => {
      const th = document.createElement('th');
      th.textContent = text;
      headerRow.appendChild(th);
  });
  moduleTblHeader.appendChild(headerRow);

  let moduleTblBody = document.createElement('tbody');

  filteredModules.forEach(module => {
      let row = document.createElement('tr');
      row.innerHTML = `<td>${module.description}</td>
               <td>${module.code}</td>
                <td><a href="https://www.belgiumcampus.ac.za/wp-content/uploads/2023/11/Mathematics-181-MAT181.pdf" target="_blank">View PDF</a></td>  
                <td><input type="checkbox" class="completedMod"></td>`;

      moduleTblBody.appendChild(row);

      let checkbox = row.querySelector('.completedMod');

      checkbox.addEventListener('change', (e) => {
          if (e.target.checked) {
              completeModule(module, row);
          }
      });
  });

  moduleTable.appendChild(moduleTblHeader);
  moduleTable.appendChild(moduleTblBody);

  let completedTable = document.createElement('table');
  completedTable.className = 'completedTable';

  let completedTableHeader = document.createElement('thead');
  completedTableHeader.innerHTML = `
            <tr>
                <th>Description</th>
                <th>Code</th>
                <th>Year</th>
            </tr>
        `;

  let completedTableBody = document.createElement('tbody');
  completedTable.appendChild(completedTableHeader);
  completedTable.appendChild(completedTableBody);

  // container for the tables
  let bigContainer = document.createElement('div');
  let container1 = document.createElement('div');
  let container2 = document.createElement('div');
  
  container1.appendChild(moduleTable);
  container2.appendChild(completedTable);
  bigContainer.classList.add('bigContainer');
  container1.classList.add('table');
  container2.classList.add('table');
  
  dashContent.appendChild(pageHeading)

  bigContainer.appendChild(container1);
  bigContainer.appendChild(container2);
  dashContent.appendChild(bigContainer)

}

function completeModule(module, row) {
  let completedTableBody = document.querySelector('.completedTable tbody');
  let completedRow = document.createElement('tr');
  completedRow.innerHTML = `
    <td>${module.description}</td>
    <td>${module.code}</td>
    <td>${module.year}</td>
`;
  completedTableBody.appendChild(completedRow);
  row.remove();
}

document.addEventListener("DOMContentLoaded", async () => {
    // Function to fetch and handle student details
    const DashboardLink = document.querySelector(`#dashboardLink`);

    await getStudentDetails();

    if (sID && sID !== "") {
        DashboardLink.classList.add("visible");
    } else {
        DashboardLink.classList.add("notVisible");
    }
    console.log(`Dynamic generate : ${sName} `);

    let StudentDetailsdiv = document.querySelector('#sideNav-footer-titlebox');
    StudentDetailsdiv.innerHTML = `<a id="sideNav-footer-title">${sName} ${sSurname}</a><span id="sideNav-footer-subtitle">${sID}</span>`;

    let EditUserSection = document.querySelector('#nav-footer-content')
    let btn = document.createElement('div');
    btn.innerHTML = `<p>Student details</p>`;
    EditUserSection.appendChild(btn);

    // Get the modal
let modal = document.getElementById("studentModal");

let span = document.getElementsByClassName("close")[0];

let form = document.getElementById("studentForm");

btn.onclick = function() {
    fetch('/getStudentDetails')
        .then(response => response.json())
        .then(data => {
            document.getElementById('name').value = data.name;
            document.getElementById('surname').value = data.surname;
            document.getElementById('adr').value = data.adr;
            document.getElementById('city').value = data.city;
            document.getElementById('zip').value = data.zip;
            document.getElementById('province').value = data.province;
            document.getElementById('gender').value = data.gender;
            document.getElementById('email').value = data.email;
            document.getElementById('course').value = data.course;
            document.getElementById('attendance').value = data.attendance;
        })
        .catch(error => console.error('Error:', error));

    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// When the form is submitted, update the student details
form.onsubmit = function(event) {
    event.preventDefault();

    let updatedData = {
        studentId: sStudentId,
        name: document.getElementById('name').value,
        surname: document.getElementById('surname').value,
        adr: document.getElementById('adr').value,
        city: document.getElementById('city').value,
        zip: document.getElementById('zip').value,
        province: document.getElementById('province').value,
        gender: document.getElementById('gender').value,
        email: document.getElementById('email').value,
        course: document.getElementById('course').value,
        attendance: document.getElementById('attendance').value,
    };

    fetch('/updateStudentDetails', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedData),
    })
    .then(response => response.json())
    .then(data => {
        alert(data.message);
        modal.style.display = "none";
    })
    .catch(error => console.error('Error:', error));
};
    
});

async function getStudentDetails() {
    try {
        console.log(`GET StudentDetails executed`);
        const response = await fetch(`http://localhost:${port}/getStudentDetails`);
        const data = await response.json();
        console.log(data);

        // Update all global variables
        sName = data.name;
        sSurname = data.surname;
        sID = data.id;
        sAdr = data.adr;
        sCity = data.city;
        sZip = data.zip;
        sProvince = data.province;
        sGender = data.gender;
        sEmail = data.email;
        sCourse = data.course;
        sAttendance = data.attendance;
        sStudentId = data.studentId;
        sPassword = data.password;
    } catch (error) {
        console.error("Error fetching student details:", error);
        return null;
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const lecturerContainer = document.querySelector(".lecturer");
    const moduleContainer = document.querySelector(".modules");
    const searchInput = document.querySelector(".search-input");
    let currentCourse = "all";

    function displayLecturers(course = "all") {
        lecturerContainer.innerHTML = "";
        lecturers.forEach((lecturer) => {
            const isCourseMatch =
                course === "all" ||
                lecturer.modules.some((moduleCode) => {
                    const module = modules.find((m) => m.code === moduleCode);
                    return module && module.course === course;
                });
            if (isCourseMatch) {
                const lecturerCard = `
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
                lecturerContainer.insertAdjacentHTML("beforeend", lecturerCard);
            }
        });
    }

    function createFilterDropdown() {
        const filterContainer = document.getElementById("filterContainer");
        const selectElement = document.createElement("select");
        selectElement.id = "yearFilter";

        const years = ["all", 1, 2, 3, 4];
        years.forEach((year) => {
            const optionElement = document.createElement("option");
            optionElement.value = year;
            optionElement.text = year === "all" ? "All Years" : `Year ${year}`;
            selectElement.appendChild(optionElement);
        });

        const label = document.createElement("label");
        label.htmlFor = "yearFilter";
        label.innerText = "Select Year: ";

        filterContainer.appendChild(label);
        filterContainer.appendChild(selectElement);
    }

    function displayModules(
        course = "all",
        filterYear = "all",
        searchQuery = ""
    ) {
        moduleContainer.innerHTML = "";
        modules.forEach((module) => {
            const isCourseMatch = course === "all" || module.course === course;
            const isYearMatch = filterYear === "all" || module.year == filterYear;
            const isSearchMatch =
                module.code.toLowerCase().includes(searchQuery) ||
                module.description.toLowerCase().includes(searchQuery);

            if (isCourseMatch && isYearMatch && isSearchMatch) {
                const moduleCard = `
                    <div class="module-card ${module.course} year${module.year}">
                        <div class="module-header">
                            <h1>${module.code}</h1>
                        </div>
                        <div class="card-content">
                        <p>${module.description}</p>
                        <button id='${module.code}'>View More</button>
                        </div>
                    </div>
                `;
                moduleContainer.insertAdjacentHTML('beforeend', moduleCard);

                let button = document.getElementById(module.code);
                button.addEventListener("click", function () {
                    let modal = document.getElementById("ModuleModal");
                    modal.innerHTML = `
                    <div class="modal-content">
                        <span class="close-btn">&times;</span>
                        <h1>${module.description}</h1>                        
                        <p>${module.overview}</p>
                        <video src="Images/${module.video}" class="video" id="ModuleModalVideo"  controls muted autoplay loop></video>                        
                    </div>
                     `;
                    modal.style.display = 'block';
                    let closeBtn = modal.querySelector('.close-btn');
                    closeBtn.addEventListener("click", function () {
                        modal.style.display = 'none';
                    });
                })

            }
        });
    }


    createFilterDropdown();
    displayModules();
    displayLecturers();

    document.getElementById("yearFilter").addEventListener("change", function () {
        const selectedYear = this.value;
        const searchQuery = searchInput.value.toLowerCase();
        displayModules(currentCourse, selectedYear, searchQuery);
        moduleContainer.insertAdjacentHTML("beforeend", moduleCard);
    });

    document.querySelectorAll(".sideNav-button").forEach((button) => {
        button.addEventListener("click", () => {
            currentCourse = button.getAttribute("data-course");
            let courseHeading;
            let courseDesc;
            let Duration;
            let NQF;
            let Credits;
            let SAQAID;
            let Location;
            Object.keys(courseDescriptions).forEach((course) => {
                if (currentCourse == course) {
                    courseHeading = courseDescriptions[course].cName;
                    courseDesc = courseDescriptions[course].cDescription;
                    Duration = courseDescriptions[course].Duration;
                    NQF = courseDescriptions[course].NQF;
                    Credits = courseDescriptions[course].Credits;
                    SAQAID = courseDescriptions[course].SAQAID;
                    Location = courseDescriptions[course].Location;
                }
            });

            const courseDescription = document.querySelector(".description");
            courseDescription.innerHTML = "";
            let infoContainer = document.createElement("div");

            infoContainer.innerHTML = `           <h1>${courseHeading}</h1>
                                            <div class = "info-container">
                                        <div class="info-box">
                                            <div class="info-item">
                                                <span class="icon"><i class="fa fa-calendar" aria-hidden="true"></i></span>
                                                <span class="label">Duration:</span>
                                                <span ID="Duration" class="value">${Duration}</span>
                                            </div>
                                            <div class="info-item">
                                                <span class="icon"><i class="fa fa-plus" aria-hidden="true"></i></span>
                                                <span class="label">NQF:</span>
                                                <span ID="NQF" class="value">${NQF}</span>
                                            </div>
                                            <div class="info-item">
                                                <span class="icon"><i class="fa fa-folder" aria-hidden="true"></i></span>
                                                <span class="label">Credits:</span>
                                                <span ID="Credits" class="value">${Credits}</span>
                                            </div>
                                            <div class="info-item">
                                                <span class="icon"><i class="fa fa-id-badge" aria-hidden="true"></i></span>
                                                <span class="label">SAQA ID:</span>
                                                <span ID="SAQAID" class="value">${SAQAID}</span>
                                            </div>
                                            <div class="info-item">
                                                <span class="icon"><i class="fa fa-map-pin" aria-hidden="true"></i></span>
                                                <span class="label">Location:</span>
                                                <span ID="Location" class="value">${Location}</span>
                                            </div>
                                        </div>
                                        <p>${courseDesc}</p>
                                    </div>
                                          `;
            courseDescription.appendChild(infoContainer);
            const selectedYear = document.getElementById("yearFilter").value;
            const searchQuery = searchInput.value.toLowerCase();
            displayModules(currentCourse, selectedYear, searchQuery);
            displayLecturers(currentCourse);
        });
    });

    searchInput.addEventListener("input", () => {
        const searchQuery = searchInput.value.toLowerCase();
        displayModules(
            currentCourse,
            document.getElementById("yearFilter").value,
            searchQuery
        );
    });
});
