import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import "./StepTwo.css";
import { updateStepTwoData } from '../../../slices/articleSlice';
import { DURATIONS, LANGUAGES } from '../../../../../constants/categories';

const StepTwo = ({ prevStep, nextStep }) => {
  const dispatch = useDispatch();
    const stepTwoData = useSelector((state) => state.article?.stepTwoData);

    const handleChange = (field, value) => {

        dispatch(updateStepTwoData({ [field]: value })); 
      };

  return (
    <div className="order-article-container">
      <div className="order-article-form">
        <h2 className="form-heading">OTHER REQUIRED INFORMATION</h2>
        <div className="form-group">
          <label htmlFor="keywords" className="form-label">Keywords:</label>
          <input
            type="text"
            id="keywords"
            value={stepTwoData?.keywords}
            onChange={(e) => handleChange('keywords', e.target.value)}
            className="description-input"
            required
          />
        </div>
        <div className="input-row">
          <div className="form-group">
            <label htmlFor="quantity" className="form-label">Quantity:</label>
            <input
              type="number"
              id="quantity"
              value={stepTwoData?.quantity}
              onChange={(e) => handleChange('quantity', e.target.value)}
              min="1"
              max="50"
              className="description-input"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="authorTone" className="form-label">Language Tone:</label>
            <div className="dropdown-container">
              <select
                id="authorTone"
                value={stepTwoData?.authorTone}
                onChange={(e) => handleChange('authorTone', e.target.value)}
                className="category-dropdown"
                required
              >

                    {LANGUAGES.map((cat, index) => (
                                    <option key={index} value={cat}>{cat}</option>
                                ))}

              </select>
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="duration" className="form-label">Duration:</label>
            <div className="dropdown-container">
              <select
                id="duration"
                value={stepTwoData?.duration}
                onChange={(e) => handleChange('duration', e.target.value)}
                className="category-dropdown"
                required
              >
                {DURATIONS.map((cat, index) => (
                                    <option key={index} value={cat}>{cat}</option>
                                ))}
              </select>
            </div>
          </div>
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


// import { useEffect } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import "./StepTwo.css";
// import { calculateTotalCost, updateStepTwoData } from '../../../slices/articleSlice';
// import { selectStepTwoData, selectTotalCost } from '../../../selectors/articleSelectors';

// const StepTwo = ({ prevStep, nextStep }) => {
//   const dispatch = useDispatch();
//   const stepTwoData = useSelector(selectStepTwoData);

//   useEffect(() => {
//     dispatch(calculateTotalCost());
//   }, [dispatch, stepTwoData]);

//   const handleChange = (field, value) => {
//     dispatch(updateStepTwoData({ ...stepTwoData, [field]: value }));
//   };

//   return (
//     <div className="order-article-container">
//       <div className="order-article-form">
//         <h2 className="form-heading">OTHER REQUIRED INFORMATION</h2>
//         <div className="form-group">
//           <label htmlFor="keywords" className="form-label">Keywords:</label>
//           <input
//             type="text"
//             id="keywords"
//             value={stepTwoData.keywords}
//             onChange={(e) => handleChange('keywords', e.target.value)}
//             className="description-input"
//             required
//           />
//         </div>
//         <div className="input-row">
//           <div className="form-group">
//             <label htmlFor="quantity" className="form-label">Quantity:</label>
//             <input
//               type="number"
//               id="quantity"
//               value={stepTwoData.quantity}
//               onChange={(e) => handleChange('quantity', e.target.value)}
//               min="1"
//               max="50"
//               className="description-input"
//               required
//             />
//           </div>
//           <div className="form-group">
//             <label htmlFor="authorTone" className="form-label">Language Tone:</label>
//             <div className="dropdown-container">
//               <select
//                 id="authorTone"
//                 value={stepTwoData.authorTone}
//                 onChange={(e) => handleChange('authorTone', e.target.value)}
//                 className="category-dropdown"
//                 required
//               >
//                 <option value="friendly">friendly</option>
//                 <option value="professional">professional</option>
//                 <option value="casual">casual</option>
//                 <option value="formal">formal</option>
//                 <option value="humorous">humorous</option>
//                 <option value="informative">informative</option>
//                 <option value="persuasive">persuasive</option>
//                 <option value="promotional">promotional</option>
//                 <option value="technical">technical</option>
//                 <option value="other">other</option>
//               </select>
//             </div>
//           </div>
//           <div className="form-group">
//             <label htmlFor="duration" className="form-label">Duration:</label>
//             <div className="dropdown-container">
//               <select
//                 id="duration"
//                 value={stepTwoData.duration}
//                 onChange={(e) => handleChange('duration', e.target.value)}
//                 className="category-dropdown"
//                 required
//               >
//                 <option value="3hrs">3 Hours</option>
//                 <option value="6hrs">6 Hours</option>
//                 <option value="12hrs">12 Hours</option>
//                 <option value="1day">1 Day</option>
//                 <option value="2days">2 Days</option>
//                 <option value="3days">3 Days</option>
//                 <option value="5days">5 Days</option>
//                 <option value="7days">7 Days</option>
//                 <option value="10days">10 Days</option>
//               </select>
//             </div>
//           </div>
//         </div>
//         <div className="form-group">
//           <label htmlFor="description" className="form-label">Description:</label>
//           <textarea
//             id="description"
//             value={stepTwoData.description}
//             onChange={(e) => handleChange('description', e.target.value)}
//             className="description-input"
//             required
//           />
//         </div>
//         <div className="input-row">
//           <div className="form-group">
//             <button className="prev-button" onClick={prevStep}>
//               Previous
//             </button>
//           </div>
//           <div className="form-group">
//             <button onClick={nextStep} className="next-button">
//               Next
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default StepTwo;
