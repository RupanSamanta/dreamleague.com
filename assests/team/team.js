var rsfootballclub = {
    name: 'RS Football Club',
    shortName: 'RFC',
    stadium: 'RS City Stadium',
    stadiumCapacity: 92632,
    src: 'assests/team/rsfc.png',
    match: 2, played: 2,
    total_win: 2, win: 2,
    total_tie: 0, tie: 0,
    total_lose: 0, lose: 0,
    total_gf: 2, gf: 2,
    total_gc: 0, gc: 0,
    total_possession: 60, possession: (47+73)/2, 
    total_shot: 15, shot: 15,
    total_shotTarget: 10, shotTarget: 10,
    total_cleansheet: 2, cleansheet: 2,
    total_passCompletion: 84, passCompletion: (82+86)/2,
    total_foul: 0, foul: 0,
    total_yCard: 0, yCard: 0,
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
    match: 1, played: 1,
    total_win: 0, win: 0,
    total_tie: 0, tie: 0,
    total_lose: 1, lose: 1,
    total_gf: 0, gf: 0,
    total_gc: 1, gc: 1,
    total_possession: 53, possession: 53, 
    total_shot: 2, shot: 2,
    total_shotTarget: 1, shotTarget: 1,
    total_cleansheet: 0, cleansheet: 0,
    total_passCompletion: 81, passCompletion: 81,
    total_foul: 1, foul: 1,
    total_yCard: 0, yCard: 0,
    total_rCard: 0, rCard: 0
},
krishfc = {
    name: 'Krish FC',
    shortName: 'KFC',
    stadium: 'Krish Stadium',
    stadiumCapacity: 15798,
    src: 'assests/team/ssfc.png',
    match: 1, played: 1,
    total_win: 1, win: 1,
    total_tie: 0, tie: 0,
    total_lose: 0, lose: 0,
    total_gf: 2, gf: 2,
    total_gc: 1, gc: 1,
    total_possession: 47, possession: 47, 
    total_shot: 3, shot: 3,
    total_shotTarget: 3, shotTarget: 3,
    total_cleansheet: 0, cleansheet: 0,
    total_passCompletion: 74, passCompletion: 74,
    total_foul: 2, foul: 2,
    total_yCard: 1, yCard: 1,
    total_rCard: 1, rCard: 1
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
