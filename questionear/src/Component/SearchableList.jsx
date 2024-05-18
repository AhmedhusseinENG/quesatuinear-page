// // import React, { useState, useRef } from 'react';

// // const SearchableList = () => {
// //     const [currentValue, setCurrentValue] = useState(null);
// //     const [options, setOptions] = useState(["naboia","samah","eman","mohab","hussein","mohamed","ahmed"]);
// //     const [listOpened, setListOpened] = useState(false);
// //     const dataListRef = useRef(null);
// //     const listElRef = useRef(null);
// //     const arrowRef = useRef(null);


// //     //  const handleChange  = (e)=> {
// //     //     const reselofSearch =e.target.value;
// //     //     setCurrentValue(reselofSearch);
// //     //  };
// //     const handleFocus = () => {
// //         if(listOpened) {
// //             setListVisible(true);
            
// //         }else {
// //             setListVisible(false);
            
// //         }
// //     };

// //     const optionTemplate = (value) => (
// //         <li
// //             key={value}
// //             className='data-option select-none break-words inline-block text-sm text-gray-500 bg-gray-100 odd:bg-gray-200 hover:bg-gray-300 hover:text-gray-700 transition-all duration-200 font-bold p-3 cursor-pointer max-w-full'
// //             onClick={() => setValue(value)}
// //         >
// //             {value}
// //         </li>
// //     );

// //     const find = (str) => {
// //         const filteredOptions = options.filter(option =>
// //             option.toLowerCase().includes(str.toLowerCase())
// //         );
// //         setOptions(filteredOptions);
// //     };

// //     const remove = (value) => {
// //         const filteredOptions = options.filter(option => option !== value);
// //         setOptions(filteredOptions);
// //     };

// //     const append = (value) => {
// //         if (!value || typeof value === 'object' || typeof value === 'symbol' || typeof value === 'function') return;
// //         value = value.toString().trim();
// //         if (value.length === 0 || options.includes(value)) return;

// //         setOptions([...options, value]);
// //         if (!currentValue) setCurrentValue(value);
// //     };

// //     const setValue = (value) => {
// //         setCurrentValue(value);
// //         setListOpened(false);
// //     };

// //     const showList = () => {
// //         setListOpened(true);
// //         listElRef.current.classList.add('opacity-100');
// //         listElRef.current.classList.add('scale-100');
// //         arrowRef.current.classList.add("rotate-0");
// //     };

// //     const hideList = () => {
// //         setListOpened(false);
// //         listElRef.current.classList.remove('opacity-100');
// //         listElRef.current.classList.remove('scale-100');
// //         arrowRef.current.classList.remove("rotate-0");
// //         setCurrentValue(currentValue);
// //     };

// //     const handleClickOutside = (event) => {
// //         if (dataListRef.current && !dataListRef.current.contains(event.target)) {
// //             hideList();
// //         }
// //         // console.log(dataListRef.current);
// //     };

// //     const handleInputChange = (e) => {
// //         find(e.target.value);
// //         // remove(e.target.value);
// //         setCurrentValue(e.target.value);

// //     };

// //     const handleInputClick = () => {
// //         showList();
// //     };

// //     const handleInputBlur = () => {
// //         hideList();
// //     };

// //     return (
// //         <div className='bg-sky-300 w-screen h-screen flex justify-center items-start pt-32' ref={dataListRef}>
// //             <div     onMouseOut={handleClickOutside} className='relative searchable-list'>
// //                 <input 
// //                     type='text'
// //                     className='data-list peer w-30 h-10 rounded-sm bg-white cursor-pointer outline-none text-gray-700 caret-gray-800 pl-2 pr-7 focus:bg-gray-200 font-bold transition-all duration-300 text-sm text-overflow-ellipsis'
// //                     spellCheck='false'
// //                     placeholder=' Choose Name'
// //                     onClick={handleInputClick}
// //                     onBlur={handleInputBlur}
// //                     onChange={handleInputChange}
// //                     onFocus={handleFocus}
// //                     value={currentValue || ''}
// //                 />
// //                 <svg
// //                     ref={arrowRef}
// //                     className="outline-none cursor-pointer fill-gray-400 absolute transition-all duration-200 h-full w-4 -rotate-90 right-2 top-[50%] -translate-y-[50%]"
// //                     viewBox="0 0 1024 1024"
// //                     version="1.1"
// //                     xmlns="http://www.w3.org/2000/svg"
// //                     xmlnsXlink="http://www.w3.org/1999/xlink"
// //                     onClick={() => listOpened ? hideList() : showList()}
// //                 >
// //                     <path d="M0 256l512 512L1024 256z"></path>
// //                 </svg>
// //                 <ul
// //                     ref={listElRef}
// //                     className='absolute option-list overflow-y-scroll max-h-64 min-h-[0px] flex flex-col top-12 left-0 max-w-[120%] min-w-[120%] bg-white rounded-sm scale-0 opacity-0 transition-all duration-200 origin-top-left'
// //                 >
// //                     {options.map(option => optionTemplate(option))}
// //                 </ul>
// //             </div>
// //         </div>
// //     );
// // };

// // export default SearchableList;



// // import React, { useState, useRef } from 'react';

// // const SearchableList = () => {
// //     const [currentValue, setCurrentValue] = useState('');
// //     const [options, setOptions] = useState(["naboia","samah","eman","mohab","hussein","mohamed","ahmed"]);
// //     const [listOpened, setListOpened] = useState(false);
// //     const dataListRef = useRef(null);
// //     const listElRef = useRef(null);
// //     const arrowRef = useRef(null);

// //     const optionTemplate = (value) => (
// //         <li
// //             key={value}
// //             className='data-option select-none break-words inline-block text-sm text-gray-500 bg-gray-100 odd:bg-gray-200 hover:bg-gray-300 hover:text-gray-700 transition-all duration-200 font-bold p-3 cursor-pointer max-w-full'
// //             onClick={() => setValue(value)}
// //         >
// //             {value}
// //         </li>
// //     );

// //     const find = (str) => {
// //         const filteredOptions = options.filter(option =>
// //             option.toLowerCase().includes(str.toLowerCase())
// //         );
// //         setOptions(filteredOptions);
// //     };

// //     const remove = (value) => {
// //         const filteredOptions = options.filter(option => option !== value);
// //         setOptions(filteredOptions);
// //     };

// //     const append = (value) => {
// //         if (value && !options.includes(value)) {
// //             setOptions([...options, value]);
// //             if (!currentValue) setCurrentValue(value);
// //         }
// //     };

// //     const setValue = (value) => {
// //         setCurrentValue(value);
// //         setListOpened(false);
// //     };

// //     const showList = () => {
// //         setListOpened(true);
// //     };

// //     const hideList = () => {
// //         setListOpened(false);
// //     };

// //     const handleClickOutside = (event) => {
// //         if (dataListRef.current && !dataListRef.current.contains(event.target)) {
// //             hideList();
// //         }
// //     };

// //     const handleInputChange = (e) => {
// //         setCurrentValue(e.target.value);
// //         find(e.target.value);
// //     };

// //     const handleInputClick = () => {
// //         if (!listOpened) showList();
// //     };

// //     const handleInputBlur = () => {
// //         setCurrentValue(currentValue);
// //         hideList();
// //     };

// //     return (
// //         <div className='bg-sky-300 w-screen h-screen flex justify-center items-start pt-32' ref={dataListRef}>
// //             <div className='relative searchable-list'>
// //                 <input
// //                     type='text'
// //                     className='data-list peer w-30 h-10 rounded-sm bg-white cursor-pointer outline-none text-gray-700 caret-gray-800 pl-2 pr-7 focus:bg-gray-200 font-bold transition-all duration-300 text-sm text-overflow-ellipsis'
// //                     spellCheck='false'
// //                     placeholder='Select a fruit'
// //                     onClick={handleInputClick}
// //                     onBlur={handleInputBlur}
// //                     onChange={handleInputChange}
// //                     value={currentValue}
// //                 />
// //                 <svg
// //                     ref={arrowRef}
// //                     className={`outline-none cursor-pointer fill-gray-400 absolute transition-all duration-200 h-full w-4 ${listOpened ? 'rotate-0' : ''} right-2 top-[50%] -translate-y-[50%]`}
// //                     viewBox="0 0 1024 1024"
// //                     version="1.1"
// //                     xmlns="http://www.w3.org/2000/svg"
// //                     xmlnsXlink="http://www.w3.org/1999/xlink"
// //                     onClick={() => listOpened ? hideList() : showList()}
// //                 >
// //                     <path d="M0 256l512 512L1024 256z"></path>
// //                 </svg>
// //                 {listOpened && (
// //                     <ul
// //                         ref={listElRef}
// //                         className='absolute option-list overflow-y-scroll max-h-64 min-h-[0px] flex flex-col top-12 left-0 max-w-[120%] min-w-[120%] bg-white rounded-sm opacity-100 scale-100 transition-all duration-200 origin-top-left'
// //                     >
// //                         {options.map(option => optionTemplate(option))}
// //                     </ul>
// //                 )}
// //             </div>
// //         </div>
// //     );
// // };

// // export default SearchableList;
// // import React, { useState, useRef } from 'react';

// // const SearchableList = () => {
// //     const [currentValue, setCurrentValue] = useState('');
// //     const [options, setOptions] = useState(["naboia","samah","eman","mohab","hussein","mohamed","ahmed"]);
// //     const [listOpened, setListOpened] = useState(false);
// //     const dataListRef = useRef(null);
// //     const listElRef = useRef(null);
// //     const arrowRef = useRef(null);

// //     const optionTemplate = (value) => (
// //         <li
// //             key={value}
// //             className=' data-option select-none break-words inline-block text-sm text-gray-500 bg-gray-100 odd:bg-gray-200 hover:bg-gray-300 hover:text-gray-700 transition-all duration-200 font-bold p-3 cursor-pointer max-w-full'
// //             onClick={() => setValue(value)}
// //             onFocus={()=>{ listOpened ? setIsFouced(true) : ""}}
// //             onMouseOver={handelFocus}
// //         >
// //             {value}
// //         </li>
// //     );

// //     const [isFocused,setIsFouced] =useState(false);
// //     const handelFocus = () => {
// //         onfocus();
// //     }
// //     const find = (str) => {
// //         const data = ["naboia","samah","eman","mohab","hussein","mohamed","ahmed"];
// //         const filteredOptions = data.filter(option =>
// //             option.toLowerCase().includes(str.toLowerCase())
// //         );
// //         setOptions(filteredOptions);
// //     };

// //     const remove = (value) => {
// //         const filteredOptions = options.filter(option => option !== value);
// //         setOptions(filteredOptions);
// //     };

// //     const append = (value) => {
// //         if (value && !options.includes(value)) {
// //             setOptions([...options, value]);
// //             if (!currentValue) setCurrentValue(value);
// //         }
// //     };

// //     const setValue = (value) => {
// //         setCurrentValue(value);
// //         setListOpened(false);
// //     };

// //     const showList = () => {
// //         setListOpened(true);
// //     };

// //     const hideList = () => {
// //         setListOpened(false);
// //     };

// //     const handleClickOutside = (event) => {
// //         if (dataListRef.current && !dataListRef.current.contains(event.target)) {
// //             hideList();
// //         }
// //     };

// //     const handleInputChange = (e) => {
// //         setCurrentValue(e.target.value);
// //         find(e.target.value);
// //     };

// //     const handleInputClick = () => {
// //         if (!listOpened) showList();
// //     };

// //     const handleInputBlur = () => {
// //         setCurrentValue(currentValue);
// //         hideList();
// //     };

// //     return (
// //         <div className='bg-sky-300 w-screen h-screen flex justify-center items-start pt-32' ref={dataListRef}>
// //             <div className='relative searchable-list'>
// //                 <input
// //                     type='text'
// //                     className='data-list peer w-30 h-10 rounded-sm bg-white cursor-pointer outline-none text-gray-700 caret-gray-800 pl-2 pr-7 focus:bg-gray-200 font-bold transition-all duration-300 text-sm text-overflow-ellipsis'
// //                     spellCheck='false'
// //                     placeholder='Select a fruit'
// //                     onClick={handleInputClick}
// //                     onBlur={handleInputBlur}
// //                     onChange={handleInputChange}
// //                     value={currentValue}
// //                 />
// //                 <svg
// //                     ref={arrowRef}
// //                     className={`outline-none cursor-pointer fill-gray-400 absolute transition-all duration-200 h-full w-4 ${listOpened ? 'rotate-0' : ''} right-2 top-[50%] -translate-y-[50%]`}
// //                     viewBox="0 0 1024 1024"
// //                     version="1.1"
// //                     xmlns="http://www.w3.org/2000/svg"
// //                     xmlnsXlink="http://www.w3.org/1999/xlink"
// //                     onClick={() => listOpened ? hideList() : showList()}
// //                 >
// //                     <path d="M0 256l512 512L1024 256z"></path>
// //                 </svg>
// //                 {listOpened && (
// //                     <ul
// //                         ref={listElRef}
// //                         className='absolute option-list overflow-y-scroll max-h-64 min-h-[0px] flex flex-col top-12 left-0 max-w-[120%] min-w-[120%] bg-white rounded-sm opacity-100 scale-100 transition-all duration-200 origin-top-left'
// //                     >
// //                         {options.map(option => optionTemplate(option))}
// //                     </ul>
// //                 )}
// //             </div>
// //         </div>
// //     );
// // };

// // export default SearchableList;
// // // onClick={() =>{listOpened ? hideList() : showList()}}

// // import React, { useState, useRef } from 'react';

// // const SearchableList = () => {
// //     const [currentValue, setCurrentValue] = useState('');
// //     const [options, setOptions] = useState(["naboia","samah","eman","mohab","hussein","mohamed","ahmed"]);
// //     const [listOpened, setListOpened] = useState(false);
// //     const dataListRef = useRef(null);
// //     const listElRef = useRef(null);
// //     const arrowRef = useRef(null);

// //     const optionTemplate = (value) => (
// //         <li
// //             key={value}
// //             className='data-option select-none break-words inline-block text-sm text-gray-500 bg-gray-100 odd:bg-gray-200 hover:bg-gray-300 hover:text-gray-700 transition-all duration-200 font-bold p-3 cursor-pointer max-w-full'
// //             onClick={() => handleOptionClick(value)}
// //         >
// //             {value}
// //         </li>
// //     );

// //     const find = (str) => {

// //         const data = ["naboia","samah","eman","mohab","hussein","mohamed","ahmed"];
// //         const filteredOptions = data.filter(option =>
// //             option.toLowerCase().includes(str.toLowerCase())
// //         );
// //         setOptions(filteredOptions);
// //     };

// //     const remove = (value) => {
// //         const filteredOptions = options.filter(option => option !== value);
// //         setOptions(filteredOptions);
// //     };

// //     const append = (value) => {
// //         if (value && !options.includes(value)) {
// //             setOptions([...options, value]);
// //             if (!currentValue) setCurrentValue(value);
// //         }
// //     };

// //     const setValue = (value) => {
// //         setCurrentValue(value);
// //         setListOpened(false);
// //     };

// //     const handleOptionClick = (value) => {
// //         setCurrentValue(value);
// //         setListOpened(false);
// //     };

// //     const toggleList = () => {
// //         setListOpened(!listOpened);
// //     };

// //     const handleClickOutside = (event) => {
// //         if (dataListRef.current && !dataListRef.current.contains(event.target)) {
// //             setListOpened(false);
// //         }
// //     };

// //     const handleInputChange = (e) => {
// //         setCurrentValue(e.target.value);
// //         find(e.target.value);
// //     };

// //     return (
// //         <div className='bg-sky-300 w-screen h-screen flex justify-center items-start pt-32' ref={dataListRef}>
// //             <div className='relative searchable-list'>
// //                 <input
// //                     type='text'
// //                     className='data-list peer w-30 h-10 rounded-sm bg-white cursor-pointer outline-none text-gray-700 caret-gray-800 pl-2 pr-7 focus:bg-gray-200 font-bold transition-all duration-300 text-sm text-overflow-ellipsis'
// //                     spellCheck='false'
// //                     placeholder='Select a fruit'
// //                     onClick={toggleList}
// //                     onChange={handleInputChange}
// //                     value={currentValue}
// //                 />
// //                 <svg
// //                     ref={arrowRef}
// //                     className={`outline-none cursor-pointer fill-gray-400 absolute transition-all duration-200 h-full w-4 ${listOpened ? 'rotate-0' : ''} right-2 top-[50%] -translate-y-[50%]`}
// //                     viewBox="0 0 1024 1024"
// //                     version="1.1"
// //                     xmlns="http://www.w3.org/2000/svg"
// //                     xmlnsXlink="http://www.w3.org/1999/xlink"
// //                     onClick={toggleList}
// //                 >
// //                     <path d="M0 256l512 512L1024 256z"></path>
// //                 </svg>
// //                 {listOpened && (
// //                     <ul
// //                         ref={listElRef}
// //                         className='absolute option-list overflow-y-scroll max-h-64 min-h-[0px] flex flex-col top-12 left-0 max-w-[120%] min-w-[120%] bg-white rounded-sm opacity-100 scale-100 transition-all duration-200 origin-top-left'
// //                     >
// //                         {options.map(option => optionTemplate(option))}
// //                     </ul>
// //                 )}
// //             </div>
// //         </div>
// //     );
// // };

// // export default SearchableList;


// import React, { useState, useRef ,useEffect} from 'react';

// const SearchableList = ({ value, onChange }) => {
//     const [currentValue, setCurrentValue] = useState('');
//     const [options, setOptions] = useState( ["Eman","Ahmed","no answer"]);
//     const [listOpened, setListOpened] = useState(false);
//     const dataListRef = useRef(null);
//     const listElRef = useRef(null);
//     const arrowRef = useRef(null);

//     const optionTemplate = (value) => (
//         <li
//             key={value}
//             className=' cursor-pointer data-option select-none break-words inline-block text-sm text-gray-500 bg-gray-100 odd:bg-gray-200 hover:bg-gray-300 hover:text-gray-700 transition-all duration-200 font-bold p-3 cursor-pointer max-w-full'
//             onClick={() => handleOptionClick(value)}
//         >
//             {value}
//         </li>
//     );
//     useEffect(() => {
//         setCurrentValue(value);
//     }, [value]);
//     const mapping = {
//         "female": "mean",
//         "male": "mode",
//         "other": "median"
//         // Add more mappings as needed
//     };
//     const find = (str) => {
//         const  data = ["Eman","Ahmed","no answer"];
//         const filteredOptions = data.filter(option =>
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
//                 className={` outline-none cursor-pointer fill-gray-400 absolute transition-all duration-200 h-full w-4 ${listOpened ? 'rotate-0' : ''} right-2 top-[50%] -translate-y-[50%]`}
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

const SearchableList = ({ value, options, onChange }) => {
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
    <div className='relative  searchable-list'>
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

export default SearchableList;
