import React, { useState } from 'react';
import SelectBox from './SelectBox';

const MyComponent = () => {
  const [selectedValue, setSelectedValue] = useState(null);

  const handleSelect = (value) => {
    setSelectedValue(value);
  };

  const options = ['Option 1', 'Option 2', 'Option 3', 'Option 4', 'Option 5'];

  return (
    <div>
      <SelectBox options={options} onSelect={handleSelect} />
      <p>Selected value: {selectedValue}</p>
    </div>
  );
};

export default MyComponent;