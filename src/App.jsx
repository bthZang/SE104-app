import { RouterProvider } from "react-router-dom";
import { createBrowserRouter } from "react-router-dom";

import router from "./pages/TestPage/routes"

import "./App.css";
import { useDispatch } from "react-redux";
import { setAccessToken } from "./app/reducer/authReducer";
import {
  EMPLOYEE_DATA_STORAGE_NAME,
  EmployeeContext,
  employeeData,
} from "./contexts/EmployeeContext";
import { useEffect, useState } from "react";
import {
  CANDIDATE_DATA_STORAGE_NAME,
  CandidateContext,
  candidateData,
} from "./contexts/CandidateContext";
import {
  PAYROLL_DATA_STORAGE_NAME,
  PayrollContext,
  payrollData,
} from "./contexts/PayrollContext"

import {
  MONTHTIMEKEEPING_DATA_STORAGE_NAME,
  MonthTimekeepingContext,
  monthTimekeepingData,
} from "./contexts/MonthTimekeepingContext"

function App() {
  const dispatch = useDispatch();
  if (localStorage.getItem("accessToken")) {
    dispatch(
      setAccessToken({
        access_token: localStorage.getItem("accessToken"),
        user_role: "ADMIN",
      })
    );
  }

  const [employeeDataState, setEmployeeDataState] = useState(employeeData);
  const [candidateDataState, setCandidateDataState] = useState(candidateData);
  const [payrollDataState, setPayrollDataState] = useState(payrollData);
  const [monthTimekeepingDataState, setMonthTimekeepingDataState] = useState(monthTimekeepingData);

  const employeeProviderValue = {
    employeeData: employeeDataState,
    setEmployeeData: (newData) => {
      if (newData instanceof Array) {
        setEmployeeDataState([...newData]);
        localStorage.setItem(
          EMPLOYEE_DATA_STORAGE_NAME,
          JSON.stringify(newData)
        );
      } else if (newData instanceof Function) {
        let updatedData;
        setEmployeeDataState((prev) => {
          updatedData = newData(prev);
          return updatedData;
        });
        localStorage.setItem(
          EMPLOYEE_DATA_STORAGE_NAME,
          JSON.stringify(updatedData)
        );
      }
    },
  };

  const candidateProviderValue = {
    candidateData: candidateDataState,
    setCandidateData: (newData) => {
      if (newData instanceof Array) {
        setCandidateDataState([...newData]);
        localStorage.setItem(
          CANDIDATE_DATA_STORAGE_NAME,
          JSON.stringify(newData)
        );
      } else if (newData instanceof Function) {
        let updatedData;
        setCandidateDataState((prev) => {
          updatedData = newData(prev);
          localStorage.setItem(
            CANDIDATE_DATA_STORAGE_NAME,
            JSON.stringify(updatedData)
          );
          return updatedData;
        });
      }
    },
  };

  const payrollProviderValue = {
    payrollData: payrollDataState,
    setPayrollData: (newData) => {
      if (newData instanceof Array) {
        setPayrollDataState([...newData]);
        localStorage.setItem(
          PAYROLL_DATA_STORAGE_NAME,
          JSON.stringify(newData)
        );
      } else if (newData instanceof Function) {
        let updatedData;
        setPayrollDataState((prev) => {
          updatedData = newData(prev);
          return updatedData;
        });
        localStorage.setItem(
          PAYROLL_DATA_STORAGE_NAME,
          JSON.stringify(updatedData)
        );
      }
    },
  };

  const monthTimekeepingProviderValue = {
    monthTimekeepingData: monthTimekeepingDataState,
    setMonthTimekeepingData: (newData) => {
      if (newData instanceof Array) {
        setMonthTimekeepingDataState([...newData]);
        localStorage.setItem(
          MONTHTIMEKEEPING_DATA_STORAGE_NAME,
          JSON.stringify(newData)
        );
      } else if (newData instanceof Function) {
        let updatedData;
        setMonthTimekeepingDataState((prev) => {
          updatedData = newData(prev);
          return updatedData;
        });
        localStorage.setItem(
          MONTHTIMEKEEPING_DATA_STORAGE_NAME,
          JSON.stringify(updatedData)
        );
      }
    },
  };

  return (
    <EmployeeContext.Provider value={employeeProviderValue}>
      <CandidateContext.Provider value={candidateProviderValue}>
        <PayrollContext.Provider value={payrollProviderValue}>
          <MonthTimekeepingContext.Provider value={monthTimekeepingProviderValue}>
            <RouterProvider router={router} />
          </MonthTimekeepingContext.Provider>
        </PayrollContext.Provider>
      </CandidateContext.Provider>
    </EmployeeContext.Provider>
  );
}

export default App;
