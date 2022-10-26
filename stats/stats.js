var allTeams = [], shots = [], targetShot = [], pass_completion = [], cleansheet = [], 
club = [
    allTeams, shots, targetShot, pass_completion, cleansheet        
],
stats_titles = [
    'Goals', 'Shots', 'Shots on Target',
    'Pass Completion', 'Cleansheets'
],
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

function generateStatsBox(ind, elm, ext) {
    var stats = document.createElement('div'),
    div = document.createElement('div'),
    span = document.createElement('span'),
    p = document.createElement('p'),
    str = '';
    for (let i=0; i<ext; i++)
        str += '../';
    div.id = 'stats-title';
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
    span.innerHTML = club[ind][0].name;
    p.appendChild(span);
    span = document.createElement('span');
    span.id = 'club';
    span.innerHTML = club[ind][0].stadium;
    p.appendChild(span);
    d.appendChild(p);
    span = document.createElement('span');
    span.id = 'value';
    if (ind == 0)
        span.innerHTML = club[ind][0].gf;
    else if (ind == 1)
        span.innerHTML = club[ind][0].shot;
    else if (ind == 2)
        span.innerHTML = club[ind][0].shotTarget;
    else if (ind == 3)
        span.innerHTML = club[ind][0].passCompletion+'%';
    else if (ind == 4)
        span.innerHTML = club[ind][0].cleansheet;
    d.appendChild(span);
    div.appendChild(d);
    img.src = str+club[ind][0].src;
    img.id = 'club-img';
    img.setAttribute('alt', club[ind][0].name);
    div.appendChild(img);
    stats.appendChild(div);
    stats.className = 'stats';
    for (let i = 1; i < club[ind].length; i++) {
        var box = document.createElement('div'),
        div = document.createElement('div'),
        span = document.createElement('span'),
        p = document.createElement('p'),
        img = document.createElement('img');
        box.id = 'box';
        span.innerHTML = i+1;
        div.appendChild(span);
        img.src = str+club[ind][i].src;
        div.appendChild(img);
        span = document.createElement('span');
        span.innerHTML = club[ind][i].name;
        p.appendChild(span);
        span = document.createElement('span');
        span.innerHTML = club[ind][i].stadium;
        p.appendChild(span);
        div.appendChild(p);
        box.appendChild(div);
        div = document.createElement('div');
        if (ind == 0)
            div.innerHTML = club[ind][i].gf;
        else if (ind == 1)
            div.innerHTML = club[ind][i].shot;
        else if (ind == 2)
            div.innerHTML = club[ind][i].shotTarget;
        else if (ind == 3)
            div.innerHTML = club[ind][i].passCompletion+'%';
        else if (ind == 4)
            div.innerHTML = club[ind][i].cleansheet;
        box.appendChild(div);
        stats.appendChild(box);
    }
    stats_box[elm].appendChild(stats);
}
for (let i=0; i<club.length; i++)
    generateStatsBox(i, 1, 1);

for (let i=0; i<player_stats.length; i++)
    generateStatsBox(i, 0, 1);

