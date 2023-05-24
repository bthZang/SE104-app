import DataTable from "react-data-table-component";

import CustomButton from "../CustomButton/CustomButton";
import TitleHome from "../titleHome/titleHome";

import "./DayTimeKeeping.scss"

const dayTimeKeepingData = [
    {id: '#00001', name: 'Example', department: 'Accounting', position: 'P' , in: 'D', out: 'P' },
    {id: '#00002', name: 'Example', department: 'Technical', position: 'P' , in: 'D', out: 'P' },
    {id: '#00003', name: 'Example', department: 'Accounting', position: 'P' , in: 'D', out: 'P' },
    {id: '#00004', name: 'Example', department: 'Accounting', position: 'P' , in: 'D', out: 'P' },
    {id: '#00005', name: 'Example', department: 'Technical', position: 'P' , in: 'D', out: 'P' },
    {id: '#00006', name: 'Example', department: 'Accounting', position: 'P' , in: 'D', out: 'P' },
    {id: '#00007', name: 'Example', department: 'Accounting', position: 'P' , in: 'D', out: 'P' },
    {id: '#00008', name: 'Example', department: 'HR', position: 'P' , in: 'D', out: 'P' },
    {id: '#00009', name: 'Example', department: 'Accounting', position: 'P' , in: 'D', out: 'P' },
    {id: '#00010', name: 'Example', department: 'HR', position: 'P' , in: 'D', out: 'P' },
    
   

]

const columns = [

    {
        name: 'ID',
        selector: 'id',
        sortable: true,
        
    },
    {
        name: 'Name',
        selector: 'name',
        sortable: true,
        
    },
    {
        name: 'Department',
        selector: 'department',
        sortable: true,
    },
    {
        name: 'Position',
        selector: 'position',
        sortable: true,
    },
    {
        name: 'Check-in',
        selector: 'in',
        sortable: true,
    },
    {
        name: 'Check-out',
        selector: 'out',
        sortable: true,
    },
    
]

const DayTimeKeeping = () => {


    return(

        <div className="containerDayTimekeeping">
            <div>
                <div className="account">
                    <DataTable
                        columns={columns}
                        data={dayTimeKeepingData}
                        pagination={true}
                        highlightOnHover={true}
                        striped={true}
                    ></DataTable>
                </div>
            </div>
        </div>
      
        
    );

}

export default DayTimeKeeping;