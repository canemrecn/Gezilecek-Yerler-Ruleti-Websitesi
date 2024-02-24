const moviePosters = [
    'bursa/1.jpeg',
    'bursa/2.jpeg',
    'bursa/3.jpeg',
    'bursa/4.jpeg',
    'bursa/5.jpeg',
    'bursa/6.jpeg',
    'bursa/7.jpeg',
    'bursa/8.jpeg',
    'bursa/9.jpeg',
    'bursa/10.jpeg',
    'bursa/11.jpeg',
    'bursa/12.jpeg',
    'bursa/13.jpeg',
    'bursa/14.jpeg',
    'bursa/15.jpeg',
    'bursa/16.jpeg',
    'bursa/17.jpeg',
    'bursa/18.jpeg',
    'bursa/19.jpeg',
    'bursa/20.jpeg',
    'bursa/21.jpeg',
    'bursa/22.jpeg',
    'bursa/23.jpeg',
    'bursa/24.jpeg',
    'bursa/25.jpeg',
    'bursa/26.jpeg',
    'bursa/27.jpeg',
    'bursa/28.jpeg',
    'bursa/29.jpeg',
    'bursa/30.jpeg',
    'bursa/31.jpeg',
    'bursa/32.jpeg',
    'bursa/33.jpeg',
    'bursa/34.jpeg',
    'bursa/35.jpeg',
    'bursa/36.jpeg',
    'bursa/37.jpeg',
    'bursa/38.jpeg',
    'bursa/39.jpeg',
    'bursa/40.jpeg',
    'bursa/41.jpeg',
    'bursa/42.jpeg',
    'bursa/43.jpeg',
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