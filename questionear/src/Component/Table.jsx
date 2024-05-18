// import React, { useState } from 'react';

// const Table = () => {
//   // Define state for the cell values
//   const [cell1, setCell1] = useState('');
//   const [cell2, setCell2] = useState('');

//   // Function to handle changes in cell 2
//   const handleCell2Change = (e) => {
//     const newValue = e.target.value;
//     // Update the value of cell 2
//     setCell2(newValue);
//     // Automatically update the value of cell 1
//     setCell1(newValue);
//   };

//   return (
//     <table>
//       <tbody>
//         <tr>
//           <td>Cell 1</td>
//           <td className='bg-cyan-400'>
//             {/* Input field for cell 1 */}
//             <input 
//               type="text"
//               value={cell1}
//               onChange={(e) => setCell1(e.target.value)}
//             />
//           </td>
//         </tr>
//         <tr>
//           <td>Cell 2</td>
//           <td className='bg-red-600'>
//             {/* Input field for cell 2 */}
//             <input
//               type="text"
//               value={cell2}
//               onChange={handleCell2Change} // Handle change for cell 2
//             />
//           </td>
//         </tr>
//       </tbody>
//     </table>
//   );
// };

// export default Table;


// import React, { useState } from 'react';

// const Table = () => {
//   // Define the set of values for cell 1 and cell 2
//   const cell1Options = ["Value 1", "Value 2", "Value 3", "Value 4"];
//   const cell2Options = ["Option 6", "Option 7", "Option 8", "Option 9"];

//   // Define state for the selected values of cell 1 and cell 2
//   const [cell1, setCell1] = useState('');
//   const [cell2, setCell2] = useState('');

//   // Function to handle changes in cell 1
//   const handleCell1Change = (e) => {
//     setCell1(e.target.value);
//     console.log(e.target.value);
//   };

//   // Function to handle changes in cell 2
//   const handleCell2Change = (e) => {
//     setCell2(e.target.value);
//   };

//   return (
//     <table>
//       <tbody>
//         <tr>
//           <td>Cell 1</td>
//           <td>
//             {/* Dropdown for cell 1 */}
//             <select className='bg-cyan-400' value={cell1} onChange={handleCell1Change}>
//               <option value="">Select a value</option>
//               {cell1Options.map((option, index) => (
//                 <option key={index} value={option}>{option}</option>
//               ))}
//             </select>
//           </td>
//         </tr>
//         <tr>
//           <td>Cell 2</td>
//           <td className='bg-cyan-400'>
//             {/* Autocomplete input for cell 2 */}
//             <input
//               type="text"
//               value={cell2}
//               onChange={handleCell2Change}
//               list="cell2Options"
//             />
//             <datalist id="cell2Options">
//               {cell2Options.map((option, index) => (
//                 <option key={index} value={option} />
//               ))}
//             </datalist>
//           </td>
//         </tr>
//       </tbody>
//     </table>
//   );
// };

// export default Table;



