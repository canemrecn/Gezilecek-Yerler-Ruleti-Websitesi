const moviePosters = [
    'adana/1.jpeg',
    'adana/2.jpeg',
    'adana/3.jpeg',
    'adana/4.jpeg',
    'adana/5.jpeg',
    'adana/6.jpeg',
    'adana/7.jpeg',
    'adana/8.jpeg',
    'adana/9.jpeg',
    'adana/10.jpeg',
    'adana/11.jpeg',
    'adana/12.jpeg',
    'adana/13.jpeg',
    'adana/14.jpeg',
    'adana/15.jpeg',
    'adana/16.jpeg',
    'adana/17.jpeg',
    'adana/18.jpeg',
    'adana/19.jpeg',
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
