const moviePosters = [
    'denizli/1.jpeg',
    'denizli/2.jpeg',
    'denizli/3.jpeg',
    'denizli/4.jpeg',
    'denizli/5.jpeg',
    'denizli/6.jpeg',
    'denizli/7.jpeg',
    'denizli/8.jpeg',
    'denizli/9.jpeg',
    'denizli/10.jpeg',
    'denizli/11.jpeg',
    'denizli/12.jpeg',
    'denizli/13.jpeg',
    'denizli/14.jpeg',
    'denizli/15.jpeg',
    'denizli/16.jpeg',
    'denizli/17.jpeg',
    'denizli/18.jpeg',
    'denizli/19.jpeg',
    'denizli/20.jpeg',
    'denizli/21.jpeg',
    'denizli/22.jpeg',
    'denizli/23.jpeg',
    'denizli/24.jpeg',
    'denizli/25.jpeg',
    'denizli/26.jpeg',
    'denizli/27.jpeg',
    'denizli/28.jpeg',
    'denizli/29.jpeg',
    'denizli/30.jpeg',
    'denizli/31.jpeg',
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