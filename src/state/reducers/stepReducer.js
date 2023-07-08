import { BACK_STEP, NEXT_STEP, RESET_STEP } from "../actionTypes";

export const stepReducer = (state = { step: 1 }, action) => {
  switch (action.type) {
    case NEXT_STEP:
      return { step: state.step + 1 };
    case BACK_STEP:
      return { step: state.step - 1 };
    case RESET_STEP:
      return { step: 1 };
    default:
      return state;
  }
};
