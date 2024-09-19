import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Cell,
} from "recharts";

const data = [
  { name: "", uv: 22,  status: "Completed" },
  { name: "", uv: 73, status: "Completed" },
  { name: "Assignment", uv: 50, status: "Completed" },
  { name: "", uv: 100, status: "Pending" },
  { name: "", uv: 0, status: "Pending" },  //To create space so this is a dummy value
  { name: "", uv: 90, status: "Completed" },
  { name: "", uv: 40, status: "Completed" },
  { name: "", uv: 70, status: "Completed" },
  { name: "", uv: 78, status: "Completed" },
  { name: "", uv: 25, status: "Completed" },
  { name: "Quiz", uv: 52, status: "Completed" },
  { name: "", uv: 100, status: "Pending" },
  { name: "", uv: 100, status: "Pending" },
  { name: "", uv: 100, status: "Pending" },
  { name: "", uv: 0, status: "Pending" },  //To create space so this is a dummy value
  { name: "", uv: 70, status: "Completed" },
  { name: "Presentation", uv: 40, status: "Completed" },
  { name: "", uv: 24, status: "Completed" },
  { name: "", uv: 0, status: "Pending" },  //To create space so this is a dummy value
  { name: "", uv: 48, status: "Completed" },
  { name: "Lab", uv: 78, status: "Completed" },
  { name: "", uv: 0, status: "Pending" },  //To create space so this is a dummy value
  { name: "Viva", uv: 90, status: "Completed" },
  { name: "", uv: 0, status: "Pending" }, //To create space so this is a dummy value
];

// Function to determine the fill color based on status
const getBarColor = (status) => {
  return status === "Completed" ? "#91B07C" : "#E8E8E8";
};

export default function ChartBar() {
  return (
    <div style={{ width: "100vw", overflowX: "auto" }}>
      <BarChart
        width={(75 * window.innerWidth) / 100}
        height={300}
        className="chartStyle"
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid stroke="#C2C5C9" vertical={false} />
        <XAxis dataKey="name" tickLine={false} axisLine={false} />
        <YAxis
          tickLine={false}
          axisLine={false}
          domain={[0, 100]}
          ticks={[0, 25, 50, 75, 100]}
          tickFormatter={(value) => `${value}%`}
        />
        <Bar dataKey="uv" fill="#B3CDAD">
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={getBarColor(entry.status)} />
          ))}
        </Bar>
      </BarChart>
    </div>
  );
}
