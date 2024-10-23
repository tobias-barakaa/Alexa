import React, { useState, useRef } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const QuillEditor = () => {
  const [value, setValue] = useState('');
  const quillRef = useRef(null);

  const handleChange = (newContent) => {
    setValue(newContent);
  };

  const handleFocus = () => {
    quillRef.current.focus();
  };

  return (
    <div>
      <ReactQuill
        theme="snow"
        value={value}
        onChange={handleChange}
        onFocus={handleFocus}
        ref={quillRef}
      />
    </div>
  );
};

export default QuillEditor;