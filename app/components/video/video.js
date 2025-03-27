const video = document.getElementById('homeVideo');
const videoWrapper = document.getElementById('videoWrapper');

video.play();

video.addEventListener('pause', () => {
    video.play();
});

video.addEventListener('fullscreenchange', (e) => {
    e.preventDefault();
});

video.addEventListener('click', (e) => {
    e.preventDefault();
});

videoWrapper.addEventListener('click', (e) => {
    e.stopPropagation();
});


