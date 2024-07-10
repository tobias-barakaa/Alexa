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

                    <option value="friendly">Friendly</option>
                    <option value="professional">Professional</option>
                    <option value="casual">Casual</option>
                    <option value="formal">Formal</option>
                    <option value="humorous">Humorous</option>
                    <option value="informative">Informative</option>
                    <option value="persuasive">Persuasive</option>
                    <option value="promotional">Promotional</option>
                    <option value="technical">Technical</option>
                    <option value="other">Other</option>






                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="language">Language:</label>
                    <select id="language" name="language" required>
                    <option value="American English">American English</option>
                    <option value="British English">British English</option>
                    <option value="Canadian English">Canadian English</option>
                    <option value="Australian English">Australian English</option>
                    </select>
                </div>

                <label>Status</label>
                  <select name="status">
                    <option value="pending">Pending</option>
                    <option value="in_progress">In Progress</option>
                    <option value="completed">Completed</option>
                    <option value="delivered">Delivered</option>
                    <option value="approved">Approved</option>
                    <option value="rejected">Rejected</option>
                  </select>

                  <label>Type</label>
                  <select name="type">
                    <option value="ai_written">AI Written</option>
                    <option value="manually_written">Manually Written</option>
                    <option value="collaboratively_written">Collaboratively Written</option>
                  </select>

                <button className='button-article' type="button" onClick={prevStep}>Previous</button>
                <button className="button-article " type="button" onClick={nextStep}>Next</button>
            </form>
        </div>
    );
};

export default StepTwo;
