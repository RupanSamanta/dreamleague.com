var news_list = [
    {
        type: 'League News',
        desc: 'Jota’s heroic performance helped Krish FC defeat opponent Annihilation at their home ground',
        url: 'assests/images/diogo-jota-against-ann.jpg'
    },
    {
        type: 'Player News',
        desc: 'Diogo Jota to play a crucial role for Krish FC',
        url: 'assests/images/Diogo-Jota.jpg',
    },
    {
        type: 'League News',
        desc: 'Annihilation to face Krish FC in the second match of Dream League',
        url: 'assests/images/ann-kfc-banner1.jpg',
    },
    {
        type: 'League News',
        desc: 'Phil Foden’s late goal snatched a win for RS Football Club against SSFC in the first match',
        url: 'assests/images/Phil-Foden.jpg',
    },
    {
        type: 'Player News',
        desc: 'Lionel Messi of SSFC struggle to get a goal against RS Football Club',
        url: 'assests/images/messi-struggle.jpg',
    },
    {
        type: 'Player News',
        desc: 'No Haaland Show subbed off early due to leg injury',
        url: 'assests/images/haaland-injury.jpg',
    },
    {
        type: 'League News',
        desc: 'RS Football Club to face SSFC in the first match of Dream League',
        url: 'assests/images/rsfc-ssfc-banner1.jpg',
    },
    {
        type: 'Player News',
        desc: 'Erling Haaland of RS Football Club can be the highest goalscorer in Dream League',
        url: 'assests/images/haaland-celebration.jpg',
    },
    {
        type: 'Player News',
        desc: 'Lionel Messi of SSFC can be a big headache for RS Football Club',
        url: 'assests/images/messi-image.jpg',
    },
    {
        type: 'Club News',
        desc: 'Paulo Dybala to lead Annihilation in Dream League',
        url: 'assests/images/paulo-dybala-image.jpg',
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
