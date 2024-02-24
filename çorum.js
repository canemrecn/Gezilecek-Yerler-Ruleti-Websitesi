const moviePosters = [
    'çorum/1.jpeg',
    'çorum/2.jpeg',
    'çorum/3.jpeg',
    'çorum/4.jpeg',
    'çorum/5.jpeg',
    'çorum/6.jpeg',
    'çorum/7.jpeg',
    'çorum/8.jpeg',
    'çorum/9.jpeg',
    'çorum/10.jpeg',
    'çorum/11.jpeg',
    'çorum/12.jpeg',
    'çorum/13.jpeg',
    'çorum/14.jpeg',
    'çorum/15.jpeg',
    'çorum/16.jpeg',
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