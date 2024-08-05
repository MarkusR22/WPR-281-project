const lecturers = [
    {
        name: 'Francois Venter',
        email: 'venter.f@belgiumcampus.ac.za',
        imgSrc: './Images/FrancoisVenter.png',
        modules: ['MTA 181', 'MTA 281', 'MTA 381']
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
        modules: ['COA 181', 'COA 171', 'COA 161','MTA 181', 'MTA 281']
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
    {
        code: 'COA 181',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam, tenetur?',
        year: 1,
        course: 'BCOMP'
    },
    {
        code: 'DBD 181',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam, tenetur?',
        year: 1,
        course: 'BCOMP'
    },
    {
        code: 'INF 181',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam, tenetur?',
        year: 1,
        course: 'BCOMP'
    },
    {
        code: 'INL 101',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam, tenetur?',
        year: 1,
        course: 'BCOMP'
    },
    {
        code: 'INL 102',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam, tenetur?',
        year: 1,
        course: 'BCOMP'
    },
    {
        code: 'LPR 181',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam, tenetur?',
        year: 1,
        course: 'BCOMP'
    },
    {
        code: 'NWD 181',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam, tenetur?',
        year: 1,
        course: 'BCOMP'
    },
    {
        code: 'PRG 181',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam, tenetur?',
        year: 1,
        course: 'BCOMP'
    },
    {
        code: 'PRG 182',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam, tenetur?',
        year: 1,
        course: 'BCOMP'
    },
    {
        code: 'STA 181',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam, tenetur?',
        year: 1,
        course: 'BCOMP'
    },
    {
        code: 'WPR 181',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam, tenetur?',
        year: 1,
        course: 'BCOMP'
    },
    {
        code: 'BUM 181',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam, tenetur?',
        year: 1,
        course: 'BCOMP'
    },
    {
        code: 'ENT 181',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam, tenetur?',
        year: 1,
        course: 'BCOMP'
    },
    {
        code: 'DBD 281',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam, tenetur?',
        year: 2,
        course: 'BCOMP'
    },
    {
        code: 'MTA 281',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam, tenetur?',
        year: 2,
        course: 'BCOMP'
    },
    {
        code: 'INF 281',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam, tenetur?',
        year: 2,
        course: 'BCOMP'
    },
    {
        code: 'INL 201',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam, tenetur?',
        year: 2,
        course: 'BCOMP'
    },
    {
        code: 'INL 202',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam, tenetur?',
        year: 2,
        course: 'BCOMP'
    },
    {
        code: 'PRG 281',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam, tenetur?',
        year: 2,
        course: 'BCOMP'
    },
    {
        code: 'PRG 282',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam, tenetur?',
        year: 2,
        course: 'BCOMP'
    },
    {
        code: 'PMM 281',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam, tenetur?',
        year: 2,
        course: 'BCOMP'
    },
    {
        code: 'STA 281',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam, tenetur?',
        year: 2,
        course: 'BCOMP'
    },
    {
        code: 'WPR 281',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam, tenetur?',
        year: 2,
        course: 'BCOMP'
    },
    {
        code: 'SAD 281',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam, tenetur?',
        year: 2,
        course: 'BCOMP'
    },
    {
        code: 'DWH 281',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam, tenetur?',
        year: 2,
        course: 'BCOMP'
    },
    {
        code: 'IOT 281',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam, tenetur?',
        year: 2,
        course: 'BCOMP'
    },
    {
        code: 'SWT 281',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam, tenetur?',
        year: 2,
        course: 'BCOMP'
    },
    {
        code: 'RSH 381',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam, tenetur?',
        year: 3,
        course: 'BCOMP'
    },
    {
        code: 'MTA 381',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam, tenetur?',
        year: 3,
        course: 'BCOMP'
    },
    {
        code: 'DBD 381',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam, tenetur?',
        year: 3,
        course: 'BCOMP'
    },
    {
        code: 'INL 321',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam, tenetur?',
        year: 3,
        course: 'BCOMP'
    },
    {
        code: 'LPR 381',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam, tenetur?',
        year: 3,
        course: 'BCOMP'
    },
    {
        code: 'MLG 381',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam, tenetur?',
        year: 3,
        course: 'BCOMP'
    },
    {
        code: 'PRJ 381',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam, tenetur?',
        year: 3,
        course: 'BCOMP'
    },
    {
        code: 'PMM 381',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam, tenetur?',
        year: 3,
        course: 'BCOMP'
    },
    {
        code: 'PRG 381',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam, tenetur?',
        year: 3,
        course: 'BCOMP'
    },
    {
        code: 'SEN 381',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam, tenetur?',
        year: 3,
        course: 'BCOMP'
    },
    {
        code: 'WPR 381',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam, tenetur?',
        year: 3,
        course: 'BCOMP'
    },
    {
        code: 'BIN 381',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam, tenetur?',
        year: 3,
        course: 'BCOMP'
    },
    {
        code: 'DBA 381',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam, tenetur?',
        year: 3,
        course: 'BCOMP'
    },
    {
        code: 'STA 381',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam, tenetur?',
        year: 3,
        course: 'BCOMP'
    },
    {
        code: 'INM 381',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam, tenetur?',
        year: 3,
        course: 'BCOMP'
    },
    {
        code: 'MLG 382',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam, tenetur?',
        year: 3,
        course: 'BCOMP'
    },
    {
        code: 'UAX 381',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam, tenetur?',
        year: 3,
        course: 'BCOMP'
    },
    {
        code: 'AIT 481',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam, tenetur?',
        year: 4,
        course: 'BCOMP'
    },
    {
        code: 'AIT 482',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam, tenetur?',
        year: 4,
        course: 'BCOMP'
    },
    {
        code: 'DST 481',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam, tenetur?',
        year: 4,
        course: 'BCOMP'
    },
    {
        code: 'ACW 171',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam, tenetur?',
        year: 1,
        course: 'BIT'
    },
    {
        code: 'COA 171',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam, tenetur?',
        year: 1,
        course: 'BIT'
    },
    {
        code: 'DBD 171',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam, tenetur?',
        year: 1,
        course: 'BIT'
    },
    {
        code: 'ENG 171',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam, tenetur?',
        year: 1,
        course: 'BIT'
    },
    {
        code: 'INF 171',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam, tenetur?',
        year: 1,
        course: 'BIT'
    },
    {
        code: 'MAT 171',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam, tenetur?',
        year: 1,
        course: 'BIT'
    },
    {
        code: 'NWD 171',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam, tenetur?',
        year: 1,
        course: 'BIT'
    },
    {
        code: 'PRG 171',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam, tenetur?',
        year: 1,
        course: 'BIT'
    },
    {
        code: 'PRG 172',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam, tenetur?',
        year: 1,
        course: 'BIT'
    },
    {
        code: 'STA 171',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam, tenetur?',
        year: 1,
        course: 'BIT'
    },
    {
        code: 'WPR 171',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam, tenetur?',
        year: 1,
        course: 'BIT'
    },
    {
        code: 'BUM 171',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam, tenetur?',
        year: 1,
        course: 'BIT'
    },
    {
        code: 'ENT 171',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam, tenetur?',
        year: 1,
        course: 'BIT'
    },
    {
        code: 'CNA 271',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam, tenetur?',
        year: 2,
        course: 'BIT'
    },
    {
        code: 'DBD 221',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam, tenetur?',
        year: 2,
        course: 'BIT'
    },
    {
        code: 'ERP 271',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam, tenetur?',
        year: 2,
        course: 'BIT'
    },
    {
        code: 'ETH 271',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam, tenetur?',
        year: 2,
        course: 'BIT'
    },
    {
        code: 'INF 271',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam, tenetur?',
        year: 2,
        course: 'BIT'
    },
    {
        code: 'LPR 271',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam, tenetur?',
        year: 2,
        course: 'BIT'
    },
    {
        code: 'PRG 271',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam, tenetur?',
        year: 2,
        course: 'BIT'
    },
    {
        code: 'PRG 272',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam, tenetur?',
        year: 2,
        course: 'BIT'
    },
    {
        code: 'PMM 271',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam, tenetur?',
        year: 2,
        course: 'BIT'
    },
    {
        code: 'STA 271',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam, tenetur?',
        year: 2,
        course: 'BIT'
    },
    {
        code: 'WPR 271',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam, tenetur?',
        year: 2,
        course: 'BIT'
    },
    {
        code: 'IOT 271',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam, tenetur?',
        year: 2,
        course: 'BIT'
    },
    {
        code: 'SWT 271',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam, tenetur?',
        year: 2,
        course: 'BIT'
    },
    {
        code: 'BIN 371',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam, tenetur?',
        year: 3,
        course: 'BIT'
    },
    {
        code: 'CNA 371',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam, tenetur?',
        year: 3,
        course: 'BIT'
    },
    {
        code: 'DAL 371',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam, tenetur?',
        year: 3,
        course: 'BIT'
    },
    {
        code: 'DBD 371',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam, tenetur?',
        year: 3,
        course: 'BIT'
    },
    {
        code: 'INL 371',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam, tenetur?',
        year: 3,
        course: 'BIT'
    },
    {
        code: 'PRG 371',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam, tenetur?',
        year: 3,
        course: 'BIT'
    },
    {
        code: 'PRJ 371',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam, tenetur?',
        year: 3,
        course: 'BIT'
    },
    {
        code: 'PMM 371',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam, tenetur?',
        year: 3,
        course: 'BIT'
    },
    {
        code: 'SAD 371',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam, tenetur?',
        year: 3,
        course: 'BIT'
    },
    {
        code: 'SEN 371',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam, tenetur?',
        year: 3,
        course: 'BIT'
    },
    {
        code: 'WPR 371',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam, tenetur?',
        year: 3,
        course: 'BIT'
    },
    {
        code: 'INM 371',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam, tenetur?',
        year: 3,
        course: 'BIT'
    },
    {
        code: 'UAX 371',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam, tenetur?',
        year: 3,
        course: 'BIT'
    },
    {
        code: 'BUC 161',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam, tenetur?',
        year: 1,
        course: 'DIT'
    },
    {
        code: 'BME 161',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam, tenetur?',
        year: 1,
        course: 'DIT'
    },
    {
        code: 'COA 161',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam, tenetur?',
        year: 1,
        course: 'DIT'
    },
    {
        code: 'DBC 161',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam, tenetur?',
        year: 1,
        course: 'DIT'
    },
    {
        code: 'DBF 161',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam, tenetur?',
        year: 1,
        course: 'DIT'
    },
    {
        code: 'EUC 161',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam, tenetur?',
        year: 1,
        course: 'DIT'
    },
    {
        code: 'INL 161',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam, tenetur?',
        year: 1,
        course: 'DIT'
    },
    {
        code: 'IOT 161',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam, tenetur?',
        year: 1,
        course: 'DIT'
    },
    {
        code: 'MAT 161',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam, tenetur?',
        year: 1,
        course: 'DIT'
    },
    {
        code: 'NWD 161',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam, tenetur?',
        year: 1,
        course: 'DIT'
    },
    {
        code: 'PRS 161',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam, tenetur?',
        year: 1,
        course: 'DIT'
    },
    {
        code: 'PRG 161',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam, tenetur?',
        year: 1,
        course: 'DIT'
    },
    {
        code: 'PRP 161',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam, tenetur?',
        year: 1,
        course: 'DIT'
    },
    {
        code: 'WPR 161',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam, tenetur?',
        year: 1,
        course: 'DIT'
    },
    {
        code: 'STA 161',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam, tenetur?',
        year: 1,
        course: 'DIT'
    },
    {
        code: 'DBD 261',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam, tenetur?',
        year: 2,
        course: 'DIT'
    },
    {
        code: 'ERP 261',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam, tenetur?',
        year: 2,
        course: 'DIT'
    },
    {
        code: 'INL 261',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam, tenetur?',
        year: 2,
        course: 'DIT'
    },
    {
        code: 'ILE 261',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam, tenetur?',
        year: 2,
        course: 'DIT'
    },
    {
        code: 'PMM 261',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam, tenetur?',
        year: 2,
        course: 'DIT'
    },
    {
        code: 'CNA 261',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam, tenetur?',
        year: 2,
        course: 'DIT'
    },
    {
        code: 'IOT 261',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam, tenetur?',
        year: 2,
        course: 'DIT'
    },
    {
        code: 'OPS 261',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam, tenetur?',
        year: 2,
        course: 'DIT'
    },
    {
        code: 'OPS 262',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam, tenetur?',
        year: 2,
        course: 'DIT'
    },
    {
        code: 'OPS 263',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam, tenetur?',
        year: 2,
        course: 'DIT'
    },
    {
        code: 'SEC 261',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam, tenetur?',
        year: 2,
        course: 'DIT'
    },
    {
        code: 'PRG 261',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam, tenetur?',
        year: 2,
        course: 'DIT'
    },
    {
        code: 'PRG 262',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam, tenetur?',
        year: 2,
        course: 'DIT'
    },
    {
        code: 'SWA 261',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam, tenetur?',
        year: 2,
        course: 'DIT'
    },
    {
        code: 'SWT 261',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam, tenetur?',
        year: 2,
        course: 'DIT'
    },
    {
        code: 'UXD 261',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam, tenetur?',
        year: 2,
        course: 'DIT'
    },
    {
        code: 'WPR 261',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam, tenetur?',
        year: 2,
        course: 'DIT'
    },
    {
        code: 'CNA 361',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam, tenetur?',
        year: 3,
        course: 'DIT'
    },
    {
        code: 'EHA 361',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam, tenetur?',
        year: 3,
        course: 'DIT'
    },
    {
        code: 'PET 361',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam, tenetur?',
        year: 3,
        course: 'DIT'
    },
    {
        code: 'DOP 361',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam, tenetur?',
        year: 3,
        course: 'DIT'
    },
    {
        code: 'MFR 361',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam, tenetur?',
        year: 3,
        course: 'DIT'
    },
    {
        code: 'NWD 361',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam, tenetur?',
        year: 3,
        course: 'DIT'
    },
    {
        code: 'OPS 361',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam, tenetur?',
        year: 3,
        course: 'DIT'
    },
    {
        code: 'DBA 361',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam, tenetur?',
        year: 3,
        course: 'DIT'
    },
    {
        code: 'DBC 361',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam, tenetur?',
        year: 3,
        course: 'DIT'
    },
    {
        code: 'DBD 361',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam, tenetur?',
        year: 3,
        course: 'DIT'
    },
    {
        code: 'DBR 361',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam, tenetur?',
        year: 3,
        course: 'DIT'
    },
    {
        code: 'DDB 361',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam, tenetur?',
        year: 3,
        course: 'DIT'
    },
    {
        code: 'WDB 361',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam, tenetur?',
        year: 3,
        course: 'DIT'
    },
    {
        code: 'WFS 361',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam, tenetur?',
        year: 3,
        course: 'DIT'
    },
    {
        code: 'WSE 361',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam, tenetur?',
        year: 3,
        course: 'DIT'
    },
    {
        code: 'PRG 361',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam, tenetur?',
        year: 3,
        course: 'DIT'
    },
    {
        code: 'SSX 361',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam, tenetur?',
        year: 3,
        course: 'DIT'
    },
    {
        code: 'SWA 361',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam, tenetur?',
        year: 3,
        course: 'DIT'
    },
    {
        code: 'PMM 361',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam, tenetur?',
        year: 3,
        course: 'DIT'
    },
    {
        code: 'DBA 361',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam, tenetur?',
        year: 3,
        course: 'DIT'
    },
    {
        code: 'DBC 361',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam, tenetur?',
        year: 3,
        course: 'DIT'
    },
    {
        code: 'DBD 361',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam, tenetur?',
        year: 3,
        course: 'DIT'
    },
    {
        code: 'DBR 361',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam, tenetur?',
        year: 3,
        course: 'DIT'
    },
    {
        code: 'DDB 361',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam, tenetur?',
        year: 3,
        course: 'DIT'
    },
    {
        code: 'PRJ 361',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam, tenetur?',
        year: 3,
        course: 'DIT'
    },
    {
        code: 'AIT 361',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam, tenetur?',
        year: 3,
        course: 'DIT'
    },
    {
        code: 'WSP 361',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam, tenetur?',
        year: 3,
        course: 'DIT'
    },
    {
        code: 'INF 251',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam, tenetur?',
        year: 1,
        course: 'CIT'
    },
    {
        code: 'OPS 251',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam, tenetur?',
        year: 1,
        course: 'CIT'
    },
    {
        code: 'PRJ 251',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam, tenetur?',
        year: 1,
        course: 'CIT'
    },
    {
        code: 'PMM 251',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam, tenetur?',
        year: 1,
        course: 'CIT'
    },
    {
        code: 'SEC 251',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam, tenetur?',
        year: 1,
        course: 'CIT'
    },
    {
        code: 'MAT 151',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam, tenetur?',
        year: 1,
        course: 'CIT'
    },
    {
        code: 'DBD 251',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam, tenetur?',
        year: 1,
        course: 'CIT'
    },
    {
        code: 'DBM 251',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam, tenetur?',
        year: 1,
        course: 'CIT'
    },
    {
        code: 'PRG 251',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam, tenetur?',
        year: 1,
        course: 'CIT'
    },
    {
        code: 'PRG 252',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam, tenetur?',
        year: 1,
        course: 'CIT'
    },
    {
        code: 'WPR 251',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam, tenetur?',
        year: 1,
        course: 'CIT'
    },
    {
        code: 'WPR 252',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam, tenetur?',
        year: 1,
        course: 'CIT'
    },
    {
        code: 'ERP 251',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam, tenetur?',
        year: 1,
        course: 'CIT'
    },
    {
        code: 'IOT 251',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam, tenetur?',
        year: 1,
        course: 'CIT'
    }
];


document.addEventListener('DOMContentLoaded', () => {
    const lecturerContainer = document.querySelector('.lecturer');
    const moduleContainer = document.querySelector('.modules');

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



