var header = document.getElementsByTagName('header')[0],
banner = document.getElementById('logo-banner'),
match_box = document.getElementsByClassName('match-box'),
team_box = document.getElementsByClassName('teams-box')[0],
powered_by = document.getElementById('powered-by'),
links = [
    ['Home', 'https://rupansamanta.github.io/dreamleague.com/'],
    ['Fixtures', 'https://rupansamanta.github.io/dreamleague.com/fixtures-results/'],
    ['Results', 'https://rupansamanta.github.io/dreamleague.com/fixtures-results/'],
    ['Stats', 'https://rupansamanta.github.io/dreamleague.com/stats/'],
['News', 'https://rupansamanta.github.io/dreamleague.com/news/']
],
sponsors = [
    'DLS_Logo.png',
    'Google-Logo.png', 'GitHub-Logo.png',
    'Lenovo-Logo.png', 'Airtel-Logo.png',
    'Redmi-Logo.jpg', 'Jio-Digital-Logo.png',
    'Samsung_Logo.png', 'VI_Logo.png'
];


window.onscroll = function () {
    if (window.pageYOffset >= header.offsetTop) {
        header.classList.add('sticky');
        banner.style.marginTop = header.offsetHeight+'px';
    }        
    else {
        header.classList.remove('sticky');
    }
}
function generateMatch(m, no, team1, team2, type, ext) {
    var match = document.createElement('div'),
    div = document.createElement('div');
    match.className = 'match';
    div.innerHTML = no=="Final"?'Final':'Match '+no;
    match.appendChild(div);
    div = document.createElement('div');
    div.innerHTML = '<span>'+team1.shortName+'</span>';
    if (ext)
        div.innerHTML += '<img src="../'+team1.src+'">';
    else 
        div.innerHTML += '<img src="'+team1.src+'">';
    if (type) {
        div.innerHTML += `<p id="verses">
            <span></span><span>V</span><span></span>
        </p>`;
        m = m[0];
    }
    else {
        div.innerHTML += `<p id="done">
            <span>`+results[no-1][0]+`</span><span>-</span><span>`+results[no-1][1]+`</span>
        </p>`;
        m = m[1];
        match.onclick = function () {
            window.open('https://rupansamanta.github.io/dreamleague.com/match/season-1/'+no, '_self');
        }
    }
    if (ext)
        div.innerHTML += '<img src="../'+team2.src+'">';
    else 
        div.innerHTML += '<img src="'+team2.src+'">';
    div.innerHTML +='<span>'+team2.shortName+'</span>';
    match.appendChild(div);
    div = document.createElement('div');
    div.style.fontFamily = 'Medium';
    div.innerHTML = team1.stadium;
    match.appendChild(div);
    m.appendChild(match);
}

function displayTeams(team) {
    var box = document.createElement('div'),
    img = document.createElement('img'),    
    div = document.createElement('div'),
    span = document.createElement('span');
    img.setAttribute('src', team.src);    
    box.appendChild(img);
    span.id = 'name';
    span.innerHTML = team.name;
    div.appendChild(span);
    span = document.createElement('span');
    span.id = 'stadium';
    span.innerHTML = team.stadium;
    div.appendChild(span);
    box.appendChild(div);
    box.className = 'team';
    team_box.appendChild(box);
}

function displaySponsor(range) {
    var div = document.createElement('div'),
    img = document.createElement('img'),
    str = '';
    for (let i=0; i<range; i++)
        str += '../';
    img.src = str+'assests/images/'+sponsors[0];
    div.appendChild(img);
    powered_by.appendChild(div);
    for (let i=1; i<sponsors.length; i++) {
        img = document.createElement('img');
        img.src = str+'assests/images/'+sponsors[i];
        powered_by.appendChild(img);
    }
}


function displayTable(teamList, range) {
    var tableBox = document.getElementsByClassName('table-box')[0],
    table = document.createElement('table'),
    tr = document.createElement('tr'),
    th, td, arr = ['Pos', 'Club', 'P', 'W', 'T', 'L', 'GF', 'GC', 'GD', 'Pts'];
    for (let i=0; i<arr.length; i++) {
        th = document.createElement('th');
        th.innerHTML = arr[i];
        tr.appendChild(th);
    }
    table.appendChild(tr);
    for (let i=0; i<teamList.length; i++) {
        var pts = teamList[i].win*3 + teamList[i].tie,
            gd = teamList[i].gf-teamList[i].gc;
        for (let j=0; j<teamList.length; j++) {
            var pt = teamList[j].win*3 + teamList[j].tie,
            g = teamList[j].gf-teamList[j].gc;
            if(pts == pt) {
                if(gd == g) {
                    if(teamList[i].gf != teamList[j].gf) {
                        var temp = teamList[i];
                        teamList[i] = teamList[j];
                        teamList[j] = temp;  
                    }
                }
                else if (gd > g){
                    var temp = teamList[i];
                    teamList[i] = teamList[j];
                    teamList[j] = temp;
                }
            }
            else if (pts > pt){
                var temp = teamList[i];
                teamList[i] = teamList[j];
                teamList[j] = temp;
            }
        }
    }
    for (let i = 0; i < teamList.length; i++) {
        tr = document.createElement('tr');
        td = document.createElement('td');
        td.innerHTML = i+1;
        tr.appendChild(td);
        
        td = document.createElement('td');
        var str = '';
        for (let i=0; i<range; i++)
            str += '../';
        td.innerHTML = 
            `<p>
                <img src="`+str+teamList[i].src+`">
                <span>`+teamList[i].shortName+`</span>
             </p>`;
        tr.appendChild(td);
        
        td = document.createElement('td');
        td.innerHTML = teamList[i].played;
        tr.appendChild(td);
        
        td = document.createElement('td');
        td.innerHTML = teamList[i].win;
        tr.appendChild(td);
        
        td = document.createElement('td');
        td.innerHTML = teamList[i].tie;
        tr.appendChild(td);
        
        td = document.createElement('td');
        td.innerHTML = teamList[i].lose;
        tr.appendChild(td);
        
        td = document.createElement('td');
        td.innerHTML = teamList[i].gf;
        tr.appendChild(td);
        
        td = document.createElement('td');
        td.innerHTML = teamList[i].gc;
        tr.appendChild(td);
                
        td = document.createElement('td');
        var gd = teamList[i].gf - teamList[i].gc;
        td.innerHTML = gd>0 ? '+'+gd : gd;
        tr.appendChild(td);
                
        td = document.createElement('td');
        td.innerHTML = teamList[i].win*3 + teamList[i].tie;
        tr.appendChild(td);
        
        table.appendChild(tr);
    }
    tableBox.appendChild(table);
}

function footerElements(ext) {
    var footer = document.getElementsByTagName('footer')[0],
    section = document.createElement('section'),
    div = document.createElement('div'),
    str = '';
    
    div.className = 'title';
    div.innerHTML = 'Dream League';
    section.appendChild(div);
    div = document.createElement('div');
    div.className = 'content-box';    
    for (let i = 0; i < links.length; i++) {
        var d = document.createElement('div');
        d.className = 'content';
        d.innerHTML = links[i][0];
        d.onclick = function () {
            window.open(links[i][1], '_self');
        }
        div.appendChild(d);
    }
    section.appendChild(div);
    footer.appendChild(section);
    div = document.createElement('div');
    div.className = 'hr';
    footer.appendChild(div);
    section = document.createElement('section');
    section.id = 'footer-logo';
    for (let i = 0; i < ext; i++)
        str += '../';
    section.innerHTML = 
    `<div>Dream</div>
    <img src="`+str+`assests/cup-logo-white.png">
    <div>League</div>`;
    footer.appendChild(section);
}

function headerElements(ext) {
    var str = '';
    for (let i = 0; i < ext; i++)
        str += '../';
    document.getElementsByTagName('header')[0].innerHTML = 
        `<div onclick="window.open('https://rupansamanta.github.io/dreamleague.com/', '_self')">
            <img src="`+str+`assests/cup-logo-white.png" alt="">
            <div id="cup-name">
                <span>Dream</span>
                <span>League</span>
            </div>
        </div>
        <div onclick="document.documentElement.scrollTop = document.getElementsByTagName('footer')[0].offsetTop">
            <i class="fa-solid fa-bars"></i>
        </div>`;
}
