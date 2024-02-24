const moviePosters = [
    'ağrı/1.jpeg',
    'ağrı/2.jpeg',
    'ağrı/3.jpeg',
    'ağrı/4.jpeg',
    'ağrı/5.jpeg',
    'ağrı/6.jpeg',
    'ağrı/7.jpeg',
    'ağrı/8.jpeg',
    'ağrı/9.jpeg',
    'ağrı/10.jpeg',
    'ağrı/11.jpeg',
    'ağrı/12.jpeg',
    'ağrı/13.jpeg',
    'ağrı/14.jpeg',
    'ağrı/15.jpeg',
    'ağrı/16.jpeg',
    'ağrı/17.jpeg',
    'ağrı/18.jpeg',
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
