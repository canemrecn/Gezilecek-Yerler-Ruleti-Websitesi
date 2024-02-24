const moviePosters = [
    'artvin/1.jpeg',
    'artvin/2.jpeg',
    'artvin/3.jpeg',
    'artvin/4.jpeg',
    'artvin/5.jpeg',
    'artvin/6.jpeg',
    'artvin/7.jpeg',
    'artvin/8.jpeg',
    'artvin/9.jpeg',
    'artvin/10.jpeg',
    'artvin/11.jpeg',
    'artvin/12.jpeg',
    'artvin/13.jpeg',
    'artvin/14.jpeg',
    'artvin/15.jpeg',
    'artvin/16.jpeg',
    'artvin/17.jpeg',
    'artvin/18.jpeg',
    'artvin/19.jpeg',
    'artvin/20.jpeg',
    'artvin/21.jpeg',
    'artvin/22.jpeg',
    'artvin/23.jpeg',
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