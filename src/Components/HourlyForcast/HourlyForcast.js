import React from 'react';
import DailyInfo from '../DailyInfo/DailyInfo';

const HourlyForcast = ({ weekInfo }) => {
  return (
    <div className="today-pordcust">
      <h6>Hourly Forecast</h6>
      <div>
        {weekInfo.today.map((data) => {
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
  );
};

export default HourlyForcast;