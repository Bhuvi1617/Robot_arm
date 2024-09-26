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
    
    <section className="rangeWrap">
    <input 
      type="range" 
      list="ticks" 
      value={value} 
      onChange={handleChange}
    />
    <datalist id="ticks">
      <option value="0" label="0%"></option>
      <option value="25" label="25%"></option>
      <option value="50" label="50%"></option>
      <option value="75" label="75%"></option>
      <option value="100" label="100%"></option>
    </datalist>
    <p>Current Value: {value}%</p>
  </section>
  );
}

export default Slider;
