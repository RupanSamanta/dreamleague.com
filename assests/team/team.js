var rsfootballclub = {
    name: 'RS Football Club',
    shortName: 'RFC',
    stadium: 'RS City Stadium',
    stadiumCapacity: 92632,
    src: 'assests/team/rsfc.png',
    match: 6, played: 6,
    total_win: 5, win: 5,
    total_tie: 1, tie: 1,
    total_lose: 0, lose: 0,
    total_gf: 7, gf: 7,
    total_gc: 1, gc: 1,
    total_possession: 62, possession: 62, 
    total_shot: 41, shot: 41,
    total_shotTarget: 26, shotTarget: 26,
    total_cleansheet: 5, cleansheet: 5,
    total_passCompletion: 85, passCompletion: 85,
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
       played: 2, won: 2, lost: 0, draw: 0, gf: 4, gc: 1,
        score: [[2,1], [2,0]]
    }
},
annihilation = {
    name: 'Annihilation',
    shortName: 'ANN',
    stadium: 'Vasio Stadium',
    stadiumCapacity: 85687,
    src: 'assests/team/anh.png',
    match: 6, played: 6,
    total_win: 1, win: 1,
    total_tie: 0, tie: 0,
    total_lose: 5, lose: 5,
    total_gf: 5, gf: 5,
    total_gc: 8, gc: 8,
    total_possession: 50, possession: 50,
    total_shot: 10, shot: 10,
    total_shotTarget: 4, shotTarget: 4,
    total_cleansheet: 1, cleansheet: 1,
    total_passCompletion: 47, passCompletion: 47,
    total_foul: 1, foul: 1,
    total_yCard: 0, yCard: 0,
    total_rCard: 0, rCard: 0,
    rsfootballclub: {
       played: 2, won: 0, lost: 2, draw: 0, gf: 0, gc: 2,
        score: [[0,1], [0,1]]
    },
    ssfc: {
       played: 2, won: 1, lost: 1, draw: 0, gf: 4, gc: 3,
        score: [[1,3], [3,0]]    
    },
    krishfc: {
       played: 2, won: 0, lost: 2, draw: 0, gf: 1, gc: 3,
        score: [[1,2], [0,1]]
    }
},
ssfc = {
    name: 'SSFC',
    shortName: 'SFC',
    stadium: 'Laura Stadium',
    stadiumCapacity: 92632,
    src: 'assests/team/ssfc.png',
    match: 6, played: 6,
    total_win: 3, win: 3,
    total_tie: 1, tie: 1,
    total_lose: 2, lose: 2,
    total_gf: 9, gf: 9,
    total_gc: 9, gc: 9,
    total_possession: 46, possession: 46, 
    total_shot: 17, shot: 17,
    total_shotTarget: 12, shotTarget: 12,
    total_cleansheet: 1, cleansheet: 1,
    total_passCompletion: 76, passCompletion: 76,
    total_foul: 3, foul: 3,
    total_yCard: 1, yCard: 1,
    total_rCard: 1, rCard: 1,
    rsfootballclub: {
       played: 2, won: 0, lost: 1, draw: 1, gf: 0, gc: 1,
        score: [[0,1], [0,0]]
    },
    annihilation: {
       played: 2, won: 1, lost: 1, draw: 0, gf: 3, gc: 1,
        score: [[3,1], [0,3]]    
    },
    krishfc: {
       played: 2, won: 2, lost: 0, draw: 0, gf: 6, gc: 4,
        score: [[3,2], [3,2]]
    }
},
krishfc = {
    name: 'Krish FC',
    shortName: 'KFC',
    stadium: 'Krish Stadium',
    stadiumCapacity: 80002,
    src: 'assests/team/ssfc.png',
    match: 6, played: 6,
    total_win: 2, win: 2,
    total_tie: 0, tie: 0,
    total_lose: 4, lose: 4,
    total_gf: 8, gf: 8,
    total_gc: 11, gc: 11,
    total_possession: 43, possession: 43, 
    total_shot: 21, shot: 21,
    total_shotTarget: 18, shotTarget: 18,
    total_cleansheet: 1, cleansheet: 1,
    total_passCompletion: 71, passCompletion: 71,
    total_foul: 9, foul: 9,
    total_yCard: 4, yCard: 4,
    total_rCard: 3, rCard: 3,
    rsfootballclub: {
       played: 2, won: 0, lost: 2, draw: 0, gf: 1, gc: 4,
        score: [[1,2], [0,2]]
    },
    annihilation: {
       played: 2, won: 2, lost: 0, draw: 0, gf: 3, gc: 1,
        score: [[2,1], [1,0]]    
    },
    ssfc: {
       played: 2, won: 0, lost: 2, draw: 0, gf: 4, gc: 6,
        score: [[2,3], [2,3]]
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
