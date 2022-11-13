var player_goals = [
    {
        name: 'Phil Foden',
        club: 'RS Football Club',
        src: 'assests/player-image/Phil Foden.png',
        value: 1
    },
    {
        name: 'Diogo Jota',
        club: 'Krish FC',
        src: 'assests/player-image/Diogo Jota.png',
        value: 2
    },
    {
        name: 'Rodrigo Moreno',
        club: 'Krish FC',
        src: 'assests/player-image/Rodrigo Moreno.png',
        value: 1
    },
    {
        name: 'Paulo Dybala',
        club: 'Annihilation',
        src: 'assests/player-image/Paulo Dybala.png',
        value: 1
    },
    {
        name: 'Riyad Mahrez',
        club: 'RS Football Club',
        src: 'assests/player-image/Riyad Mahrez.png',
        value: 2
    },
    {
        name: 'Lionel Messi',
        club: 'SSFC',
        src: 'assests/player-image/Lionel Messi.png',
        value: 3
    },
    {
        name: 'Ángel Correa',
        club: 'Krish FC',
        src: 'assests/player-image/Angel Correa.png',
        value: 1
    },
    {
        name: 'Jack Grealish',
        club: 'RS Football Club',
        src: 'assests/player-image/Jack Grealish.png',
        value: 1
    },
    {
        name: 'Allan Saint-Maximin',
        club: 'Krish FC',
        src: 'assests/player-image/Allan Saint-Maximin.png',
        value: 1
    },    
    {
        name: 'Lionel Messi',
        club: 'Annihilation',
        src: 'assests/player-image/Lionel Messi.png',
        value: 1
    },
    {
        name: 'Raheem Sterling',
        club: 'SSFC',
        src: 'assests/player-image/Raheem Sterling.png',
        value: 1
    },
    {
        name: 'Kylian Mbappé',
        club: 'SSFC',
        src: 'assests/player-image/Kylian Mbappe.png',
        value: 1
    }
],
player_assists = [
    {
        name: 'Kevin De Bryune',
        club: 'RS Football Club',
        src: 'assests/player-image/Kevin De Bryune.png',
        value: 1
    },
    {
        name: 'Diogo Jota',
        club: 'Krish FC',
        src: 'assests/player-image/Diogo Jota.png',
        value: 1
    },
    {
        name: 'Kasper Dolberg',
        club: 'Annihilation',
        src: 'assests/player-image/Kasper Dolberg.png',
        value: 1
    },
    {
        name: 'Oleksandr Zinchenko',
        club: 'RS Football Club',
        src: 'assests/player-image/Oleksandr Zinchenko.png',
        value: 1
    },
    {
        name: 'Phil Foden',
        club: 'RS Football Club',
        src: 'assests/player-image/Phil Foden.png',
        value: 1
    },
    {
        name: 'Ángel Correa',
        club: 'Krish FC',
        src: 'assests/player-image/Angel Correa.png',
        value: 1
    },
    {
        name: 'Raheem Sterling',
        club: 'RS Football Club',
        src: 'assests/player-image/Raheem Sterling.png',
        value: 1
    },
    {
        name: 'Neymar Jr.',
        club: 'SSFC',
        src: 'assests/player-image/Neymar Jr.png',
        value: 1
    },
    {
        name: 'Kylian Mbappé',
        club: 'SSFC',
        src: 'assests/player-image/Kylian Mbappe.png',
        value: 1
    },   
    {
        name: 'Lionel Messi',
        club: 'SSFC',
        src: 'assests/player-image/Lionel Messi.png',
        value: 1
    }
],
player_cleansheet = [
    {
        name: 'Ederson Moraes',
        club: 'RS Football Club',
        src: 'assests/player-image/Ederson.png',
        value: 3
    },
    {
        name: 'Alisson Becker',
        club: 'SSFC',
        src: 'assests/player-image/Alisson.png',
        value: 1
    }
],
season1_player_stats;
for (let i = 0; i < player_goals.length; i++) {
   for (let j = 0; j < player_goals.length; j++) {
        if (player_goals[i].value > player_goals[j].value) {
            var temp = player_goals[i];
            player_goals[i] = player_goals[j];
            player_goals[j] = temp;
        }
    }
}
season1_player_stats = [
    player_goals, player_assists, player_cleansheet
];
