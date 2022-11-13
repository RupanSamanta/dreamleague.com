var rsfootballclub = {
    name: 'RS Football Club',
    shortName: 'RFC',
    stadium: 'RS City Stadium',
    stadiumCapacity: 92632,
    src: 'assests/team/rsfc.png',
    match: 4, played: 4,
    total_win: 3, win: 3,
    total_tie: 1, tie: 1,
    total_lose: 0, lose: 0,
    total_gf: 4, gf: 4,
    total_gc: 1, gc: 1,
    total_possession: 66, possession: 66, 
    total_shot: 32, shot: 32,
    total_shotTarget: 21, shotTarget: 21,
    total_cleansheet: 3, cleansheet: 3,
    total_passCompletion: 89, passCompletion: 89,
    total_foul: 4, foul: 4,
    total_yCard: 3, yCard: 3,
    total_rCard: 1, rCard: 1,
    annihilation: {
       played: 1, won: 1, lost: 0, draw: 0, gf: 1, gc: 0,
       score: [[1,0]]
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
    stadiumCapacity: 35519,
    src: 'assests/team/anh.png',
    match: 3, played: 3,
    total_win: 0, win: 0,
    total_tie: 0, tie: 0,
    total_lose: 3, lose: 3,
    total_gf: 2, gf: 2,
    total_gc: 6, gc: 6,
    total_possession: 38, possession: 38,
    total_shot: 5, shot: 5,
    total_shotTarget: 2, shotTarget: 2,
    total_cleansheet: 0, cleansheet: 0,
    total_passCompletion: 55, passCompletion: 55,
    total_foul: 1, foul: 1,
    total_yCard: 0, yCard: 0,
    total_rCard: 0, rCard: 0,
    rsfootballclub: {
       played: 1, won: 1, lost: 0, draw: 0, gf: 0, gc: 1,
        score: [[0,1]]
    },
    ssfc: {
       played: 1, won: 0, lost: 0, draw: 1, gf: 1, gc: 3,
        score: [[1,3]]    
    },
    krishfc: {
       played: 1, won: 1, lost: 0, draw: 0, gf: 1, gc: 2,
        score: [[1,2]]
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
    match: 3, played: 3,
    total_win: 1, win: 1,
    total_tie: 0, tie: 0,
    total_lose: 2, lose: 2,
    total_gf: 5, gf: 5,
    total_gc: 6, gc: 6,
    total_possession: 39, possession: 39, 
    total_shot: 13, shot: 13,
    total_shotTarget: 12, shotTarget: 12,
    total_cleansheet: 0, cleansheet: 0,
    total_passCompletion: 70, passCompletion: 70,
    total_foul: 7, foul: 7,
    total_yCard: 4, yCard: 4,
    total_rCard: 2, rCard: 2,
    rsfootballclub: {
       played: 1, won: 0, lost: 1, draw: 0, gf: 1, gc: 2,
        score: [[1,2]]
    },
    annihilation: {
       played: 1, won: 1, lost: 0, draw: 0, gf: 2, gc: 1,
        score: [[2,1]]    
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
