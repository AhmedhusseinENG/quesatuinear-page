import React, { useState } from 'react';
import './SelectBox.css';

const SelectBox = ({ options, onSelect }) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  const filteredOptions = options.filter(option =>
    option.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSelect = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
    onSelect(option);
  };

  return (
    <div className="select-box-container">
      <div className="select-box">
        <div
          className="selected-option"
          onClick={() => setIsOpen(!isOpen)}
        >
          {selectedOption || 'Select an option'}
        </div>
        {isOpen && (
          <div className="dropdown">
            <input
              type="text"
              className="search-box"
              placeholder="Search..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <div className="options-container">
              {filteredOptions.length > 0 ? (
                filteredOptions.map((option, index) => (
                  <div
                    key={index}
                    className={`option ${selectedOption === option ? 'selected' : ''}`}
                    onClick={() => handleSelect(option)}
                  >
                    {option}
                  </div>
                ))
              ) : (
                <div className="no-options">No options found</div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SelectBox;