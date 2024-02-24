const moviePosters = [
    'bilecik/1.jpeg',
    'bilecik/2.jpeg',
    'bilecik/3.jpeg',
    'bilecik/4.jpeg',
    'bilecik/5.jpeg',
    'bilecik/6.jpeg',
    'bilecik/7.jpeg',
    'bilecik/8.jpeg',
    'bilecik/9.jpeg',
    'bilecik/10.jpeg',
    'bilecik/11.jpeg',
    'bilecik/12.jpeg',
    'bilecik/13.jpeg',
    'bilecik/14.jpeg',
    'bilecik/15.jpeg',
    'bilecik/16.jpeg',
    'bilecik/17.jpeg',
    'bilecik/18.jpeg',
    'bilecik/19.jpeg',
    'bilecik/20.jpeg',
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