const moviePosters = [
    'aydın/1.jpeg',
    'aydın/2.jpeg',
    'aydın/3.jpeg',
    'aydın/4.jpeg',
    'aydın/5.jpeg',
    'aydın/6.jpeg',
    'aydın/7.jpeg',
    'aydın/8.jpeg',
    'aydın/9.jpeg',
    'aydın/10.jpeg',
    'aydın/11.jpeg',
    'aydın/12.jpeg',
    'aydın/13.jpeg',
    'aydın/14.jpeg',
    'aydın/15.jpeg',
    'aydın/16.jpeg',
    'aydın/17.jpeg',
    'aydın/18.jpeg',
    'aydın/19.jpeg',
    'aydın/20.jpeg',
    'aydın/21.jpeg',
    'aydın/22.jpeg',
    'aydın/23.jpeg',
    'aydın/24.jpeg',
    'aydın/25.jpeg',
    'aydın/26.jpeg',
    'aydın/27.jpeg',
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