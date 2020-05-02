import Lottie from "lottie-web";

const loadingWrapper = document.getElementById("loading-wrapper");
const animationContainer = document.createElement("div");
const loadingText = document.createElement("h3");
animationContainer.id = "loading-animation-container";
loadingText.innerHTML = "Loading the weather";
loadingWrapper.appendChild(animationContainer);
loadingWrapper.appendChild(loadingText);

const animation = Lottie.loadAnimation({
  container: animationContainer, // the dom element that will contain the animation
  renderer: "svg",
  loop: true,
  autoplay: true,
  path: "animations/19302-surfline-spinner.json", // the path to the animation json
});

setTimeout(() => {
  animation.pause();
  loadingWrapper.style.opacity = "0";
}, 2000);
