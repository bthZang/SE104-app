import { createContext } from "react";


export const candidateDataDefault = [
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