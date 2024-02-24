const moviePosters = [
    'balıkesir/1.jpeg',
    'balıkesir/2.jpeg',
    'balıkesir/3.jpeg',
    'balıkesir/4.jpeg',
    'balıkesir/5.jpeg',
    'balıkesir/6.jpeg',
    'balıkesir/7.jpeg',
    'balıkesir/8.jpeg',
    'balıkesir/9.jpeg',
    'balıkesir/10.jpeg',
    'balıkesir/11.jpeg',
    'balıkesir/12.jpeg',
    'balıkesir/13.jpeg',
    'balıkesir/14.jpeg',
    'balıkesir/15.jpeg',
    'balıkesir/16.jpeg',
    'balıkesir/17.jpeg',
    'balıkesir/18.jpeg',
    'balıkesir/19.jpeg',
    'balıkesir/20.jpeg',
    'balıkesir/21.jpeg',
    'balıkesir/22.jpeg',
    'balıkesir/23.jpeg',
    'balıkesir/24.jpeg',
    'balıkesir/25.jpeg',
    'balıkesir/26.jpeg',
    'balıkesir/27.jpeg',
    'balıkesir/28.jpeg',
    'balıkesir/29.jpeg',
    'balıkesir/30.jpeg',
    'balıkesir/31.jpeg',
    'balıkesir/32.jpeg',
    'balıkesir/33.jpeg',
    'balıkesir/34.jpeg',
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