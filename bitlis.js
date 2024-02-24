const moviePosters = [
    'bitlis/1.jpeg',
    'bitlis/2.jpeg',
    'bitlis/3.jpeg',
    'bitlis/4.jpeg',
    'bitlis/5.jpeg',
    'bitlis/6.jpeg',
    'bitlis/7.jpeg',
    'bitlis/8.jpeg',
    'bitlis/9.jpeg',
    'bitlis/10.jpeg',
    'bitlis/11.jpeg',
    'bitlis/12.jpeg',
    'bitlis/13.jpeg',
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