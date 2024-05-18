import React, { useState } from 'react';

const InputWithValidation = ({ value, onChange, isRequired, errorMessage, type }) => {
  const [isEmpty, setIsEmpty] = useState(false);

  const handleInputChange = (e) => {
    onChange(e.target.value);
    setIsEmpty(e.target.value === '');
  };

  const handleBlur = () => {
    setIsEmpty(value === '' && isRequired);
  };

  const handleRadioChange = (e) => {
    onChange(e.target.value);
    setIsEmpty(e.target.value === '');
  };

  return (
<form>
<div className="relative">
{type === 'text' && (
  <input
    type="text"
    value={value}
    onChange={handleInputChange}
    onBlur={handleBlur}
    className={`block w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300 ${
      isEmpty && isRequired ? 'border-red-500' : 'border-gray-300'
    }`}
  />
)}
{type === 'radio' && (
  <div className="flex items-center space-x-4">
    <input
      type="radio"
      value="yes"
      checked={value === 'yes'}
      onChange={handleRadioChange}
      onBlur={handleBlur}
      className="form-radio h-5 w-5 text-blue-600"
    />
    <input
      type="radio"
      value="no"
      checked={value === 'no'}
      onChange={handleRadioChange}
      onBlur={handleBlur}
      className="form-radio h-5 w-5 text-blue-600"
    />
  </div>
)}
{isEmpty && isRequired && (
  <p className="absolute bottom-0 left-0 text-xs text-red-500 mt-1 ml-1">{errorMessage}</p>
)}
</div>
</form>
  );
};

export default InputWithValidation;
