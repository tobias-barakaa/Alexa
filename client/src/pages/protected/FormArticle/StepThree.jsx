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
                    <option value="12hrs">12hrs</option>
                    <option value="24hrs">24hrs</option>
                    <option value="2days">2days</option>
                    <option value="3days">3days</option>
                    <option value="5days">5days</option>
                    <option value="one_week">One Week</option>
                    <option value="two_weeks">Two Weeks</option>
                    </select>
                </div>

                <h2>Article Content</h2>
                <form>
                  <label>Content</label>
                  <textarea name="content"></textarea>
                </form>
                <div className="form-group">
                    <label htmlFor="cost">Cost:</label>
                    <input type="number" id="cost" name="cost" step="0.01" required />
                </div>
                
                <button type="button" onClick={prevStep}>Previous</button>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default StepThree;

