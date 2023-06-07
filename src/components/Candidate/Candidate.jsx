import { useState, useRef } from "react";
import DataTable from "react-data-table-component";

import CustomButton from "../CustomButton/CustomButton";
import TitleHome from "../titleHome/titleHome";
import AddAttachmentConfirm from "../AddAttachmentConfirm/AddAttachmentConfirm";


import "./Candidate.scss"


const columns = [

    {
        name: 'Name',
        selector: 'name',
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

const Candidate = ({ candidateData, newCandidateData, onClick, onClose, data }) => {

    const [click, setClick] = useState(null)

    const btnCandidateAddRef = useRef(null)

    const handleOnClick = () => {
        setClick(btnCandidateAddRef.current.id)
    };

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
                <button id="btnCandidateAdd" ref={btnCandidateAddRef} className="btnCandidate" onClick={()=>{handleOnClick()}}>Add new <span style={{color:"#1233E5"}} >candidate</span></button>
                <div>
                    {click == "btnCandidateAdd" && <AddAttachmentConfirm text={"Candidate"} 
                        onClick={onclick} onClose={() => setClick('')}
                    >Add</AddAttachmentConfirm>}
                </div>
            </div>
        </div>

    );

}

export default Candidate;