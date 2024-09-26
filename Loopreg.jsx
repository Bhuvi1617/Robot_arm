import React, { useState } from 'react';
import Slider from './Slider';
import axios from 'axios';

function Loopreg() {
  const [initialConfig, setInitialConfig] = useState([0, 0, 0, 0]);
  const [finalConfig, setFinalConfig] = useState([0, 0, 0, 0]);

  const handleInitialChange = (index, value) => {
    const newConfig = [...initialConfig];
    newConfig[index] = value;
    setInitialConfig(newConfig);
  };

  const handleFinalChange = (index, value) => {
    const newConfig = [...finalConfig];
    newConfig[index] = value;
    setFinalConfig(newConfig);
  };

  const handleSubmit = async () => {
    try {
      console.log('Sending initialConfig:', initialConfig);
      console.log('Sending finalConfig:', finalConfig);
      const response = await axios.post('http://localhost:5000/api/loop', {
        initialPosition: initialConfig,
        finalPosition: finalConfig,
      });
      console.log('Successfully sent configurations:', response.data);
    } catch (error) {
      console.error('Error sending configurations:', error);
    }
  };

  return (
    <div>
      <div className="containerOne" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '30px' }}>
        <h4>Define Initial Configuration</h4>
        {initialConfig.map((value, index) => (
          <Slider key={index} min={0} max={100} step={1} initialValue={value} onChange={(val) => handleInitialChange(index, val)} name={`Initial Slider ${index + 1}`} api={`servo_${index + 1}_angle`} />
        ))}
      </div>
      <div className="containerTwo" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '30px' }}>
        <h4>Define Target Configuration</h4>
        {finalConfig.map((value, index) => (
          <Slider key={index} min={0} max={100} step={1} initialValue={value} onChange={(val) => handleFinalChange(index, val)} name={`Final Slider ${index + 1}`} api={`servo_${index + 1}_angle`} />
        ))}
      </div>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default Loopreg;
