var rsfootballclub = {
    name: 'RS Football Club',
    shortName: 'RFC',
    stadium: 'RS City Stadium',
    stadiumCapacity: 92632,
    src: 'assests/team/rsfc.png',
    match: 3, played: 3,
    total_win: 3, win: 3,
    total_tie: 0, tie: 0,
    total_lose: 0, lose: 0,
    total_gf: 4, gf: 4,
    total_gc: 0, gc: 0,
    total_possession: 65, possession: (47+73+70)/3, 
    total_shot: 22, shot: 22,
    total_shotTarget: 15, shotTarget: 15,
    total_cleansheet: 2, cleansheet: 2,
    total_passCompletion: 84, passCompletion: (82+86+84)/3,
    total_foul: 2, foul: 2,
    total_yCard: 2, yCard: 2,
    total_rCard: 0, rCard: 0
},
annihilation = {
    name: 'Annihilation',
    shortName: 'ANN',
    stadium: 'Vasio Stadium',
    stadiumCapacity: 35519,
    src: 'assests/team/anh.png',
    match: 2, played: 2,
    total_win: 0, win: 0,
    total_tie: 0, tie: 0,
    total_lose: 2, lose: 2,
    total_gf: 1, gf: 1,
    total_gc: 3, gc: 3,
    total_possession: 40, possession: (53+27/2),
    total_shot: 3, shot: 3,
    total_shotTarget: 1, shotTarget: 1,
    total_cleansheet: 0, cleansheet: 0,
    total_passCompletion: 57, passCompletion: (64+50)/2,
    total_foul: 1, foul: 1,
    total_yCard: 0, yCard: 0,
    total_rCard: 0, rCard: 0
},
ssfc = {
    name: 'SSFC',
    shortName: 'SFC',
    stadium: 'Laura Stadium',
    stadiumCapacity: 92632,
    src: 'assests/team/ssfc.png',
    match: 2, played: 2,
    total_win: 1, win: 1,
    total_tie: 0, tie: 0,
    total_lose: 1, lose: 1,
    total_gf: 3, gf: 3,
    total_gc: 3, gc: 3,
    total_possession: 53, possession: 53, 
    total_shot: 5, shot: 5,
    total_shotTarget: 4, shotTarget: 4,
    total_cleansheet: 0, cleansheet: 0,
    total_passCompletion: 81, passCompletion: 81,
    total_foul: 2, foul: 2,
    total_yCard: 0, yCard: 0,
    total_rCard: 1, rCard: 1
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
    total_rCard: 2, rCard: 2
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
