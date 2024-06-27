import React, { useState } from 'react';
import './TimeframeSwitcher.css';

const TimeframeSwitcher = () => {
  const [timeframe, setTimeframe] = useState('daily');

  const handleTimeframeChange = (newTimeframe) => {
    setTimeframe(newTimeframe);
  };

  return (
    <div className="timeframe-switcher">
      <button
        className={timeframe === 'daily' ? 'active' : ''}
        onClick={() => handleTimeframeChange('daily')}
      >
        Daily
      </button>
      <button
        className={timeframe === 'weekly' ? 'active' : ''}
        onClick={() => handleTimeframeChange('weekly')}
      >
        Weekly
      </button>
      <button
        className={timeframe === 'monthly' ? 'active' : ''}
        onClick={() => handleTimeframeChange('monthly')}
      >
        Monthly
      </button>
    </div>
  );
};

export default TimeframeSwitcher;