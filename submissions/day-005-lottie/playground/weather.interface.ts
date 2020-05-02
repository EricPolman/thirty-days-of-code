export type WeatherIcon =
  | "01d"
  | "02d"
  | "03d"
  | "04d"
  | "09d"
  | "10d"
  | "11d"
  | "13d"
  | "50d"
  | "01n"
  | "02n"
  | "03n"
  | "04n"
  | "09n"
  | "10n"
  | "11n"
  | "13n"
  | "50n";

export type WeatherAnimationType =
  | "sunny"
  | "partlyCloudy"
  | "windy"
  | "partlyShower"
  | "storm"
  | "snow"
  | "mist"
  | "night"
  | "cloudynight"
  | "rainynight";

export function getWeatherTypeFromIcon(
  icon: WeatherIcon
): WeatherAnimationType {
  switch (icon) {
    // day
    case "01d":
      return "sunny";
    case "02d":
      return "partlyCloudy";
    case "03d":
      return "windy";
    case "04d":
      return "windy";
    case "09d":
      return "partlyShower";
    case "10d":
      return "partlyShower";
    case "11d":
      return "storm";
    case "13d":
      return "snow";
    case "50d":
      return "mist";
    // night
    case "01n":
      return "night";
    case "02n":
      return "cloudynight";
    case "03n":
      return "windy";
    case "04n":
      return "windy";
    case "09n":
      return "rainynight";
    case "10n":
      return "rainynight";
    case "11n":
      return "storm";
    case "13n":
      return "snow";
    case "50n":
      return "mist";
  }
}

export interface Weather {
  id: number;
  main: string;
  description: string;
  icon: WeatherIcon;
}

export interface ForecastBase {
  dt: Date;
  sunrise: Date;
  sunset: Date;
  temp: number;
  feelsLike: number;
  pressure: number;
  humidity: number;
  dew_point: number;
  uvi: number;
  clouds: number;
  visibility: number;
  wind_speed: number;
  wind_deg: number;
  weather: Weather[];
  rain: {};
}

export interface ForecastCurrent extends ForecastBase {}

export interface OpenWeatherResponse {
  current: ForecastCurrent;
}
