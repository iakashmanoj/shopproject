import React, { useState, useEffect } from 'react';

const Debounce = ({ delay, onChange }) => {
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    const timer = setTimeout(() => {
      onChange(inputValue);
    }, delay);

    return () => {
      clearTimeout(timer);
    };
  }, [inputValue, onChange, delay]);

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <input
      type="text"
      value={inputValue}
      onChange={handleChange}
      placeholder="Type something..."
    />
  );
};

export default Debounce;
