import { RouterProvider } from 'react-router-dom';
import { createBrowserRouter } from 'react-router-dom';

import router from './pages/testPage/routes';

import './App.css'
import { useDispatch } from 'react-redux';
import { setAccessToken } from './app/reducer/authReducer';
import { EMPLOYEE_DATA_STORAGE_NAME, EmployeeContext, employeeData } from './contexts/EmployeeContext';
import { useEffect, useState } from 'react';


function App() {
  const dispatch = useDispatch()
  if (localStorage.getItem('accessToken')) {
    dispatch(setAccessToken({ access_token: localStorage.getItem('accessToken'), user_role: 'ADMIN' }))
  }

  const [employeeDataState, setEmployeeDataState] = useState(employeeData)


  return (
    <EmployeeContext.Provider value={{
      employeeData: employeeDataState,
      setEmployeeData: (newData) => {
        if (newData instanceof Array) {
          setEmployeeDataState([...newData])
          localStorage.setItem(EMPLOYEE_DATA_STORAGE_NAME, JSON.stringify(newData))
        } else if (newData instanceof Function) {
          let updatedData
          setEmployeeDataState(prev => {
            updatedData = newData(prev)
            return updatedData
          })
          localStorage.setItem(EMPLOYEE_DATA_STORAGE_NAME, JSON.stringify(updatedData))
        }
      }
    }}>
      <RouterProvider router={router} />
    </EmployeeContext.Provider>
  );
}



export default App
