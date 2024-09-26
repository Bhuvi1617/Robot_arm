  import React, { useState } from 'react';
  import axios from 'axios';

  function Slider({ min, max, step, initialValue, onChange, name, api }) {
    const [value, setValue] = useState(initialValue);

    const handleChange = async (event) => {
      const newValue = event.target.value;
      setValue(newValue);
      if (onChange) {
        onChange(newValue);
      }
      // Send POST request to backend
      await axios.post(`http://localhost:5000/api/${api}`, { value: newValue })
        .then(response => {
          console.log('Successfully posted slider value:', response.data);
        })
        .catch(error => {
          console.error('Error posting slider value:', error);
        });
    };

    const getBackgroundSize = () => {
      return `${((value - min) / (max - min)) * 100}% 100%`;
    };

    return (
      <div className="container">
        <h3>{name}</h3>
        <input
          type="range"
          min={parseInt(min, 10)}
          max={parseInt(max, 10)}
          step={step}
          value={value}
          onChange={handleChange}
          className="sliderController"
          style={{
            background: `linear-gradient(to right, lightblue, darkblue)`,
            backgroundSize: getBackgroundSize(),
          }}
        />
        <span>{value}</span>
      </div>
    );
  }

  export default Slider;
