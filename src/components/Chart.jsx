import React, { useState, useEffect } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import data from "./data.json";

function Chart() {
  const [chartData, setChartData] = useState(data);
  const [timeframe, setTimeframe] = useState("1d");
  const [zoom, setZoom] = useState(1);

  useEffect(() => {
    // Update chart data based on timeframe selection
    const updatedData = data.filter((item) => {
      if (timeframe === "1d") return item.date >= Date.now() - 86400000;
      if (timeframe === "1w") return item.date >= Date.now() - 604800000;
      if (timeframe === "1m") return item.date >= Date.now() - 2592000000;
      return item;
    });
    setChartData(updatedData);
  }, [timeframe]);

  const handleTimeframeChange = (e) => {
    setTimeframe(e.target.value);
  };

  const handleZoomChange = (e) => {
    setZoom(e.target.value);
  };

  const handleClick = (e) => {
    console.log(`Clicked on ${e.activeLabel} at ${e.activePayload[0].value}`);
  };

  return (
    <div>
      <h1>Chart App</h1>
      <select value={timeframe} onChange={handleTimeframeChange}>
        <option value="1d">1 Day</option>
        <option value="1w">1 Week</option>
        <option value="1m">1 Month</option>
      </select>
      <select value={zoom} onChange={handleZoomChange}>
        <option value="1">1x</option>
        <option value="2">2x</option>
        <option value="3">3x</option>
      </select>
      <ResponsiveContainer width="100%" height={400}>
        <LineChart data={chartData} onClick={handleClick}>
          <Line type="monotone" dataKey="value" stroke="#8884d8" />
          <XAxis dataKey="date" />
          <YAxis />
          <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
          <Tooltip />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default Chart;
