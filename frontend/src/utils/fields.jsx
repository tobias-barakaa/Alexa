import { updateFormData } from "../slices/client/articleSlice";

export const handleInputChange = (field, value, dispatch) => {
    dispatch(updateFormData({ [field]: value }));
};
