var rsfootballclub = {
    name: 'RS Football Club',
    shortName: 'RFC',
    stadium: 'RS City Stadium',
    stadiumCapacity: 92632,
    src: 'assests/team/rsfc.png',
    match: 7, played: 0,
    total_win: 6, win: 0,
    total_tie: 1, tie: 0,
    total_lose: 0, lose: 0,
    total_gf: 11, gf: 0,
    total_gc: 2, gc: 0,
    total_possession: 63, possession: 0, 
    total_shot: 49, shot: 0,
    total_shotTarget: 33, shotTarget: 0,
    total_cleansheet: 5, cleansheet: 0,
    total_passCompletion: 83, passCompletion: 0,
    total_foul: 6, foul: 0,
    total_yCard: 4, yCard: 0,
    total_rCard: 1, rCard: 0,
    annihilation: {
       played: 2, won: 2, lost: 0, draw: 0, gf: 2, gc: 0,
       score: [[1,0], [1, 0]]
    },
    ssfc: {
       played: 3, won: 2, lost: 0, draw: 1, gf: 5, gc: 1,
        score: [[1,0], [0,0], [4,1]]
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
    match: 7, played: 1,
    total_win: 1, win: 0,
    total_tie: 0, tie: 0,
    total_lose: 6, lose: 1,
    total_gf: 6, gf: 1,
    total_gc: 11, gc: 3,
    total_possession: 43, possession: 45,
    total_shot: 13, shot: 3,
    total_shotTarget: 5, shotTarget: 1,
    total_cleansheet: 1, cleansheet: 0,
    total_passCompletion: 63, passCompletion: 79,
    total_foul: 2, foul: 1,
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
       played: 3, won: 0, lost: 3, draw: 0, gf: 2, gc: 6,
        score: [[1,2], [0,1], [1,3]]
    }
},
ssfc = {
    name: 'SSFC',
    shortName: 'SFC',
    stadium: 'Laura Stadium',
    stadiumCapacity: 92632,
    src: 'assests/team/ssfc.png',
    match: 7, played: 0,
    total_win: 3, win: 0,
    total_tie: 1, tie: 0,
    total_lose: 3, lose: 0,
    total_gf: 10, gf: 0,
    total_gc: 13, gc: 0,
    total_possession: 42, possession: 0, 
    total_shot: 19, shot: 0,
    total_shotTarget: 13, shotTarget: 0,
    total_cleansheet: 1, cleansheet: 0,
    total_passCompletion: 71, passCompletion: 0,
    total_foul: 4, foul: 0,
    total_yCard: 1, yCard: 0,
    total_rCard: 1, rCard: 0,
    rsfootballclub: {
       played: 3, won: 0, lost: 1, draw: 1, gf: 1, gc: 5,
        score: [[0,1], [0,0], [1,4]]
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
    src: 'assests/team/kfc.png',
    match: 7, played: 1,
    total_win: 3, win: 1,
    total_tie: 0, tie: 0,
    total_lose: 4, lose: 0,
    total_gf: 11, gf: 3,
    total_gc: 12, gc: 1,
    total_possession: 45, possession: 55, 
    total_shot: 28, shot: 7,
    total_shotTarget: 23, shotTarget: 5,
    total_cleansheet: 1, cleansheet: 0,
    total_passCompletion: 76, passCompletion: 80,
    total_foul: 10, foul: 1,
    total_yCard: 5, yCard: 1,
    total_rCard: 3, rCard: 0,
    rsfootballclub: {
       played: 2, won: 0, lost: 2, draw: 0, gf: 1, gc: 4,
        score: [[1,2], [0,2]]
    },
    annihilation: {
       played: 3, won: 3, lost: 0, draw: 0, gf: 6, gc: 2,
        score: [[2,1], [1,0], [3,1]]    
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
