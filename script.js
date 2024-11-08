const audio = document.getElementById('audio');
const trackName = document.getElementById('track-name');
const artistName = document.getElementById('artist-name');
const albumCover = document.querySelector('.album-cover img');
const playlist = document.getElementById('playlist');
let isPlaying = false;
let currentTrackIndex = 0;

// Array to store track info, including album cover paths and artist names
const tracks = [
    { name: "Beast Mode", path: "audio/audio 1.mp3", cover: "1.jpg", artist: "Darbuka Siva, Sid Sriram" },
    { name: "Dheema Dheema", path: "audio/audio 2.mp3", cover: "2.jpeg", artist: "Anirudh Ravichander" },
    { name: "Hey Minnale", path: "audio/audio 3.mp3", cover: "3.jpeg", artist: "Harris Jayaraj" }
];

// Load the first track
function loadTrack(index) {
    const track = tracks[index];
    audio.src = track.path;
    trackName.textContent = `Track: ${track.name}`;
    artistName.textContent = track.artist;
    albumCover.src = track.cover;
}

// Play or pause the track
function playPause() {
    if (isPlaying) {
        audio.pause();
    } else {
        audio.play();
    }
    isPlaying = !isPlaying;

    // Toggle play/pause icon
    const playIcon = document.getElementById("play-icon");
    if (isPlaying) {
        playIcon.classList.remove("fa-play");
        playIcon.classList.add("fa-pause");
    } else {
        playIcon.classList.remove("fa-pause");
        playIcon.classList.add("fa-play");
    }
}

// Previous track
function prevTrack() {
    currentTrackIndex = (currentTrackIndex - 1 + tracks.length) % tracks.length;
    loadTrack(currentTrackIndex);
    audio.play();
    isPlaying = true;
}

// Next track
function nextTrack() {
    currentTrackIndex = (currentTrackIndex + 1) % tracks.length;
    loadTrack(currentTrackIndex);
    audio.play();
    isPlaying = true;
}

// Change volume
function changeVolume() {
    audio.volume = document.getElementById('volume').value;
}

// Load the initial track
loadTrack(currentTrackIndex);

// Populate the playlist dynamically
tracks.forEach((track, index) => {
    const li = document.createElement('li');
    li.textContent = track.name;
    li.onclick = () => {
        currentTrackIndex = index;
        loadTrack(currentTrackIndex);
        audio.play();
        isPlaying = true;
    };
    playlist.appendChild(li);
});
