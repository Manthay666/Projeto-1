const audioPlayer = document.getElementById('audio-player');
const playButton = document.querySelector('.play-button');
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');

playButton.addEventListener('click', togglePlay);
prevButton.addEventListener('click', playPrevious);
nextButton.addEventListener('click', playNext);

let currentTrackIndex = 0;

const playlist = [
    'WhatsApp Audio (10).mp3',
    'WhatsApp Audio ().mp3',
    'WhatsApp Audio (4).mp3',
    'WhatsApp Audio (5).mp3',
    'WhatsApp Audio (6).mp3',
    'WhatsApp Audio (7).mp3',
    'WhatsApp Audio (8).mp3',
    'WhatsApp Audio (9).mp3',
    'WhatsApp Audio (10).mp3',
    'WhatsApp Audio.mp3',
];

function togglePlay() {
    if (audioPlayer.paused) {
        audioPlayer.play();
        playButton.textContent = 'Pausar';
    } else {
        audioPlayer.pause();
        playButton.textContent = 'Play';
    }
}

function playPrevious() {
    currentTrackIndex--;
    if (currentTrackIndex < 0) {
        currentTrackIndex = playlist.length - 1;
    }
    audioPlayer.src = playlist[currentTrackIndex];
    audioPlayer.play();
}

function playNext() {
    currentTrackIndex++;
    if (currentTrackIndex >= playlist.length) {
        currentTrackIndex = 0;
    }
    audioPlayer.src = playlist[currentTrackIndex];
    audioPlayer.play();
}

audioPlayer.addEventListener('ended', playNext);
