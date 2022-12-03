var allTeams = [], shots = [], targetShot = [], pass_completion = [], cleansheet = [], 
club = [
    allTeams, shots, targetShot, pass_completion, cleansheet        
],
stats_titles = [
    'Goals', 'Total Shots', 'Shots on Target',
    'Pass Completion', 'Cleansheets'
],
player_stats_title = [
    'Goals', 'Assists', 'Cleansheets'
]
stats_box = document.getElementsByClassName('stats-box');

for (let k = 0; k < club.length; k++) {
for (let i = 0; i < teams.length; i++) 
    club[k].push(teams[i]);
   
for (let i = 0; i < club[k].length; i++) {
    for (let j = 0; j < club[k].length; j++) {
        if (k == 0) {
            if (club[k][i].gf > club[k][j].gf) {
                var temp = club[k][i];
                club[k][i] = club[k][j];
                club[k][j] = temp;
            }
        }     
        else if (k == 1) {
            if (club[k][i].shot > club[k][j].shot) {
                var temp = club[k][i];
                club[k][i] = club[k][j];
                club[k][j] = temp;
            }
        }
        else if (k == 2) {
            if (club[k][i].shotTarget > club[k][j].shotTarget) {
                var temp = club[k][i];
                club[k][i] = club[k][j];
                club[k][j] = temp;
            }
        }
        else if (k == 3) {
            if (club[k][i].passCompletion > club[k][j].passCompletion) {
                var temp = club[k][i];
                club[k][i] = club[k][j];
                club[k][j] = temp;
            }
        }
        else if (k == 4) {
            if (club[k][i].cleansheet > club[k][j].cleansheet) {
                var temp = club[k][i];
                club[k][i] = club[k][j];
                club[k][j] = temp;
            }
        }
    }
}
}

function generateStatsBox(ind, elm, ext, arr) {
    var stats = document.createElement('div'),
    div = document.createElement('div'),
    span = document.createElement('span'),
    p = document.createElement('p'),
    str = '';
    for (let i=0; i<ext; i++)
        str += '../';
    div.id = 'stats-title';
    if (elm == 0)
        div.innerHTML = player_stats_title[ind];
    else    
        div.innerHTML = stats_titles[ind];
    stats.appendChild(div);
    
    div = document.createElement('div');
    div.id = 'first';
    var d = document.createElement('div'),
    img = document.createElement('img');
    span.id = 'pos';
    span.innerHTML = '1';
    d.appendChild(span);
    span = document.createElement('span');
    span.id = 'name';
    span.innerHTML = arr[ind][0].name;
    p.appendChild(span);
    span = document.createElement('span');
    span.id = 'club';
    if (elm == 0)
        span.innerHTML = arr[ind][0].club;
    else
        span.innerHTML = arr[ind][0].stadium;
    p.appendChild(span);
    d.appendChild(p);
    span = document.createElement('span');
    span.id = 'value';
    if (elm != 0) {
    if (ind == 0)
        span.innerHTML = arr[ind][0].gf;
    else if (ind == 1)
        span.innerHTML = arr[ind][0].shot;
    else if (ind == 2)
        span.innerHTML = arr[ind][0].shotTarget;
    else if (ind == 3)
        span.innerHTML = arr[ind][0].passCompletion+'%';
    else if (ind == 4)
        span.innerHTML = arr[ind][0].cleansheet;
    }
    else {
        span.innerHTML = arr[ind][0].value;
    }
    d.appendChild(span);
    div.appendChild(d);
    img.src = str+arr[ind][0].src;
    if (elm == 0){
        img.onerror = function () {
        img.src = str+'assests/player-image/Photo-Missing.png';
    }
        img.id = 'player-img';
    }
    else {
        img.id = 'club-img';
        img.onerror = function () {
           img.src = str+'assests/team/tba.png';
        }
    }
    img.setAttribute('alt', arr[ind][0].name);
    div.appendChild(img);
    stats.appendChild(div);
    stats.className = 'stats';
    for (let i = 1; i < arr[ind].length; i++) {
        var box = document.createElement('div'),
        div = document.createElement('div'),
        span = document.createElement('span'),
        p = document.createElement('p'),
        img = document.createElement('img');
        box.id = 'box';
        span.innerHTML = i+1;
        div.appendChild(span);
        img.src = str+arr[ind][i].src;
        if (elm == 0)
        img.onerror = function () {
            img.src = str+'assests/player-image/Photo-Missing.png';
        }
        else
            img.onerror = function () {
                img.src = str+'assests/team/tba.png';
            }
        div.appendChild(img);
        span = document.createElement('span');
        span.innerHTML = arr[ind][i].name;
        p.appendChild(span);
        span = document.createElement('span');
        if (elm == 0)
            span.innerHTML = arr[ind][i].club;
        else
            span.innerHTML = arr[ind][i].stadium;
        p.appendChild(span);
        div.appendChild(p);
        box.appendChild(div);
        div = document.createElement('div');
        if (elm != 0) {
            if (ind == 0)
                div.innerHTML = arr[ind][i].gf;
            else if (ind == 1)
                div.innerHTML = arr[ind][i].shot;
            else if (ind == 2)
                div.innerHTML = arr[ind][i].shotTarget;
            else if (ind == 3)
                div.innerHTML = arr[ind][i].passCompletion+'%';
            else if (ind == 4)
                div.innerHTML = arr[ind][i].cleansheet;
        }
        else {
            div.innerHTML = arr[ind][i].value;
        }
        box.appendChild(div);
        stats.appendChild(box);
    }
    stats_box[elm].appendChild(stats);
}
for (let i=0; i<club.length; i++)
    generateStatsBox(i, 1, 1, club);

for (let i=0; i<season1_player_stats.length; i++)
    generateStatsBox(i, 0, 1, season1_player_stats);
