import { useState, useRef } from "react";
import DataTable from "react-data-table-component";

import CustomButton from "../CustomButton/CustomButton";
import TitleHome from "../titleHome/titleHome";
import AddConfirm from "../AddConfirm/AddConfirm";

import "./Candidate.scss"


const columns = [

    {
        name: 'Email',
        selector: 'email',
        sortable: true,
    },
    {
        name: 'Name',
        selector: 'name',
        sortable: true,
    },
    {
        name: 'Permission',
        selector: 'permission',
        sortable: true,
    },
    {
        name: '',
        selector: 'button',
        sortable: true,
        style: {
            justifyContent: 'center'
        }
    }
]

const Candidate = ({ candidateData, newCandidateData, onClick, onClose }) => {

    const [click, setClick] = useState(null)

    const btnCandidateAddRef = useRef(null)

    const handleOnClick = () => {
        setClick(btnAddRef.current.id)
    };

    return (

        <div className="containerCandidate">
            <div>
                <TitleHome children={"Candidate"}></TitleHome>
                <div className="candidate">
                    <p className="titleTable">Acount</p>
                    {/* <DataTable
                        columns={columns}
                        data={newCandidateData}
                        pagination={true}
                        highlightOnHover={true}
                        striped={true}
                    ></DataTable> */}
                </div>
                {/* <button id="btnCandidateAdd" ref={btnCandidateAddRef} className="btnCandidate" onClick={()=>{handleOnClick()}}>Add new <span style={{color : #1233E5}} >Candidate</span></button> */}
                <div>
                    {/* {click == "btnCandidateAdd" && <AddConfirm text={"account?"} 
                        onClick={onclick}
                    >Add</AddConfirm>} */}
                </div>
            </div>
        </div>

    );

}

export default Candidate;