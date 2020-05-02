import cloudyNight from "./animations/weather/cloudynight.json";
import mist from "./animations/weather/mist.json";
import night from "./animations/weather/night.json";
import partlyCloudy from "./animations/weather/partly-cloudy.json";
import partlyShower from "./animations/weather/partly-shower.json";
import rainyNight from "./animations/weather/rainynight.json";
import snow from "./animations/weather/snow.json";
import stormShowersDay from "./animations/weather/stormshowersday.json";
import sunny from "./animations/weather/sunny.json";
import windy from "./animations/weather/windy.json";
import { WeatherAnimationType } from "./weather.interface";

export function getWeatherAnimation(animation: WeatherAnimationType) {
  switch (animation) {
    case "cloudynight":
      return cloudyNight;
    case "mist":
      return mist;
    case "night":
      return night;
    case "partlyCloudy":
      return partlyCloudy;
    case "partlyShower":
      return partlyShower;
    case "rainynight":
      return rainyNight;
    case "snow":
      return snow;
    case "storm":
      return stormShowersDay;
    case "sunny":
      return sunny;
    case "windy":
      return windy;
  }
}
