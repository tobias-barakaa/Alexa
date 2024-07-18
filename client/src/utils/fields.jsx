import { updateFormData } from '../slices/articleSlice';

export const handleInputChange = (field, value, dispatch) => {
    dispatch(updateFormData({ [field]: value }));
};
