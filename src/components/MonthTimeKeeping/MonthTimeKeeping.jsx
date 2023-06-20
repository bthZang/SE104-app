import DataTable from "react-data-table-component";
import { useContext, useEffect, useState } from "react";

import {DatePicker } from "antd";
import CheckBox from "../CheckBox/CheckBox";

import { MonthTimekeepingContext } from "../../contexts/MonthTimekeepingContext";
import CustomButton from "../CustomButton/CustomButton";
import TitleHome from "../titleHome/titleHome";
import Profile from "../Profile/Profile";
import Search from "../search/search";

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




const MonthTimeKeeping = ({onClick,handleChange,monthTimeKeepingData,searchValue,}) => {



 const [isCheckAll, setIsCheckAll] = useState(false);

 const [checkList, setCheckList] = useState([]);
 const [selectedId, setSelectedId] = useState(null);

 const [searchKeyword, setSearchKeyword] = useState("");

//  const { dayTimekeepingData, setDayTimekeepingData } = useContext(
//    DayTimekeepingContext
//  );

//  const [newDayTimekeepingData, setNewDayTimekeepingData] = useState([]);

//  useEffect(() => {
//    setCheckList(dayTimekeepingData.map(() => false));
//  }, [JSON.stringify(dayTimekeepingData)]);

//  useEffect(() => {
//    setNewDayTimekeepingData(
//      dayTimekeepingData.map((data, index) => ({
//        ...data,
//        checkbox: (
//          <CheckBox
//            value={checkList[index] || false}
//            onChange={(e) =>
//              setCheckList((prev) => {
//                const newPrev = [...prev];
//                newPrev[index] = e.target.checked;
//                return newPrev;
//              })
//            }
//          />
//        ),
//      }))
//    );
//  }, [JSON.stringify(dayTimekeepingData), JSON.stringify(checkList)]);

//  useEffect(() => {
//    setCheckList(dayTimekeepingData.map(() => isCheckAll));
//  }, [isCheckAll]);

//  function handleDeleteItem() {
//    const idList = dayTimekeepingData
//      .filter((_, index) => checkList[index] == true)
//      .map((v) => v.id);
//    setDayTimekeepingData([
//      ...dayTimekeepingData.filter((item) => !idList.includes(item.id)),
//    ]);
//  }
 // const columns=[]

 const columns = [
   // {
   //   name: (
   //     <CheckBox
   //       value={isCheckAll}
   //       onChange={(e) => setIsCheckAll(e.target.checked)}
   //     />
   //   ),
   //   selector: "checkbox",
   //   width: "60px",
   // },
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



  const [selectedDate, setSelectedDate] = useState(null);
  const handleDateChange = (date, dateString) => {
    const formattedDate = moment(dateString).format("YYYY-MM");
    setSelectedDate(formattedDate);
  };

  return (
    <div className="containerMonthTimeKeeping">
      <div>
        <div className="containDatePicker">
        <DatePicker
          picker="month"
          format="YYYY-MM"
          onChange={handleDateChange}
          className="custom"
        /></div>
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
