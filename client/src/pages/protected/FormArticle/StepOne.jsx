import React from 'react';

const StepOne = ({ nextStep }) => {
    return (
        <div className="form-container">
            <h2>Step 1: Basic Information</h2>
            <form>
                <div className="form-group">
                    <label htmlFor="description">Description:</label>
                    <textarea id="description" name="description" required />
                </div>
                <div className="form-group">
                    <label htmlFor="category">Category:</label>
                    <select id="category" name="category" required>
                        <option value="">Select Category</option>
                        <option value="Finance">Finance</option>
                        <option value="Economy">Economy</option>
                        <option value="Food">Food</option>
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="number_of_words">Number of Words:</label>
                    <input type="number" id="number_of_words" name="number_of_words" required />
                </div>
                <button type="button" onClick={nextStep}>Next</button>
            </form>
        </div>
    );
};

export default StepOne;
