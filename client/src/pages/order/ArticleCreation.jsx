import { useState, useEffect } from 'react';
//import { useCreateArticleMutation, useGetNumberOfWordsQuery, useGetTimeFrameQuery } from '../../slices/client/articleApiSlice';
import './ArticleCreation.css';
import { useCreateArticleMutation } from '../../slices/client/articleCreationApiSlice';
import { useGetNumberOfWordsQuery, useGetTimeFrameQuery } from '../../slices/client/blogApiSlice';

const ArticleCreation = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [keywords, setKeywords] = useState('');
  const [wordCount, setWordCount] = useState('');
  const [toneStyle, setToneStyle] = useState('');
  const [links, setLinks] = useState('');
  const [complexity, setComplexity] = useState('basic'); // New state for complexity
  const [cost, setCost] = useState(0);

  const { data: numberofwords, isLoading: isLoadingWords, isError: isErrorWords } = useGetNumberOfWordsQuery();
  const { data: timeframe, isLoading: isLoadingTimeframe, isError: isErrorTimeframe } = useGetTimeFrameQuery();

  const costPerWord = 0.06; // Base cost per word

  // Cost multipliers for different complexity levels
  const complexityMultiplier = {
    basic: 1,
    intermediate: 1.5,
    advanced: 2
  };

  const [createArticle, { isLoading, isError, error }] = useCreateArticleMutation();

  useEffect(() => {
    if (wordCount && numberofwords) {
      const selectedWord = numberofwords.find((word) => word.id === parseInt(wordCount));
      if (selectedWord) {
        const baseCost = selectedWord.words * costPerWord;
        const finalCost = baseCost * complexityMultiplier[complexity]; // Adjust cost based on complexity
        setCost(finalCost);
      }
    }
  }, [wordCount, numberofwords, complexity]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await createArticle({
        title,
        description,
        keywords,
        wordCount,
        toneStyle,
        links,
        complexity,
        cost,
      }).unwrap();
      // Handle success (e.g., clear form, show success message)
      setTitle('');
      setDescription('');
      setKeywords('');
      setWordCount('');
      setToneStyle('');
      setLinks('');
      setComplexity('basic');
      setCost(0);
      alert('Article created successfully!');
    } catch (error) {
      // Handle error (e.g., show error message)
      console.log('Failed to create article:', error);
    }
  };

  return (
    <div className='new-blog-section'>
      <form className='article' id="form-input" onSubmit={handleSubmit}>
        <div className="create-input-container">
          <p className="create-input">Create New Article</p>
        </div>

        <div className="form-group" id='blog'>
          <label htmlFor="title">Title:</label>
          <input type="text" id="title" value={title} onChange={(e) => setTitle(e.target.value)} required />
        </div>

        <div className="form-group">
          <label htmlFor="description">Description:</label>
          <textarea id="description" value={description} onChange={(e) => setDescription(e.target.value)} required></textarea>
        </div>

        <div className="form-group">
          <label htmlFor="keywords">Keywords:</label>
          <input type="text" id="keywords" value={keywords} onChange={(e) => setKeywords(e.target.value)} required />
        </div>

        <div className="flex-container">
          <div className="form-group flex-item">
            <label htmlFor="wordCount">Word Count:</label>
            <select id="wordCount" value={wordCount} onChange={(e) => setWordCount(e.target.value)} required>
              <option value="">Select word count</option>
              {isLoadingWords ? (
                <option>Loading...</option>
              ) : isErrorWords ? (
                <option>Error loading data</option>
              ) : (
                numberofwords.map(word => (
                  <option key={word.id} value={word.id}>{word.words}</option>
                ))
              )}
            </select>
          </div>

          <div className="form-group flex-item">
            <label htmlFor="timeFrame">Time Frame:</label>
            <select id="timeFrame" value={timeframe}>
              <option value="">Select time frame</option>
              {isLoadingTimeframe ? (
                <option>Loading...</option>
              ) : isErrorTimeframe ? (
                <option>Error loading data</option>
              ) : (
                timeframe.map(time => (
                  <option key={time.id} value={time.id}>{time.duration}</option>
                ))
              )}
            </select>
          </div>
        </div>

        <div className="form-group">
          <label>Tone and Style:</label>
          <select value={toneStyle} onChange={(e) => setToneStyle(e.target.value)} required>
            <option value="">Select tone and style</option>
            <option value="formal">Formal</option>
            <option value="casual">Casual</option>
            <option value="conversational">Conversational</option>
            <option value="technical">Technical</option>
            <option value="persuasive">Persuasive</option>
            <option value="informative">Informative</option>
            <option value="humorous">Humorous</option>
          </select>
        </div>

        <div className="form-group">
          <label>Complexity:</label>
          <select value={complexity} onChange={(e) => setComplexity(e.target.value)} required>
            <option value="basic">Basic</option>
            <option value="intermediate">Intermediate</option>
            <option value="advanced">Advanced</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="links">Links(optional):</label>
          <input type="text" id="links" value={links} onChange={(e) => setLinks(e.target.value)} />
        </div>

        <div className="cost-container">
          <div className="cost-label">Estimated Cost</div>
          <div className="cost-value">
            <span className="currency">$</span>
            <span className="amount">{cost.toFixed(2)}</span>
          </div>
        </div>

        <button type="submit" disabled={isLoading}>Submit</button>
        {isError && <p className="error-message">{error?.data?.message || 'Failed to create article'}</p>}
      </form>
    </div>
  );
};

export default ArticleCreation;
