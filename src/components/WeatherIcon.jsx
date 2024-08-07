import React from 'react'

const WeatherIcon = ({ iconUrl, size }) => {
  return (
    <div>
        <img src={iconUrl} alt="Weather Icon" className={`w-[${size}px] h-auto`} />
    </div>
  )
}

export default WeatherIcon
