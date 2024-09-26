import React from 'react';

function Mover() {
  const sendCommand = (command) => {
    fetch('http://localhost:5000/api/sendCommand', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ command }),
    })
      .then((response) => {
        if (response.ok) {
          console.log(`${command} command sent successfully.`);
        } else {
          console.error('Failed to send command.');
        }
      })
      .catch((error) => {
        console.error('Error sending command:', error);
      });
  };

  return (
    <div style={{ textAlign: 'center', margin: '20px' }}>
      <div>
        <button onClick={() => sendCommand('forward')} style={buttonStyle}>Forward</button>
      </div>
      <div style={{ margin: '10px 0' }}>
        <button onClick={() => sendCommand('left')} style={buttonStyle}>Left</button>
        <button onClick={() => sendCommand('right')} style={buttonStyle}>Right</button>
      </div>
      <div>
        <button onClick={() => sendCommand('backward')} style={buttonStyle}>Backward</button>
      </div>
    </div>
  );
}

const buttonStyle = {
  margin: '5px',
  padding: '10px 20px',
  fontSize: '16px',
  cursor: 'pointer',
};

export default Mover;
