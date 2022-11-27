var rsfootballclub = {
    name: 'RS Football Club',
    shortName: 'RFC',
    stadium: 'RS City Stadium',
    stadiumCapacity: 92632,
    src: 'assests/team/rsfc.png',
    match: 5, played: 5,
    total_win: 4, win: 4,
    total_tie: 1, tie: 1,
    total_lose: 0, lose: 0,
    total_gf: 5, gf: 5,
    total_gc: 1, gc: 1,
    total_possession: 65, possession: 65, 
    total_shot: 39, shot: 39,
    total_shotTarget: 24, shotTarget: 24,
    total_cleansheet: 4, cleansheet: 4,
    total_passCompletion: 88, passCompletion: 88,
    total_foul: 6, foul: 6,
    total_yCard: 4, yCard: 4,
    total_rCard: 1, rCard: 1,
    annihilation: {
       played: 2, won: 2, lost: 0, draw: 0, gf: 2, gc: 0,
       score: [[1,0], [1, 0]]
    },
    ssfc: {
       played: 2, won: 1, lost: 0, draw: 1, gf: 1, gc: 0,
        score: [[1,0], [0,0]]
    },
    krishfc: {
       played: 1, won: 1, lost: 0, draw: 0, gf: 2, gc: 1,
        score: [[2,1]]
    }
},
annihilation = {
    name: 'Annihilation',
    shortName: 'ANN',
    stadium: 'Vasio Stadium',
    stadiumCapacity: 85687,
    src: 'assests/team/anh.png',
    match: 5, played: 5,
    total_win: 0, win: 0,
    total_tie: 0, tie: 0,
    total_lose: 5, lose: 5,
    total_gf: 2, gf: 2,
    total_gc: 8, gc: 8,
    total_possession: 40, possession: 40,
    total_shot: 9, shot: 9,
    total_shotTarget: 3, shotTarget: 3,
    total_cleansheet: 0, cleansheet: 0,
    total_passCompletion: 61, passCompletion: 61,
    total_foul: 1, foul: 1,
    total_yCard: 0, yCard: 0,
    total_rCard: 0, rCard: 0,
    rsfootballclub: {
       played: 1, won: 0, lost: 1, draw: 0, gf: 0, gc: 2,
        score: [[0,1], [0,1]]
    },
    ssfc: {
       played: 1, won: 0, lost: 1, draw: 0, gf: 1, gc: 3,
        score: [[1,3]]    
    },
    krishfc: {
       played: 1, won: 0, lost: 2, draw: 0, gf: 1, gc: 3,
        score: [[1,2], [0,1]]
    }
},
ssfc = {
    name: 'SSFC',
    shortName: 'SFC',
    stadium: 'Laura Stadium',
    stadiumCapacity: 92632,
    src: 'assests/team/ssfc.png',
    match: 4, played: 4,
    total_win: 2, win: 2,
    total_tie: 1, tie: 1,
    total_lose: 1, lose: 1,
    total_gf: 6, gf: 6,
    total_gc: 4, gc: 4,
    total_possession: 46, possession: 46, 
    total_shot: 12, shot: 12,
    total_shotTarget: 8, shotTarget: 8,
    total_cleansheet: 1, cleansheet: 1,
    total_passCompletion: 76, passCompletion: 76,
    total_foul: 3, foul: 3,
    total_yCard: 1, yCard: 1,
    total_rCard: 1, rCard: 1,
    rsfootballclub: {
       played: 1, won: 0, lost: 1, draw: 1, gf: 0, gc: 1,
        score: [[0,1], [0,0]]
    },
    annihilation: {
       played: 1, won: 1, lost: 0, draw: 0, gf: 3, gc: 1,
        score: [[3,1]]    
    },
    krishfc: {
       played: 1, won: 1, lost: 0, draw: 0, gf: 3, gc: 2,
        score: [[3,2]]
    }
},
krishfc = {
    name: 'Krish FC',
    shortName: 'KFC',
    stadium: 'Krish Stadium',
    stadiumCapacity: 15798,
    src: 'assests/team/ssfc.png',
    match: 4, played: 4,
    total_win: 2, win: 2,
    total_tie: 0, tie: 0,
    total_lose: 2, lose: 2,
    total_gf: 6, gf: 6,
    total_gc: 6, gc: 6,
    total_possession: 42, possession: 42, 
    total_shot: 15, shot: 15,
    total_shotTarget: 13, shotTarget: 13,
    total_cleansheet: 1, cleansheet: 1,
    total_passCompletion: 71, passCompletion: 71,
    total_foul: 8, foul: 8,
    total_yCard: 4, yCard: 4,
    total_rCard: 2, rCard: 2,
    rsfootballclub: {
       played: 1, won: 0, lost: 1, draw: 0, gf: 1, gc: 2,
        score: [[1,2]]
    },
    annihilation: {
       played: 2, won: 2, lost: 0, draw: 0, gf: 3, gc: 1,
        score: [[2,1], [1,0]]    
    },
    ssfc: {
       played: 1, won: 0, lost: 1, draw: 0, gf: 2, gc: 3,
        score: [[2,3]]
    }
}
;

const teams = [
    rsfootballclub, annihilation, ssfc, krishfc
];
for (let i = 0; i < teams.length; i++) {
   for (let j = 0; j < teams.length; j++) {
        if (teams[i].name < teams[j].name) {
            var temp = teams[i];
            teams[i] = teams[j];
            teams[j] = temp;
        }
    }
}
