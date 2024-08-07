import React from "react";
import SearchBar from "./components/SearchBar";
import secrets from "./assets/secrets.json";
import weatherdata from "./assets/data.json";
import WeatherIcon from "./components/WeatherIcon";
import { getHigherQualityIcon } from "./assets/utilities";

function App() {
  let [data, setData] = React.useState(weatherdata);

  let getweather = (location) => {
    //Uncomment next 3 lines to use API
    // fetch(`https://api.weatherapi.com/v1/current.json?key=${secrets.weatherApiKey}&q=${location}&days=3&aqi=no&alerts=no`)
    //   .then((res) => res.json())
    //   .then((data) => console.log(data));
  };

  const handleSearch = (searchLocation) => {
    console.log("Searching for:", searchLocation);
    getweather(searchLocation);
  };

  return (
    <>
      <div className="h-screen bg-gray-700">
        <div className="h-full bg-slate-100 max-w-lg mx-auto rounded-3xl py-6 px-3">
          <SearchBar onSearch={handleSearch} />
          {/* <WeatherIcon iconId={200} name="owm" night={false} /> */}
          <WeatherIcon iconUrl={getHigherQualityIcon(data.current.condition.icon)} size="128" />


        </div>
      </div>
    </>
  );
}

export default App;
