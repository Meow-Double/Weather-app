import { WeatherCard } from "widgets";
import type { FC } from "react";
import { CreateWeatherCard } from "features/CreateWeatherCard";


export const MainPage: FC = () => {
  return (
    <section>
      <h1>World Weather</h1>
      <p>Watch weather in your current location</p>
      <WeatherCard city="Minsk" country="By"/>
      <CreateWeatherCard />
    </section>
  );
};
