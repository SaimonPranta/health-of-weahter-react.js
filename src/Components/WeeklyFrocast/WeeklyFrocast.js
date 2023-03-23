import React from "react";
import DailyInfo from "../DailyInfo/DailyInfo";

const WeeklyFrocast = ({ weekInfo }) => {
  return (
    <div className="weeken-container">
      {weekInfo?.Saturday?.length > 0 && (
        <div>
          <h6>Saturday</h6>
          <div>
            {weekInfo.Saturday.map((data) => {
              return (
                <DailyInfo
                  key={data?.dt}
                  date={data.dt}
                  temp={data.main.temp}
                  imgSrc={`https://openweathermap.org/img/wn/${data?.weather[0].icon}@2x.png`}
                />
              );
            })}
          </div>
        </div>
      )}
      {weekInfo?.Sunday?.length > 0 && (
        <div>
          <h6>Sunday</h6>
          <div>
            {weekInfo.Sunday.map((data) => {
              return (
                <DailyInfo
                  key={data?.dt}
                  date={data.dt}
                  temp={data.main.temp}
                  imgSrc={`https://openweathermap.org/img/wn/${data?.weather[0].icon}@2x.png`}
                />
              );
            })}
          </div>
        </div>
      )}
      {weekInfo?.Monday?.length > 0 && (
        <div>
          <h6>Monday</h6>
          <div>
            {weekInfo.Monday.map((data) => {
              return (
                <DailyInfo
                  key={data?.dt}
                  date={data.dt}
                  temp={data.main.temp}
                  imgSrc={`https://openweathermap.org/img/wn/${data?.weather[0].icon}@2x.png`}
                />
              );
            })}
          </div>
        </div>
      )}

      {weekInfo?.Tuesday?.length > 0 && (
        <div>
          <h6>Tuesday</h6>
          <div>
            {weekInfo.Tuesday.map((data) => {
              return (
                <DailyInfo
                  key={data?.dt}
                  date={data.dt}
                  temp={data.main.temp}
                  imgSrc={`https://openweathermap.org/img/wn/${data?.weather[0].icon}@2x.png`}
                />
              );
            })}
          </div>
        </div>
      )}
      {weekInfo?.Wednesday?.length > 0 && (
        <div>
          <h6>Wednesday</h6>
          <div>
            {weekInfo.Wednesday.map((data) => {
              return (
                <DailyInfo
                  key={data?.dt}
                  date={data.dt}
                  temp={data.main.temp}
                  imgSrc={`https://openweathermap.org/img/wn/${data?.weather[0].icon}@2x.png`}
                />
              );
            })}
          </div>
        </div>
      )}
      {weekInfo?.Thursday?.length > 0 && (
        <div>
          <h6>Thursday</h6>
          <div>
            {weekInfo.Thursday.map((data) => {
              return (
                <DailyInfo
                  key={data?.dt}
                  date={data.dt}
                  temp={data.main.temp}
                  imgSrc={`https://openweathermap.org/img/wn/${data?.weather[0].icon}@2x.png`}
                />
              );
            })}
          </div>
        </div>
      )}
      {weekInfo?.Friday?.length > 0 && (
        <div>
          <h6>Friday</h6>
          <div>
            {weekInfo.Friday.map((data) => {
              return (
                <DailyInfo
                  key={data?.dt}
                  date={data.dt}
                  temp={data.main.temp}
                  imgSrc={`https://openweathermap.org/img/wn/${data?.weather[0].icon}@2x.png`}
                />
              );
            })}
          </div>
        </div>
      )}
      {weekInfo?.Saturday?.length > 0 && (
        <div>
          <h6>Saturday</h6>
          <div>
            {weekInfo.Saturday.map((data) => {
              return (
                <DailyInfo
                  key={data?.dt}
                  date={data.dt}
                  temp={data.main.temp}
                  imgSrc={`https://openweathermap.org/img/wn/${data?.weather[0].icon}@2x.png`}
                />
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default WeeklyFrocast;
