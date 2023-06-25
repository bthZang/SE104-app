/* eslint-disable react/prop-types */
import { useState, useEffect, useRef, useContext } from "react";
import DataTable from "react-data-table-component";
import { Button } from "@mui/material";
import CheckBox from "../CheckBox/CheckBox";
import Search from "../search/search";

import CustomButton from "../CustomButton/CustomButton";
import TitleHome from "../titleHome/titleHome";
import AddAttachmentConfirm from "../AddAttachmentConfirm/AddAttachmentConfirm";
import { v4 as uuidv4 } from "uuid";

import "./Candidate.scss";
import { CandidateContext } from "../../contexts/CandidateContext";
import { EmployeeContext, employeeData } from "../../contexts/EmployeeContext";

const Candidate = ({ onClick, onClose, data }) => {
  const { candidateData, setCandidateData } = useContext(CandidateContext);
  const { employeeData, setEmployeeData } = useContext(EmployeeContext);

  const [click, setClick] = useState(null);

  const btnCandidateAddRef = useRef(null);

  const handleOnClick = (id) => {
    const candidate = candidateData.find((d) => d.id == id);
    setEmployeeData((prev) => [
      ...prev,
      {
        id,
        name: candidate.name,
        position: candidate.applyPosition,
        gender: candidate.gender,
      },
    ]);
    setCandidateData((prev) => [...prev.filter((d) => d.id != id)]);
  };

  const [newCandidateData, setNewCandidateData] = useState([]);

  const [selectedId, setSelectedId] = useState(null);
  const [searchKeyword, setSearchKeyword] = useState("");
  const [checkList, setCheckList] = useState([]);
  const [isCheckAll, setIsCheckAll] = useState(false);

  const [attachment, setAttachment] = useState([]);

  const handleAttachment = (e, index) => {
    const file = e.target.files[0];

    const list = [...attachment];
	list[index] = file;
    setAttachment(list);
    setColor("red");
   
  };

  useEffect(() => {
    setNewCandidateData(
      candidateData.map((data, index) => ({
        ...data,
        CV: data.CV?.split ? (
          <a href={data.CV} download={true}>
            {data.CV?.split?.("/").at(-1)}
          </a>
        ) : (
          <p>No CV</p>
        ),
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
        interviewResult: (
          <label className="attachment">
            <input
              type="file"
              className="inputFile"
              onChange={(e) => handleAttachment(e, index)}
            ></input>
            <div className="inputFileBox">
              {attachment[index]?.name || "No file attached"}
            </div>
          </label>
        ),
      }))
    );
  }, [
    JSON.stringify(candidateData),
    JSON.stringify(checkList),
    JSON.stringify(attachment),
  ]);

  useEffect(() => {
    setCheckList(candidateData.map(() => isCheckAll));
  }, [isCheckAll]);

  function handleDeleteItem() {
    const idList = candidateData
      .filter((_, index) => checkList[index] == true)
      .map((v) => v.id);
    setCandidateData([
      ...candidateData.filter((item) => !idList.includes(item.id)),
    ]);
    setCheckList([]);
  }

  function handleAcceptItem() {
    // const candidate = candidateData.find((d) => d.name == name);

    // setCandidateData((prev) => [...prev.filter((d) => d.name != name)]);

    const idList = candidateData
      .filter((_, index) => checkList[index] == true)
      .map((v) => v.id);

    const newEmployees = candidateData
      //   .filter((item) => idList.includes(item.id))
      .filter((_, index) => checkList[index] == true)

      .map((item) => ({
        id: item.id,
        name: item.name,
        position: item.applyPosition,
        gender: item.gender,
      }));

    setEmployeeData([...employeeData, ...newEmployees]);

    // setEmployeeData([...employeeData.add((item) => idList.includes(item.id))]);
    // setImportedData([...employeeData.add((item) => idList.includes(item.id))]);
    setCandidateData([
      ...candidateData.filter((item) => !idList.includes(item.id)),
    ]);
    // setEmployeeData([]);
    console.log("it worked");
    console.log(employeeData);

    setCheckList([]);
  }

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
      width: "200px",
    },
    {
      name: "Name",
      selector: "name",
      sortable: true,
    },
    {
      name: "Interview Status",
      selector: "interviewStatus",
      sortable: true,
      width: "300px",
    },
    {
      name: "Interview Result",
      selector: "interviewResult",
      sortable: true,
      width: "300px",
      enctype: "multipart",
    },
    {
      name: "Gender",
      selector: "gender",
      sortable: true,
    },
    {
      name: "CV",
      selector: "CV",
      sortable: true,
    },
    {
      name: "Apply position",
      selector: "applyPosition",
      sortable: true,
    },
  ];

  return (
    <div className="containerCandidate">
      <div>
        <div className="titleTable">
          <TitleHome
            children={"Candidate"}
            data={candidateData}
            showSearch={false}
          ></TitleHome>

          <div className="tools">
            <Button
              onClick={handleAcceptItem}
              variant="outlined"
              color="info"
              disabled={checkList.every((v) => v == false)}
            >
              Accept
            </Button>
            <Button
              onClick={handleDeleteItem}
              variant="outlined"
              color="error"
              disabled={checkList.every((v) => v == false)}
            >
              Reject
            </Button>
            <div className="search">
              <Search onSearch={setSearchKeyword} />
            </div>
          </div>
        </div>

        <div className="candidate">
          <DataTable
            columns={columns}
            data={newCandidateData}
            pagination={true}
            highlightOnHover={true}
            striped={true}
          ></DataTable>
        </div>
        {/* <button
          id="btnCandidateAdd"
          ref={btnCandidateAddRef}
          className="btnCandidate"
          onClick={() => {
            handleOnClick("btnCandidateAdd");
          }}
        >
          Add new <span style={{ color: "#1233E5" }}>candidate</span>
        </button> */}
        <div>
          {click == "btnCandidateAdd" && (
            <AddAttachmentConfirm
              text={"Candidate"}
              onClick={onclick}
              onClose={() => setClick("")}
            >
              Add
            </AddAttachmentConfirm>
          )}
        </div>
      </div>
    </div>
  );
};

export default Candidate;
