const moviePosters = [
    'bolu/1.jpeg',
    'bolu/2.jpeg',
    'bolu/3.jpeg',
    'bolu/4.jpeg',
    'bolu/5.jpeg',
    'bolu/6.jpeg',
    'bolu/7.jpeg',
    'bolu/8.jpeg',
    'bolu/9.jpeg',
    'bolu/10.jpeg',
    'bolu/11.jpeg',
    'bolu/12.jpeg',
    'bolu/13.jpeg',
    'bolu/14.jpeg',
    'bolu/15.jpeg',
    'bolu/16.jpeg',
    'bolu/17.jpeg',
    'bolu/18.jpeg',
    'bolu/19.jpeg',
    'bolu/20.jpeg',
    'bolu/21.jpeg',
    'bolu/22.jpeg',
    'bolu/23.jpeg',
    'bolu/24.jpeg',
    'bolu/25.jpeg',
    'bolu/26.jpeg',
    'bolu/27.jpeg',
    'bolu/28.jpeg',
    'bolu/29.jpeg',
    'bolu/30.jpeg',
    'bolu/31.jpeg',
    'bolu/32.jpeg',
    'bolu/33.jpeg',
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