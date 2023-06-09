import { createContext } from "react";
import CV from '../assets/cv/Nguyen_Hoang_Hy_CV.pdf'


export const candidateDataDefault = [
    { name: 'Nguyễn Hoàng Hiến', gender: 'Male', CV: CV, applyPosition: 'CEO' },
    { name: 'Trần Thị Tuyết Mai', gender: 'Female', CV: '', applyPosition: 'CTO' },
]

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