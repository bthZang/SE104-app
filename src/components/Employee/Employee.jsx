import { useContext, useEffect, useState, createContext } from "react";
import DataTable from "react-data-table-component";
import * as XLSX from "xlsx";
import TitleHome from "../titleHome/titleHome";

import { Button } from "@mui/material";
import CheckBox from "../CheckBox/CheckBox";
import Profile from "../Profile/Profile";
import Search from "../search/search";

import { OutTable, ExcelRenderer } from "react-excel-renderer";

import "./Employee.scss";
import { EmployeeContext } from "../../contexts/EmployeeContext";
// import excel from "xlsx";

const Employee = ({ onClick }) => {
  //  const { data } = useContext(ExcelContext);

  // useEffect(() => {
  //   if (data.length > 0) {
  //     const workbook = XLSX.read(data, { type: "binary" });
  //     const worksheet = workbook.Sheets[workbook.SheetNames[0]];
  //     const result = XLSX.utils.sheet_to_json(worksheet, { header: 1 });
  //     const newEmployeeData = result.slice(1).map((row) => ({
  //       id: row[1],
  //       birthplace: row[4],
  //       ethnictity: row[5],
  //       citizenId: row[6],
  //       name: row[2],
  //       gender: row[3],
  //       birthdate: row[7],
  //       department: row[8],
  //       position: row[9],
  //     }));
  //     setEmployeeData(newEmployeeData);
  //   }
  // }, [data]);

  const { employeeData, setEmployeeData } = useContext(EmployeeContext);

  const [isCheckAll, setIsCheckAll] = useState(false);
  const columns = [
    {
      name: (
        <CheckBox
          value={isCheckAll}
          onChange={(e) => setIsCheckAll(e.target.checked)}
        />
      ),
      selector: "checkbox",
      width: "60px",
    },
    {
      name: "ID",
      selector: "id",
      sortable: true,
    },
    {
      name: "Name",
      selector: "name",
      sortable: true,
      width: "303px",
    },
    {
      name: "Gender",
      selector: "gender",
    },
    {
      name: "Birthplace",
      selector: "birthplace",
      sortable: true,
    },
    {
      name: "Ethnicity",
      selector: "ethnicity",
      sortable: true,
    },
    {
      name: "Citizen Id",
      selector: "citizenId",
    },
    {
      name: "Birthdate",
      selector: "birthdate",
      sortable: true,
    },
    {
      name: "Department",
      selector: "department",
      sortable: true,
    },
    {
      name: "Position",
      selector: "position",
      sortable: true,
    },
  ];

  const [selectedId, setSelectedId] = useState(null);
  const [searchKeyword, setSearchKeyword] = useState("");

  const [newEmployeeData, setNewEmployeeData] = useState([]);
  const [checkList, setCheckList] = useState([]);

  useEffect(() => {
    setCheckList(employeeData.map(() => false));
  }, [JSON.stringify(employeeData)]);

  useEffect(() => {
    setNewEmployeeData(
      employeeData.map((data, index) => ({
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
  }, [JSON.stringify(employeeData), JSON.stringify(checkList)]);

  useEffect(() => {
    setCheckList(employeeData.map(() => isCheckAll));
  }, [isCheckAll]);

  function handleDeleteItem() {
    const idList = employeeData
      .filter((_, index) => checkList[index] == true)
      .map((v) => v.id);
    setEmployeeData([
      ...employeeData.filter((item) => !idList.includes(item.id)),
    ]);
  }

  function handleExport() {
    const data = [Object.keys(employeeData[0])];
    employeeData
      .filter((_, index) => checkList[index] == true)
      .forEach((d) => data.push(Object.values(d)));
    const workbook = XLSX.utils.book_new();
    const worksheet = XLSX.utils.aoa_to_sheet(data);
    XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");
    XLSX.writeFile(workbook, "Employee data.xlsx");
  }

  let [importedData, setImportedData] = useState(employeeData);

  const handleImport = (event) => {

    let file = event.target.files[0];
    let reader = new FileReader();

    reader.onload = (e) => {
      let data = new Uint8Array(e.target.result);
      let workbook = XLSX.read(data, { type: "array" });
      let worksheet = workbook.Sheets[workbook.SheetNames[0]];
      let jsonData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });
      let headers = jsonData[0];
      let rows = jsonData.slice(1);
      importedData = rows.map((row) =>
        headers.reduce(
          (obj, header, index) => ({ ...obj, [header]: row[index] }),
          {}
        )
      );
      setImportedData(importedData);

      setCheckList((prev) => [...prev, ...importedData.map(() => false)]);
      //   setNewEmployeeData(importedData);
      // Sử dụng importedData để thêm dữ liệu vào context hoặc thực hiện các thao tác khác
    };

    reader.readAsArrayBuffer(file);
  };

  useEffect(() => {
    setNewEmployeeData(
      importedData.map((data, index) => ({
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
  }, [JSON.stringify(importedData), JSON.stringify(checkList)]);

  return (
    <div className="containerEmployee">
      <div>
        <div className="titleTable">
          <TitleHome
            children={"Employee"}
            data={employeeData}
            showSearch={false}
          ></TitleHome>

          <div className="tools">
            <label style={{ display: "flex", flexDirection: "row" }}>
              <input
                type="file"
                onChange={handleImport}
                onClick={(e) => e.target.value = null}
                style={{
                  display: "none",
                }}
              />{" "}
              <Button
                onClick={handleImport}
                variant="outlined"
                color="error"
                disabled={checkList.every((v) => v != true)}
              >
                Import Data
              </Button>
              {/* <ul>
                {importedData.map((data, index) => (
                  <li key={index}>{JSON.stringify(data)}</li>
                ))}
              </ul> */}
            </label>
            <Button
              onClick={handleDeleteItem}
              variant="outlined"
              color="error"
              disabled={checkList.every((v) => v == false)}
            >
              Delete
            </Button>
            <Button
              onClick={handleExport}
              variant="outlined"
              color="info"
              disabled={checkList.every((v) => v == false)}
            >
              Export data
            </Button>
            <div className="search">
              <Search onSearch={setSearchKeyword} />
            </div>
          </div>
        </div>
        <div className="employee">
          <DataTable
            columns={columns}
            data={newEmployeeData.filter((d) =>
              (d.name?.toLowerCase() || "").includes(searchKeyword)
            )}
            pagination={true}
            highlightOnHover={true}
            striped={true}
            onRowClicked={(row) => {
              console.log(newEmployeeData)
              setSelectedId(row.id);
              onClick(row.id);
            }}
          ></DataTable>
          {selectedId !== null && (
            <Profile
              id={selectedId}
              data={employeeData.find((d) => d.id == selectedId)}
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
            ></Profile>
          )}

          {/* {selectedId !== null && <YourComponent id={selectedId} />} */}
        </div>
      </div>
    </div>
  );
};

export default Employee;


