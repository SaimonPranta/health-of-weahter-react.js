import "./App.css";
import HourlyForcast from "./Components/HourlyForcast/HourlyForcast";
import WeeklyFrocast from "./Components/WeeklyFrocast/WeeklyFrocast";
import { BsSearch } from "react-icons/bs";
import { GrLocation } from "react-icons/gr";
import { TiWeatherPartlySunny } from "react-icons/ti";
import { CiTempHigh } from "react-icons/ci";
import { FiDroplet } from "react-icons/fi";
import { TbWind } from "react-icons/tb";
import { BsSun } from "react-icons/bs";
import { TbSunset2 } from "react-icons/tb";
import { BsArrowUpShort } from "react-icons/bs";
import { BiDownArrowAlt } from "react-icons/bi";

import { useEffect, useState } from "react"; 

function App() {
  const [todayInfo, setTodayInfo] = useState({});
  const [weekInfo, setWeekInfo] = useState({});
  const [inputInfo, setInputInfo] = useState("");
  const [error, setError] = useState(null);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        fetch(
          `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&exclude=hourly,daily&APPID=70d46ed93a26baf06a2091d3afb2bbcd`
        )
          .then((res) => res.json())
          .then((data) => {
            if (data?.base) {
              setTodayInfo(data);
            }
          });

        fetch(
          `https://api.openweathermap.org/data/2.5/forecast?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=70d46ed93a26baf06a2091d3afb2bbcd`
        )
          .then((res) => res.json())
          .then((data) => {
            if (data?.list) {
              const currntInfo = {
                today: [],
                Sunday: [],
                Monday: [],
                Tuesday: [],
                Wednesday: [],
                Thursday: [],
                Friday: [],
                Saturday: [],
              };
              data?.list.map((item) => {
                if (
                  new Date(item?.dt * 1000).getDate() === new Date().getDate()
                ) {
                  currntInfo.today.push(item);
                }
                currntInfo[
                  new Date(item?.dt * 1000).toLocaleDateString("en", {
                    weekday: "long",
                  })
                ].push(item);
                setWeekInfo(currntInfo);
              });
            }
          });
      });
    }
  }, []);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (inputInfo.length < 2) {
      return;
    }
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${inputInfo}&exclude=hourly,daily&APPID=70d46ed93a26baf06a2091d3afb2bbcd`
    )
      .then((res) => res.json())
      .then((data) => {
        if (data?.base) {
          setTodayInfo(data);
          setInputInfo("");
        }
      });
    fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${inputInfo}&appid=70d46ed93a26baf06a2091d3afb2bbcd`
    )
      .then((res) => res.json())
      .then((data) => {
        if (data?.message) {
          setError(data.message);
        }

        if (data?.list) {
          setError("");
          const currntInfo = {
            today: [],
            Sunday: [],
            Monday: [],
            Tuesday: [],
            Wednesday: [],
            Thursday: [],
            Friday: [],
            Saturday: [],
          };
          data?.list.map((item) => {
            if (new Date(item?.dt * 1000).getDate() === new Date().getDate()) {
              currntInfo.today.push(item);
            }
            currntInfo[
              new Date(item?.dt * 1000).toLocaleDateString("en", {
                weekday: "long",
              })
            ].push(item);
            setWeekInfo(currntInfo);
          });
        }
      });
    // `https://api.openweathermap.org/data/2.5/forecast?q=chittagong&appid=70d46ed93a26baf06a2091d3afb2bbcd`;
  };

  return (
    <section className="weather-app">
      <div className="container">
        <div className="logo">
          <h1>
            <TiWeatherPartlySunny /> Weather App
          </h1>
        </div>
        <form className="input-container" onSubmit={handleFormSubmit}>
          <GrLocation />

          <input
            type="text"
            placeholder="Search Your City..."
            value={inputInfo}
            onChange={(e) => setInputInfo(e.target.value)}
          />

          <button type="submit">
            <BsSearch />
          </button>
        </form>
        <div className="error">{error && <p>{error}</p>}</div>
        <div className="time-section">
          {todayInfo?.dt && (
            <>
              <p>
                {new Date(todayInfo?.dt * 1000).toLocaleDateString("en", {
                  weekday: "long",
                })}
                , {new Date(todayInfo?.dt * 1000).getDate()}
                {new Date(todayInfo?.dt * 1000).toLocaleDateString("en", {
                  month: "long",
                })}
                {new Date(todayInfo?.dt * 1000).getFullYear()}
              </p>
              <p>|</p>
              <p>
                {new Date(todayInfo?.dt * 1000).toLocaleString().split(",")[1]}
              </p>
            </>
          )}
        </div>
        <div className="today-section">
          <div className="country">
            <h3>
              {todayInfo?.sys?.country && `${todayInfo?.sys?.country} ,`}
              {todayInfo?.name && todayInfo?.name}
            </h3>
            <p>
              {todayInfo?.weather?.length && todayInfo?.weather[0].description}
            </p>
          </div>
          <div className="info-container">
            <div>
              <img
                src={
                  todayInfo?.weather?.length &&
                  `https://openweathermap.org/img/wn/${todayInfo?.weather[0].icon}@2x.png`
                }
                alt=""
              />
            </div>
            <div>
              <p>
                {todayInfo?.main?.temp && Math.floor(todayInfo.main.temp)}
                &deg; F
              </p>
            </div>
            <div>
              <p>
                <CiTempHigh /> Real fell:
                {todayInfo?.main?.temp && Math.floor(todayInfo.main.temp)}
                &deg; F
              </p>
              <p>
                <FiDroplet /> Humidity: {todayInfo?.main?.humidity}%
              </p>
              <p>
                <TbWind /> Wind: {todayInfo?.wind?.speed}km/h
              </p>
            </div>
          </div>
          <div className="down-weather-info">
            <div>
              <BsSun />
              <p>
                Rise:{" "}
                <strong>
                  {
                    new Date(todayInfo?.sys?.sunrise * 1000)
                      .toLocaleString()
                      .split(",")[1]
                  }
                </strong>
              </p>
            </div>
            <div>
              <TbSunset2 />
              <p>
                Rise:
                <strong>
                  {
                    new Date(todayInfo?.sys?.sunset * 1000)
                      .toLocaleString()
                      .split(",")[1]
                  }
                </strong>
              </p>
            </div>
            <div>
              <BsArrowUpShort />
              <p>
                High:{" "}
                <strong>
                  {todayInfo?.main?.temp_max &&
                    Math.floor(todayInfo.main.temp_max)}
                  &deg; F
                </strong>
              </p>
            </div>
            <div>
              <BiDownArrowAlt />
              <p>
                Low:{" "}
                <strong>
                  {todayInfo?.main?.temp_min &&
                    Math.floor(todayInfo.main.temp_min)}
                  &deg; F
                </strong>
              </p>
            </div>
          </div>
        </div>
        {weekInfo?.today?.length > 0 && <HourlyForcast weekInfo={weekInfo} />}
        <WeeklyFrocast weekInfo={weekInfo} />
      </div>
    </section>
  );
}

export default App;
