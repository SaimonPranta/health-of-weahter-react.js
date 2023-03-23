import React from 'react';

const DailyInfo = ({date, temp, imgSrc}) => {
    return (
      <div className='daily-info'>
        <p>{new Date(date * 1000).toLocaleString().split(",")[1]}</p>
        <img src={imgSrc} alt="" />
        <p>{Math.floor(temp)} &deg; F</p>
      </div>
    );
};

export default DailyInfo;