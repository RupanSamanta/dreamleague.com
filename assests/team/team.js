var rsfootballclub = {
    name: 'RS Football Club',
    shortName: 'RFC',
    stadium: 'RS City Stadium',
    stadiumCapacity: 92632,
    src: 'assests/team/rsfc.png',
    match: 0, played: 0,
    total_win: 0, win: 0,
    total_tie: 0, tie: 0,
    total_lose: 0, lose: 0,
    total_gf: 0, gf: 0,
    total_gc: 0, gc: 0,
    total_possession: 0, possession: 0, 
    total_shot: 0, shot: 0,
    total_shotTarget: 0, shotTarget: 0,
    total_cleansheet: 0, cleansheet: 0,
},
annihilation = {
    name: 'Annihilation',
    shortName: 'ANN',
    stadium: 'Vasio Club',
    stadiumCapacity: 35519,
    src: 'assests/team/anh.png',
    match: 0, played: 0,
    total_win: 0, win: 0,
    total_tie: 0, tie: 0,
    total_lose: 0, lose: 0,
    total_gf: 0, gf: 0,
    total_gc: 0, gc: 0,
    total_possession: 0, possession: 0, 
    total_shot: 0, shot: 0,
    total_shotTarget: 0, shotTarget: 0,
    total_cleansheet: 0, cleansheet: 0
},
ssfc = {
    name: 'SSFC',
    shortName: 'SFC',
    stadium: 'Laura Stadium',
    stadiumCapacity: 92632,
    src: 'assests/team/ssfc.png',
    match: 0, played: 0,
    total_win: 0, win: 0,
    total_tie: 0, tie: 0,
    total_lose: 0, lose: 0,
    total_gf: 0, gf: 0,
    total_gc: 0, gc: 0,
    total_possession: 0, possession: 0, 
    total_shot: 0, shot: 0,
    total_shotTarget: 0, shotTarget: 0,
    total_cleansheet: 0, cleansheet: 0
},
krishfc = {
    name: 'Krish FC',
    shortName: 'KFC',
    stadium: 'Krish Stadium',
    stadiumCapacity: 92632,
    src: 'assests/team/ssfc.png',
    match: 0, played: 0,
    total_win: 0, win: 0,
    total_tie: 0, tie: 0,
    total_lose: 0, lose: 0,
    total_gf: 0, gf: 0,
    total_gc: 0, gc: 0,
    total_possession: 0, possession: 0, 
    total_shot: 0, shot: 0,
    total_shotTarget: 0, shotTarget: 0,
    total_cleansheet: 0, cleansheet: 0
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
