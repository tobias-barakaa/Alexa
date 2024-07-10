import React from 'react';

const StepTwo = ({ nextStep, prevStep }) => {
    return (
        <div className="form-container">
            <h2>Step 2: Additional Information</h2>
            <form>
                <div className="form-group">
                    <label htmlFor="keywords">Keywords:</label>
                    <input type="text" id="keywords" name="keywords" required />
                </div>
                <div className="form-group">
                    <label htmlFor="author_tone">Author Tone:</label>
                    <select id="author_tone" name="author_tone" required>
                        <option value="">Select Tone</option>
                        <option value="friendly">Friendly</option>
                        <option value="professional">Professional</option>
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="language">Language:</label>
                    <select id="language" name="language" required>
                        <option value="">Select Language</option>
                        <option value="American English">American English</option>
                        <option value="British English">British English</option>
                    </select>
                </div>
                <button className='button-article' type="button" onClick={prevStep}>Previous</button>
                <button className="button-article " type="button" onClick={nextStep}>Next</button>
            </form>
        </div>
    );
};

export default StepTwo;
