const moviePosters = [
    'bingöl/1.jpeg',
    'bingöl/2.jpeg',
    'bingöl/3.jpeg',
    'bingöl/4.jpeg',
    'bingöl/5.jpeg',
    'bingöl/6.jpeg',
    'bingöl/7.jpeg',
    'bingöl/8.jpeg',
    'bingöl/9.jpeg',
    'bingöl/10.jpeg',
    'bingöl/11.jpeg',
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