const moviePosters = [
    'amasya/1.jpeg',
    'amasya/2.jpeg',
    'amasya/3.jpeg',
    'amasya/4.jpeg',
    'amasya/5.jpeg',
    'amasya/6.jpeg',
    'amasya/7.jpeg',
    'amasya/8.jpeg',
    'amasya/9.jpeg',
    'amasya/10.jpeg',
    'amasya/11.jpeg',
    'amasya/12.jpeg',
    'amasya/13.jpeg',
    'amasya/14.jpeg',
    'amasya/15.jpeg',
    'amasya/16.jpeg',
    'amasya/17.jpeg',
    'amasya/18.jpeg',
    'amasya/19.jpeg',
    'amasya/20.jpeg',
    'amasya/21.jpeg',
    'amasya/22.jpeg',
    'amasya/23.jpeg',
    'amasya/24.jpeg',
    'amasya/25.jpeg',
    'amasya/26.jpeg',
    'amasya/27.jpeg',
    'amasya/28.jpeg',
    'amasya/29.jpeg',
    'amasya/30.jpeg',
    'amasya/31.jpeg',
    'amasya/32.jpeg',
    'amasya/33.jpeg',
    'amasya/34.jpeg',
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
