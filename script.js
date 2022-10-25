var header = document.getElementsByTagName('header')[0], banner = document.getElementById('logo-banner'),
match_box = document.getElementsByClassName('match-box')[0],
team_box = document.getElementsByClassName('teams-box')[0],
ctn = document.getElementsByClassName('content'),
links = [
    'https://rupansamanta.github.io/dreamleague.com/',
    'https://rupansamanta.github.io/dreamleague.com/fixtures-results/',
    'https://rupansamanta.github.io/dreamleague.com/fixtures-results/',
    'https://rupansamanta.github.io/dreamleague.com/stats/'
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
function generateMatch(m, no, team1, team2, ext) {
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
    div.innerHTML += `<p id="verses">
        <span></span><span>V</span><span></span>
    </p>`;
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

for (let i = 0; i < ctn.length; i++) {
    ctn[i].addEventListener('click', function () {
        window.open(links[i], '_self');
    });
}
