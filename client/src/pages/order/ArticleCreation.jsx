import { useState, useEffect, useMemo } from 'react';
import './ArticleCreation.css';
import { useCreateArticleMutation } from '../../slices/client/articleCreationApiSlice';
import { useGetTimeFrameQuery } from '../../slices/client/blogApiSlice';

const ArticleCreation = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [keywords, setKeywords] = useState('');
  const [wordCount, setWordCount] = useState(''); // Ensure this is a string for correct parsing later
  const [timeFrame, setTimeFrame] = useState('');
  const [toneStyle, setToneStyle] = useState('');
  const [links, setLinks] = useState('');
  const [complexity, setComplexity] = useState('basic');
  const [cost, setCost] = useState(0);

  const { data: timeframe, isLoading: isLoadingTimeframe, isError: isErrorTimeframe } = useGetTimeFrameQuery();

  const costPerWord = 0.06;
  const complexityMultiplier = useMemo(() => ({
    basic: 1,
    intermediate: 1.5,
    advanced: 2
  }), []);

  const [createArticle, { isLoading, isError, error }] = useCreateArticleMutation();

  useEffect(() => {
    if (wordCount) {
      const baseCost = wordCount * costPerWord;
      const finalCost = baseCost * complexityMultiplier[complexity];
      setCost(finalCost);
    }
  }, [wordCount, complexity, complexityMultiplier]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate wordCount
    const parsedWordCount = parseInt(wordCount, 10);
    if (isNaN(parsedWordCount) || parsedWordCount <= 0) {
      alert('Word count must be a positive integer');
      return;
    }

    try {
      await createArticle({
        title,
        description,
        keywords,
        word_count: parsedWordCount, // Ensure integer is sent
        tone_style: toneStyle,
        links,
        complexity,
        cost,
        number_of_words_id: parsedWordCount, // Assuming this should map to the same as word_count
        timeframe_id: parseInt(timeFrame, 10) // Ensure integer is sent
      }).unwrap();
      setTitle('');
      setDescription('');
      setKeywords('');
      setWordCount('');
      setTimeFrame('');
      setToneStyle('');
      setLinks('');
      setComplexity('basic');
      setCost(0);
      alert('Article created successfully!');
    } catch (error) {
      console.log('Failed to create article:', error);
    }
  };

  return (
    <div className='new-blog-section' id="page-section">
      <form className='article' id="form-input" onSubmit={handleSubmit}>
        <div className="create-input-container">
          <p className="create-input">Create New Article</p>
        </div>

        <div className="blog-form-group" id='blog'>
          <label htmlFor="title" className="blog-input-label">Title</label>
          <input 
            type="text" 
            id="title" 
            className="article-input"
            value={title} 
            onChange={(e) => setTitle(e.target.value)} 
            placeholder='Title'
          />
        </div>

        <div className="article-description-group">
          <label htmlFor="description" className="article-description-label">Description</label>
          <div className="floating-description-input">
            <textarea 
              id="description" 
              className="article-description-input"
              value={description} 
              onChange={(e) => setDescription(e.target.value)} 
              placeholder="Description"
            ></textarea>
          </div>
        </div>

        <div className="article-flex-container">
          <div className="article-flex-item">
            <div className="article-select-group">
              <label htmlFor="wordCount" className="article-select-label">Word Count</label>
              <select 
                id="wordCount" 
                className="article-select"
                value={wordCount} 
                onChange={(e) => setWordCount(e.target.value)} 
                required
              >
                <option value="">Select word count</option>
                <option value={500}>500</option>
                <option value={1000}>1000</option>
                <option value={1500}>1500</option>
                <option value={2000}>2000</option>
                <option value={2500}>2500</option>
              </select>
            </div>
          </div>

          <div className="article-flex-item">
            <div className="article-select-group">
              <label htmlFor="timeFrame" className="article-select-label">Time Frame</label>
              <select 
                id="timeFrame" 
                className="article-select"
                value={timeFrame} 
                onChange={(e) => setTimeFrame(e.target.value)} 
                required
              >
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
        </div>

        <div className="new-article-section">
          <div className="article-form-group">
            <label className="article-input-label" htmlFor="tone-style">Tone and Style:</label>
            <select
              className="article-select"
              id="tone-style"
              value={toneStyle}
              onChange={(e) => setToneStyle(e.target.value)}
              required
            >
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
          <label htmlFor="links">Links (optional):</label>
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
