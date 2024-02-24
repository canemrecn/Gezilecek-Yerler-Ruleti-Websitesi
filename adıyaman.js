const moviePosters = [
    'adıyaman/1.jpeg',
    'adıyaman/2.jpeg',
    'adıyaman/3.jpeg',
    'adıyaman/4.jpeg',
    'adıyaman/5.jpeg',
    'adıyaman/6.jpeg',
    'adıyaman/7.jpeg',
    'adıyaman/8.jpeg',
    'adıyaman/9.jpeg',
    'adıyaman/10.jpeg',
    'adıyaman/11.jpeg',
    'adıyaman/12.jpeg',
    'adıyaman/13.jpeg',
    'adıyaman/14.jpeg',
    'adıyaman/15.jpeg',
    'adıyaman/16.jpeg',
    'adıyaman/17.jpeg',
    'adıyaman/18.jpeg',
    'adıyaman/19.jpeg',
    'adıyaman/20.jpeg',
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
