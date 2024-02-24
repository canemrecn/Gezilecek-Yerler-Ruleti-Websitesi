const moviePosters = [
    'çanakkale/1.jpeg',
    'çanakkale/2.jpeg',
    'çanakkale/3.jpeg',
    'çanakkale/4.jpeg',
    'çanakkale/5.jpeg',
    'çanakkale/6.jpeg',
    'çanakkale/7.jpeg',
    'çanakkale/8.jpeg',
    'çanakkale/9.jpeg',
    'çanakkale/10.jpeg',
    'çanakkale/11.jpeg',
    'çanakkale/12.jpeg',
    'çanakkale/13.jpeg',
    'çanakkale/14.jpeg',
    'çanakkale/15.jpeg',
    'çanakkale/16.jpeg',
    'çanakkale/17.jpeg',
    'çanakkale/18.jpeg',
    'çanakkale/19.jpeg',
    'çanakkale/20.jpeg',
    'çanakkale/21.jpeg',
    'çanakkale/22.jpeg',
    'çanakkale/23.jpeg',
    'çanakkale/24.jpeg',
    'çanakkale/25.jpeg',
    'çanakkale/26.jpeg',
    'çanakkale/27.jpeg',
    'çanakkale/28.jpeg',
    'çanakkale/29.jpeg',
    'çanakkale/30.jpeg',
    'çanakkale/31.jpeg',
    'çanakkale/32.jpeg',
    'çanakkale/33.jpeg',
    'çanakkale/34.jpeg',
    'çanakkale/35.jpeg',
    'çanakkale/36.jpeg',
    'çanakkale/37.jpeg',
    'çanakkale/38.jpeg',
    'çanakkale/39.jpeg',
    'çanakkale/40.jpeg',
    'çanakkale/41.jpeg',
    'çanakkale/42.jpeg',
    'çanakkale/43.jpeg',
    'çanakkale/44.jpeg',
    'çanakkale/45.jpeg',
    'çanakkale/46.jpeg',
    'çanakkale/47.jpeg',
    'çanakkale/48.jpeg',
    'çanakkale/49.jpeg',
    'çanakkale/50.jpeg',
    'çanakkale/51.jpeg',
    'çanakkale/52.jpeg',
    'çanakkale/53.jpeg',
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