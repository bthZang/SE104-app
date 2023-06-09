import { useState, useRef, useContext } from "react";
import DataTable from "react-data-table-component";

import CustomButton from "../CustomButton/CustomButton";
import TitleHome from "../titleHome/titleHome";
import AddAttachmentConfirm from "../AddAttachmentConfirm/AddAttachmentConfirm";
import { v4 as uuidv4 } from 'uuid';

import "./Candidate.scss"
import { CandidateContext } from "../../contexts/CandidateContext";
import { EmployeeContext } from "../../contexts/EmployeeContext";


const columns = [

    {
        name: 'Name',
        selector: 'name',
        sortable: true,
    },
    {
        name: 'Gender',
        selector: 'gender',
        sortable: true,
    },
    {
        name: 'CV',
        selector: 'CV',
        sortable: true,
    },
    {
        name: 'Apply position',
        selector: 'applyPosition',
        sortable: true,
    },
    {
        name: '',
        selector: 'acceptBtn',
        sortable: true,
        style: {
            justifyContent: 'center'
        }
    },
    {
        name: '',
        selector: 'rejectBtn',
        sortable: true,
        style: {
            justifyContent: 'center'
        }
    }
]

const Candidate = ({ onClick, onClose, data }) => {
    const { candidateData, setCandidateData } = useContext(CandidateContext)
    const { setEmployeeData } = useContext(EmployeeContext)


    const [click, setClick] = useState(null)

    const btnCandidateAddRef = useRef(null)

    const handleOnClick = (type, name) => {
        const candidate = candidateData.find(d => d.name == name)
        if (type == 'accept') {
            setEmployeeData(prev => [...prev, {
                id: uuidv4(),
                name,
                position: candidate.applyPosition,
                gender: candidate.gender,
            }])
            setCandidateData(prev => [...prev.filter(d => d.name != name)])
        }
        else if (type == 'reject') {
            setCandidateData(prev => [...prev.filter(d => d.name != name)])
        }
    };


    const newCandidateData = candidateData.map((data) => ({
        ...data,
        // name: data.firstName + " " + data.lastName,
        CV: <a href={data.CV} download={true}>{data.CV.split('/').at(-1)}</a>,
        acceptBtn: (
            <CustomButton
                onClick={() => {
                    handleOnClick('accept', data.name);
                }}
                type={"short"}
            >
                Accept
            </CustomButton>
        ),
        rejectBtn: (
            <CustomButton
                onClick={() => {
                    handleOnClick('reject', data.name);
                }}
                type={"short"}
            >
                Reject
            </CustomButton>
        ),
    }));

    return (

        <div className="containerCandidate">
            <div>
                <TitleHome children={"Candidate"} data={data}></TitleHome>
                <div className="candidate">
                    <DataTable
                        columns={columns}
                        data={newCandidateData}
                        pagination={true}
                        highlightOnHover={true}
                        striped={true}
                    ></DataTable>
                </div>
                <button id="btnCandidateAdd" ref={btnCandidateAddRef} className="btnCandidate" onClick={() => { handleOnClick() }}>Add new <span style={{ color: "#1233E5" }} >candidate</span></button>
                <div>
                    {click == "btnCandidateAdd" && <AddAttachmentConfirm text={"Candidate"}
                        onClick={onclick}
                        onClose={() => setClick('')}
                    >Add</AddAttachmentConfirm>}
                </div>
            </div>
        </div>

    );

}

export default Candidate;