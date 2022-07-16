let spkButton = document.querySelector(".speak");
let text = "welcome . Ya Kosomak";
let speech = new SpeechSynthesisUtterance(text);
window.onload = function () {
  speechSynthesis.speak(speech);
  spkButton.click(); 
};
spkButton.onclick = function () {
  speechSynthesis.speak(speech);
};

spkButton.style.cssText = `color: white; background-color: black; border-radius: 6px;
display: block; margin: 20px auto; `;

let videos = document.querySelectorAll("video");
let videosArray = Array.from(videos);
videosArray.forEach((vid) => {
  addEventListener("click", (e) => {
    vid.pause();
    if (e.target.classList.contains("vid")) e.target.play();
  });
});
