import DataTable from "react-data-table-component";

import CustomButton from "../CustomButton/CustomButton";
import TitleHome from "../titleHome/titleHome";

import "./MonthTimeKeeping.scss"



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
        name: '01',
        selector: 'one',
        sortable: true,
    },
    {
        name: '02',
        selector: 'two',
        sortable: true,
    },
    {
        name: '03',
        selector: 'three',
        sortable: true,
    },
    {
        name: '04',
        selector: 'four',
        sortable: true,
    },
    {
        name: '05',
        selector: 'five',
        sortable: true,
    },
    {
        name: '06',
        selector: 'six',
        sortable: true,
    },
    {
        name: '07',
        selector: 'seven',
        sortable: true,
    },
    {
        name: 'Working days',
        selector: 'workingDays',
        sortable: true,
        width: '200px',

    },
    {
        name: 'Days off',
        selector: 'dayOff',
        sortable: true,
        width: '200px',

    },
    {
        name: 'Overtime',
        selector: 'overtime',
        sortable: true,
        width: '200px',

    },
    {
        name: 'Total',
        selector: 'total',
        sortable: true,
    }
]

const MonthTimeKeeping = ({onClick, handleChange, monthTimeKeepingData}) => {


    return(

        <div className="containerMonthTimeKeeping">
            <div>
                <div className="account">
                    <DataTable
                        columns={columns}
                        data={monthTimeKeepingData}
                        pagination={true}
                        highlightOnHover={true}
                        striped={true}
                    ></DataTable>
                </div>
            </div>
        </div>
      
        
    );

}

export default MonthTimeKeeping;