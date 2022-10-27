var news_list = [
    ['Player News', 'Diogo Jota to play a crucial role for Krish FC'],
    ['League News', 'Annihilation to face Krish FC in the second match of Dream League'],
    ['League News', 'Phil Foden’s late goal snatched a win for RS Football Club against SSFC in the first match'],
    ['Player News', 'No Haaland Show subed off early due to leg injury'],
    ['Player News', 'Lionel Messi struggle against RS Football Club no goal for him'],
    ['Club News', 'Paulo Dybala to lead Annihilation in Dream League']
],
img_src = [
    'assests/images/Diogo-Jota.jpg',
    'assests/images/ann-kfc-banner1.jpg',
    'assests/images/Phil-Foden.jpg', 
    'assests/images/haaland-celebration.jpg',
    'assests/images/messi-image.jpg',
    'assests/images/paulo-dybala-image.jpg'
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
        div.style.backgroundImage = 'url("'+st r+img_src[i]+'")';
        news.appendChild(div);
        div = document.createElement('div');
        span.innerHTML = news_list[i][0];
        span.id = 'headline';
        div.appendChild(span);
        span = document.createElement('span');
        span.innerHTML = news_list[i][1];
        div.appendChild(span);
        news.appendChild(div);    
        var split = news_list[i][0].split(' ');
        news.className = 'news '+split[0]+'-'+split[1];
        news_box.appendChild(news);
    }
}
