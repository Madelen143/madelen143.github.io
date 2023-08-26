function toggleSongs() {
    var secondSongs = document.getElementById("songs-second-half");
    secondSongs.classList.toggle("hidden");
}

document.getElementById("toggle-button").onclick = toggleSongs;