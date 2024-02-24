const moviePosters = [
    'çankırı/1.jpeg',
    'çankırı/2.jpeg',
    'çankırı/3.jpeg',
    'çankırı/4.jpeg',
    'çankırı/5.jpeg',
    'çankırı/6.jpeg',
    'çankırı/7.jpeg',
    'çankırı/8.jpeg',
    'çankırı/9.jpeg',
    'çankırı/10.jpeg',
    'çankırı/11.jpeg',
    'çankırı/12.jpeg',
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