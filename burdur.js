const moviePosters = [
    'burdur/1.jpeg',
    'burdur/2.jpeg',
    'burdur/3.jpeg',
    'burdur/4.jpeg',
    'burdur/5.jpeg',
    'burdur/6.jpeg',
    'burdur/7.jpeg',
    'burdur/8.jpeg',
    'burdur/9.jpeg',
    'burdur/10.jpeg',
    'burdur/11.jpeg',
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