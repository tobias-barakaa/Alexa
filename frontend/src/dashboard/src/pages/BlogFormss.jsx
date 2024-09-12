import React from 'react';
import './BlogForm.css';

const BlogForm = () => {
  return (
    <div className="blog-form-container">
      {/* Sidebar */}
      <div className="sidebar">
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#profile">Profile</a></li>
          <li><a href="#settings">Settings</a></li>
          <li><a href="#logout">Logout</a></li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="main-content">
        {/* Navigation Bar */}
        <div className="navbar">
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#profile">Profile</a></li>
            <li><a href="#settings">Settings</a></li>
            <li><a href="#logout">Logout</a></li>
          </ul>
        </div>

        {/* Blog Form */}
        <div className="form-section">
          <h2>Create Blog</h2>
          <form>
            <div className="form-group">
              <label>Title:</label>
              <input type="text" name="title" placeholder="Enter blog title" />
            </div>

            <div className="form-group">
              <label>Category:</label>
              <select name="category">
                <option value="">Select Category</option>
                <option value="tech">Tech</option>
                <option value="health">Health</option>
              </select>
            </div>

            <div className="form-group">
              <label>Content:</label>
              <textarea name="content" placeholder="Write your blog..."></textarea>
            </div>

            <button type="submit">Submit</button>
          </form>

          <form>
            <div className="form-group">
              <label>Title:</label>
              <input type="text" name="title" placeholder="Enter blog title" />
            </div>

            <div className="form-group">
              <label>Category:</label>
              <select name="category">
                <option value="">Select Category</option>
                <option value="tech">Tech</option>
                <option value="health">Health</option>
              </select>
            </div>

            <div className="form-group">
              <label>Content:</label>
              <textarea name="content" placeholder="Write your blog..."></textarea>
            </div>

            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BlogForm;

























import { useState, useEffect } from "react";
import {
  useCreateBlogMutation,
  useGetCategoriesQuery,
  useGetNumberOfWordsQuery,
  useGetTimeFrameQuery,
} from "../../../slices/client/blogApiSlice";
import { useNavigate } from "react-router-dom";
// import Loader from "../dashboard/components/Loader";
import "./BlogForm.css";
// import FormLayout from "../dashboard/components/FormLayout";
import writers from "../../../client/src/assets/images/writers.jpg";
import Loader from "../components/Loader";
import Header from "../components/Header";
const BlogForm = () => {
  const [formData, setFormData] = useState({
    title: "",
    category_id: "",
    tags: "",
    excerpt: "",
    number_of_words_id: "",
    timeframe_id: "",
    cost: 0,
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const [createBlog] = useCreateBlogMutation();
  const { data: categories = [] } = useGetCategoriesQuery();
  const { data: numberOfWords = [] } = useGetNumberOfWordsQuery();
  const { data: timeFrames = [] } = useGetTimeFrameQuery();

  const navigate = useNavigate();

  const [computedCost, setComputedCost] = useState(0);

  useEffect(() => {
    const selectedWord = numberOfWords.find(
      (word) => word.id === parseInt(formData.number_of_words_id)
    );
    const selectedTimeFrame = timeFrames.find(
      (time) => time.id === parseInt(formData.timeframe_id)
    );

    let cost = 0;
    if (selectedWord && selectedTimeFrame) {
      cost =
        selectedWord.word_count * 0.05 + selectedTimeFrame.timeframe.length * 2;
    }

    setComputedCost(cost);
  }, [
    formData.number_of_words_id,
    formData.timeframe_id,
    numberOfWords,
    timeFrames,
  ]);

  useEffect(() => {
    setFormData((prevData) => ({
      ...prevData,
      cost: computedCost,
    }));
  }, [computedCost]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: "",
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newErrors = {};

    if (!formData.title) newErrors.title = "Title is required";
    if (!formData.category_id) newErrors.category_id = "Category is required";
    if (!formData.tags) newErrors.tags = "Tags/Keywords are required";
    if (!formData.excerpt) newErrors.excerpt = "Excerpt is required";
    if (!formData.number_of_words_id)
      newErrors.number_of_words_id = "Number of words is required";
    if (!formData.timeframe_id)
      newErrors.timeframe_id = "Timeframe is required";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setLoading(true);

    try {
      await createBlog(formData).unwrap();
      navigate("/dashboard");
    } catch (error) {
      alert("Failed to create blog.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="form-layout-container">
      {/* <div className="form-layout">
        <Header />
         </div> */}
      <hr style={{ width:  "100%" }} className="me" />
     {/* <p className="heading">Order Your Blogsd Writing Service Today!</p> */}



      <div className="contact">
        <div className="roww">
          <div className="col-md-9 form-sect">
            <div className="contact-form">
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label className="label">Title:</label>
                  <input
                    type="text"
                    id="title"
                    name="title"
                    className={`form-control my-input ${
                      errors.title ? "input-error" : ""
                    }`}
                    value={formData.title}
                    onChange={handleChange}
                    placeholder="Title"
                  />
                  {errors.title && (
                    <span className="error-message">{errors.title}</span>
                  )}
                </div>

                <div className="form-group">
                  <label className="label">Choose Category:</label>

                  <select
                    name="category_id"
                    value={formData.category_id}
                    onChange={handleChange}
                    className={`form-control my-input ${
                      errors.category_id ? "input-error" : ""
                    }`}
                  >
                    <option value="">Select Category</option>
                    {categories.map((category) => (
                      <option key={category.id} value={category.id}>
                        {category.name}
                      </option>
                    ))}
                  </select>
                  {errors.category_id && (
                    <span className="error-message">{errors.category_id}</span>
                  )}
                </div>

                <div className="form-group">
                  <label className="label"> Tags/Keywords</label>

                  <input
                    type="text"
                    id="tags"
                    name="tags"
                    className={`form-control my-input ${
                      errors.tags ? "input-error" : ""
                    }`}
                    value={formData.tags}
                    onChange={handleChange}
                    placeholder="Tags/Keywords"
                  />
                  {errors.tags && (
                    <span className="error-message">{errors.tags}</span>
                  )}
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label className="label">Number of Words</label>
                      <select
                        type="text"
                        id="name"
                        placeholder="Number of words"
                        name="number_of_words_id"
                        value={formData.number_of_words_id}
                        onChange={handleChange}
                        className={`form-control my-input ${
                          errors.number_of_words_id ? "input-error" : ""
                        }`}
                      >
                        <option value="">Select Number of Words</option>
                        {numberOfWords.map((word) => (
                          <option key={word.id} value={word.id}>
                            {word.name}
                          </option>
                        ))}
                      </select>
                      {errors.number_of_words_id && (
                        <span className="error-message">
                          {errors.number_of_words_id}
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="timeframe_id" className="label">
                      Timeframe
                    </label>
                    <select
                      name="timeframe_id"
                      value={formData.timeframe_id}
                      onChange={handleChange}
                      className={`input-class ${
                        errors.timeframe_id ? "input-error" : ""
                      }`}
                    >
                      <option value="">Select Timeframe</option>
                      {timeFrames.map((timeFrame) => (
                        <option key={timeFrame.id} value={timeFrame.id}>
                          {timeFrame.timeframe}
                        </option>
                      ))}
                    </select>
                    {errors.timeframe_id && (
                      <span className="error-message">
                        {errors.timeframe_id}
                      </span>
                    )}
                  </div>
                </div>

                <div className="form-group">
                  <label className="label">Excerpt:</label>
                  <textarea
                    name="excerpt"
                    value={formData.excerpt}
                    onChange={handleChange}
                    className={`form-control ${
                      errors.excerpt ? "input-error" : ""
                    }`}
                    rows="5"
                    id="comment"
                    placeholder="Excerpt"
                  ></textarea>
                  {errors.excerpt && (
                    <span className="error-message">{errors.excerpt}</span>
                  )}
                </div>

                <div className="form-cost">
                  <label className="form-label">Estimated Cost:</label>
                  <div className="cost-value">${formData.cost.toFixed(2)}</div>
                </div>

                <div className="form-group">
                  <button
                    type="submit"
                    className="btn btn-primary"
                    disabled={loading}
                  >
                    Proceed 
                  </button>
                </div>
              </form>
              {loading && <Loader />}
            </div>
          </div>

          <div className="col-md-3 writer-sect">
            <div className="contact-info">
              <img src={writers} className="writers-image" alt="image" />
              <h2>Contact Us</h2>
              <p>
                Feel free to reach out to us for any inquiries or assistance!
              </p>
              <button
                type="button"
                className="btn btn-primary"
                style={{ backgroundColor: "#000000" }}
              >
                Personal Writer
              </button>
            </div>
          <button className="btn btn-primary" style={{ border: "2px solid black", backgroundColor: "white", color: "black" }}>Order Article</button>

          </div>
          

        </div>
      </div>

      {loading && <Loader />}
    </div>
  );
};

export default BlogForm;
// import { useState, useEffect } from "react";
// import {
//   useCreateBlogMutation,
//   useGetCategoriesQuery,
//   useGetNumberOfWordsQuery,
//   useGetTimeFrameQuery,
// } from "../../../slices/client/blogApiSlice";
// import { useNavigate } from "react-router-dom";
// import Loader from "../dashboard/components/Loader";
// // import FormLayout from "../dashboard/components/FormLayout";

// const BlogForm = () => {
//   const [formData, setFormData] = useState({
//     title: "",
//     category_id: "",
//     tags: "",
//     excerpt: "",
//     number_of_words_id: "",
//     timeframe_id: "",
//     cost: 0,
//   });

//   const [errors, setErrors] = useState({});
//   const [loading, setLoading] = useState(false);

//   const [createBlog] = useCreateBlogMutation();
//   const { data: categories = [] } = useGetCategoriesQuery();
//   const { data: numberOfWords = [] } = useGetNumberOfWordsQuery();
//   const { data: timeFrames = [] } = useGetTimeFrameQuery();

//   const navigate = useNavigate();

//   const [computedCost, setComputedCost] = useState(0);

//   useEffect(() => {
//     const selectedWord = numberOfWords.find(
//       (word) => word.id === parseInt(formData.number_of_words_id)
//     );
//     const selectedTimeFrame = timeFrames.find(
//       (time) => time.id === parseInt(formData.timeframe_id)
//     );

//     let cost = 0;
//     if (selectedWord && selectedTimeFrame) {
//       cost =
//         selectedWord.word_count * 0.05 + selectedTimeFrame.timeframe.length * 2;
//     }

//     setComputedCost(cost);
//   }, [
//     formData.number_of_words_id,
//     formData.timeframe_id,
//     numberOfWords,
//     timeFrames,
//   ]);

//   useEffect(() => {
//     setFormData((prevData) => ({
//       ...prevData,
//       cost: computedCost,
//     }));
//   }, [computedCost]);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));

//     setErrors((prevErrors) => ({
//       ...prevErrors,
//       [name]: "",
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const newErrors = {};

//     if (!formData.title) newErrors.title = "Title is required";
//     if (!formData.category_id) newErrors.category_id = "Category is required";
//     if (!formData.tags) newErrors.tags = "Tags/Keywords are required";
//     if (!formData.excerpt) newErrors.excerpt = "Excerpt is required";
//     if (!formData.number_of_words_id)
//       newErrors.number_of_words_id = "Number of words is required";
//     if (!formData.timeframe_id)
//       newErrors.timeframe_id = "Timeframe is required";

//     if (Object.keys(newErrors).length > 0) {
//       setErrors(newErrors);
//       return;
//     }

//     setLoading(true);

//     try {
//       await createBlog(formData).unwrap();
//       navigate("/dashboard");
//     } catch (error) {
//       alert("Failed to create blog.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div title="Request Blog Post Services">
//       <h1>Request Blog Post Services</h1>
//       <form onSubmit={handleSubmit} className="blog-form">
//         <div className="form-group">
//           <label htmlFor="title" className="label">
//             Title
//           </label>
//           <input
//             type="text"
//             id="title"
//             name="title"
//             className={`input-class ${errors.title ? "input-error" : ""}`}
//             value={formData.title}
//             onChange={handleChange}
//             placeholder="Title"
//           />
//           {errors.title && (
//             <span className="error-message">{errors.title}</span>
//           )}
//         </div>

//         <div className="form-group">
//           <label htmlFor="category_id" className="label">
//             Category
//           </label>
//           <select
//             name="category_id"
//             value={formData.category_id}
//             onChange={handleChange}
//             className={`input-class ${errors.category_id ? "input-error" : ""}`}
//           >
//             <option value="">Select Category</option>
//             {categories.map((category) => (
//               <option key={category.id} value={category.id}>
//                 {category.name}
//               </option>
//             ))}
//           </select>
//           {errors.category_id && (
//             <span className="error-message">{errors.category_id}</span>
//           )}
//         </div>

//         <div className="form-group">
//           <label htmlFor="tags" className="label">
//             Tags/Keywords
//           </label>
//           <input
//             type="text"
//             id="tags"
//             name="tags"
//             className={`input-class ${errors.tags ? "input-error" : ""}`}
//             value={formData.tags}
//             onChange={handleChange}
//             placeholder="Tags/Keywords"
//           />
//           {errors.tags && <span className="error-message">{errors.tags}</span>}
//         </div>

//         <div className="form-group">
//           <label htmlFor="excerpt" className="label">
//             Excerpt
//           </label>
//           <textarea
//             name="excerpt"
//             value={formData.excerpt}
//             onChange={handleChange}
//             className={`textarea-class ${errors.excerpt ? "input-error" : ""}`}
//             placeholder="Excerpt"
//           />
//           {errors.excerpt && (
//             <span className="error-message">{errors.excerpt}</span>
//           )}
//         </div>

//         <div className="form-group">
//           <label htmlFor="number_of_words_id" className="label">
//             Number of Words
//           </label>
//           <select
//             name="number_of_words_id"
//             value={formData.number_of_words_id}
//             onChange={handleChange}
//             className={`input-class ${
//               errors.number_of_words_id ? "input-error" : ""
//             }`}
//           >
//             <option value="">Select Number of Words</option>
//             {numberOfWords.map((word) => (
//               <option key={word.id} value={word.id}>
//                 {word.name}
//               </option>
//             ))}
//           </select>
//           {errors.number_of_words_id && (
//             <span className="error-message">{errors.number_of_words_id}</span>
//           )}
//         </div>

//         <div className="form-group">
//           <label htmlFor="timeframe_id" className="label">
//             Timeframe
//           </label>
//           <select
//             name="timeframe_id"
//             value={formData.timeframe_id}
//             onChange={handleChange}
//             className={`input-class ${
//               errors.timeframe_id ? "input-error" : ""
//             }`}
//           >
//             <option value="">Select Timeframe</option>
//             {timeFrames.map((timeFrame) => (
//               <option key={timeFrame.id} value={timeFrame.id}>
//                 {timeFrame.timeframe}
//               </option>
//             ))}
//           </select>
//           {errors.timeframe_id && (
//             <span className="error-message">{errors.timeframe_id}</span>
//           )}
//         </div>

//         <div className="form-group">
//           <label className="form-label">
//             Estimated Cost: ${formData.cost.toFixed(2)}
//           </label>
//         </div>

//         <button type="submit" className="submit-button" disabled={loading}>
//           Submit
//         </button>
//       </form>
//       {loading && <Loader />}
//     </div>
//   );
// };

// export default BlogForm;



.form-layout-container {
  background-color: #ffffff;
  width: auto;
  border: solid 2px #c9c9c9;
  border-radius: 8px;
}
.form-layout {
  height: 40px;
}
.roww {
  display: flex;
  padding: 20px;

}

.writers-image {
  width: 100px;          
  height: auto;          
  display: block;        
  margin: 0 auto 10px;   

}
 .form-sect {
  background-color: #ffffff;
  padding: 24px;
  border: 1px solid #ddd;
  margin-right: 4px;
  border-radius: 4px;

}

.writer-sect {
  background-color: #ffffff;
  padding: 20px;
  border: 1px solid #ddd;
  margin-left: 4px; 
  height: 68vh;
  position: sticky; 
  top: 20px; 
  border-radius: 4px;
  display: table-column
}
.label {
  font-weight: 400;
  color: black;
  font-size: 10px;
}

.my-input {
  padding: 12px 14px;
  transition: border .1s linear;
  margin-top: 10px;

}

.contact-form {
  margin-bottom: 20px;
}

.contact-form button {
  background: #25274d;
  color: #fff;
  font-weight: 600;
  width: 25%;
}

.contact-form button:focus {
  box-shadow: none;
}


.heading {
  font-size: 24px;
  font-weight: bold;
  color: #333;
  text-align: center;
  margin-bottom: 20px;
  border-radius: 5px;
  padding: 10px;
  border: 1px solid #ddd; /* Light border */

  font-family:system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}






/* EstimatedCost.css */

.form-cost {
  margin-bottom: 20px; /* Space below the form group */
  padding: 15px; /* Padding inside the form group */
  background-color: #f9f9f9; /* Light background color */
  border: 1px solid #ddd; /* Light border */
  border-radius: 8px; /* Rounded corners */
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1); /* Subtle shadow */
  display: flex; /* Flexbox for alignment */
  justify-content: space-between; /* Space between label and cost */
  align-items: center; /* Center items vertically */
}

.form-label {
  font-size: 18px; /* Font size for the label */
  font-weight: bold; /* Bold label for emphasis */
  color: #333; /* Dark text color */
}

.cost-value {
  font-size: 24px; /* Larger font size for the cost */
  font-weight: bold; /* Bold text for cost */
  color: #28a745; /* Green color for cost */
  background-color: #e7f9e7; /* Light green background for cost */
  padding: 10px 15px; /* Padding around the cost */
  border-radius: 5px; /* Rounded corners */
  border: 1px solid #28a745; /* Green border */
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1); 
}



.order-button {
  width: 220px;
  height: 20px;
  border: 2px solid black;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: Arial, sans-serif;
  font-size: 12px;
  font-weight: bold;
  text-transform: uppercase;
  background-color: white;
  color: black;
  cursor: pointer;
  transition: all 0.3s ease;
  overflow: hidden;
  white-space: nowrap;
}

.order-button:hover {
  background-color: black;
  color: white;
}












































/* BusinessPage.css */

.business-page {
  display: flex; /* Flexbox for layout */
  justify-content: space-between; /* Space between left and right columns */
  padding: 20px; /* Padding around the container */
}

.left-column {
  flex: 1; /* Take up space on the left */
  background-color: #FF4500; /* Orangered background */
  color: black; /* Black text color */
  padding: 20px; /* Padding inside the left column */
  border-radius: 8px; /* Rounded corners */
}

.features {
  display: flex; /* Flexbox for feature items */
  justify-content: space-around; /* Space between items */
  height: 40px; /* Height of the feature section */
  align-items: center; /* Center items vertically */
}

.feature-item {
  display: flex; /* Flexbox for icon and text */
  flex-direction: column; /* Stack icon above text */
  align-items: center; /* Center items */
}

.feature-item svg {
  font-size: 24px; /* Icon size */
  margin-bottom: 5px; /* Space below icon */
}

.empower-title {
  font-size: 24px; /* Title font size */
  margin-top: 20px; /* Space above title */
}

.feature-image {
  max-width: 100%; /* Responsive image */
  height: auto; /* Maintain aspect ratio */
  margin-top: 20px; /* Space above image */
}

.right-column {
  flex: 1; /* Take up space on the right */
  padding: 20px; /* Padding inside the right column */
  background-color: #f9f9f9; /* Light background color */
  border-radius: 8px; /* Rounded corners */
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1); /* Box shadow */
}

.signup-title {
  font-size: 28px; /* Title font size */
  margin-bottom: 20px; /* Space below title */
}

.signup-form {
  display: flex; /* Flexbox for form layout */
  flex-direction: column; /* Stack inputs vertically */
}

.form-input {
  padding: 10px; /* Padding inside inputs */
  margin-bottom: 15px; /* Space below inputs */
  border: 1px solid #ccc; /* Border color */
  border-radius: 5px; /* Rounded corners */
}

.google-button {
  display: flex; /* Flexbox for button layout */
  align-items: center; /* Center items vertically */
  background-color: #db4437; /* Google button color */
  color: white; /* White text */
  border: none; /* No border */
  border-radius: 5px; /* Rounded corners */
  padding: 10px; /* Padding inside button */
  cursor: pointer; /* Pointer on hover */
}

.google-icon {
  width: 20px; /* Icon width */
  height: 20px; /* Icon height */
  margin-right: 10px; /* Space between icon and text */
}

.signin-question {
  margin-top: 10px; /* Space above question */
}

.submit-button {
  background-color: #007bff; /* Button color */
  color: white; /* White text */
  border: none; /* No border */
  border-radius: 5px; /* Rounded corners */
  padding: 10px; /* Padding inside button */
  cursor: pointer; /* Pointer on hover */
}



   /* BlogForm.css */

/* .blog-form-container {
    max-width: 600px;
    margin: 0 auto;
    padding: 20px;
    box-sizing: border-box;
  }
  
  .blog-form-title {
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 20px;
    text-align: center;
  }
  
  .blog-form {
    display: flex;
    flex-direction: column;
  }
  
  .form-group {
    margin-bottom: 20px;
  }
  
  .form-label {
    display: block;
    margin-bottom: 5px;
    font-weight: bold;
  }
  
  .form-input,
  .form-textarea {
    width: 100%;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
    box-sizing: border-box;
  }
  
  .form-textarea {
    resize: vertical;
  }
  
  .form-input-error {
    border-color: #ff0000;
  }
  
  .form-error-message {
    color: #ff0000;
    font-size: 12px;
    margin-top: 5px;
  }
  
  .form-submit-button {
    padding: 10px 20px;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s;
  }
  
  .form-submit-button:hover {
    background-color: #0056b3;
  }
  
  .form-submit-button:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
   