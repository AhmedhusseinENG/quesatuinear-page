// import React from 'react';

// const GridSystem = ({ labels  , prefix}) => {
//   return (
//     <div dir="rtl" className="container mx-auto">
//       <div className={`${(labels.length) % 2 !== 0 ? "grid-flow-row":"grid-cols-2 " } w-[500px]  grid grid-flow-row gap-4 `}>
//         {labels.map((label, index) => (
//           <div key={index} className="   justify-items-center justify-center min-w-40 grid grid-cols-2 gap-4">
//             <div className="col-span-1">
//               <label htmlFor={`${prefix}-option-${index + 1}`} className="text-gray-700">{label}</label>
//             </div>
//             <div className="col-span-1">
//               <input type="radio" id={`${prefix}-option-${index + 1}`} name="options" className="form-radio h-5 w-5 text-indigo-600" />
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default GridSystem;

// // import React from 'react';

// // const GridSystem = ({ labels }) => {
// //   return (
// //     <div dir="rtl" className="container mx-auto">
// //       <div className="w-[500px] grid grid-cols-2 gap-4">
// //         {labels.map((label, index) => (
// //           <div key={index} className="flex justify-center items-center">
// //             <div className="flex-grow" >
// //               <label htmlFor={`option-${index + 1}`} className="text-gray-700">{label}</label>
// //               <input type="radio" id={`option-${index + 1}`} name="options" className="form-radio h-5 w-5 text-indigo-600" />
// //             </div>
// //             <div>
// //             </div>
// //           </div>
// //         ))}
// //       </div>
// //     </div>
// //   );
// // };

// // export default GridSystem;

// // import React from 'react';

// // const GridSystem = ({ labels }) => {
// //   return (
// //     <div dir="rtl" className="container mx-auto">
// //       <div className="w-[500px] grid grid-cols-2 gap-8"> {/* Increased gap between columns */}
// //         {labels.map((label, index) => (
// //           <div key={index} className=" flex items-center gap-2"> {/* Reduced gap between label and input */}
// //             <div className="flex-grow">
// //               <label htmlFor={`option-${index + 1}`} className="text-gray-700">{label}</label>
// //             </div>
// //             <div>
// //               <input type="radio" id={`option-${index + 1}`} name="options" className="form-radio h-5 w-5 text-indigo-600" />
// //             </div>
// //           </div>
// //         ))}
// //       </div>
// //     </div>
// //   );
// // };

// // export default GridSystem;

// // v--
// // import React from 'react';

// // const GridSystem = ({ labels, prefix }) => {
// //   return (
// //     <div className="grid grid-cols-2 gap-8">
// //       {labels.map((label, index) => (
// //         <div key={index} className="flex items-center gap-2">
// //           <div className="flex-grow">
// //             <label htmlFor={`${prefix}-option-${index + 1}`} className="text-gray-700">{label}</label>
// //           </div>
// //           <div>
// //             <input type="radio" id={`${prefix}-option-${index + 1}`} name={`${prefix}-options`} className="form-radio h-5 w-5 text-indigo-600" />
// //           </div>
// //         </div>
// //       ))}
// //     </div>
// //   );
// // };

// // export default GridSystem;


// //  V5
import React, { useState } from 'react';
import"../App.css";
const GridSystem = ({ labels, prefix, onChoiceChange, disabled  , errors }) => {
  // Function to handle radio button change
  const [isRequired,setIsRequired]=useState(false);
  const [iserror,setIserror]=useState(false);
  // const [errorMessage, setErrorMessage] = useState('');
    // Handler for when a radio button value changes
    const handleRadioChangeALert = (e) => {
      // setRadioValue(e.target.value);
      console.log(e)
      if (!e.target) {
        setIsRequired(true);
        // setErrorMessage('Please select an option.');
      } else {
        setIsRequired(false);
        // setErrorMessage('');
      }
    };
  
  const handleRadioChange = (index) => {
    const selectedLabel = labels[index];
    if (prefix === "first" && onChoiceChange) {
      onChoiceChange(selectedLabel);
    }
    if (index < 0) {
      setIsRequired(true);
      // setErrorMessage('Please select an option.');
    } else {
      setIsRequired(false);
      // setErrorMessage('');
    }
 
  };

  const handelerror = (e) => {setIserror(e.console.error())}
  const handelfocus = (e) => {
    console.log(e.target.id);
  }
  // {errorMessage && <div className={` invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500" } `}>{errorMessage}</div>}
  return (
    <div className="  box1  mx-auto">
    <p className='mr-[30px] text-red-700'>*</p>

    <div className={`${(labels.length) % 2  !== 0   ? "grid-flow-row":"grid-cols-2 " } w-[500px]  grid grid-flow-row gap-4  ${ prefix == "grid2" || prefix == "second" || prefix == "four" || prefix == "six" || prefix == "eight"    ? "  ":" "} `}>
   
        {labels.map((label, index) => (
          <div key={index} className={`  p-1 m-1  hover:rounded   justify-items-center justify-center min-w-40 grid grid-cols-2 gap-4`}>
            <div className="col-span-1">
              <label htmlFor={`${prefix}-option-${index + 1}`} className={`${disabled ? " text-red-500 line-through opacity-35 " :"text-gray-700"} transition-all  `}>{label}</label>
            </div>
            <div className="col-span-1">
              <input
                type="radio"
                id={`${prefix}-option-${index + 1}`}
                name={`${prefix}-options`}
                className={` ${disabled && prefix === "third" ? "focus:outline-none focus:ring focus:ring-violet-300 cursor-not-allowed":""}  form-radio h-5 w-5 text-indigo-600 cursor-pointer ${isRequired ? " ":" invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500" } `}
                onChange={() => [handleRadioChangeALert(index), handleRadioChange(index)]}
                disabled={disabled && prefix !== "first"}
                required={!disabled || prefix === "first"} 
                onFocus={handelfocus}
                onError={handelerror}
                // Only required if not disabled or first component
              />
            </div>
          </div>
        ))}
     
      </div>
    </div>
  );
};

export default GridSystem;
// // if neede
// // || labels.length == 2

// import React, { useRef, useEffect, useState } from 'react';
// import InputWithValidation from '../Component/InputWithValidation';
// 
// const GridSystem = ({ labels, prefix, onChoiceChange, disabled }) => {
//   const [selectedOption, setSelectedOption] = useState('');

//   const thirdComponentRef = useRef(null);

//   useEffect(() => {
//     if (prefix === "second" && disabled && labels.length === 2 && thirdComponentRef.current) {
//       thirdComponentRef.current.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' });
//     }
//   }, [disabled, labels.length, prefix]);

//   const handleRadioChange = (value) => {
//     setSelectedOption(value);
//     if (prefix === "first" && onChoiceChange) {
//       onChoiceChange(value);
//     }
//   };

//   return (
//     <div className="container mx-auto">
//       <div className={`${(labels.length) % 2 !== 0 ? "grid-flow-row" : "grid-cols-2"} w-[500px] grid grid-flow-row gap-4 `}>
//         {labels.map((label, index) => (
//           <div key={index} className="justify-items-center justify-center min-w-40 grid grid-cols-2 gap-4">
//             <div className="col-span-1">
//               <label htmlFor={`${prefix}-option-${index + 1}`} className={`${disabled ? "text-red-500 line-through opacity-35" : "text-gray-700"} transition-all`}>{label}</label>
//             </div>
//             <div className="col-span-1">
//               <InputWithValidation
//                 type="radio"
//                 value={selectedOption}
//                 onChange={handleRadioChange}
//                 isRequired={!disabled}
//                 errorMessage="The field is required. You must fill it."
//               />
//             </div>
//           </div>
//         ))}
//       </div>
//       {prefix === "third" && (
//         <input
//           ref={thirdComponentRef}
//           className={`btn ${disabled ? "opacity-50 cursor-not-allowed" : "focus:ring focus:ring-violet-300"}`}
//           type="submit"
//           value="Submit"
//         />
//       )}
//     </div>
//   );
// };

// export default GridSystem;








//  V6 
