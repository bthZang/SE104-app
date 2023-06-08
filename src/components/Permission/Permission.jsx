
import DataTable from "react-data-table-component";

import CustomButton from "../CustomButton/CustomButton";
import TitleHome from "../titleHome/titleHome";

import "./Permission.scss"

// const humanRescourceData = [
//     {email: 'example@email', name: 'Example', button: <CustomButton type={'short'} children={'Change'} ></CustomButton>}
// ]
// const AcountingData = [
//     {email: 'example@email', name: 'Example', button: <CustomButton type={'short'} children={'Change'} ></CustomButton>}
// ]
// const BoardData = [
//     {email: 'example@email', name: 'Example', button: <CustomButton type={'short'} children={'Change'} ></CustomButton>}
// ]
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
        name: '',
        selector: 'button',
        sortable: true,
        style: {
            justifyContent: "center",
        },
    }
]

const Permission = ({ onClick, humanRescourceData, AcountingData, BoardData, newBoardData, newAcountingData, newHumanRescourceData }) => {


    return (
        <div>
            <TitleHome showSearch={false} children={"Permission"}></TitleHome>
            <div className="containerPermission">
                <div>
                    <div className="humanResource">
                        <p className="titleTable">Human Resoure Department</p>
                        <DataTable
                            columns={columns}
                            data={newHumanRescourceData}
                            pagination={true}
                            highlightOnHover={true}
                            striped={true}
                        ></DataTable>
                    </div>

                    <div className="AcountingData.">
                        <p className="titleTable">Accounting Department</p>
                        <DataTable
                            columns={columns}
                            data={newAcountingData}
                            pagination={true}
                            highlightOnHover={true}
                            striped={true}
                            onRowClicked={(row) => { console.log(row) }

                            }
                        ></DataTable>
                    </div>

                    <div className="BoardData">
                        <p className="titleTable">Board of Director</p>
                        <DataTable
                            columns={columns}
                            data={newBoardData}
                            pagination={true}
                            highlightOnHover={true}
                            striped={true}
                        ></DataTable>
                    </div>
                </div>
            </div>
        </div>


    );

}

export default Permission;