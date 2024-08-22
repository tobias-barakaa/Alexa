// import { useState, useEffect } from "react";
// import {
//   useCreateBlogMutation,
//   useGetCategoriesQuery,
//   useGetNumberOfWordsQuery,
//   useGetTimeFrameQuery,
// } from "../../../slices/client/blogApiSlice";
// import { useNavigate } from "react-router-dom";
// import "../styles/pages/BlogForm.css";
// import Loader from "../dashboard/components/Loader";

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

//     setFormData((prevData) => ({
//       ...prevData,
//       cost,
//     }));
//   }, [
//     formData.number_of_words_id,
//     formData.timeframe_id,
//     numberOfWords,
//     timeFrames,
//   ]);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));

//     // Remove the error message for the field being modified
//     setErrors((prevErrors) => ({
//       ...prevErrors,
//       [name]: "",
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const newErrors = {};
    
//     // Validate each field
//     if (!formData.title) newErrors.title = "Title is required";
//     if (!formData.category_id) newErrors.category_id = "Category is required";
//     if (!formData.tags) newErrors.tags = "Tags/Keywords are required";
//     if (!formData.excerpt) newErrors.excerpt = "Excerpt is required";
//     if (!formData.number_of_words_id)
//       newErrors.number_of_words_id = "Number of words is required";
//     if (!formData.timeframe_id) newErrors.timeframe_id = "Timeframe is required";

//     // Check if there are any errors
//     if (Object.keys(newErrors).length > 0) {
//       setErrors(newErrors);
//       return;
//     }

//     // If no errors, show the loader and proceed with form submission
//     setLoading(true);

//     try {
//       await createBlog(formData).unwrap();
//       navigate("/dashboard")
//     } catch (error) {
//       alert("Failed to create blog.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="blog-form-container">
//       <p className="blog-form-title">Create Your Blog Post</p>

//       <div className="blog-form-inner">
//         <form onSubmit={handleSubmit} className="blog-form">
//           <div className="form-group">
//             <label htmlFor="title" className="email-label">
//               Title
//             </label>
//             <input
//               type="text"
//               id="title"
//               name="title"
//               className={`input-class ${errors.title ? "input-error" : ""}`}
//               value={formData.title}
//               onChange={handleChange}
//               placeholder="Title"
//             />
//             {errors.title && <span className="error-message">{errors.title}</span>}
//           </div>

//           <div className="form-group">
//             <label htmlFor="category_id" className="label">
//               Category
//             </label>
//             <select
//               name="category_id"
//               value={formData.category_id}
//               onChange={handleChange}
//               className={`input-class ${errors.category_id ? "input-error" : ""}`}
//             >
//               <option value="">Select Category</option>
//               {categories.map((category) => (
//                 <option key={category.id} value={category.id}>
//                   {category.name}
//                 </option>
//               ))}
//             </select>
//             {errors.category_id && <span className="error-message">{errors.category_id}</span>}
//           </div>

//           <div className="form-group">
//             <label htmlFor="tags" className="label">
//               Tags/Keywords
//             </label>
//             <input
//               type="text"
//               id="tags"
//               name="tags"
//               className={`input-class ${errors.tags ? "input-error" : ""}`}
//               placeholder="Tags/Keywords"
//               value={formData.tags}
//               onChange={handleChange}
//             />
//             {errors.tags && <span className="error-message">{errors.tags}</span>}
//           </div>

//           <div className="form-group">
//             <label htmlFor="excerpt" className="label">
//               Excerpt
//             </label>
//             <textarea
//               name="excerpt"
//               value={formData.excerpt}
//               onChange={handleChange}
//               className={`textarea-class ${errors.excerpt ? "input-error" : ""}`}
//             />
//             {errors.excerpt && <span className="error-message">{errors.excerpt}</span>}
//           </div>

//           <div className="form-group">
//             <label htmlFor="number_of_words_id" className="label">
//               Number of Words
//             </label>
//             <select
//               name="number_of_words_id"
//               value={formData.number_of_words_id}
//               onChange={handleChange}
//               className={`input-class ${errors.number_of_words_id ? "input-error" : ""}`}
//             >
//               <option value="">Select Number of Words</option>
//               {numberOfWords.map((word) => (
//                 <option key={word.id} value={word.id}>
//                   {word.name}
//                 </option>
//               ))}
//             </select>
//             {errors.number_of_words_id && <span className="error-message">{errors.number_of_words_id}</span>}
//           </div>

//           <div className="form-group">
//             <label htmlFor="timeframe_id" className="label">
//               Timeframe
//             </label>
//             <select
//               name="timeframe_id"
//               value={formData.timeframe_id}
//               onChange={handleChange}
//               className={`input-class ${errors.timeframe_id ? "input-error" : ""}`}
//             >
//               <option value="">Select Timeframe</option>
//               {timeFrames.map((timeFrame) => (
//                 <option key={timeFrame.id} value={timeFrame.id}>
//                   {timeFrame.timeframe}
//                 </option>
//               ))}
//             </select>
//             {errors.timeframe_id && <span className="error-message">{errors.timeframe_id}</span>}
//           </div>

//           <div className="form-group">
//             <label className="form-label">
//               Estimated Cost: ${formData.cost.toFixed(2)}
//             </label>
//           </div>

//           <button type="submit" className="submit-button" disabled={loading}>
//             Submit
//           </button>
//         </form>

//         {/* Show the loader if the form is being submitted */}
//         {loading && <Loader />}
//       </div>
//     </div>
//   );
// };

// export default BlogForm;

//components/BlogForm.jsx
import { useState, useEffect } from "react";
import { useCreateBlogMutation, useGetCategoriesQuery, useGetNumberOfWordsQuery, useGetTimeFrameQuery } from "../../../slices/client/blogApiSlice";
import { useNavigate } from "react-router-dom";
import Loader from "../dashboard/components/Loader";
import FormLayout from "../dashboard/components/FormLayout";

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

  useEffect(() => {
    const selectedWord = numberOfWords.find(
      (word) => word.id === parseInt(formData.number_of_words_id)
    );
    const selectedTimeFrame = timeFrames.find(
      (time) => time.id === parseInt(formData.timeframe_id)
    );

    let cost = 0;
    if (selectedWord && selectedTimeFrame) {
      cost = selectedWord.word_count * 0.05 + selectedTimeFrame.timeframe.length * 2;
    }

    setFormData((prevData) => ({
      ...prevData,
      cost,
    }));
  }, [
    formData.number_of_words_id,
    formData.timeframe_id,
    numberOfWords,
    timeFrames,
  ]);

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
    if (!formData.number_of_words_id) newErrors.number_of_words_id = "Number of words is required";
    if (!formData.timeframe_id) newErrors.timeframe_id = "Timeframe is required";

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
    <FormLayout title="Create Your Blog Post">
      <form onSubmit={handleSubmit} className="blog-form">
        
        <div className="form-group">
          <label htmlFor="title" className="label">Title</label>
          <input
            type="text"
            id="title"
            name="title"
            className={`input-class ${errors.title ? "input-error" : ""}`}
            value={formData.title}
            onChange={handleChange}
            placeholder="Title"
          />
          {errors.title && <span className="error-message">{errors.title}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="category_id" className="label">Category</label>
          <select
            name="category_id"
            value={formData.category_id}
            onChange={handleChange}
            className={`input-class ${errors.category_id ? "input-error" : ""}`}
          >
            <option value="">Select Category</option>
            {categories.map((category) => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </select>
          {errors.category_id && <span className="error-message">{errors.category_id}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="tags" className="label">Tags/Keywords</label>
          <input
            type="text"
            id="tags"
            name="tags"
            className={`input-class ${errors.tags ? "input-error" : ""}`}
            value={formData.tags}
            onChange={handleChange}
            placeholder="Tags/Keywords"
          />
          {errors.tags && <span className="error-message">{errors.tags}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="excerpt" className="label">Excerpt</label>
          <textarea
            name="excerpt"
            value={formData.excerpt}
            onChange={handleChange}
            className={`textarea-class ${errors.excerpt ? "input-error" : ""}`}
            placeholder="Excerpt"
          />
          {errors.excerpt && <span className="error-message">{errors.excerpt}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="number_of_words_id" className="label">Number of Words</label>
          <select
            name="number_of_words_id"
            value={formData.number_of_words_id}
            onChange={handleChange}
            className={`input-class ${errors.number_of_words_id ? "input-error" : ""}`}
          >
            <option value="">Select Number of Words</option>
            {numberOfWords.map((word) => (
              <option key={word.id} value={word.id}>
                {word.name}
              </option>
            ))}
          </select>
          {errors.number_of_words_id && <span className="error-message">{errors.number_of_words_id}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="timeframe_id" className="label">Timeframe</label>
          <select
            name="timeframe_id"
            value={formData.timeframe_id}
            onChange={handleChange}
            className={`input-class ${errors.timeframe_id ? "input-error" : ""}`}
          >
            <option value="">Select Timeframe</option>
            {timeFrames.map((timeFrame) => (
              <option key={timeFrame.id} value={timeFrame.id}>
                {timeFrame.timeframe}
              </option>
            ))}
          </select>
          {errors.timeframe_id && <span className="error-message">{errors.timeframe_id}</span>}
        </div>

        <div className="form-group">
          <label className="form-label">
            Estimated Cost: ${formData.cost.toFixed(2)}
          </label>
        </div>

        <button type="submit" className="submit-button" disabled={loading}>
          Submit
        </button>
      </form>
      {loading && <Loader />}
    </FormLayout>
  );
};

export default BlogForm;



