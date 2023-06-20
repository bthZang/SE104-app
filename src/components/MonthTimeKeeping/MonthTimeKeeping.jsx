import DataTable from "react-data-table-component";
import { useState } from "react";

import CustomButton from "../CustomButton/CustomButton";
import TitleHome from "../titleHome/titleHome";
import Profile from "../Profile/Profile";

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
import EmployeeChart from "../EmployeeChart/EmployeeChart";

const columns = [
  {
    name: "ID",
    selector: "id",
    sortable: true,
  },
  {
    name: "Name",
    selector: "name",
    sortable: true,
    width: "350px",
  },

  {
    name: "01",
    selector: "one",
    sortable: true,
    width: "50px",
    minWidth: "50px",
    maxWidth: "50px",
    compact: true,
  },
  {
    name: "02",
    selector: "two",
    sortable: true,
    width: "50px",
    minWidth: "50px",
    maxWidth: "50px",
    compact: true,
  },
  {
    name: "03",
    selector: "three",
    sortable: true,
    width: "50px",
    minWidth: "50px",
    maxWidth: "50px",
    compact: true,
  },
  {
    name: "04",
    selector: "four",
    sortable: true,
    width: "50px",
    minWidth: "50px",
    maxWidth: "50px",
    compact: true,
  },
  {
    name: "05",
    selector: "five",
    sortable: true,
    width: "50px",
    minWidth: "50px",
    maxWidth: "50px",
    compact: true,
  },
  {
    name: "06",
    selector: "six",
    sortable: true,
    width: "50px",
    minWidth: "50px",
    maxWidth: "50px",
    compact: true,
  },
  {
    name: "07",
    selector: "seven",
    sortable: true,
    width: "50px",
    minWidth: "50px",
    maxWidth: "50px",
    compact: true,
  },
  {
    name: "08",
    selector: "eight",
    sortable: true,
    width: "50px",
    minWidth: "50px",
    maxWidth: "50px",
    compact: true,
  },
  {
    name: "09",
    selector: "nine",
    sortable: true,
    width: "50px",
    minWidth: "50px",
    maxWidth: "50px",
    compact: true,
  },
  {
    name: "10",
    selector: "ten",
    sortable: true,
    width: "50px",
    minWidth: "50px",
    maxWidth: "50px",
    compact: true,
  },
  {
    name: "11",
    selector: "eleven",
    sortable: true,
    width: "50px",
    minWidth: "50px",
    maxWidth: "50px",
    compact: true,
  },
  {
    name: "12",
    selector: "twelve",
    sortable: true,
    width: "50px",
    minWidth: "50px",
    maxWidth: "50px",
    compact: true,
  },
  {
    name: "13",
    selector: "thirteen",
    sortable: true,
    width: "50px",
    minWidth: "50px",
    maxWidth: "50px",
    compact: true,
  },
  {
    name: "14",
    selector: "fourteen",
    sortable: true,
    width: "50px",
    minWidth: "50px",
    maxWidth: "50px",
    compact: true,
  },
  {
    name: "15",
    selector: "fifteen",
    sortable: true,
    width: "50px",
    minWidth: "50px",
    maxWidth: "50px",
    compact: true,
  },
  {
    name: "16",
    selector: "sixteen",
    sortable: true,
    width: "50px",
    minWidth: "50px",
    maxWidth: "50px",
    compact: true,
  },
  {
    name: "17",
    selector: "seventeen",
    sortable: true,
    width: "50px",
    minWidth: "50px",
    maxWidth: "50px",
    compact: true,
  },
  {
    name: "18",
    selector: "eighteen",
    sortable: true,
    width: "50px",
    minWidth: "50px",
    maxWidth: "50px",
    compact: true,
  },
  {
    name: "19",
    selector: "nineteen",
    sortable: true,
    width: "50px",
    minWidth: "50px",
    maxWidth: "50px",
    compact: true,
  },
  {
    name: "20",
    selector: "twenty",
    sortable: true,
    width: "50px",
    minWidth: "50px",
    maxWidth: "50px",
    compact: true,
  },
  {
    name: "21",
    selector: "twentyOne",
    sortable: true,
    width: "50px",
    minWidth: "50px",
    maxWidth: "50px",
    compact: true,
  },
  {
    name: "22",
    selector: "twentyTwo",
    sortable: true,
    width: "50px",
    minWidth: "50px",
    maxWidth: "50px",
    compact: true,
  },
  {
    name: "23",
    selector: "twentyThree",
    sortable: true,
    width: "50px",
    minWidth: "50px",
    maxWidth: "50px",
    compact: true,
  },
  {
    name: "24",
    selector: "twentyFour",
    sortable: true,
    width: "50px",
    minWidth: "50px",
    maxWidth: "50px",
    compact: true,
  },
  {
    name: "25",
    selector: "twentyFive",
    sortable: true,
    width: "50px",
    minWidth: "50px",
    maxWidth: "50px",
    compact: true,
  },
  {
    name: "26",
    selector: "twentySix",
    sortable: true,
    width: "50px",
    minWidth: "50px",
    maxWidth: "50px",
    compact: true,
  },
  {
    name: "27",
    selector: "twentySeven",
    sortable: true,
    width: "50px",
    minWidth: "50px",
    maxWidth: "50px",
    compact: true,
  },
  {
    name: "28",
    selector: "twentyEight",
    sortable: true,
    width: "50px",
    minWidth: "50px",
    maxWidth: "50px",
    compact: true,
  },
  {
    name: "29",
    selector: "twentyNine",
    sortable: true,
    width: "50px",
    minWidth: "50px",
    maxWidth: "50px",
    compact: true,
  },
  {
    name: "30",
    selector: "thirty",
    sortable: true,
    width: "50px",
    minWidth: "50px",
    maxWidth: "50px",
    compact: true,
  },
  {
    name: "Working days",
    selector: "workingDays",
    sortable: true,
    width: "200px",
  },
  {
    name: "Days off",
    selector: "dayOff",
    sortable: true,
    width: "200px",
  },
  {
    name: "Overtime",
    selector: "overtime",
    sortable: true,
    width: "200px",
  },
  {
    name: "Total",
    selector: "total",
    sortable: true,
  },
];



const MonthTimeKeeping = ({
  onClick,
  handleChange,
  monthTimeKeepingData,
  searchValue,
}) => {
  const [selectedId, setSelectedId] = useState(null);

  return (
    <div className="containerMonthTimeKeeping">
      <div>
        <div className="account">
          
          <DataTable
            columns={columns}
            data={monthTimeKeepingData.filter((d) =>
              d.name.toLowerCase().includes(searchValue)
            )}
            pagination={true}
            highlightOnHover={true}
            striped={true}
            expandableRows={true}
            onRowClicked={(row) => {
              setSelectedId(row.id);
              onClick(row.id);
            }}
          ></DataTable>
          {selectedId !== null && (
            <EmployeeChart
              id={selectedId}
              data={monthTimeKeepingData.find((d) => d.id == selectedId)}
              onClose={() => setSelectedId(null)}
              onSave={(newData) => {
                setEmployeeData((prev) => {
                  const newPrev = [...prev];
                  const index = prev.indexOf(
                    prev.find((d) => d.id == newData.id)
                  );
                  newPrev[index] = newData;
                  return newPrev;
                });
              }}
              onDelete={() => {
                setEmployeeData((prev) => [
                  ...prev.filter((d) => d.id != selectedId),
                ]);
                setSelectedId(null);
              }}
            ></EmployeeChart>
          )}
        </div>
      </div>
    </div>
  );
};

export default MonthTimeKeeping;
