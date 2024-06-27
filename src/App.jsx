import React from 'react';
import Chart from '../components/Chart';
import TimeframeSwitcher from '../components/TimeframeSwitcher';

const App = () => {
  const [timeframe, setTimeframe] = React.useState('daily');
  const [data, setData] = React.useState([]);

  const handleTimeframeChange = (newTimeframe) => {
    setTimeframe(newTimeframe);
    // fetch new data based on the selected timeframe
  };

  return (
    <div>
      <TimeframeSwitcher onSelect={handleTimeframeChange} />
      <Chart data={data} timeframe={timeframe} />
    </div>
  );
};

export default App;
