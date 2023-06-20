import DataTable from "react-data-table-component";
import { useContext, useEffect, useState } from "react";
import CheckBox from "../CheckBox/CheckBox";

import CustomButton from "../CustomButton/CustomButton";
import TitleHome from "../titleHome/titleHome";
import { DayTimekeepingContext } from "../../contexts/DayTimekeepingContext";
import Search from "../search/search";

import "./DayTimeKeeping.scss";

const DayTimeKeeping = ({ onClick }) => {

  const [isCheckAll, setIsCheckAll] = useState(false);

  const [checkList, setCheckList] = useState([]);
  const [selectedId, setSelectedId] = useState(null);

  const [searchKeyword, setSearchKeyword] = useState("");

  const { dayTimekeepingData, setDayTimekeepingData } = useContext(
    DayTimekeepingContext
  );

  const [newDayTimekeepingData, setNewDayTimekeepingData] = useState([]);

  useEffect(() => {
    setCheckList(dayTimekeepingData.map(() => false));
  }, [JSON.stringify(dayTimekeepingData)]);

  useEffect(() => {
    setNewDayTimekeepingData(
      dayTimekeepingData.map((data, index) => ({
        ...data,
        checkbox: (
          <CheckBox
            value={checkList[index] || false}
            onChange={(e) =>
              setCheckList((prev) => {
                const newPrev = [...prev];
                newPrev[index] = e.target.checked;
                return newPrev;
              })
            }
          />
        ),
      }))
    );
  }, [JSON.stringify(dayTimekeepingData), JSON.stringify(checkList)]);

  useEffect(() => {
    setCheckList(dayTimekeepingData.map(() => isCheckAll));
  }, [isCheckAll]);

  function handleDeleteItem() {
    const idList = dayTimekeepingData
      .filter((_, index) => checkList[index] == true)
      .map((v) => v.id);
    setDayTimekeepingData([
      ...dayTimekeepingData.filter((item) => !idList.includes(item.id)),
    ]);
  }
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
      width: "450px",
    },
    {
      name: "Department",
      selector: "department",
      sortable: true,
      width: "350px",
    },
    {
      name: "Position",
      selector: "position",
      sortable: true,
      width: "250px",
    },
    {
      name: "Check-in",
      selector: "in",
      sortable: true,
      width: "300px",
    },
    {
      name: "Check-out",
      selector: "out",
      sortable: true,
      width: "300px",
    },
  ];

  
  return (
    <div className="containerDayTimekeeping">
      <div>
        <div className="search">
          <Search onSearch={setSearchKeyword} />
        </div>
        <div className="account">
          <DataTable
            columns={columns}
            data={newDayTimekeepingData.filter((d) =>
              d.name.toLowerCase().includes(searchKeyword)
            )}
            pagination={true}
            highlightOnHover={true}
            striped={true}
            onRowClicked={(row) => {
              setSelectedId(row.id);
              onClick(row.id);
            }}
          ></DataTable>
        </div>
      </div>
    </div>
  );
};

export default DayTimeKeeping;
