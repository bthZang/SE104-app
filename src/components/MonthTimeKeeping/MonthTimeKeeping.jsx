import DataTable from "react-data-table-component";

import CustomButton from "../CustomButton/CustomButton";
import TitleHome from "../titleHome/titleHome";

import "./MonthTimeKeeping.scss"

const monthTimeKeepingData = [
    {id: '#00001', name: 'Example', one: 'D', two: 'P' , three: 'D', four: 'P' , five: 'D', six: 'P' , seven: 'P' , workingDays: '27', dayOff: '3', overtime:'4', total: '27' },
    {id: '#00002', name: 'Example', one: 'D', two: 'P' , three: 'D', four: 'P' , five: 'D', six: 'P' , seven: 'P' , workingDays: '27', dayOff: '3', overtime:'4', total: '27' },
    {id: '#00003', name: 'Example', one: 'D', two: 'P' , three: 'D', four: 'P' , five: 'D', six: 'P' , seven: 'P' , workingDays: '27', dayOff: '3', overtime:'4', total: '27' },
    {id: '#00004', name: 'Example', one: 'D', two: 'P' , three: 'D', four: 'P' , five: 'D', six: 'P' , seven: 'P' , workingDays: '27', dayOff: '3', overtime:'4', total: '27' },
    {id: '#00005', name: 'Example', one: 'D', two: 'P' , three: 'D', four: 'P' , five: 'D', six: 'P' , seven: 'P' , workingDays: '27', dayOff: '3', overtime:'4', total: '27' },
    {id: '#00006', name: 'Example', one: 'D', two: 'P' , three: 'D', four: 'P' , five: 'D', six: 'P' , seven: 'P' , workingDays: '27', dayOff: '3', overtime:'4', total: '27' },
    {id: '#00007', name: 'Example', one: 'D', two: 'P' , three: 'D', four: 'P' , five: 'D', six: 'P' , seven: 'P' , workingDays: '27', dayOff: '3', overtime:'4', total: '27' },
    {id: '#00008', name: 'Example', one: 'D', two: 'P' , three: 'D', four: 'P' , five: 'D', six: 'P' , seven: 'P' , workingDays: '27', dayOff: '3', overtime:'4', total: '27' },
    {id: '#00009', name: 'Example', one: 'D', two: 'P' , three: 'D', four: 'P' , five: 'D', six: 'P' , seven: 'P' , workingDays: '27', dayOff: '3', overtime:'4', total: '27' },
    {id: '#000010', name: 'Example', one: 'D', two: 'P' , three: 'D', four: 'P' , five: 'D', six: 'P' , seven: 'P' , workingDays: '27', dayOff: '3', overtime:'4', total: '27' },
    {id: '#000011', name: 'Example', one: 'D', two: 'P' , three: 'D', four: 'P' , five: 'D', six: 'P' , seven: 'P' , workingDays: '27', dayOff: '3', overtime:'4', total: '27' },
    
   

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
    },
    {
        name: 'Days off',
        selector: 'dayOff',
        sortable: true,
    },
    {
        name: 'Overtime',
        selector: 'overtime',
        sortable: true,
    },
    {
        name: 'Total',
        selector: 'total',
        sortable: true,
    }
]

const MonthTimeKeeping = () => {


    return(

        <div className="container">
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