import { getAllEmployee } from "../../api/EmployeeAPI";


const TestPage = async () => {
    const employee_storage = await getAllEmployee()

    await console.log("storage: ", employee_storage)

}

export default TestPage