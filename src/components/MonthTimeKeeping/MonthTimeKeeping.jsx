import DataTable from "react-data-table-component";
import { useState, useContext, useEffect } from "react";

import CustomButton from "../CustomButton/CustomButton";
import TitleHome from "../titleHome/titleHome";

import "./MonthTimeKeeping.scss";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import { DatePicker, Spin } from "antd";
import { getAllDailyTkByEmployeeAndMonth } from "../../api/DailyTkAPI";
import { getAllTimekeeping } from "../../api/TimekeepingAPI";
import moment from "moment";
import IndividualTableContent from "../IndividualTableContent/IndividualTableContent";





const MonthTimeKeeping = ({ onClick, monthTimekeepingData, handleDateChange, selectedDate, isLoading, columns ,searchValue}) => {

  const [selectedId, setSelectedId] = useState(null);
  const [searchKeyword, setSearchKeyword] = useState("");


  return (
    <div className="containerMonthTimeKeeping">
      <div>
        <div className="containDatePicker">
          <DatePicker
            picker="month"
            format="YYYY-MM"
            defaultValue={moment(selectedDate, 'YYYY-MM')}
            onChange={handleDateChange}
            className="custom"
          /></div>
        {isLoading == false &&
          <>
            <DataTable
              columns={columns}
              data={monthTimekeepingData.filter((d) =>
                d.employee.name.toLowerCase().includes(searchValue)
              )}
              pagination={true}
              highlightOnHover={true}
              striped={true}
              // expandableRows={true}
              onRowClicked={(row) => {
                setSelectedId(row.id);
                onClick(row.id);
              }}
            ></DataTable>
            {selectedId !== null && (
              <IndividualTableContent
                data={monthTimekeepingData.find((d) => d.id == selectedId)}
                name={monthTimekeepingData.find((d) => d.id == selectedId).employee.name}
                onClose={() => setSelectedId(null)}
                isChart={true}
              >
              </IndividualTableContent>)}
          </>

        }
        {isLoading == true && <Spin />}
      </div>


    </div>
  );
};

export default MonthTimeKeeping;
