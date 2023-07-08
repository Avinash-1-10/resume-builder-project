import { ADD_RESUME, REMOVE_ALL_RESUMES, REMOVE_RESUME } from "../actionTypes"


export const addResume = (resume) => {
    return {
        type: ADD_RESUME,
        payload: resume
    }
}

export const removeResume = (id) => {
    return {
        type: REMOVE_RESUME,
        payload: id
    }
}

export const removeAllResumes = () => {
    return {
        type: REMOVE_ALL_RESUMES
    }
}