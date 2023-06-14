import DataTable from "react-data-table-component";
import { useState } from "react";

import CustomButton from "../CustomButton/CustomButton";
import TitleHome from "../titleHome/titleHome";

import "./ChartTimekeeping.scss";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";



const data = [
  { name: "Nhân viên A", "Working days": 20, "Days off": 5, Overtime: 2 },
  { name: "Nhân viên B", "Working days": 22, "Days off": 3, Overtime: 5 },
  { name: "Nhân viên C", "Working days": 18, "Days off": 7, Overtime: 1 },
  { name: "Nhân viên D", "Working days": 25, "Days off": 2, Overtime: 3 },
];

const ChartTimekeeping = ({ onClick, handleChange, chartTimeKeepingData }) => {
  return (
    <div className="containerChartTimekeeping">
      <BarChart
        width={1200}
        height={450}
        data={chartTimeKeepingData}
        margin={{ top: 5, right: 190, left: 20, bottom: 5 }}
      >
        <XAxis dataKey="name" />
        <YAxis />
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip />
        <Legend />
        <Bar dataKey="workingDays" stackId="a" fill="#82ca9d" />
        <Bar dataKey="dayOff" stackId="a" fill="#8884d8" />
        <Bar dataKey="overtime" stackId="a" fill="#ffc658" />
      </BarChart>
    </div>
  );
};

export default ChartTimekeeping;
