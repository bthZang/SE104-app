import { getAllEmployee } from "../../api/EmployeeAPI";
import { downloadFile, uploadFile } from "../../api/FileAPI";
import { Button } from "@mui/material";
import * as XLSX from "xlsx";
import { sendRequest } from "../../api/RequestAPI";
import { getAllCandidate } from "../../api/CandidateAPI";

import DataTable from "react-data-table-component";
import { useState } from "react";
import { FILE_API } from "../../constant/apiURL";







const TestPage = () => {

    const [click, setClick] = useState(false)
    const [data, setData] = useState([])

    const col = [
        {
            name: "name",
            selector: "name",
            sortable: true,
            width: "300px",
        },
        {
            name: "cv",
            selector: "cvBtn",
            sortable: true,
            width: "300px",
            enctype: "multipart",
        },

    ]

    const handleDownload = (file) => {
        downloadFile(file)

    };


    const handleClick = () => {
        getAllCandidate().then(res => {

            res = res.map((i) => {
                return {
                    ...i,
                    cvBtn: <a
                        onClick={() => handleRowClicked(i.cv.filename)}>
                        {i.cv.filename}
                    </a>
                }
            })

            setData(res)
            setClick(true)
        })

    }

    const handleRowClicked = (row) => {

        handleDownload(row)
    }



    return (
        <>
            
            <Button
                onClick={handleClick}
                variant="outlined"
                color="info"
            >
                Call api nè má
            </Button>
            {click == true &&
                <DataTable
                    columns={col}
                    data={data}
                    pagination={true}
                    highlightOnHover={true}
                    striped={true}
                ></DataTable>}
        </>

    )

}

export default TestPage