import Lottie from "lottie-web";
import animationData from "./animations/19302-surfline-spinner.json";

const loadingWrapper = document.getElementById("loading-wrapper");
const animationContainer = document.createElement("div");
const loadingText = document.createElement("h3");
animationContainer.id = "loading-animation-container";
loadingText.innerHTML = "Loading the weather";
loadingWrapper.appendChild(animationContainer);
loadingWrapper.appendChild(loadingText);

const loadingAnimation = Lottie.loadAnimation({
  container: animationContainer, // the dom element that will contain the animation
  renderer: "svg",
  loop: true,
  autoplay: true,
  animationData: animationData, // the path to the animation json
});

setTimeout(() => {
  loadingAnimation.pause();
  loadingWrapper.style.opacity = "0";
}, 200);
