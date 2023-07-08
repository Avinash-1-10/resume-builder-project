import { ADD_RESUME, REMOVE_ALL_RESUMES, REMOVE_RESUME } from "../actionTypes";

export const resumeReducer = (state = { allResumes: [] }, action) => {
  switch (action.type) {
    case ADD_RESUME:
      return { allResumes: [...state.allResumes, action.payload] };
    case REMOVE_RESUME:
      const newAllResumes = state.allResumes.filter(
        (item) => item.id !== action.payload
      );
      return { allResumes: newAllResumes };
    case REMOVE_ALL_RESUMES:
      return { allResumes: [] };
    default:
      return state;
  }
};
