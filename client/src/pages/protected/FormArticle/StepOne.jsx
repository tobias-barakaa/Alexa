import React from 'react';

const StepOne = ({ nextStep }) => {
    return (
        <div className="form-container">
            <h2 className='order-article-title'>ORDER ARTICLE</h2>
            <form>
            <div className="form-group">
                    <label htmlFor="content">Title:</label>
                    <input type="text" name="content" />
                </div>
                <div className="form-group">
                    <label htmlFor="description">Description:</label>
                    <textarea id="description" name="description" required />
                </div>
                <div className="form-group">
                    <label htmlFor="category">Category:</label>
                    <select name="category">
                    <option value="Finance">Finance</option>
                    <option value="Economy">Economy</option>
                    <option value="Food">Food</option>
                    <option value="Travel">Travel</option>
                    <option value="Health">Health</option>
                    <option value="Technology">Technology</option>
                    <option value="Business">Business</option>
                    <option value="Education">Education</option>
                    <option value="Entertainment">Entertainment</option>
                    <option value="Fashion">Fashion</option>
                    <option value="Sports">Sports</option>
                    <option value="Science">Science</option>
                    <option value="Environment">Environment</option>
                    <option value="Politics">Politics</option>
                    <option value="Art">Art</option>
                    <option value="History">History</option>
                    <option value="Literature">Literature</option>
                    <option value="Music">Music</option>
                    <option value="Religion">Religion</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <label>Number of Words</label>
                  <input type="number" name="number_of_words" />
                  <label>Quantity</label>
                  <input type="number" name="quantity" />
                  <label>Keywords</label>
                  <input type="text" name="keywords" />
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