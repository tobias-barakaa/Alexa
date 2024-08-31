import { useState, useEffect } from "react";
import {
  useCreateBlogMutation,
  useGetCategoriesQuery,
  useGetNumberOfWordsQuery,
  useGetTimeFrameQuery,
} from "../../../slices/client/blogApiSlice";
import { useNavigate } from "react-router-dom";
import Loader from "../dashboard/components/Loader";
import "./BlogForm.css";
// import FormLayout from "../dashboard/components/FormLayout";
import writers from "../assets/images/writers.jpg";

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
    <div>
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
                    Submit
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
