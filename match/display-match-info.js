var field = document.getElementById('field'),
    button = document.querySelectorAll('#buttons button'),
    stats_result = [
        document.getElementById('potm'),
        document.getElementById('lineups'),
        document.getElementById('stats'),
        document.getElementById('head-to-head')
    ];
    for (let i = 0; i < button.length; i++)
        button[i].onclick = function () {
            openClose(i);
        }
    
    function openClose(ind) {
        for (let i = 0; i < stats_result.length; i++) 
            if (i == ind) {
                stats_result[i].style.display = 'block';
                button[i].disabled = true;
            }
            else {
                stats_result[i].style.display = 'none';
                button[i].disabled = false;
            }
            
    }
function printLineup(hf, hp, af, ap) {
    var lineupBox = document.createElement('div');
    lineupBox.id = 'home-lineup';
    var div, p, img, span, count = 0;
    for (let i = 0; i<hf.length; i++) {
        div = document.createElement('div');
        for (let j=0; j<hf[i]; j++) {
            var url = hp[count][0];
            p = document.createElement('p');
            img = document.createElement('img');
            span = document.createElement('span');      
            img.src = '../../../assests/player-image/'+url+'.png';
            img.onerror = ()=> {
                img.src = '../../../assests/player-image/Photo-Missing.png';
            }          
            span.innerHTML = reduce(hp[count][0]);
            p.appendChild(img);            
            p.appendChild(span);
            div.appendChild(p);
            count++;
        }
        lineupBox.appendChild(div);
        if (hp[i] == 2)
            div.style.justifyContent = 'center';
        else
            div.style.justifyContent = 'space-evenly';
    }
    field.appendChild(lineupBox);
    lineupBox = document.createElement('div');
    lineupBox.id = 'away-lineup';
    count = 0;
    
    for (let i = 0; i<af.length; i++) {
        div = document.createElement('div');
        for (let j=0; j<af[i]; j++) {
            var url = ap[count][0];
            p = document.createElement('p');
            img = document.createElement('img');
            span = document.createElement('span');         
            img.src = '../../../assests/player-image/'+url+'.png';
            img.onerror = ()=> {
                    img.src = '../../../assests/player-image/Photo-Missing.png';
            }
            span.innerHTML = reduce(ap[count][0]);
            p.appendChild(img);
            p.appendChild(span);
            div.appendChild(p);
            count++;
        }
        if (af[i] == 2)
            div.style.justifyContent = 'center';
        else
            div.style.justifyContent = 'space-evenly'
        lineupBox.appendChild(div);
    }
    field.appendChild(lineupBox);
}
function reduce(str) {
    if (str.search(' ') == -1)
        return str;
    else if (str.indexOf('.') != -1)
        return str;
    else 
        return str[0] +'. '+ str.substring(str.indexOf(' '), str.length);
}
function head_to_head(home, away, info, ind) {
    var table = document.createElement('table'),
    tr, str = '', list = [
        'Played', 'Win', 'Loss', 'Goal Fetched',
        'Goal Conceded', 'Latest Score'
    ];
    for (let i = 0; i < ind; i++)
        str += '../';
    for (let i = 0; i < list.length; i++) {
        tr = document.createElement('tr');
        var td1 = document.createElement('td'),
            td2 = document.createElement('td'),
            td3 = document.createElement('td');
        if (i==0) {
            td1.innerHTML = '<img src="'+str+home.src+'" alt="'+home.name+'">';
            td2.innerHTML = list[i]+' '+info.played;
            td3.innerHTML = '<img src="'+str+away.src+'" alt="'+home.name+'">';
        }
        else if (i==1) {
            td1.innerHTML = info.won;
            td2.innerHTML = list[i];
            td3.innerHTML = info.lost;
            var t = Math.floor(info.won/(info.won + info.lost)*100);
            t = t == 0 ? '50%' : t+'%';
            td2.style.background = 'linear-gradient(to right, var(--green) '+t+', var(--yellow) '+t+')';
        }
        else if (i==2) {
            td1.innerHTML = info.lost;
            td2.innerHTML = list[i];
            td3.innerHTML = info.won;
            var t = Math.floor(info.lost/(info.won + info.lost)*100)+'%';
            td2.style.background = 'linear-gradient(to right, var(--green) '+t+', var(--yellow) '+t+')';
        }
        else if (i==3) {
            td1.innerHTML = info.gf;
            td2.innerHTML = list[i];
            td3.innerHTML = info.gc;
            var t = Math.floor(info.gf/(info.gf + info.gc)*100)+'%';
            td2.style.background = 'linear-gradient(to right, var(--green) '+t+', var(--yellow) '+t+')';
        }
        else if (i==4) {
            td1.innerHTML = info.gc;
            td2.innerHTML = list[i];
            td3.innerHTML = info.gf;
            var t = Math.floor(info.gc/(info.gf + info.gc)*100)+'%';
            td2.style.background = 'linear-gradient(to right, var(--green) '+t+', var(--yellow) '+t+')';
        }
        else if (i==5) {
            td1.innerHTML = '';
            td2.innerHTML = list[i]+' '+info.score[info.score.length-1].join('-');
            td3.innerHTML = '';
            td2.style.background = 'linear-gradient(to right, transparent, var(--grey), transparent)'
        }
        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        table.appendChild(tr);
   }
        table.id = 'h2h-table';    document.getElementById('head-to-head').appendChild(table);
}
function printStats(array) {
    var table = document.createElement('table'),
    tr = document.createElement('tr'), td;
    tr.innerHTML = `<td><img class="hl"></td>
                    <td></td>
                    <td><img class="al"></td>`;
    table.appendChild(tr);
    for (let i = 0; i < array.length; i++) {
        tr = document.createElement('tr');
        for (let j = 0; j < array[i].length; j++) {
            td = document.createElement('td');
            td.innerHTML = array[i][j];
            if (j== 1) {
                var t1, t = 0;
        if (array[i][0].search('%') != -1) {
            t1 = array[i][0].substring(0, array[i][0].length-1)*1;
            t = array[i][2].substring(0, array[i][2].length-1)*1 + t1;
            t = Math.floor(t1/t*100)+'%';
        }
        else
            t = Math.floor(array[i][0]*1/(array[i][0]*1+array[i][2]*1)*100)+'%';
            if (t == '0%') t = '50%';
        td.style.background = 'linear-gradient(to right, var(--green) '+t+', var(--yellow) '+t+')';
            }
            tr.appendChild(td);
        }
        
        table.appendChild(tr);
    }
    document.getElementById('stats').appendChild(table);
}
function printMatchInfo(obj) {
    document.getElementById('date').innerHTML = obj.date;
    document.getElementById('venue').innerHTML = obj.venue;
    document.getElementById('logo-banner').style.background = 'url("'+obj.venueUrl+'")';
    
    printStats(obj.stats);

    var home_img = document.getElementsByClassName('hl'),
    away_img = document.getElementsByClassName('al');
    for (let i = 0; i < home_img.length; i++)
        home_img[i].setAttribute("src", '../../../'+obj.homeTeam.url);
    for (let i = 0; i < away_img.length; i++)
        away_img[i].setAttribute("src", '../../../'+obj.awayTeam.url);
        
    document.querySelectorAll('#logo-score #name')[0].innerHTML = obj.homeTeam.shortName;
    document.querySelectorAll('#logo-score #name')[1].innerHTML = obj.awayTeam.shortName;
    
    document.querySelectorAll('#score span')[0].innerHTML = obj.score[0];
    document.querySelectorAll('#score span')[2].innerHTML = obj.score[1];
    
    var section = document.getElementById('match-section');
    if ((obj.goal.home.length+obj.goal.away.length) > 0) {
        
        var div = document.createElement('div');
        div.className = 'timeline';
        div.id = 'other';
        var p = document.createElement('p');
        for (let i = 0; i < obj.goal.home.length; i++) {
            var span = document.createElement('span'),
            str = '';
            span.innerHTML = obj.goal.home[i].name;
            for (let j = 0; j < obj.goal.home[i].time.length; j++)
                str += ' '+obj.goal.home[i].time[j]+',';
            span.innerHTML += str.substring(0, str.length-1);
            p.appendChild(span);
        }
        div.appendChild(p);
        p = document.createElement('p');
        p.innerHTML = '<img src="../../../assests/images/ball.png">';
        div.appendChild(p);
        var p = document.createElement('p');
        for (let i = 0; i < obj.goal.away.length; i++) {
            var span = document.createElement('span'),
            str = '';
            span.innerHTML = obj.goal.away[i].name;
            for (let j = 0; j < obj.goal.away[i].time.length; j++)
                str += ' '+obj.goal.away[i].time[j]+',';
            span.innerHTML += str.substring(0, str.length-1);
            p.appendChild(span);
        }
        div.appendChild(p);
        section.appendChild(div);
    }
    if ((obj.assists.home.length+obj.assists.away.length) > 0) {
        
        var div = document.createElement('div');
        div.className = 'timeline';
        div.id = 'other';
        var p = document.createElement('p');
        for (let i = 0; i < obj.assists.home.length; i++) {
            var span = document.createElement('span'),
            str = '';
            span.innerHTML = obj.assists.home[i].name;
            for (let j = 0; j < obj.assists.home[i].time.length; j++)
                str += ' '+obj.assists.home[i].time[j]+',';
            span.innerHTML += str.substring(0, str.length-1);
            p.appendChild(span);
        }
        div.appendChild(p);
        p = document.createElement('p');
        p.innerHTML = '<img src="../../../assests/images/boot.png">';
        div.appendChild(p);
        var p = document.createElement('p');
        for (let i = 0; i < obj.assists.away.length; i++) {
            var span = document.createElement('span'),
            str = '';
            span.innerHTML = obj.assists.away[i].name;
            for (let j = 0; j < obj.assists.away[i].time.length; j++)
                str += ' '+obj.assists.away[i].time[j]+',';
            span.innerHTML += str.substring(0, str.length-1);
            p.appendChild(span);
        }
        div.appendChild(p);
        section.appendChild(div);
    }
    if ((obj.card.home.length+obj.card.away.length) > 0) {
        
        var div = document.createElement('div');
        div.className = 'timeline';
        div.id = 'other';
        var p = document.createElement('p');
        for (let i = 0; i < obj.card.home.length; i++) {
            var span = document.createElement('span'),
            str = '';
            span.innerHTML = obj.card.home[i].name;
            for (let j = 0; j < obj.card.home[i].time.length; j++)
                str += ' '+obj.card.home[i].time[j]+',';
            span.innerHTML += str.substring(0, str.length-1);
            p.appendChild(span);
        }
        div.appendChild(p);
        p = document.createElement('p');
        p.innerHTML = '<img src="../../../assests/images/red-card.png">';
        div.appendChild(p);
        var p = document.createElement('p');
        for (let i = 0; i < obj.card.away.length; i++) {
            var span = document.createElement('span'),
            str = '';
            span.innerHTML = obj.card.away[i].name;
            for (let j = 0; j < obj.card.away[i].time.length; j++)
                str += ' '+obj.card.away[i].time[j]+',';
            span.innerHTML += str.substring(0, str.length-1);
            p.appendChild(span);
        }
        div.appendChild(p);
        section.appendChild(div);
    }
    
    document.getElementsByClassName('potm-name')[0].innerHTML = '<div>'+obj.potm.firstName+'</div><div>'+obj.potm.secondName+'</div>';
    
    var back = new Image();
    back.src = obj.potm.url;
    back.onload = ()=> {
      document.getElementById('player').style.background = 'url("'+back.src+'")';
    }
    back.onerror = ()=> {
        document.getElementById('player').style.background = 'url("../../../assests/player-image/Photo-Missing.png")';
    }
    var img = new Image();
    img.src = obj.potm.club;
    img.onload = ()=> {
      document.getElementById('player').appendChild(img);
    }
    
    printLineup(obj.homeTeam.form, obj.homeLineup, obj.awayTeam.form, obj.awayLineup);
}
