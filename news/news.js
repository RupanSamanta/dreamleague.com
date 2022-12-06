var news_list = [
    {
        type: 'League News',
        desc: 'Dream League Season 2 fixtures are out Annihilation to face Krish FC in the opening match',
        url: 'assests/images/fixtures-out.jpg'
    },
    {
        type: 'League News',
        desc: 'Dream League Season 2 will start on 6th December Tuesday 2022',
        url: 'assests/images/dream league season 2 banner.jpg'
    }
],
news_box = document.getElementsByClassName('news-box')[0];
function generateNews(max, ext) {
    for (let i = 0; i < max; i++) {
        var news = document.createElement('div'),
        div = document.createElement('div'),
        span = document.createElement('span');
        div.className = 'image-box';
        var str = '';
        for (let j = 0; j < ext; j++)
            str += '../';
        div.style.backgroundImage = 'url("'+str+news_list[i].url+'")';
        news.appendChild(div);
        div = document.createElement('div');
        span.innerHTML = news_list[i].type;
        span.id = 'headline';
        div.appendChild(span);
        span = document.createElement('span');
        span.innerHTML = news_list[i].desc;
        div.appendChild(span);
        news.appendChild(div);    
        var split = news_list[i].type.split(' ');
        news.className = 'news '+split[0]+'-'+split[1];
        news_box.appendChild(news);
    }
}
