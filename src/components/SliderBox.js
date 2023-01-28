import React from 'react'

function SliderBox({ min, max, value, handleChange}) {
  return (
    <>
    <div className=''>
      <div className="slider-container">
        <input
          type="range"
          className="slider accent-neon-green bg-main-bg"
          min={min}
          max={max}
          value={value}
          onChange={handleChange}
        />
      </div></div></>
  )
}

export default SliderBox