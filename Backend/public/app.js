const port = 3000;

let sName = '';
let sSurname = '';
let sID = '';
let sAdr = '';
let sCity = '';
let sZip = '';
let sProvince = '';
let sGender = '';
let sEmail = '';
let sCourse = '';
let sAttendance = '';
let sStudentId = '';
let sPassword = '';

const CourseStartDates = {
    BCOMP: `December 1, 2024 00:00:00`,
    BIT: `November 1, 2024 00:00:00`,
    DIT: 'October 1, 2024 00:00:00',
    CIT: 'September 1, 2024 00:00:00',
}

const courseDescriptions = {
    BCOMP: {
        cName: 'BA of Computer Science', cDescription: `The Bachelor of Computer Science (BSc CS) is an undergraduate degree program designed to provide students with a strong foundation in 
                                    computer science and its applications. This program typically spans four years, including three years of academic coursework and one year of workplace training or 
                                    internship. The curriculum combines theoretical knowledge with practical skills, preparing graduates for various roles in the technology and computing industries.`,
        Duration: `3 years academic
                                    1 year workplace training`, NQF: 'Level 8', Credits: '506', SAQAID: '62689',
        Location: `Pretoria Campus
                                    Kempton Park Campus`},
    BIT: {
        cName: 'BA in IT', cDescription: `A Bachelor in Information Technology (BIT) is an undergraduate degree program focused on the study of information systems, software 
                                    development, computer networks, and related technologies. This program typically spans three to four years and is designed to equip students 
                                    with both theoretical knowledge and practical skills needed to excel in the IT industry.`, Duration: `3 years academic`, NQF: 'Level 7', Credits: '360', SAQAID: '94121',
        Location: `Pretoria Campus
                                    Kempton Park Campus`},
    DIT: {
        cName: 'Diploma in IT', cDescription: `A Diploma in Information Technology (IT) is a vocational qualification designed to provide students with foundational knowledge and practical 
                                    skills in the field of IT. This program usually spans one to two years and serves as a stepping stone for further studies or entry-level positions 
                                    in the IT industry. `, Duration: `2½ years of academic training
                                    6 months of workplace training`, NQF: 'Level 6', Credits: '360', SAQAID: '120097',
        Location: `Pretoria Campus
                                    Kempton Park Campus`},
    CIT: {
        cName: 'Certificate in IT', cDescription: `A Certificate in Information Technology (IT) is a short-term educational program designed to provide foundational knowledge and practical 
                                    skills in various areas of IT. This program is ideal for individuals looking to enter the IT field quickly, enhance their current job skills, 
                                    or prepare for further education in IT.`, Duration: `1 year academic`, NQF: 'Level 6', Credits: '120', SAQAID: '71850',
        Location: `Pretoria Campus
                                    Kempton Park Campus`},
}


const lecturers = [
    {
        name: 'Francois Venter',
        email: 'venter.f@belgiumcampus.ac.za',
        imgSrc: './Images/FrancoisVenter.png',
        modules: ['MAT 181', 'MAT 281', 'MAT 381']
    },
    {
        name: 'Tendai Mkwaira',
        email: 'mkwaira.t@belgiumcampus.ac.za',
        imgSrc: './Images/TendaiMkwaira.png',
        modules: ['ACW 181', 'ACW 171', 'PRG 371', 'PRG 261', 'PRG 262',]
    },
    {
        name: 'Alfred Mazorodze',
        email: 'mazorodze.a@belgiumcampus.ac.za',
        imgSrc: './Images/AlfredMazorodze.png',
        modules: ['COA 181', 'COA 171', 'COA 161', 'MAT 181', 'MAT 281']
    },
    {
        name: 'Anila Mundackal',
        email: 'joy.a@belgiumcampus.ac.za',
        imgSrc: './Images/AnilaMundackal.png',
        modules: ['DBD 181', 'DBD 281', 'DBD 381', 'DBD 261', 'DBA 361']
    },
    {
        name: 'Charmaine Tavagwisa',
        email: 'tavagwisa.p@belgiumcampus.ac.za',
        imgSrc: './Images/CharmaineTavagwisa.png',
        modules: ['INF 181', 'INF 271', 'INF 281', 'WPR 252', 'WPR 161']
    },
    {
        name: 'Edward Van Niekerk',
        email: 'edward@belgiumcampus.ac.za',
        imgSrc: './Images/EdwardVanNiekerk.png',
        modules: ['INL 101', 'INL 102', 'INL 201', 'INL 202', 'INL 321', 'INL 161']
    },
    {
        name: 'Raymond Hood',
        email: 'hood.r@belgiumcampus.ac.za',
        imgSrc: './Images/RaymondHood.png',
        modules: ['LPR 181', 'LPR 271', 'LPR 381', 'PRG 181', 'PRG 182', 'PRG 281',]
    },
    {
        name: 'Francois Smit',
        email: 'smit.f@belgiumcampus.ac.za',
        imgSrc: './Images/FrancoisSmit.png',
        modules: ['NWD 181', 'NWD 171', 'NWD 361', 'WPR 271', 'WPR 381',]
    },
    {
        name: 'Gift Mudare',
        email: 'mudare.g@belgiumcampus.ac.za',
        imgSrc: './Images/GiftMudare.png',
        modules: ['PRG 181', 'PRG 182', 'PRG 281', 'PRG 282', 'PRG 371', 'PRG 261', 'PRG 262', 'PRG 251', 'PRG 252']
    },
    {
        name: 'Kudzayi Matekaire',
        email: 'matekaire.k@belgiumcampus.ac.za',
        imgSrc: './Images/KudzayiMatekaire.png',
        modules: ['PRG 171', 'PRG 172', 'PRG 272']
    },
    {
        name: 'Matildah Chiruka',
        email: 'chiruka.m@belgiumcampus.ac.za',
        imgSrc: './Images/MatildahChiruka.png',
        modules: ['STA 181', 'STA 171', 'STA 271', 'STA 281', 'STA 381', 'STA 161']
    },
    {
        name: 'Nsuku Ngoveni',
        email: 'ngoveni.n@belgiumcampus.ac.za',
        imgSrc: './Images/NsukuNgoveni.png',
        modules: ['WPR 181', 'WPR 171', 'WPR 271', 'WPR 381', 'WPR 251', 'WPR 252', 'WPR 161']
    },
    {
        name: 'Catharina Boshoff',
        email: 'boshoff.c@belgiumcampus.ac.za',
        imgSrc: './Images/CatharinaBoshoff.png',
        modules: ['BUM 181', 'BUM 171', 'DBA 361']
    },
    {
        name: 'Caviner Ruiters',
        email: 'ruiters.c@belgiumcampus.ac.za',
        imgSrc: './Images/CavinerRuiters.png',
        modules: ['ENT 181', 'ENT 171', 'PRJ 371', 'PRJ 381',]
    },
    {
        name: 'Desire Sundire',
        email: 'sundire.d@belgiumcampus.ac.za',
        imgSrc: './Images/DesireSundire.png',
        modules: ['DBD 261', 'DBA 361', 'DBR 361']
    },
    {
        name: 'Dino Giovannoni',
        email: 'giovannoni.d@belgiumcampus.ac.za',
        imgSrc: './Images/DinoGiovannoni.png',
        modules: ['ERP 261', 'ERP 271', 'ERP 251', 'PMM 251', 'PRJ 371', 'PRJ 381',]
    },
    {
        name: 'Elaine Rynners',
        email: 'rynners.e@belgiumcampus.ac.za',
        imgSrc: './Images/ElaineRynners.png',
        modules: ['PMM 261', 'PMM 271', 'SEC 261', 'SEC 251']
    },
    {
        name: 'Evangelistars Shayamano',
        email: 'shayamano.e@belgiumcampus.ac.za',
        imgSrc: './Images/EvangelistarsShayamano.png',
        modules: ['ENT 181', 'ENT 171', , 'SWT 271', 'IOT 281', 'IOT 271',]
    },
    {
        name: 'Galaletsang Modimola',
        email: 'Modimola.g@belgumcampus.ac.za',
        imgSrc: './Images/GalaletsangModimola.png',
        modules: ['IOT 261', 'IOT 281', 'IOT 271', 'IOT 161', 'IOT 251']
    },
    {
        name: 'Lungile Saula',
        email: 'saula.l@belgiumcampus.ac.za',
        imgSrc: './Images/LungileSaula.png',
        modules: ['PMM 261', 'PMM 271', 'PMM 281', 'PMM 371', 'PMM 251', 'PRJ 371', 'PRJ 381',]
    },
    {
        name: 'Masimba Zengeni',
        email: 'zengeni.s@belgiumcampus.ac.za',
        imgSrc: './Images/MasimbaZengeni.png',
        modules: ['PRJ 361', 'PRJ 371', 'PRJ 381', 'PRJ 251', 'PMM 371', 'PMM 251']
    },
    {
        name: 'Michael Combrinck',
        email: 'combrinck.m@belgiumcampus.ac.za',
        imgSrc: './Images/MichaelCombrinck.png',
        modules: ['WDB 361', 'WPR 381', 'WPR 251',]
    },
    {
        name: 'Philip van Huyssteen',
        email: 'vanhuyssteen.p@belgiumcampus.ac.za',
        imgSrc: './Images/PhilipvanHuyssteen.png',
        modules: ['AIT 481', 'AIT 482', 'AIT 361', 'WPR 381',]
    },
    {
        name: 'Sannie Zwane',
        email: 'zwane.s@belgiumcampus.ac.za',
        imgSrc: './Images/SannieZwane.png',
        modules: ['DST 481', 'DBD 381', 'PRG 371', 'PRG 261', 'PRG 262',]
    },
    {
        name: 'Shakeng Thamaga',
        email: 'thamaga.s@belgiumcampus.ac.za',
        imgSrc: './Images/ShakengThamaga.png',
        modules: ['COA 161', 'COA 171', 'WPR 271', 'WPR 381', 'WPR 251',]
    },
    {
        name: 'Stanley Makweche',
        email: 'makweche.s@belgiumcampus.ac.za',
        imgSrc: './Images/StanleyMakweche.png',
        modules: ['PRG 261', 'PRG 262', 'ENT 181', 'ENT 171',]
    },
    {
        name: 'Tshegofatso Hutang',
        email: 'hutang.t@belgiumcampus.ac.za',
        imgSrc: './Images/TshegofatsoHutang.png',
        modules: ['MAT 171', 'MAT 161', 'INL 202', 'INL 321', 'INL 161']
    },
    {
        name: 'Raymond Hood',
        email: 'hood.r@belgiumcampus.ac.za',
        imgSrc: './Images/RaymondHood.png',
        modules: ['LPR 181', 'LPR 271', 'LPR 381']
    },
    {
        name: 'Michael Combrinck',
        email: 'combrinck.m@belgiumcampus.ac.za',
        imgSrc: './Images/MichaelCombrinck.png',
        modules: ['DBD 371', 'WFS 361', 'WSE 361']
    },
    {
        name: 'Philip van Huyssteen',
        email: 'vanhuyssteen.p@belgiumcampus.ac.za',
        imgSrc: './Images/PhilipvanHuyssteen.png',
        modules: ['EUC 161', 'MLG 381', 'MLG 382', 'SAD 281', 'SAD 371',]
    },
    {
        name: 'Tshegofatso Hutang',
        email: 'hutang.t@belgiumcampus.ac.za',
        imgSrc: './Images/TshegofatsoHutang.png',
        modules: ['ENG 171', 'ENG 161', 'ENT 181', 'ENT 171',]
    },
    {
        name: 'Raymond Hood',
        email: 'hood.r@belgiumcampus.ac.za',
        imgSrc: './Images/RaymondHood.png',
        modules: ['RSH 381', 'BIN 371', 'BIN 381']
    }
];


const modules = [
    {
        code: 'MAT 181',
        description: 'Mathematics 181',
        year: 1,
        course: 'BCOMP'
    },
    {
        code: 'ACW 181',
        description: 'Academic Writing 181',
        year: 1,
        course: 'BCOMP'
    },
    {
        code: 'COA 181',
        description: 'Computer Architecture 181',
        year: 1,
        course: 'BCOMP'
    },
    {
        code: 'DBD 181',
        description: 'Database Development 181',
        year: 1,
        course: 'BCOMP'
    },
    {
        code: 'INF 181',
        description: 'Information Systems 181',
        year: 1,
        course: 'BCOMP'
    },
    {
        code: 'INL 101',
        description: 'Innovation and Leadership 101',
        year: 1,
        course: 'BCOMP'
    },
    {
        code: 'INL 102',
        description: 'Innovation and Leadership 102',
        year: 1,
        course: 'BCOMP'
    },
    {
        code: 'LPR 181',
        description: 'Linear Programming 181',
        year: 1,
        course: 'BCOMP'
    },
    {
        code: 'NWD 181',
        description: 'Networking Development 181',
        year: 1,
        course: 'BCOMP'
    },
    {
        code: 'PRG 181',
        description: 'Programming 181',
        year: 1,
        course: 'BCOMP'
    },
    {
        code: 'PRG 182',
        description: 'Programming 182',
        year: 1,
        course: 'BCOMP'
    },
    {
        code: 'STA 181',
        description: 'Statistics 181',
        year: 1,
        course: 'BCOMP'
    },
    {
        code: 'WPR 181',
        description: 'Web Programming 181',
        year: 1,
        course: 'BCOMP'
    },
    {
        code: 'BUM 181',
        description: 'Business Management 181',
        year: 1,
        course: 'BCOMP'
    },
    {
        code: 'ENT 181',
        description: 'Entrepreneurship 181',
        year: 1,
        course: 'BCOMP'
    },
    {
        code: 'DBD 281',
        description: 'Database Development 281',
        year: 2,
        course: 'BCOMP'
    },
    {
        code: 'MAT 281',
        description: 'Mathematics 281',
        year: 2,
        course: 'BCOMP'
    },
    {
        code: 'INF 281',
        description: 'Information Systems 281',
        year: 2,
        course: 'BCOMP'
    },
    {
        code: 'INL 201',
        description: 'Innovation and Leadership 201',
        year: 2,
        course: 'BCOMP'
    },
    {
        code: 'INL 202',
        description: 'Innovation and Leadership 202',
        year: 2,
        course: 'BCOMP'
    },
    {
        code: 'PRG 281',
        description: 'Programming 281',
        year: 2,
        course: 'BCOMP'
    },
    {
        code: 'PRG 282',
        description: 'Programming 282',
        year: 2,
        course: 'BCOMP'
    },
    {
        code: 'PMM 281',
        description: 'Project Management 281',
        year: 2,
        course: 'BCOMP'
    },
    {
        code: 'STA 281',
        description: 'Statistics 281',
        year: 2,
        course: 'BCOMP'
    },
    {
        code: 'WPR 281',
        description: 'Web Programming 281',
        year: 2,
        course: 'BCOMP'
    },
    {
        code: 'SAD 281',
        description: 'Systems Analysis and Design 281',
        year: 2,
        course: 'BCOMP'
    },
    {
        code: 'DWH 281',
        description: 'Data Warehousing 281',
        year: 2,
        course: 'BCOMP'
    },
    {
        code: 'IOT 281',
        description: 'Internet of Things 281',
        year: 2,
        course: 'BCOMP'
    },
    {
        code: 'SWT 281',
        description: 'Software Testing 281',
        year: 2,
        course: 'BCOMP'
    },
    {
        code: 'RSH 381',
        description: 'Research Methods 381',
        year: 3,
        course: 'BCOMP'
    },
    {
        code: 'MAT 381',
        description: 'Mathematics 381',
        year: 3,
        course: 'BCOMP'
    },
    {
        code: 'DBD 381',
        description: 'Database Development 381',
        year: 3,
        course: 'BCOMP'
    },
    {
        code: 'INL 321',
        description: 'Innovation and Leadership 321',
        year: 3,
        course: 'BCOMP'
    },
    {
        code: 'LPR 381',
        description: 'Linear Programming 381',
        year: 3,
        course: 'BCOMP'
    },
    {
        code: 'MLG 381',
        description: 'Machine Learning 381',
        year: 3,
        course: 'BCOMP'
    },
    {
        code: 'PRJ 381',
        description: 'Project 381',
        year: 3,
        course: 'BCOMP'
    },
    {
        code: 'PMM 381',
        description: 'Project Management 381',
        year: 3,
        course: 'BCOMP'
    },
    {
        code: 'PRG 381',
        description: 'Programming 381',
        year: 3,
        course: 'BCOMP'
    },
    {
        code: 'SEN 381',
        description: 'Software Engineering 381',
        year: 3,
        course: 'BCOMP'
    },
    {
        code: 'WPR 381',
        description: 'Web Programming 381',
        year: 3,
        course: 'BCOMP'
    },
    {
        code: 'BIN 381',
        description: 'Business Intelligence 381',
        year: 3,
        course: 'BCOMP'
    },
    {
        code: 'DBA 381',
        description: 'Database Administration 381',
        year: 3,
        course: 'BCOMP'
    },
    {
        code: 'STA 381',
        description: 'Statistics 381',
        year: 3,
        course: 'BCOMP'
    },
    {
        code: 'INM 381',
        description: 'Information Management 381',
        year: 3,
        course: 'BCOMP'
    },
    {
        code: 'MLG 382',
        description: 'Machine Learning 382',
        year: 3,
        course: 'BCOMP'
    },
    {
        code: 'UAX 381',
        description: 'User Experience 381',
        year: 3,
        course: 'BCOMP'
    },
    {
        code: 'AIT 481',
        description: 'Advanced Information Technology 481',
        year: 4,
        course: 'BCOMP'
    },
    {
        code: 'AIT 482',
        description: 'Advanced Information Technology 482',
        year: 4,
        course: 'BCOMP'
    },
    {
        code: 'DST 481',
        description: 'Distributed Systems 481',
        year: 4,
        course: 'BCOMP'
    },
    {
        code: 'ACW 171',
        description: 'Academic Writing 171',
        year: 1,
        course: 'BIT'
    },
    {
        code: 'COA 171',
        description: 'Computer Architecture 171',
        year: 1,
        course: 'BIT'
    },
    {
        code: 'DBD 171',
        description: 'Database Development 171',
        year: 1,
        course: 'BIT'
    },
    {
        code: 'ENG 171',
        description: 'English 171',
        year: 1,
        course: 'BIT'
    },
    {
        code: 'INF 171',
        description: 'Information Systems 171',
        year: 1,
        course: 'BIT'
    },
    {
        code: 'MAT 171',
        description: 'Mathematics 171',
        year: 1,
        course: 'BIT'
    },
    {
        code: 'NWD 171',
        description: 'Networking Development 171',
        year: 1,
        course: 'BIT'
    },
    {
        code: 'PRG 171',
        description: 'Programming 171',
        year: 1,
        course: 'BIT'
    },
    {
        code: 'PRG 172',
        description: 'Programming 172',
        year: 1,
        course: 'BIT'
    },
    {
        code: 'STA 171',
        description: 'Statistics 171',
        year: 1,
        course: 'BIT'
    },
    {
        code: 'WPR 171',
        description: 'Web Programming 171',
        year: 1,
        course: 'BIT'
    },
    {
        code: 'BUM 171',
        description: 'Business Management 171',
        year: 1,
        course: 'BIT'
    },
    {
        code: 'ENT 171',
        description: 'Entrepreneurship 171',
        year: 1,
        course: 'BIT'
    },
    {
        code: 'DBD 271',
        description: 'Database Development 271',
        year: 2,
        course: 'BIT'
    },
    {
        code: 'MAT 271',
        description: 'Mathematics 271',
        year: 2,
        course: 'BIT'
    },
    {
        code: 'INF 271',
        description: 'Information Systems 271',
        year: 2,
        course: 'BIT'
    },
    {
        code: 'INL 221',
        description: 'Innovation and Leadership 221',
        year: 2,
        course: 'BIT'
    },
    {
        code: 'PRG 271',
        description: 'Programming 271',
        year: 2,
        course: 'BIT'
    },
    {
        code: 'PRG 272',
        description: 'Programming 272',
        year: 2,
        course: 'BIT'
    },
    {
        code: 'PMM 271',
        description: 'Project Management 271',
        year: 2,
        course: 'BIT'
    },
    {
        code: 'STA 271',
        description: 'Statistics 271',
        year: 2,
        course: 'BIT'
    },
    {
        code: 'WPR 271',
        description: 'Web Programming 271',
        year: 2,
        course: 'BIT'
    },
    {
        code: 'SAD 271',
        description: 'Systems Analysis and Design 271',
        year: 2,
        course: 'BIT'
    },
    {
        code: 'DWH 271',
        description: 'Data Warehousing 271',
        year: 2,
        course: 'BIT'
    },
    {
        code: 'IOT 271',
        description: 'Internet of Things 271',
        year: 2,
        course: 'BIT'
    },
    {
        code: 'SWT 271',
        description: 'Software Testing 271',
        year: 2,
        course: 'BIT'
    },
    {
        code: 'MAT 371',
        description: 'Mathematics 371',
        year: 3,
        course: 'BIT'
    },
    {
        code: 'DBD 371',
        description: 'Database Development 371',
        year: 3,
        course: 'BIT'
    },
    {
        code: 'INL 321',
        description: 'Innovation and Leadership 321',
        year: 3,
        course: 'BIT'
    },
    {
        code: 'LPR 371',
        description: 'Linear Programming 371',
        year: 3,
        course: 'BIT'
    },
    {
        code: 'MLG 371',
        description: 'Machine Learning 371',
        year: 3,
        course: 'BIT'
    },
    {
        code: 'PRJ 371',
        description: 'Project 371',
        year: 3,
        course: 'BIT'
    },
    {
        code: 'PMM 371',
        description: 'Project Management 371',
        year: 3,
        course: 'BIT'
    },
    {
        code: 'PRG 371',
        description: 'Programming 371',
        year: 3,
        course: 'BIT'
    },
    {
        code: 'SEN 371',
        description: 'Software Engineering 371',
        year: 3,
        course: 'BIT'
    },
    {
        code: 'WPR 371',
        description: 'Web Programming 371',
        year: 3,
        course: 'BIT'
    },
    {
        code: 'BIN 371',
        description: 'Business Intelligence 371',
        year: 3,
        course: 'BIT'
    },
    {
        code: 'DBA 371',
        description: 'Database Administration 371',
        year: 3,
        course: 'BIT'
    },
    {
        code: 'STA 371',
        description: 'Statistics 371',
        year: 3,
        course: 'BIT'
    },
    {
        code: 'INM 371',
        description: 'Information Management 371',
        year: 3,
        course: 'BIT'
    },
    {
        code: 'MLG 372',
        description: 'Machine Learning 372',
        year: 3,
        course: 'BIT'
    },
    {
        code: 'UAX 371',
        description: 'User Experience 371',
        year: 3,
        course: 'BIT'
    },
    {
        code: 'AIT 471',
        description: 'Advanced Information Technology 471',
        year: 4,
        course: 'BIT'
    },
    {
        code: 'AIT 472',
        description: 'Advanced Information Technology 472',
        year: 4,
        course: 'BIT'
    },
    {
        code: 'DST 471',
        description: 'Distributed Systems 471',
        year: 4,
        course: 'BIT'
    },
    {
        code: 'BUC 161',
        description: 'Business Communication 161',
        year: 1,
        course: 'DIT'
    },
    {
        code: 'BME 161',
        description: 'Business Management 161',
        year: 1,
        course: 'DIT'
    },
    {
        code: 'COA 161',
        description: 'Computer Architecture 161',
        year: 1,
        course: 'DIT'
    },
    {
        code: 'DBC 161',
        description: 'Database Concepts 161',
        year: 1,
        course: 'DIT'
    },
    {
        code: 'DBF 161',
        description: 'Database Fundamentals 161',
        year: 1,
        course: 'DIT'
    },
    {
        code: 'EUC 161',
        description: 'End User Computing 161',
        year: 1,
        course: 'DIT'
    },
    {
        code: 'INL 161',
        description: 'Information Literacy 161',
        year: 1,
        course: 'DIT'
    },
    {
        code: 'IOT 161',
        description: 'Internet of Things 161',
        year: 1,
        course: 'DIT'
    },
    {
        code: 'MAT 161',
        description: 'Mathematics 161',
        year: 1,
        course: 'DIT'
    },
    {
        code: 'NWD 161',
        description: 'Networking and Web Development 161',
        year: 1,
        course: 'DIT'
    },
    {
        code: 'PRS 161',
        description: 'Professional Skills 161',
        year: 1,
        course: 'DIT'
    },
    {
        code: 'PRG 161',
        description: 'Programming 161',
        year: 1,
        course: 'DIT'
    },
    {
        code: 'PRP 161',
        description: 'Programming Principles 161',
        year: 1,
        course: 'DIT'
    },
    {
        code: 'WPR 161',
        description: 'Web Programming 161',
        year: 1,
        course: 'DIT'
    },
    {
        code: 'STA 161',
        description: 'Statistics 161',
        year: 1,
        course: 'DIT'
    },
    {
        code: 'DBD 261',
        description: 'Database Development 261',
        year: 2,
        course: 'DIT'
    },
    {
        code: 'ERP 261',
        description: 'Enterprise Resource Planning 261',
        year: 2,
        course: 'DIT'
    },
    {
        code: 'INL 261',
        description: 'Information Literacy 261',
        year: 2,
        course: 'DIT'
    },
    {
        code: 'ILE 261',
        description: 'Information Literacy and Ethics 261',
        year: 2,
        course: 'DIT'
    },
    {
        code: 'PMM 261',
        description: 'Project Management 261',
        year: 2,
        course: 'DIT'
    },
    {
        code: 'CNA 261',
        description: 'Computer Networks and Architecture 261',
        year: 2,
        course: 'DIT'
    },
    {
        code: 'IOT 261',
        description: 'Internet of Things 261',
        year: 2,
        course: 'DIT'
    },
    {
        code: 'OPS 261',
        description: 'Operating Systems 261',
        year: 2,
        course: 'DIT'
    },
    {
        code: 'OPS 262',
        description: 'Operating Systems 262',
        year: 2,
        course: 'DIT'
    },
    {
        code: 'OPS 263',
        description: 'Operating Systems 263',
        year: 2,
        course: 'DIT'
    },
    {
        code: 'SEC 261',
        description: 'Security 261',
        year: 2,
        course: 'DIT'
    },
    {
        code: 'PRG 261',
        description: 'Programming 261',
        year: 2,
        course: 'DIT'
    },
    {
        code: 'PRG 262',
        description: 'Programming 262',
        year: 2,
        course: 'DIT'
    },
    {
        code: 'SWA 261',
        description: 'Software Architecture 261',
        year: 2,
        course: 'DIT'
    },
    {
        code: 'SWT 261',
        description: 'Software Testing 261',
        year: 2,
        course: 'DIT'
    },
    {
        code: 'UXD 261',
        description: 'User Experience Design 261',
        year: 2,
        course: 'DIT'
    },
    {
        code: 'WPR 261',
        description: 'Web Programming 261',
        year: 2,
        course: 'DIT'
    },
    {
        code: 'CNA 361',
        description: 'Computer Networks and Architecture 361',
        year: 3,
        course: 'DIT'
    },
    {
        code: 'EHA 361',
        description: 'Ethics in HCI and AI 361',
        year: 3,
        course: 'DIT'
    },
    {
        code: 'PET 361',
        description: 'Petroleum Engineering Technology 361',
        year: 3,
        course: 'DIT'
    },
    {
        code: 'DOP 361',
        description: 'DevOps 361',
        year: 3,
        course: 'DIT'
    },
    {
        code: 'MFR 361',
        description: 'Manufacturing 361',
        year: 3,
        course: 'DIT'
    },
    {
        code: 'NWD 361',
        description: 'Networking and Web Development 361',
        year: 3,
        course: 'DIT'
    },
    {
        code: 'OPS 361',
        description: 'Operating Systems 361',
        year: 3,
        course: 'DIT'
    },
    {
        code: 'DBA 361',
        description: 'Database Administration 361',
        year: 3,
        course: 'DIT'
    },
    {
        code: 'DBC 361',
        description: 'Database Concepts 361',
        year: 3,
        course: 'DIT'
    },
    {
        code: 'DBD 361',
        description: 'Database Development 361',
        year: 3,
        course: 'DIT'
    },
    {
        code: 'DBR 361',
        description: 'Database Recovery 361',
        year: 3,
        course: 'DIT'
    },
    {
        code: 'DDB 361',
        description: 'Distributed Database 361',
        year: 3,
        course: 'DIT'
    },
    {
        code: 'WDB 361',
        description: 'Web Database 361',
        year: 3,
        course: 'DIT'
    },
    {
        code: 'WFS 361',
        description: 'Web Frameworks and Services 361',
        year: 3,
        course: 'DIT'
    },
    {
        code: 'WSE 361',
        description: 'Web Security 361',
        year: 3,
        course: 'DIT'
    },
    {
        code: 'PRG 361',
        description: 'Programming 361',
        year: 3,
        course: 'DIT'
    },
    {
        code: 'SSX 361',
        description: 'System Security and Forensics 361',
        year: 3,
        course: 'DIT'
    },
    {
        code: 'SWA 361',
        description: 'Software Architecture 361',
        year: 3,
        course: 'DIT'
    },
    {
        code: 'PMM 361',
        description: 'Project Management 361',
        year: 3,
        course: 'DIT'
    },
    {
        code: 'DBA 361',
        description: 'Database Administration 361',
        year: 3,
        course: 'DIT'
    },
    {
        code: 'DBC 361',
        description: 'Database Concepts 361',
        year: 3,
        course: 'DIT'
    },
    {
        code: 'DBD 361',
        description: 'Database Development 361',
        year: 3,
        course: 'DIT'
    },
    {
        code: 'DBR 361',
        description: 'Database Recovery 361',
        year: 3,
        course: 'DIT'
    },
    {
        code: 'DDB 361',
        description: 'Distributed Database 361',
        year: 3,
        course: 'DIT'
    },
    {
        code: 'PRJ 361',
        description: 'Project 361',
        year: 3,
        course: 'DIT'
    },
    {
        code: 'AIT 361',
        description: 'Advanced Information Technology 361',
        year: 3,
        course: 'DIT'
    },
    {
        code: 'WSP 361',
        description: 'Web Server Programming 361',
        year: 3,
        course: 'DIT'
    },
    {
        code: 'INF 251',
        description: 'Information Systems 251',
        year: 1,
        course: 'CIT'
    },
    {
        code: 'OPS 251',
        description: 'Operating Systems 251',
        year: 1,
        course: 'CIT'
    },
    {
        code: 'PRJ 251',
        description: 'Project 251',
        year: 1,
        course: 'CIT'
    },
    {
        code: 'PMM 251',
        description: 'Project Management 251',
        year: 1,
        course: 'CIT'
    },
    {
        code: 'SEC 251',
        description: 'Security 251',
        year: 1,
        course: 'CIT'
    },
    {
        code: 'MAT 151',
        description: 'Mathematics 151',
        year: 1,
        course: 'CIT'
    },
    {
        code: 'DBD 251',
        description: 'Database Development 251',
        year: 1,
        course: 'CIT'
    },
    {
        code: 'DBM 251',
        description: 'Database Management 251',
        year: 1,
        course: 'CIT'
    },
    {
        code: 'PRG 251',
        description: 'Programming 251',
        year: 1,
        course: 'CIT'
    },
    {
        code: 'PRG 252',
        description: 'Programming 252',
        year: 1,
        course: 'CIT'
    },
    {
        code: 'WPR 251',
        description: 'Web Programming 251',
        year: 1,
        course: 'CIT'
    },
    {
        code: 'WPR 252',
        description: 'Web Programming 252',
        year: 1,
        course: 'CIT'
    },
    {
        code: 'ERP 251',
        description: 'Enterprise Resource Planning 251',
        year: 1,
        course: 'CIT'
    },
    {
        code: 'IOT 251',
        description: 'Internet of Things 251',
        year: 1,
        course: 'CIT'
    }
];



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

    const formLogin = document.getElementById('FormLogin');

    if (formLogin) {
        formLogin.addEventListener('submit', async function (event) {
            event.preventDefault();
            const studentId = document.getElementById('StudentID').value;
            const password = document.getElementById('password').value;

            try {
                const response = await fetch(`http://localhost:${port}/login`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ studentId, password })
                });

                const data = await response.json();
                if (data.message === 'Login successful') {
                    if (password === 'BelgiumCampus') {
                        if (passwordChangeModal) passwordChangeModal.style.display = 'flex';
                    }
                    await getStudentDetails();
                    console.log(`${sID} ${sName} ${sSurname}`);
                    window.location.href = './Dashboard.html'

                    // Additional code if needed
                } else {
                    alert(data.message);
                }
            } catch (error) {
                console.error('Error:', error);
            }
        });
    }
});

async function getStudentDetails() {
    try {
        console.log(`GET StudentDetails executed`);
        const response = await fetch(`http://localhost:${port}/getStudentDetails`);
        const data = await response.json();
        console.log(data);
        sName = data.name;
        sID = data.id;
        sSurname = data.surname;
    } catch (error) {
        console.error('Error fetching student details:', error);
        return null;
    }
}


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
    const passwordChangeModal = document.getElementById('passwordChangeModal');
    const closePasswordChange = document.getElementById('closePasswordChange');
    const changePasswordForm = document.getElementById('changePasswordForm');

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

            fetch(`http://localhost:${port}/changePassword`, {
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

        fetch(`http://localhost:${port}/signup`, {
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
}

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
        const response = await fetch(`http://localhost:${port}/saveForm`, {
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



async function createHome() {
    let dashContent = document.querySelector(".dashboardContent");
    dashContent.innerHTML = ``
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
        </div>
    `

    let courseHeading = document.createElement('h1');
    let courseDesc = document.querySelector('#cDesc');
    let Duration = document.querySelector('#Duration');
    let NQF = document.querySelector('#NQF');
    let Credits = document.querySelector('#Credits');
    let SAQAID = document.querySelector('#SAQAID');
    let Location = document.querySelector('#Location');


    Object.keys(courseDescriptions).forEach(course => {
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


    let course = document.querySelector('.course')
    course.appendChild(courseHeading)



    Object.keys(CourseStartDates).forEach(course => {
        console.log(sCourse)
        if (sCourse == course) {
            let eventDate = new Date(CourseStartDates[course]).getTime();;
            const timerInterval = setInterval(function () {
                const now = new Date().getTime();
                const timeRemaining = eventDate - now;

                const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
                const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
                const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

                document.querySelector("#countdown").innerHTML = `
            ${days}d ${hours}h ${minutes}m ${seconds}s
          `;

                if (timeRemaining < 0) {
                    clearInterval(timerInterval);
                    document.querySelector("#countdown").innerHTML = "The event has started!";
                }
            }, 1000);
        }

    })



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
    table.style.width = '70%';
    table.style.height = '30%';
    table.style.borderCollapse = 'collapse';
    table.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.1)';

    dashContent.appendChild(table);
}

async function createMyModules() {
    let dashContent = document.querySelector(".dashboardContent")
    await getStudentDetails();

    console.log(`Student Course: ${sCourse}`);

    let filteredModules = modules.filter(module => module.course === sCourse);

    let moduleList = document.createElement('ul')
    moduleList.className = 'moduleList';

    filteredModules.forEach(module => {
        let listItem = document.createElement('li')
        listItem.className = 'moduleItem';

        let moduleHeading = document.createElement('h2')
        moduleHeading.textContent = module.description

        ///pdf and video here
        let moduleDesc = document.createElement('p')
        moduleDesc.textContent = `Code: ${module.code} | Year: ${module.year}`;

        listItem.appendChild(moduleHeading)
        listItem.appendChild(moduleDesc)

        moduleList.appendChild(listItem)
    });

    let modulesContainer = document.createElement('div')
    modulesContainer.className = 'modulesContainer'
    modulesContainer.appendChild(moduleList)

    dashContent.innerHTML = '';
    dashContent.appendChild(modulesContainer);
    console.log('Modules updated successfully.');

}

document.addEventListener('DOMContentLoaded', async () => {
    // Function to fetch and handle student details
    const DashboardLink = document.querySelector(`#dashboardLink`);

    await getStudentDetails();

    if (sID && sID !== '') {
        DashboardLink.classList.add('visible');
    } else {
        DashboardLink.classList.add('notVisible');
    }
    console.log(`Dynamic generate : ${sName} `)

    let StudentDetailsdiv = document.querySelector('#sideNav-footer-titlebox');

    StudentDetailsdiv.innerHTML = `<a id="sideNav-footer-title">${sName} ${sSurname}</a><span id="sideNav-footer-subtitle">${sID}</span>`;
    console.log('Add Logged in user run');
    // let StudentName = document.createElement('a');
    // StudentName.textContent = `${sName} ${sSurname}`;
    // let StudentID = document.createElement('span');
    // StudentID.textContent = `${sID}`;
    
    // StudentDetailsdiv.appendChild(StudentName);
    // StudentDetailsdiv.appendChild(StudentID);

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
        console.error('Error fetching student details:', error);
        return null;
    }
}


document.addEventListener('DOMContentLoaded', () => {
    const lecturerContainer = document.querySelector('.lecturer');
    const moduleContainer = document.querySelector('.modules');
    const searchInput = document.querySelector('.search-input');
    let currentCourse = 'all';

    function displayLecturers(course = 'all') {
        lecturerContainer.innerHTML = '';
        lecturers.forEach(lecturer => {
            const isCourseMatch = course === 'all' || lecturer.modules.some(moduleCode => {
                const module = modules.find(m => m.code === moduleCode);
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
                lecturerContainer.insertAdjacentHTML('beforeend', lecturerCard);
            }
        });
    }

    function createFilterDropdown() {
        const filterContainer = document.getElementById('filterContainer');
        const selectElement = document.createElement('select');
        selectElement.id = 'yearFilter';

        const years = ['all', 1, 2, 3, 4];
        years.forEach(year => {
            const optionElement = document.createElement('option');
            optionElement.value = year;
            optionElement.text = year === 'all' ? 'All Years' : `Year ${year}`;
            selectElement.appendChild(optionElement);
        });

        const label = document.createElement('label');
        label.htmlFor = 'yearFilter';
        label.innerText = 'Select Year: ';

        filterContainer.appendChild(label);
        filterContainer.appendChild(selectElement);
    }

    function displayModules(course = 'all', filterYear = 'all', searchQuery = '') {
        moduleContainer.innerHTML = '';
        modules.forEach(module => {
            const isCourseMatch = course === 'all' || module.course === course;
            const isYearMatch = filterYear === 'all' || module.year == filterYear;
            const isSearchMatch = module.code.toLowerCase().includes(searchQuery) ||
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
                
                let button =document.getElementById(module.code);
                button.addEventListener("click",function(){
                let modal=document.getElementById("ModuleModal");
                modal.innerHTML = `
                    <div class="modal-content">
                        <span class="close-btn">&times;</span>
                        <h1>${module.code}</h1>
                        <p>${module.description}</p>
                         <video width="600" controls>
                          <source src="${module.video}" type="video/mp4">
                          Your browser does not support the video tag.
                         </video>
                    </div>
                     `;
                     modal.style.display = 'block';
                     let closeBtn = modal.querySelector('.close-btn');
                     closeBtn.addEventListener("click", function() {
                          modal.style.display = 'none';
                  });
                })
                
            }
        });
    }

    createFilterDropdown();
    displayModules();
    displayLecturers();

    document.getElementById('yearFilter').addEventListener('change', function () {
        const selectedYear = this.value;
        const searchQuery = searchInput.value.toLowerCase();
        displayModules(currentCourse, selectedYear, searchQuery);
    });

    document.querySelectorAll('.sideNav-button').forEach(button => {
        button.addEventListener('click', () => {
            currentCourse = button.getAttribute('data-course');
            let courseHeading
            let courseDesc
            let Duration
            let NQF
            let Credits
            let SAQAID
            let Location
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

            const courseDescription = document.querySelector('.description');
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
            courseDescription.appendChild(infoContainer)
            const selectedYear = document.getElementById('yearFilter').value;
            const searchQuery = searchInput.value.toLowerCase();
            displayModules(currentCourse, selectedYear, searchQuery);
            displayLecturers(currentCourse);

        });
    });

    searchInput.addEventListener('input', () => {
        const searchQuery = searchInput.value.toLowerCase();
        displayModules(currentCourse, document.getElementById('yearFilter').value, searchQuery);
    });
});





