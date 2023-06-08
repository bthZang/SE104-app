import DataTable from "react-data-table-component";

import CustomButton from "../CustomButton/CustomButton";
import TitleHome from "../titleHome/titleHome";

import "./DayTimeKeeping.scss"



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
        width: '450px',
        
    },
    {
        name: 'Department',
        selector: 'department',
        sortable: true,
        width: '350px',

    },
    {
        name: 'Position',
        selector: 'position',
        sortable: true,
        width: '250px',

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

const DayTimeKeeping = ({onClick, handleChange, dayTimeKeepingData,}) => {


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