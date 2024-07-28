import { useState } from 'react';
import './ArticleCreation.css';
import { useGetNumberOfWordsQuery, useGetTimeFrameQuery } from '../../slices/client/blogApiSlice';

const ArticleCreation = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [keywords, setKeywords] = useState('');
  const [wordCount, setWordCount] = useState('');
  const [toneStyle, setToneStyle] = useState('');
  const [links, setLinks] = useState('');
  // const [timeframe, setTimeframe] = useState('');
  // const [deadline, setDeadline] = useState('');

  const { data: numberofwords, isLoading: isLoadingWords, isError: isErrorWords } = useGetNumberOfWordsQuery();
  const { data: timeframe, isLoading: isLoadingTimeframe, isError: isErrorTimeframe } = useGetTimeFrameQuery();
 


  return (
    <div className='new-blog-section'>
<form className='article' id="form-input">
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
      <select id="timeFrame" value={timeframe}  >
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
            <option value="">Formal</option>
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
    <label htmlFor="links">Links(optinal):</label>
    <input type="text" id="links" value={links} onChange={(e) => setLinks(e.target.value)} required />
  </div>

  <button type="submit">Submit</button>
</form>
</div>
  );
};

export default ArticleCreation;
