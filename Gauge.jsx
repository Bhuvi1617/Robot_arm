import React from 'react';
import PropTypes from 'prop-types';

const Gauge = ({ percentage, Color, Parameter,range }) => {
  // Ensure the percentage is between 0 and 5000
  const clampPercentage = Math.max(0, Math.min(percentage, range));
  // Calculate the stroke-dasharray value to set the fill according to the percentage out of 5000
  const normalizedPercentage = (clampPercentage / range) * 100;
  const strokeDasharray = `${(normalizedPercentage / 100) * Math.PI * 90}, ${Math.PI * 90}`;

  return (
    <div style={{ width: '200px', height: '120px', position: 'relative', margin: "40px" }}>
      <svg viewBox="0 0 200 100" width="100%" height="100%">
        <path
          d="M 10,90 A 90,90 0 0,1 190,90"
          stroke="#ccc"
          strokeWidth="20"
          fill="none"
        />
        <path
          d="M 10,90 A 90,90 0 0,1 190,90"
          stroke={Color}
          strokeWidth="20"
          fill="none"
          strokeDasharray={strokeDasharray}
          strokeDashoffset="0"
          strokeLinecap="round"
        />
      </svg>
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          fontSize: '24px',
          fontWeight: 'bold',
        }}
      >
        {clampPercentage}
      </div>
      <h6 style={{textAlign:"center"}}>{Parameter}</h6>
    </div>
  );
};

Gauge.propTypes = {
  percentage: PropTypes.number.isRequired,
  Color: PropTypes.string.isRequired,
  Parameter: PropTypes.string.isRequired,
};

export default Gauge;
