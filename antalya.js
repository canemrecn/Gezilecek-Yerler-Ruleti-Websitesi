const moviePosters = [
    'antalya/1.jpeg',
    'antalya/2.jpeg',
    'antalya/3.jpeg',
    'antalya/4.jpeg',
    'antalya/5.jpeg',
    'antalya/6.jpeg',
    'antalya/7.jpeg',
    'antalya/8.jpeg',
    'antalya/9.jpeg',
    'antalya/10.jpeg',
    'antalya/11.jpeg',
    'antalya/12.jpeg',
    'antalya/13.jpeg',
    'antalya/14.jpeg',
    'antalya/15.jpeg',
    'antalya/16.jpeg',
    'antalya/17.jpeg',
    'antalya/18.jpeg',
    'antalya/19.jpeg',
    'antalya/20.jpeg',
    'antalya/21.jpeg',
    'antalya/22.jpeg',
    'antalya/23.jpeg',
    'antalya/24.jpeg',
    'antalya/25.jpeg',
    'antalya/26.jpeg',
    'antalya/27.jpeg',
    'antalya/28.jpeg',
    'antalya/29.jpeg',
    'antalya/30.jpeg',
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