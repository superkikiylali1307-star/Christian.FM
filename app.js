const demoTracks = [
  { title: "Your Song Requests Go Here", artist: "Christian.FM Community" },
  { title: "Morning Praise Mix (Placeholder)", artist: "Add your favorite artist" },
  { title: "Evening Worship Flow (Placeholder)", artist: "Tell us what to include" },
];

const playBtn = document.getElementById("playBtn");
const trackTitle = document.getElementById("trackTitle");
const trackArtist = document.getElementById("trackArtist");
const progressBar = document.getElementById("progressBar");
const liveClock = document.getElementById("liveClock");
const queueList = document.getElementById("queueList");

let isPlaying = false;
let progress = 22;
let activeTrackIndex = 0;

function updateClock() {
  const now = new Date();
  const timeText = now.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

  liveClock.textContent = timeText;
  liveClock.dateTime = now.toISOString();
}

function renderQueue() {
  const items = demoTracks
    .map((track) => `<li>${track.title} - ${track.artist}</li>`)
    .join("");
  queueList.innerHTML = items;
}

function updateTrackCard(index) {
  const current = demoTracks[index];
  trackTitle.textContent = current.title;
  trackArtist.textContent = current.artist;
}

function togglePlayback() {
  isPlaying = !isPlaying;
  playBtn.textContent = isPlaying ? "Pause Demo Stream" : "Play Demo Stream";
  playBtn.setAttribute("aria-pressed", String(isPlaying));
}

playBtn.addEventListener("click", () => {
  if (!isPlaying) {
    activeTrackIndex = (activeTrackIndex + 1) % demoTracks.length;
    updateTrackCard(activeTrackIndex);
  }

  togglePlayback();
});

setInterval(() => {
  updateClock();
  if (isPlaying) {
    progress = progress + 2;
    if (progress > 100) {
      progress = 10;
    }
    progressBar.style.width = `${progress}%`;
  }
}, 1000);

renderQueue();
updateClock();
