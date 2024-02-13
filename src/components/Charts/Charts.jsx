import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  CartesianGrid,
  YAxis,
  Tooltip,
  Legend,
} from "recharts";

const Charts = ({ width, height, data, uvStroke, pvStroke }) => {
  return (
    <LineChart
      width={width}
      height={height}
      data={data}
      margin={{ top: 5, right: 10, bottom: 5, left: 0 }}
    >
      <Line type="monotone" dataKey="uv" stroke={uvStroke} />
      <Line type="monotone" dataKey="pv" stroke={pvStroke} />
      <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip contentStyle={{ backgroundColor: "white" }} />
      <Legend />
    </LineChart>
  );
};

export default Charts;
