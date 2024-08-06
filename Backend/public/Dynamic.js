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
        modules: ['ACW 181', 'ACW 171','PRG 371', 'PRG 261', 'PRG 262',]
    },
    {
        name: 'Alfred Mazorodze',
        email: 'mazorodze.a@belgiumcampus.ac.za',
        imgSrc: './Images/AlfredMazorodze.png',
        modules: ['COA 181', 'COA 171', 'COA 161','MAT 181', 'MAT 281']
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
        modules: ['INF 181', 'INF 271', 'INF 281','WPR 252', 'WPR 161']
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
        modules: ['LPR 181', 'LPR 271', 'LPR 381','PRG 181', 'PRG 182', 'PRG 281',]
    },
    {
        name: 'Francois Smit',
        email: 'smit.f@belgiumcampus.ac.za',
        imgSrc: './Images/FrancoisSmit.png',
        modules: ['NWD 181', 'NWD 171', 'NWD 361','WPR 271', 'WPR 381',]
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
        modules: ['BUM 181', 'BUM 171','DBA 361']
    },
    {
        name: 'Caviner Ruiters',
        email: 'ruiters.c@belgiumcampus.ac.za',
        imgSrc: './Images/CavinerRuiters.png',
        modules: ['ENT 181', 'ENT 171','PRJ 371', 'PRJ 381',]
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
        modules: ['ERP 261', 'ERP 271', 'ERP 251','PMM 251', 'PRJ 371', 'PRJ 381',]
    },
    {
        name: 'Elaine Rynners',
        email: 'rynners.e@belgiumcampus.ac.za',
        imgSrc: './Images/ElaineRynners.png',
        modules: ['PMM 261', 'PMM 271','SEC 261', 'SEC 251']
    },
    {
        name: 'Evangelistars Shayamano',
        email: 'shayamano.e@belgiumcampus.ac.za',
        imgSrc: './Images/EvangelistarsShayamano.png',
        modules: ['ENT 181', 'ENT 171',, 'SWT 271','IOT 281', 'IOT 271',]
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
        modules: ['PRJ 361', 'PRJ 371', 'PRJ 381', 'PRJ 251','PMM 371', 'PMM 251']
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
        modules: ['AIT 481', 'AIT 482', 'AIT 361','WPR 381',]
    },
    {
        name: 'Sannie Zwane',
        email: 'zwane.s@belgiumcampus.ac.za',
        imgSrc: './Images/SannieZwane.png',
        modules: ['DST 481', 'DBD 381','PRG 371', 'PRG 261', 'PRG 262',]
    },
    {
        name: 'Shakeng Thamaga',
        email: 'thamaga.s@belgiumcampus.ac.za',
        imgSrc: './Images/ShakengThamaga.png',
        modules: ['COA 161', 'COA 171','WPR 271', 'WPR 381', 'WPR 251',]
    },
    {
        name: 'Stanley Makweche',
        email: 'makweche.s@belgiumcampus.ac.za',
        imgSrc: './Images/StanleyMakweche.png',
        modules: ['PRG 261', 'PRG 262','ENT 181', 'ENT 171',]
    },
    {
        name: 'Tshegofatso Hutang',
        email: 'hutang.t@belgiumcampus.ac.za',
        imgSrc: './Images/TshegofatsoHutang.png',
        modules: ['MAT 171', 'MAT 161','INL 202', 'INL 321', 'INL 161']
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
        modules: ['EUC 161', 'MLG 381', 'MLG 382', 'SAD 281', 'SAD 371', ]
    },
    {
        name: 'Tshegofatso Hutang',
        email: 'hutang.t@belgiumcampus.ac.za',
        imgSrc: './Images/TshegofatsoHutang.png',
        modules: ['ENG 171', 'ENG 161','ENT 181', 'ENT 171',]
    },
    {
        name: 'Raymond Hood',
        email: 'hood.r@belgiumcampus.ac.za',
        imgSrc: './Images/RaymondHood.png',
        modules: ['RSH 381','BIN 371', 'BIN 381']
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
    const lecturerContainer = document.querySelector('.lecturer');
    const moduleContainer = document.querySelector('.modules');
    const searchInput = document.querySelector('.search-input');


    lecturers.forEach(lecturer => {
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
    });

   
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
                        <button>View More</button>
                        </div>
                    </div>
                `;
                moduleContainer.insertAdjacentHTML('beforeend', moduleCard);
            }
        });
    }

  
    createFilterDropdown();
    displayModules();

    document.getElementById('yearFilter').addEventListener('change', function() {
        const selectedYear = this.value;
        const searchQuery = searchInput.value.toLowerCase();
        displayModules(currentCourse, selectedYear, searchQuery);
    });

   
    let currentCourse = 'all';
    document.querySelectorAll('.sideNav-button').forEach(button => {
        button.addEventListener('click', () => {
            currentCourse = button.getAttribute('data-course');
            const selectedYear = document.getElementById('yearFilter').value;
            const searchQuery = searchInput.value.toLowerCase();
            displayModules(currentCourse, selectedYear, searchQuery);
        });
    });

    searchInput.addEventListener('input', () => {
        const searchQuery = searchInput.value.toLowerCase();
        displayModules(currentCourse, document.getElementById('yearFilter').value, searchQuery);
    });
});




