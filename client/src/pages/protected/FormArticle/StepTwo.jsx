import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import "./StepTwo.css";
import { DURATIONS, LANGUAGES } from '../../../../../constants/articles';
import { handleInputChange } from '../../../utils/fields';
import FormField from '../../../components/FormField';

const StepTwo = ({ prevStep, nextStep }) => {
    const dispatch = useDispatch();
    const formData = useSelector((state) => state.article?.formData);

    const handleChange = (field, value) => {
        handleInputChange(field, value, dispatch);
    };

    return (
        <div className="order-article-container">
            <div className="order-article-form">
                <h2 className="form-heading">OTHER REQUIRED INFORMATION</h2>
                <FormField
                    id="keywords"
                    label="Keywords"
                    type="text"
                    value={formData.keywords}
                    handleChange={handleChange}
                    className="description-input"
                    required
                />
                <div className="input-row">
                    <FormField
                        id="quantity"
                        label="Quantity"
                        type="number"
                        value={formData.quantity}
                        handleChange={handleChange}
                        className="description-input"
                        required
                        min={1}
                        max={50}
                    />
                    <FormField
                        id="language"
                        label="Language Tone"
                        type="select"
                        value={formData.language}
                        handleChange={handleChange}
                        options={LANGUAGES}
                        className="category-dropdown"
                        required
                    />
                    <FormField
                        id="duration"
                        label="Duration"
                        type="select"
                        value={formData.duration}
                        handleChange={handleChange}
                        options={DURATIONS}
                        className="category-dropdown"
                        required
                    />
                </div>
                <div className="input-row">
                    <div className="form-group">
                        <button className="prev-button" onClick={prevStep}>
                            Previous
                        </button>
                    </div>
                    <div className="form-group">
                        <button onClick={nextStep} className="next-button">
                            Next
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

StepTwo.propTypes = {
    prevStep: PropTypes.func.isRequired,
    nextStep: PropTypes.func.isRequired,
};

export default StepTwo;
