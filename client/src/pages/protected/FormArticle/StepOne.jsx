import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { updateStepOneData } from '../../../slices/articleSlice';
import './StepOne.css';
import { useEffect, useState } from 'react';
import { CATEGORIES, AUTHOR_TONES,WORD_COUNT_RANGES } from '../../../../../constants/articles';

const StepOne = ({ nextStep }) => {
    const dispatch = useDispatch();
    const reduxStepOneData = useSelector((state) => state.article?.stepOneData);
  
    const [localStepOneData, setLocalStepOneData] = useState({
        description: '',
        category: '',
        authorTone: '',
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
        // Update local state immediately
        const updatedData = { ...localStepOneData, [field]: value };
        setLocalStepOneData(updatedData);
  
        // Update local storage
        localStorage.setItem('stepOneData', JSON.stringify(updatedData));

        // Dispatch to Redux
        dispatch(updateStepOneData({ [field]: value }));
    };
  
    const handleNextStep = () => {
        nextStep();
    };

    return (
        <div className="order-article-container">
            <div className="order-article-form">
                <h2 className="form-heading">ORDER ARTICLE AND CONTENT</h2>
                <div className="form-group">
                    <label htmlFor="description" className="form-label">Description:</label>
                    <input
                        type="text"
                        id="description"
                        placeholder="Description"
                        value={localStepOneData?.description || ''}
                        onChange={(e) => handleChange('description', e.target.value)}
                        className="description-input"
                    />
                </div>
                <div className="input-row">
                    <div className="form-group">
                        <label htmlFor="category" className="form-label">Choose a category:</label>
                        <div className="dropdown-container">
                            <select
                                id="category"
                                value={localStepOneData?.category || ''}
                                onChange={(e) => handleChange('category', e.target.value)}
                                className="category-dropdown"
                            >
                                {CATEGORIES.map((cat, index) => (
                                    <option key={index} value={cat}>{cat}</option>
                                ))}
                            </select>
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="author-tone" className="form-label">Authors tone:</label>
                        <div className="dropdown-container">
                            <select
                                id="author-tone"
                                value={localStepOneData?.authorTone || ''}
                                onChange={(e) => handleChange('authorTone', e.target.value)}
                                className="author-tone-dropdown"
                            >
                                {AUTHOR_TONES.map((tone, index) => (
                                    <option key={index} value={tone}>{tone}</option>
                                ))}
                            </select>
                        </div>
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="word-count" className="form-label">Number of words:</label>
                    <div className="dropdown-container">
                        <select
                            id="word-count"
                            value={localStepOneData?.number_of_words || ''}
                            onChange={(e) => handleChange('numberOfWords', e.target.value)}
                            className="word-count-dropdown"
                        >
                            {WORD_COUNT_RANGES.map((count, index) => (
                                <option key={index} value={count}>{count}</option>
                            ))}
                        </select>
                    </div>
                </div>
                <div className="form-group">
                    <button onClick={handleNextStep} className="next-button">Next</button>
                </div>
            </div>
        </div>
    );
};

StepOne.propTypes = {
    nextStep: PropTypes.func.isRequired,
};

export default StepOne;










// import { useState, useEffect } from 'react';
// import './StepOne.css';


// const StepOne = ({ nextStep, data, onDataChange }) => {
//   const [description, setDescription] = useState(data.description);
//   const [category, setCategory] = useState(data.category);
//   const [authorTone, setAuthorTone] = useState(data.authorTone);
//   const [numberOfWords, setNumberOfWords] = useState(data.numberOfWords|| '');
//   useEffect(() => {
//     onDataChange({ description, category, authorTone, numberOfWords });
//   }, [description, category, authorTone, numberOfWords, onDataChange]);

//   const handleNextClick = () => {
//     nextStep();
//   };

//   return (
//     <div className="order-article-container">
//       <div className="order-article-form">
//         <h2 className="form-heading">ORDER ARTICLE AND CONTENT</h2>
//         <div className="form-group">
//           <label htmlFor="description" className="form-label">Description:</label>
//           <input
//             type="text"
//             id="description"
//             placeholder="Description"
//             value={description}
//             onChange={(e) => setDescription(e.target.value)}
//             className="description-input"
//           />
//         </div>
//         <div className="input-row">
//           <div className="form-group">
//             <label htmlFor="category" className="form-label">Choose a category:</label>
//             <div className="dropdown-container">
//               <select
//                 id="category"
//                 value={category}
//                 onChange={(e) => setCategory(e.target.value)}
//                 className="category-dropdown"
//               >
//                 <option value="">Select a category</option>
//                 {categories.map((cat, index) => (
//                   <option key={index} value={cat}>{cat}</option>
//                 ))}
//               </select>
//             </div>
//           </div>
//           <div className="form-group">
//             <label htmlFor="author-tone" className="form-label">Authors tone:</label>
//             <div className="dropdown-container">
//               <select
//                 id="author-tone"
//                 value={authorTone}
//                 onChange={(e) => setAuthorTone(e.target.value)}
//                 className="author-tone-dropdown"
//               >
//                 <option value="">Select authors tone</option>
//                 {authorTones.map((tone, index) => (
//                   <option key={index} value={tone}>{tone}</option>
//                 ))}
//               </select>
//             </div>
//           </div>
//         </div>
//         <div className="form-group">
//           <label htmlFor="word-count" className="form-label">Number of words:</label>
//           <div className="dropdown-container">
//             <select
//               id="word-count"
//               value={numberOfWords}
//               onChange={(e) => setNumberOfWords(e.target.value)}
//               className="word-count-dropdown"
//             >
//               <option value="">Select number of words</option>
//               {wordCounts.map((count, index) => (
//                 <option key={index} value={count}>{count}</option>
//               ))}
//             </select>
//           </div>
//         </div>
//         <div className="form-group">
//           <button onClick={handleNextClick} className="next-button">Next</button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default StepOne;