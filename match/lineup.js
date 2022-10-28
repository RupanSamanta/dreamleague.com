var field = document.getElementById('field'),
    button = document.querySelectorAll('#buttons button'),
    stats_result = [
        document.getElementById('potm'),
        document.getElementById('lineups'),
        document.getElementById('stats')
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
            var pos = hp[count][1];
            p = document.createElement('p');
            img = document.createElement('span');
            span = document.createElement('span');
            img.innerHTML = pos;
            span.innerHTML = hp[count][0];
            img.id = pos.charAt(pos.length-1);           
            p.appendChild(img);
            p.appendChild(span);
            div.appendChild(p);
            count++;
        }
        if (hf[i] == 2)
            div.style.justifyContent = 'center'
        lineupBox.appendChild(div);
    }
    field.appendChild(lineupBox);
    lineupBox = document.createElement('div');
    lineupBox.id = 'away-lineup';
    count = 0;
    for (let i = 0; i<af.length; i++) {
        div = document.createElement('div');
        for (let j=0; j<af[i]; j++) {
            var pos = ap[count][1];
            p = document.createElement('p');
            img = document.createElement('span');
            span = document.createElement('span');
            img.innerHTML = pos;
            span.innerHTML = ap[count][0];
            img.id = pos.charAt(pos.length-1);           
            p.appendChild(img);
            p.appendChild(span);
            div.appendChild(p);
            count++;
        }
        if (af[i] == 2)
            div.style.justifyContent = 'center'
        lineupBox.appendChild(div);
    }
    field.appendChild(lineupBox);
}
