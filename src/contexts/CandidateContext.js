import { createContext } from "react";
import CV from '../assets/cv/Nguyen_Hoang_Hy_CV.pdf'


export const candidateDataDefault = [
  {
    id: "1",
    name: "Nguyễn Hoàng Hiến",
    interviewStatus: "pass",

    gender: "Male",
    CV: CV,
    applyPosition: "CEO",
  },
  {
    id: "2",
    name: "Trần Thị Tuyết Mai",
    interviewStatus: "fail",

    gender: "Female",
    CV: "",
    applyPosition: "CTO",
  },
  {
    id: "3",
    name: "HYH",
    interviewStatus: "pending",

    gender: "Female",
    CV: "",
    applyPosition: "CTO",
  },
];

export const CANDIDATE_DATA_STORAGE_NAME = 'candidateData'

export const persistentCandidateData = JSON.parse(localStorage.getItem(CANDIDATE_DATA_STORAGE_NAME))

export const candidateData = persistentCandidateData || candidateDataDefault

export const CandidateContext = createContext({
    candidateData,
    setCandidateData: (index, newData) => {
        candidateData[index] = newData
        localStorage.setItem(CANDIDATE_DATA_STORAGE_NAME, candidateData)
    }
})