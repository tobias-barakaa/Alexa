// import { useState } from 'react';
// //import { useCreateArticleMutation, useGetCategoriesQuery, useGetNumberOfWordsQuery, useGetTimeFrameQuery } from '../../../slices/client/articleApiSlice';
// import { useDispatch } from 'react-redux';
// // import { setCurrentArticle, setError } from '../../../slices/client/articleCreationSlice';
// import "../styles/pages/ArticleCreation.css";
// import { setCurrentArticle, setError } from '../../../slices/client/articleCreationSlice';
// import { useCreateArticleMutation, 
//     useGetNumberOfWordsQuery, useGetTimeFrameQuery } from '../../../slices/client/articleCreationApiSlice';
// import { useGetCategoriesQuery } from '../../../slices/client/blogApiSlice';
    

// const ArticleCreation = () => {
//   const dispatch = useDispatch();
//   const [formData, setFormData] = useState({
//     title: '',
//     description: '',
//     category: '',
//     keywords: '',
//     complexity: 'Basic', // Default value
//     word_count: '',
//     duration: '',
//     quantity: 1, // Default value
//     language: 'American English', // Default value
//     cost: 0.00, // Cost calculation to be handled
//     status: 'Pending',
//   });

//   const [createArticle] = useCreateArticleMutation();
// //   const { data: categories = [] } = useGetCategoriesQuery();
// //   const { data: numberOfWords = [] } = useGetNumberOfWordsQuery();
// //   const { data: timeFrames = [] } = useGetTimeFrameQuery();

  
// //   const [createBlog] = useCreateBlogMutation();
//   const { data: categories = [] } = useGetCategoriesQuery();
//   const { data: numberOfWords = [] } = useGetNumberOfWordsQuery();
//   const { data: timeFrames = [] } = useGetTimeFrameQuery();

//   // Function to calculate the cost based on word count, duration, and quantity
//   const calculateCost = (wordCount, duration, quantity) => {
//     let baseCost = 10; // Assuming a base cost for simplicity
//     baseCost += wordCount / 100; // Add a cost per 100 words
//     baseCost += duration.includes('week') ? 20 : 10; // Cost based on duration
//     return baseCost * quantity; // Multiply by quantity
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => {
//       const updatedData = { ...prevData, [name]: value };

//       // Update cost when word_count, duration, or quantity changes
//       if (name === 'word_count' || name === 'duration' || name === 'quantity') {
//         const newCost = calculateCost(updatedData.word_count, updatedData.duration, updatedData.quantity);
//         updatedData.cost = newCost.toFixed(2); // Update the cost with 2 decimal places
//       }

//       return updatedData;
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await createArticle(formData).unwrap();
//       dispatch(setCurrentArticle(formData));
//       alert('Article created successfully!');
//     } catch (error) {
//       dispatch(setError(error.message));
//       console.error('Failed to create article:', error);
//       alert('Failed to create article.');
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit} className="article-form">
//       <div className="form-group">
//         <label>Title</label>
//         <input
//           type="text"
//           name="title"
//           value={formData.title}
//           onChange={handleChange}
//           required
//         />
//       </div>

//       <div className="form-group">
//         <label>Description</label>
//         <textarea
//           name="description"
//           value={formData.description}
//           onChange={handleChange}
//           required
//         />
//       </div>

//       <div className="form-group">
//         <label>Category</label>
//         <select
//           name="category"
//           value={formData.category}
//           onChange={handleChange}
//           required
//         >
//           <option value="">Select Category</option>
//           {categories.map((category) => (
//             <option key={category.id} value={category.name}>
//               {category.name}
//             </option>
//           ))}
//         </select>
//       </div>

//       <div className="form-group">
//         <label>Keywords</label>
//         <input
//           type="text"
//           name="keywords"
//           value={formData.keywords}
//           onChange={handleChange}
//         />
//       </div>

//       <div className="form-group">
//         <label>Complexity</label>
//         <select
//           name="complexity"
//           value={formData.complexity}
//           onChange={handleChange}
//         >
//           <option value="Basic">Basic</option>
//           <option value="Intermediate">Intermediate</option>
//           <option value="Advanced">Advanced</option>
//         </select>
//       </div>

//       <div className="form-group">
//         <label>Number of Words</label>
//         <select
//           name="word_count"
//           value={formData.word_count}
//           onChange={handleChange}
//           required
//         >
//           <option value="">Select Number of Words</option>
//           {numberOfWords.map((word) => (
//             <option key={word.id} value={word.word_count}>
//               {word.name}
//             </option>
//           ))}
//         </select>
//       </div>

//       <div className="form-group">
//         <label>Duration</label>
//         <select
//           name="duration"
//           value={formData.duration}
//           onChange={handleChange}
//           required
//         >
//           <option value="">Select Duration</option>
//           {timeFrames.map((timeFrame) => (
//             <option key={timeFrame.id} value={timeFrame.timeframe}>
//               {timeFrame.timeframe}
//             </option>
//           ))}
//         </select>
//       </div>

//       <div className="form-group">
//         <label>Quantity</label>
//         <input
//           type="number"
//           name="quantity"
//           value={formData.quantity}
//           onChange={handleChange}
//           min="1"
//           required
//         />
//       </div>

//       <div className="form-group">
//         <label>Language</label>
//         <select
//           name="language"
//           value={formData.language}
//           onChange={handleChange}
//         >
//           <option value="American English">American English</option>
//           <option value="British English">British English</option>
//           <option value="Canadian English">Canadian English</option>
//           <option value="Australian English">Australian English</option>
//         </select>
//       </div>

//       <div className="form-group">
//         <label>Status</label>
//         <select
//           name="status"
//           value={formData.status}
//           onChange={handleChange}
//         >
//           <option value="Pending">Pending</option>
//           <option value="Published">Published</option>
//         </select>
//       </div>

//       <div className="form-group">
//         <label>Cost</label>
//         <input
//           type="text"
//           name="cost"
//           value={formData.cost}
//           readOnly
//         />
//       </div>

//       <button type="submit" className="submit-button">Create Article</button>
//     </form>
//   );
// };

// export default ArticleCreation;

import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setCurrentArticle, setError } from '../../../slices/client/articleCreationSlice';
import { useCreateArticleMutation } from '../../../slices/client/articleCreationApiSlice';
import { useGetCategoriesQuery, useGetNumberOfWordsQuery, useGetTimeFrameQuery } from '../../../slices/client/blogApiSlice';
import FormLayout from '../dashboard/components/FormLayout';
// import FormLayout from '../../components/FormLayout/FormLayout'; 

const ArticleCreation = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    category: '',
    keywords: '',
    complexity: 'Basic',
    word_count: '',
    duration: '',
    quantity: 1,
    language: 'American English',
    cost: 0.00,
    status: 'Pending',
  });

  const [formErrors, setFormErrors] = useState({});
  const [createArticle] = useCreateArticleMutation();
  const { data: categories = [] } = useGetCategoriesQuery();
  const { data: numberOfWords = [] } = useGetNumberOfWordsQuery();
  const { data: timeFrames = [] } = useGetTimeFrameQuery();

  const calculateCost = (wordCount, duration, quantity) => {
    let baseCost = 10;
    baseCost += wordCount / 100;
    baseCost += duration.includes('week') ? 20 : 10;
    return baseCost * quantity;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => {
      const updatedData = { ...prevData, [name]: value };

      if (name === 'word_count' || name === 'duration' || name === 'quantity') {
        const newCost = calculateCost(updatedData.word_count, updatedData.duration, updatedData.quantity);
        updatedData.cost = newCost.toFixed(2);
      }

      return updatedData;
    });
  };

  const validateForm = () => {
    let errors = {};
    if (!formData.title) errors.title = 'Title is required';
    if (!formData.description) errors.description = 'Description is required';
    if (!formData.category) errors.category = 'Category is required';
    if (!formData.word_count) errors.word_count = 'Number of words is required';
    if (!formData.duration) errors.duration = 'Duration is required';
    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }
    try {
      await createArticle(formData).unwrap();
      dispatch(setCurrentArticle(formData));
      alert('Article created successfully!');
    } catch (error) {
      dispatch(setError(error.message));
      console.error('Failed to create article:', error);
      alert('Failed to create article.');
    }
  };

  return (
    <FormLayout title="Request Article Creation Services">
      <form onSubmit={handleSubmit} className="article-form" aria-label="Article Creation Form">
        <div className="form-group">
          <label htmlFor="title" className="label">Title</label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="input-class"
            aria-required="true"
            aria-invalid={formErrors.title ? "true" : "false"}
          />
          {formErrors.title && <span className="error-message">{formErrors.title}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="description" className="label">Description</label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="textarea-class"
            aria-required="true"
            aria-invalid={formErrors.description ? "true" : "false"}
          />
          {formErrors.description && <span className="error-message">{formErrors.description}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="category" className="label">Category</label>
          <select
            id="category"
            name="category"
            value={formData.category}
            onChange={handleChange}
            aria-required="true"
            aria-invalid={formErrors.category ? "true" : "false"}
            className="input-class"
          >
            <option value="">Select Category</option>
            {categories.map((category) => (
              <option key={category.id} value={category.name}>
                {category.name}
              </option>
            ))}
          </select>
          {formErrors.category && <span className="error-message">{formErrors.category}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="keywords" className="label">Keywords</label>
          <input
            type="text"
            id="keywords"
            name="keywords"
            value={formData.keywords}
            onChange={handleChange}
            className="input-class"
          />
        </div>

        <div className="form-group">
          <label htmlFor="complexity" className="label"></label>
          <select
            id="complexity"
            name="complexity"
            value={formData.complexity}
            onChange={handleChange}
            className="input-class"
          >
            <option value="Basic">Basic</option>
            <option value="Intermediate">Intermediate</option>
            <option value="Advanced">Advanced</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="word_count" className="label">Number of Words</label>
          <select
            id="word_count"
            name="word_count"
            value={formData.word_count}
            onChange={handleChange}
            aria-required="true"
            aria-invalid={formErrors.word_count ? "true" : "false"}
            className="input-class"
          >
            <option value="">Select Number of Words</option>
            {numberOfWords.map((word) => (
              <option key={word.id} value={word.word_count}>
                {word.name}
              </option>
            ))}
          </select>
          {formErrors.word_count && <span className="error-message">{formErrors.word_count}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="duration" className="label">Duration</label>
          <select
            id="duration"
            name="duration"
            value={formData.duration}
            onChange={handleChange}
            aria-required="true"
            aria-invalid={formErrors.duration ? "true" : "false"}
            className="input-class"
          >
            <option value="">Select Duration</option>
            {timeFrames.map((timeFrame) => (
              <option key={timeFrame.id} value={timeFrame.timeframe}>
                {timeFrame.timeframe}
              </option>
            ))}
          </select>
          {formErrors.duration && <span className="error-message">{formErrors.duration}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="quantity" className="label">Quantity</label>
          <input
            type="number"
            id="quantity"
            name="quantity"
            value={formData.quantity}
            onChange={handleChange}
            min="1"
            className="input-class"
            aria-required="true"
          />
        </div>

        <div className="form-group">
          <label htmlFor="language" className="label">Language</label>
          <select
            id="language"
            name="language"
            value={formData.language}
            onChange={handleChange}
            className="input-class"
          >
            <option value="American English">American English</option>
            <option value="British English">British English</option>
            <option value="Canadian English">Canadian English</option>
            <option value="Australian English">Australian English</option>
          </select>
        </div>

        {/* <div className="form-group">
          <label htmlFor="status" className="label">Status</label>
          <select
            id="status"
            name="status"
            value={formData.status}
            onChange={handleChange}
            className="input-class"
          >
            <option value="Pending">Pending</option>
            <option value="Published">Published</option>
          </select>
        </div> */}

        <div className="form-group">
          <label htmlFor="cost" className="label">Cost</label>
          <input
            type="text"
            id="cost"
            name="cost"
            value={formData.cost}
            readOnly
            className="input-class"
          />
        </div>

        <button type="submit" className="submit-button">Create Article</button>
      </form>
    </FormLayout>
  );
};

export default ArticleCreation;

