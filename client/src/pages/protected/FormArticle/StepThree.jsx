import React from 'react';

const StepThree = ({ prevStep }) => {
    return (
        <div className="form-container">
            <h2>Step 3: Final Details</h2>
            <form>
                <div className="form-group">
                    <label htmlFor="duration">Duration:</label>
                    <select id="duration" name="duration" required>
                        <option value="">Select Duration</option>
                        <option value="3hrs">3hrs</option>
                        <option value="6hrs">6hrs</option>
                        {/* Add other durations here */}
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="cost">Cost:</label>
                    <input type="number" id="cost" name="cost" step="0.01" required />
                </div>
                <div className="form-group">
                    <label htmlFor="content">Content:</label>
                    <textarea id="content" name="content" />
                </div>
                <button type="button" onClick={prevStep}>Previous</button>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default StepThree;
