import { BACK_STEP, NEXT_STEP, RESET_STEP } from "../actionTypes"

export const nextStep = () => {
    return {
        type: NEXT_STEP
    }
}

export const backStep = () => {
    return {
        type: BACK_STEP
    }
}

export const resetStep = ()=>{
    return{
        type: RESET_STEP
    }
}