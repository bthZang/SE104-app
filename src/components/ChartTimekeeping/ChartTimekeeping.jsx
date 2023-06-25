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



const ChartTimekeeping = ({ chartTimeKeepingData }) => {
  return (
    <div className="containerChartTimekeeping">
      <BarChart
        width={1600}
        height={450}
        data={chartTimeKeepingData}
        margin={{ top: 5, right: 190, left: 20, bottom: 5 }}
      >
        <XAxis dataKey="employee.name" />
        <YAxis />
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip />
        <Legend />
        <Bar dataKey="working_days" stackId="a" fill="#82ca9d" />
        <Bar dataKey="days_off" stackId="a" fill="#8884d8" />
        <Bar dataKey="overtime" stackId="a" fill="#ffc658" />
      </BarChart>
    </div>
  );
};

export default ChartTimekeeping;