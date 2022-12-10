const stats_teams = [
  [
    rfc = {
      name: 'RS Football Club', stadium: 'RS City Stadium', src: 'assests/team/rsfc.png',
      gf: 11, shot: 49, shotTarget: 33, passCompletion: 83, cleansheet: 5
    },
    ann = {
      name: 'Annihilation', stadium: 'Vasio Stadium', src: 'assests/team/anh.png',
      gf: 5, shot: 10, shotTarget: 4, passCompletion: 47, cleansheet: 1
    },
    kfc = {
      name: 'Krish FC', stadium: 'Krish Stadium', src: 'assests/team/ssfc.png',
      gf: 8, shot: 21, shotTarget: 18, passCompletion: 71, cleansheet: 1
    },
    sfc = {
      name: 'SSFC', stadium: 'Laura Stadium', src: 'assests/team/ssfc.png',
      gf: 10, shot: 19, shotTarget: 13, passCompletion: 71, cleansheet: 1
    }
  ],
  [
    rfc = {
      name: 'RS Football Club', stadium: 'RS City Stadium', src: 'assests/team/rsfc.png',
      gf: 0, shot: 0, shotTarget: 0, passCompletion: 0, cleansheet: 0
    },
    ann = {
      name: 'Annihilation', stadium: 'Vasio Stadium', src: 'assests/team/anh.png',
      gf: 1, shot: 3, shotTarget: 1, passCompletion: 79, cleansheet: 0
    },
    kfc = {
      name: 'Krish FC', stadium: 'Krish Stadium', src: 'assests/team/kfc.png',
      gf: 3, shot: 7, shotTarget: 5, passCompletion: 80, cleansheet: 0
    },
    sfc = {
      name: 'SSFC', stadium: 'Laura Stadium', src: 'assests/team/ssfc.png',
      gf: 0, shot: 0, shotTarget: 0, passCompletion: 0, cleansheet: 0
    }
  ]
],
seasons = 1;
for (let i = 0; i < stats_teams[seasons].length; i++) {
   for (let j = 0; j < stats_teams[seasons].length; j++) {
        if (stats_teams[seasons][i].name < stats_teams[seasons][j].name) {
            var temp = stats_teams[seasons][i];
            stats_teams[seasons][i] = stats_teams[seasons][j];
            stats_teams[seasons][j] = temp;
        }
    }
}
