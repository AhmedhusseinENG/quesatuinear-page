// import React, { useState, useRef } from 'react';

// const SearchableList = ({ linkedList, onChange }) => {
//     const [currentValue, setCurrentValue] = useState('');
//     const [options, setOptions] = useState(["male","female","other"]);
//     const [listOpened, setListOpened] = useState(false);
//     const dataListRef = useRef(null);
//     const listElRef = useRef(null);
//     const arrowRef = useRef(null);

//     const optionTemplate = (value) => (
//         <li
//             key={value}
//             className='data-option select-none break-words inline-block text-sm text-gray-500 bg-gray-100 odd:bg-gray-200 hover:bg-gray-300 hover:text-gray-700 transition-all duration-200 font-bold p-3 cursor-pointer max-w-full'
//             onClick={() => handleOptionClick(value)}
//         >
//             {value}
//         </li>
//     );

//     const find = (str) => {
//         const  data2 = ["male","female","other"];
//         const filteredOptions = data2.filter(option =>
//             option.toLowerCase().includes(str.toLowerCase())
//         );
//         setOptions(filteredOptions);
//     };

//     const remove = (value) => {
//         const filteredOptions = options.filter(option => option !== value);
//         setOptions(filteredOptions);
//     };

//     const append = (value) => {
//         if (value && !options.includes(value)) {
//             setOptions([...options, value]);
//             if (!currentValue) setCurrentValue(value);
//         }
//     };

//     const setValue = (value) => {
//         setCurrentValue(value);
//         setListOpened(false);
//         onChange(value); // Call the onChange function with the selected value
//     };

//     const toggleList = () => {
//         setListOpened(!listOpened);
//     };

//     const handleClickOutside = (event) => {
//         if (dataListRef.current && !dataListRef.current.contains(event.target)) {
//             setListOpened(false);
//         }
//     };

//     const handleInputChange = (e) => {
//         setCurrentValue(e.target.value);
//         find(e.target.value);
//     };

//     const handleOptionClick = (value) => {
//         setCurrentValue(value);
//         setListOpened(false);
//         onChange(value); // Call the onChange function with the selected value
//     };

//     return (
//         <div className='relative searchable-list'>
//             <input 
//             required
//                 type='text'
//                 className='data-list peer w-30 h-10 rounded-sm bg-white cursor-pointer outline-none text-gray-700 caret-gray-800 pl-2 pr-7 focus:bg-gray-200 font-bold transition-all duration-300 text-sm text-overflow-ellipsis'
//                 spellCheck='false'
//                 placeholder='Select a value'
//                 onClick={toggleList}
//                 onChange={handleInputChange}
//                 value={currentValue}
//             />
//             <svg
//                 ref={arrowRef}
//                 className={`outline-none cursor-pointer fill-gray-400 absolute transition-all duration-200 h-full w-4 ${listOpened ? 'rotate-0' : ''} right-2 top-[50%] -translate-y-[50%]`}
//                 viewBox="0 0 1024 1024"
//                 version="1.1"
//                 xmlns="http://www.w3.org/2000/svg"
//                 xmlnsXlink="http://www.w3.org/1999/xlink"
//                 onClick={toggleList}
//             >
//                 <path d="M0 256l512 512L1024 256z"></path>
//             </svg>
//             {listOpened && (
//                 <ul
//                     ref={listElRef}
//                     className='absolute option-list overflow-y-scroll max-h-64 min-h-[0px] flex flex-col top-12 left-0 max-w-[120%] min-w-[120%] bg-white rounded-sm opacity-100 scale-100 transition-all duration-200 origin-top-left'
//                 >
//                     {options.map(option => optionTemplate(option))}
//                 </ul>
//             )}
//         </div>
//     );
// };

// export default SearchableList;


// v2.2

import React, { useState, useEffect, useRef } from 'react';

const SearchableList2 = ({ value, options, onChange }) => {
  const [currentValue, setCurrentValue] = useState('');
  const [filteredOptions, setFilteredOptions] = useState([]);
  const [listOpened, setListOpened] = useState(false);
  const dataListRef = useRef(null);
  const listElRef = useRef(null);
  const arrowRef = useRef(null);

  useEffect(() => {
    setCurrentValue(value);
    setFilteredOptions(options);
  }, [value, options]);

  const handleInputChange = (e) => {
    const inputValue = e.target.value;
    setCurrentValue(inputValue);
    setFilteredOptions(options.filter(option => option.toLowerCase().includes(inputValue.toLowerCase())));
  };

  const handleOptionClick = (option) => {
    setCurrentValue(option);
    setListOpened(false);
    onChange(option);
  };

  const toggleList = () => {
    setListOpened(!listOpened);
  };

  return (
    <div className='relative searchable-list'>
      <input
        type='text'
        className='data-list peer w-30 h-10 rounded-sm bg-white cursor-pointer outline-none text-gray-700 caret-gray-800 pl-2 pr-7 focus:bg-gray-200 font-bold transition-all duration-300 text-sm text-overflow-ellipsis'
        spellCheck='false'
        placeholder='Select a value'
        onClick={toggleList}
        onChange={handleInputChange}
        value={currentValue}
      />
      <svg
        ref={arrowRef}
        className={`outline-none cursor-pointer fill-gray-400 absolute transition-all duration-200 h-full w-4 ${listOpened ? 'rotate-0' : ''} right-2 top-[50%] -translate-y-[50%]`}
        viewBox="0 0 1024 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        onClick={toggleList}
      >
        <path d="M0 256l512 512L1024 256z"></path>
      </svg>
      {listOpened && (
        <ul
          ref={listElRef}
          className='absolute option-list overflow-y-scroll max-h-64 min-h-[0px] flex flex-col top-12 left-0 max-w-[120%] min-w-[120%] bg-white rounded-sm opacity-100 scale-100 transition-all duration-200 origin-top-left'
        >
          {filteredOptions.map(option => (
            <li
              key={option}
              className='data-option select-none break-words inline-block text-sm text-gray-500 bg-gray-100 odd:bg-gray-200 hover:bg-gray-300 hover:text-gray-700 transition-all duration-200 font-bold p-3 cursor-pointer max-w-full'
              onClick={() => handleOptionClick(option)}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchableList2;
