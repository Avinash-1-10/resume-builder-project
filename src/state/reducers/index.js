import { combineReducers } from "redux";
import { stepReducer } from "./stepReducer";
import { resumeReducer } from "./resumeReducer";




export const rootReducer = combineReducers({ step: stepReducer, resumes: resumeReducer })