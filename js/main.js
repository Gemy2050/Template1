let text = "welcome . ya kosomak";
let speech = new SpeechSynthesisUtterance(text);
window.onload = () => {
  speechSynthesis.speak(speech);
};

let videos = document.querySelectorAll("video");
let videosArray = Array.from(videos);
videosArray.forEach((vid) => {
    addEventListener("click", (e) => {
      vid.pause();
    e.target.play();
  });
});
