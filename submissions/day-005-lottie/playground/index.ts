import Lottie from "lottie-web";
import animationData from "./animations/19302-surfline-spinner.json";
import {
  OpenWeatherResponse,
  ForecastBase,
  getWeatherTypeFromIcon,
  WeatherAnimationType,
} from "./weather.interface";
import { getWeatherAnimation } from "./getWeatherAnimation";

const rootElement = document.querySelector("body");

async function getWeatherInfoForLocation(
  onSuccess: (result: any) => void,
  position: Position
) {
  const apiKey = process.env.OPENWEATHERMAP_API_KEY;
  const { latitude, longitude } = position.coords;
  const result = await fetch(
    `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&units=metric&appid=${apiKey}`
  );
  const json = await result.json();

  setTimeout(() => {
    onSuccess(json);
  }, 500);
}

function showWeatherAnimation(weatherType: WeatherAnimationType) {
  const weatherAnimationContainer = document.getElementById(
    "weather-animation-container"
  );
  weatherAnimationContainer.innerHTML = "";

  const animationData = getWeatherAnimation(weatherType);

  console.log(weatherAnimationContainer, weatherType, animationData);

  const weatherAnimation = Lottie.loadAnimation({
    container: weatherAnimationContainer, // the dom element that will contain the animation
    renderer: "svg",
    loop: true,
    autoplay: true,
    animationData,
  });
}

function showForecast(forecast: ForecastBase) {
  const weatherAnimationContainer = document.getElementById(
    "weather-animation-container"
  );
  weatherAnimationContainer.innerHTML = "";

  const weatherType = getWeatherTypeFromIcon(forecast.weather[0].icon);
  const animationData = getWeatherAnimation(weatherType);

  console.log(weatherAnimationContainer, weatherType, animationData);

  const weatherAnimation = Lottie.loadAnimation({
    container: weatherAnimationContainer, // the dom element that will contain the animation
    renderer: "svg",
    loop: true,
    autoplay: true,
    animationData,
  });
}

function getLocation(locationResult: PositionCallback): void {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(locationResult);
  } else {
    rootElement.innerHTML = "Geolocation is not supported by this browser.";
  }
}

function setupCallbacks() {
  const listItems = document.querySelectorAll("[data-weather-type]");
  console.log(listItems);
  listItems.forEach((element) => {
    const weatherType: WeatherAnimationType = element.getAttribute(
      "data-weather-type"
    ) as WeatherAnimationType;
    console.log(weatherType);
    element.addEventListener("click", () => showWeatherAnimation(weatherType));
  });
}

function loadApp() {
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

  const getWeatherWithSuccess = getWeatherInfoForLocation.bind(
    this,
    (result: OpenWeatherResponse) => {
      loadingAnimation.pause();
      loadingWrapper.style.opacity = "0";
      loadingWrapper.style.pointerEvents = "none";
      setupCallbacks();
      showForecast(result.current);
    }
  );

  getLocation(getWeatherWithSuccess);
}

loadApp();
