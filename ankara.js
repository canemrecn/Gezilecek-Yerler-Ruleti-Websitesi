const moviePosters = [
    'ankara/1.jpeg',
    'ankara/2.jpeg',
    'ankara/3.jpeg',
    'ankara/4.jpeg',
    'ankara/5.jpeg',
    'ankara/6.jpeg',
    'ankara/7.jpeg',
    'ankara/8.jpeg',
    'ankara/9.jpeg',
    'ankara/10.jpeg',
    'ankara/11.jpeg',
    'ankara/12.jpeg',
    'ankara/13.jpeg',
    'ankara/14.jpeg',
    'ankara/15.jpeg',
    'ankara/16.jpeg',
    'ankara/17.jpeg',
    'ankara/18.jpeg',
    'ankara/19.jpeg',
    'ankara/20.jpeg',
    'ankara/21.jpeg',
    'ankara/22.jpeg',
    'ankara/23.jpeg',
    'ankara/24.jpeg',
    'ankara/25.jpeg',
    'ankara/26.jpeg',
    'ankara/27.jpeg',
    'ankara/28.jpeg',
    'ankara/29.jpeg',
    'ankara/30.jpeg',
    'ankara/31.jpeg',
    'ankara/32.jpeg',
    'ankara/33.jpeg',
    'ankara/34.jpeg',
    'ankara/35.jpeg',
    'ankara/36.jpeg',
    'ankara/37.jpeg',
    'ankara/38.jpeg',
    'ankara/39.jpeg',
    'ankara/40.jpeg',
    'ankara/41.jpeg',
    'ankara/42.jpeg',
    'ankara/43.jpeg',
    'ankara/44.jpeg',
    'ankara/45.jpeg',
    'ankara/46.jpeg',
    'ankara/47.jpeg',
    'ankara/48.jpeg',
    'ankara/49.jpeg',
    'ankara/50.jpeg',
    'ankara/51.jpeg',
    'ankara/52.jpeg',
    'ankara/53.jpeg',
    'ankara/54.jpeg',
    'ankara/55.jpeg',
    'ankara/56.jpeg',
    'ankara/57.jpeg',
];
const showPosterButton = document.getElementById('showPosterButton');
const posterContainer = document.getElementById('posterContainer');
const moviePoster = document.getElementById('moviePoster');

showPosterButton.addEventListener('click', () => {
    const randomIndex = Math.floor(Math.random() * moviePosters.length);
    const randomPoster = moviePosters[randomIndex];
    
    moviePoster.src = randomPoster;
    posterContainer.style.display = 'block';
    
    showPosterButton.style.display = 'none';
});