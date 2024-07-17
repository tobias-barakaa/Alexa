import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import './StepOne.css';
import { useEffect, useState } from 'react';
import { CATEGORIES, AUTHOR_TONES, WORD_COUNT_RANGES } from '../../../../../constants/articles';
import FormField from '../../../components/FormField';
import { handleInputChange } from '../../../utils/fields';



const StepOne = ({ nextStep }) => {
    const dispatch = useDispatch();
    const reduxStepOneData = useSelector((state) => state.article?.stepOneData);
  
    const [localStepOneData, setLocalStepOneData] = useState({
        description: '',
        category: '',
        author_tone: '',
        number_of_words: ''
    });

    useEffect(() => {
        const storedData = JSON.parse(localStorage.getItem('stepOneData'));
        if (reduxStepOneData?.description === '' && storedData) {
            setLocalStepOneData(storedData);
        } else {
            setLocalStepOneData(reduxStepOneData);
        }
    }, [reduxStepOneData]);

    const handleChange = (field, value) => {
        const updatedData = { ...localStepOneData, [field]: value };
        setLocalStepOneData(updatedData);
        localStorage.setItem('stepOneData', JSON.stringify(updatedData));
        handleInputChange(field, value, 1, dispatch);
    };

    return (
        <div className="order-article-container">
            <div className="order-article-form">
                <h2 className="form-heading">ORDER ARTICLE AND CONTENT</h2>
                <FormField
                    id="description"
                    label="Description"
                    type="text"
                    value={localStepOneData.description}
                    handleChange={handleChange}
                    className="description-input"
                />
                <div className="input-row">
                    <FormField
                        id="category"
                        label="Choose a category"
                        type="select"
                        value={localStepOneData.category}
                        handleChange={handleChange}
                        options={CATEGORIES}
                        className="category-dropdown"
                    />
                    <FormField
                        id="author_tone"
                        label="Author's tone"
                        type="select"
                        value={localStepOneData.author_tone}
                        handleChange={handleChange}
                        options={AUTHOR_TONES}
                        className="author-tone-dropdown"
                    />
                </div>
                <FormField
                    id="number_of_words"
                    label="Number of words"
                    type="select"
                    value={localStepOneData.number_of_words}
                    handleChange={handleChange}
                    options={WORD_COUNT_RANGES}
                    className="word-count-dropdown"
                />
                <div className="form-group">
                    <button onClick={nextStep} className="next-button">Next</button>
                </div>
            </div>
        </div>
    );
};

StepOne.propTypes = {
    nextStep: PropTypes.func.isRequired,
};

export default StepOne;