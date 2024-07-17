import { updateStepOneData, updateStepTwoData } from "../slices/articleSlice";

export const handleInputChange = (field, value, step, dispatch) => {
    const action = step === 1 ? updateStepOneData : updateStepTwoData;
    dispatch(action({ [field]: value })); 
};