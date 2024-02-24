const moviePosters = [
    'afyonkarahisar/1.jpeg',
    'afyonkarahisar/2.jpeg',
    'afyonkarahisar/3.jpeg',
    'afyonkarahisar/4.jpeg',
    'afyonkarahisar/5.jpeg',
    'afyonkarahisar/6.jpeg',
    'afyonkarahisar/7.jpeg',
    'afyonkarahisar/8.jpeg',
    'afyonkarahisar/9.jpeg',
    'afyonkarahisar/10.jpeg',
    'afyonkarahisar/11.jpeg',
    'afyonkarahisar/12.jpeg',
    'afyonkarahisar/13.jpeg',
    'afyonkarahisar/14.jpeg',
    'afyonkarahisar/15.jpeg',
    'afyonkarahisar/16.jpeg',
    'afyonkarahisar/17.jpeg',
    'afyonkarahisar/18.jpeg',
    'afyonkarahisar/19.jpeg',
    'afyonkarahisar/20.jpeg',
    'afyonkarahisar/21.jpeg',
    'afyonkarahisar/22.jpeg',
    'afyonkarahisar/23.jpeg',
    'afyonkarahisar/24.jpeg',
    'afyonkarahisar/25.jpeg',
    'afyonkarahisar/26.jpeg',
    'afyonkarahisar/27.jpeg',
    'afyonkarahisar/28.jpeg',
    'afyonkarahisar/29.jpeg',
    'afyonkarahisar/30.jpeg',
    'afyonkarahisar/31.jpeg',
    'afyonkarahisar/32.jpeg',
    'afyonkarahisar/33.jpeg',
    'afyonkarahisar/34.jpeg',
    'afyonkarahisar/35.jpeg',
    'afyonkarahisar/36.jpeg',
    'afyonkarahisar/37.jpeg',
    'afyonkarahisar/38.jpeg',
    'afyonkarahisar/39.jpeg',
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
