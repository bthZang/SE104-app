import { getAllEmployee } from "../../api/EmployeeAPI";
import { uploadFile } from "../../api/FileAPI";
import { Button } from "@mui/material";
import * as XLSX from "xlsx";
import { sendRequest } from "../../api/RequestAPI";

const fileName =  "Empty data1.xlsx"

function handleSend () {
    const data = [];
    const workbook = XLSX.utils.book_new();
    const worksheet = XLSX.utils.aoa_to_sheet(data);
    XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");
    // XLSX.writeFile(workbook, fileName);
    const fileData = XLSX.write(workbook, { type: 'array', bookType: 'xlsx' });
    const file = new File([fileData],fileName, { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
    // file.name = fileName
    // uploadFile(file)
    sendRequest('21520953@gm.uit.edu.vn', file)
}




const TestPage = () => {

    return (
        <Button
            onClick={handleSend}
            variant="outlined"
            color="info"
        >
            SEND
        </Button>

    )

}

export default TestPage