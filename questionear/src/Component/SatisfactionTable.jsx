// import React, { useState } from 'react';

// const SatisfactionTable = () => {
//   const [selectedSatisfaction, setSelectedSatisfaction] = useState({});

//   const handleChange = (userId, value) => {
//     setSelectedSatisfaction({
//       ...selectedSatisfaction,
//       [userId]: value,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log(selectedSatisfaction);
//     // Here you can handle the form submission to the back-end
//   };

//   const users = [
//     { id: 1, name: 'User 1' },
//     { id: 2, name: 'User 2' },
//     // Add more users as needed
//   ];

//   const satisfactionLevels = ['Very Unsatisfied', 'Unsatisfied', 'Neutral', 'Satisfied', 'Very Satisfied', 'Excellent'];

//   return (
//     <form onSubmit={handleSubmit}>
//       <table className="min-w-full divide-y divide-gray-200">
//         <thead className="bg-gray-50">
//           <tr>
//             <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//               User
//             </th>
//             {satisfactionLevels.map((level, index) => (
//               <th key={index} scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                 {level}
//               </th>
//             ))}
//           </tr>
//         </thead>
//         <tbody className="bg-white divide-y divide-gray-200">
//           {users.map((user) => (
//             <tr key={user.id}>
//               <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{user.name}</td>
//               {satisfactionLevels.map((level, index) => (
//                 <td key={index} className="px-6 py-4 whitespace-nowrap">
//                   <input
//                     type="radio"
//                     name={`satisfaction-${user.id}`}
//                     value={level}
//                     checked={selectedSatisfaction[user.id] === level}
//                     onChange={() => handleChange(user.id, level)}
//                     className="form-radio text-indigo-600"
//                   />
//                 </td>
//               ))}
//             </tr>
//           ))}
//         </tbody>
//       </table>
//       <button type="submit" className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded">
//         Submit
//       </button>
//     </form>
//   );
// };

// export default SatisfactionTable;

//  V2
// import React, { useState } from 'react';
// // import axios from 'axios';

// const SatisfactionTable = () => {
//   const [users, setUsers] = useState([
//     { id: 1, name: 'User 1' },
//     { id: 2, name: 'User 2' },
//   ]);
//   const [selectedSatisfaction, setSelectedSatisfaction] = useState({});
//   const [newUserName, setNewUserName] = useState('');

//   const handleChange = (userId, value) => {
//     setSelectedSatisfaction({
//       ...selectedSatisfaction,
//       [userId]: value,
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     console.log(selectedSatisfaction);
//     // try {
//     //   const response = await axios.post('/api/submit-satisfaction', selectedSatisfaction);
//     //   console.log('Submission successful:', response.data);
//     // } catch (error) {
//     //   console.error('Error submitting data:', error);
//     // }
//   };

//   const handleAddUser = () => {
//     const newUser = {
//       id: users.length + 1,
//       name: newUserName,
//     };
//     setUsers([...users, newUser]);
//     setNewUserName('');
//   };

//   const satisfactionLevels = ['Very Unsatisfied', 'Unsatisfied', 'Neutral', 'Satisfied', 'Very Satisfied', 'Excellent'];

//   return (
//     <div className="p-4">
//       <form onSubmit={handleSubmit} className="space-y-4">
//         <table className="min-w-full divide-y divide-gray-200 shadow rounded-lg">
//           <thead className="bg-gray-100">
//             <tr>
//               <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
//                 User
//               </th>
//               {satisfactionLevels.map((level, index) => (
//                 <th key={index} scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
//                   {level}
//                 </th>
//               ))}
//             </tr>
//           </thead>
//           <tbody className="bg-white divide-y divide-gray-200">
//             {users.map((user) => (
//               <tr key={user.id} className="hover:bg-gray-50">
//                 <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{user.name}</td>
//                 {satisfactionLevels.map((level, index) => (
//                   <td key={index} className="px-6 py-4 whitespace-nowrap">
//                     <input
//                       type="radio"
//                       name={`satisfaction-${user.id}`}
//                       value={level}
//                       checked={selectedSatisfaction[user.id] === level}
//                       onChange={() => handleChange(user.id, level)}
//                       className="form-radio h-4 w-4 text-indigo-600"
//                     />
//                   </td>
//                 ))}
//               </tr>
//             ))}
//           </tbody>
//         </table>
//         <button type="submit" className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded shadow hover:bg-indigo-700">
//           Submit
//         </button>
//       </form>
//       <div className="mt-6 flex space-x-2">
//         <input
//           type="text"
//           value={newUserName}
//           onChange={(e) => setNewUserName(e.target.value)}
//           placeholder="New user name"
//           className="px-4 py-2 border border-gray-300 rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
//         />
//         <button
//           onClick={handleAddUser}
//           className="px-4 py-2 bg-green-600 text-white rounded shadow hover:bg-green-700"
//         >
//           Add User
//         </button>
//       </div>
//     </div>
//   );
// };

// export default SatisfactionTable;


// dir="rtl" v3

// import React, { useState } from 'react';
// // import axios from 'axios';

// const SatisfactionTable = () => {
//   const [users, setUsers] = useState([
//     { id: 1, name: 'User 1' },
//     { id: 2, name: 'User 2' },
//   ]);
//   const [selectedSatisfaction, setSelectedSatisfaction] = useState({});
//   const [newUserName, setNewUserName] = useState('');

//   const handleChange = (userId, value) => {
//     setSelectedSatisfaction({
//       ...selectedSatisfaction,
//       [userId]: value,
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//   //   try {
//   //     const response = await axios.post('/api/submit-satisfaction', selectedSatisfaction);
//   //     console.log('Submission successful:', response.data);
//   //   } catch (error) {
//   //     console.error('Error submitting data:', error);
//   //   }
//   console.log(selectedSatisfaction);
//   };

//   const handleAddUser = () => {
//     const newUser = {
//       id: users.length + 1,
//       name: newUserName,
//     };
//     setUsers([...users, newUser]);
//     setNewUserName('');
//   };

//   const satisfactionLevels = ['Excellent', 'Very Satisfied', 'Satisfied', 'Neutral', 'Unsatisfied', 'Very Unsatisfied'];

//   return (
//     <div dir="rtl" className="p-4">
//       <form onSubmit={handleSubmit} className="space-y-4">
//         <table className="min-w-full divide-y divide-gray-200 shadow rounded-lg">
//           <thead className="bg-gray-100">
//             <tr>
//               <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-700 uppercase tracking-wider">
//                 User
//               </th>
//               {satisfactionLevels.map((level, index) => (
//                 <th key={index} scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-700 uppercase tracking-wider">
//                   {level}
//                 </th>
//               ))}
//             </tr>
//           </thead>
//           <tbody className="bg-white divide-y divide-gray-200">
//             {users.map((user) => (
//               <tr key={user.id} className="hover:bg-gray-50">
//                 <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{user.name}</td>
//                 {satisfactionLevels.map((level, index) => (
//                   <td key={index} className="px-6 py-4 whitespace-nowrap text-right">
//                     <input
//                       type="radio"
//                       name={`satisfaction-${user.id}`}
//                       value={level}
//                       checked={selectedSatisfaction[user.id] === level}
//                       onChange={() => handleChange(user.id, level)}
//                       className="form-radio h-4 w-4 text-indigo-600"
//                     />
//                   </td>
//                 ))}
//               </tr>
//             ))}
//           </tbody>
//         </table>
//         <button type="submit" className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded shadow hover:bg-indigo-700">
//           Submit
//         </button>
//       </form>
//       <div className="mt-6 flex space-x-2">
//         <input
//           type="text"
//           value={newUserName}
//           onChange={(e) => setNewUserName(e.target.value)}
//           placeholder="New user name"
//           className="px-4 py-2 border border-gray-300 rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
//         />
//         <button
//           onClick={handleAddUser}
//           className="px-4 py-2 bg-green-600 text-white rounded shadow hover:bg-green-700"
//         >
//           Add User
//         </button>
//       </div>
//     </div>
//   );
// };

// export default SatisfactionTable;


// import React, { useState } from 'react';
// // import axios from 'axios';

// const SatisfactionTable = () => {
//   const [users, setUsers] = useState([
//     { id: 1, name: 'User 1' },
//     { id: 2, name: 'User 2' },
//   ]);
//   const [selectedSatisfaction, setSelectedSatisfaction] = useState({});
//   const [newUserName, setNewUserName] = useState('');

//   const handleChange = (userId, value) => {
//     setSelectedSatisfaction({
//       ...selectedSatisfaction,
//       [userId]: value,
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     // try {
//     //   const response = await axios.post('/api/submit-satisfaction', selectedSatisfaction);
//     //   console.log('Submission successful:', response.data);
//     // } catch (error) {
//     //   console.error('Error submitting data:', error);
//     // }
//     console.log(selectedSatisfaction);
//   };

//   const handleAddUser = () => {
//     const newUser = {
//       id: users.length + 1,
//       name: newUserName,
//     };
//     setUsers([...users, newUser]);
//     setNewUserName('');
//   };

//   const satisfactionLevels = ['Excellent', 'Very Satisfied', 'Satisfied', 'Neutral', 'Unsatisfied', 'Very Unsatisfied'];

//   return (
//     <div dir="rtl" className="p-4">
//       <form onSubmit={handleSubmit} className="space-y-4">
//         <table className="min-w-full divide-y divide-gray-200 shadow rounded-lg">
//           <thead className="bg-gray-100">
//             <tr>
//               <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-700 uppercase tracking-wider">
//                 User
//               </th>
//               {satisfactionLevels.map((level, index) => (
//                 <th key={index} scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-700 uppercase tracking-wider">
//                   {level}
//                 </th>
//               ))}
//             </tr>
//           </thead>
//           <tbody className="bg-white divide-y divide-gray-200">
//             {users.map((user) => (
//               <tr key={user.id} className="hover:bg-gray-50">
//                 <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 text-right">{user.name}</td>
//                 {satisfactionLevels.map((level, index) => (
//                   <td key={index} className="px-6 py-4 whitespace-nowrap text-right">
//                     <input
//                       type="radio"
//                       name={`satisfaction-${user.id}`}
//                       value={level}
//                       checked={selectedSatisfaction[user.id] === level}
//                       onChange={() => handleChange(user.id, level)}
//                       className="form-radio h-4 w-4 text-indigo-600"
//                     />
//                   </td>
//                 ))}
//               </tr>
//             ))}
//           </tbody>
//         </table>
//         <button type="submit" className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded shadow hover:bg-indigo-700">
//           Submit
//         </button>
//       </form>
//       <div className="mt-6 flex space-x-2">
//         <input
//           type="text"
//           value={newUserName}
//           onChange={(e) => setNewUserName(e.target.value)}
//           placeholder="New user name"
//           className="px-4 py-2 border border-gray-300 rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
//         />
//         <button
//           onClick={handleAddUser}
//           className="px-4 py-2 bg-green-600 text-white rounded shadow hover:bg-green-700"
//         >
//           Add User
//         </button>
//       </div>
//     </div>
//   );
// };

// export default SatisfactionTable;


// v4
import React, { useState } from 'react';
// import axios from 'axios';

const SatisfactionTable = () => {
  const [users, setUsers] = useState([
    { id: 1, name: 'الوقت المستغرق للوصول الى المكتب او المنطقة التأمينية' },
    { id: 2, name: 'مواعيد العمل بالهيئة' },
    { id: 3, name: 'البنية التحتية المادية (من حيث الشكل والمظهر، ونظافة مبنى المكاتب، وأماكن الانتظار، والمراحيض، وما إلى ذلك' },
    { id: 4, name: 'مدة الانتظار ( قبل أداء الخدمة )'},
    { id: 5, name: 'سلوك وأسلوب وطريقة تعامل الموظف' },
    { id: 6, name: 'احترافية وكفاءة الموظفين' },
    { id: 7, name: 'المعلومات المقدمة ( هل تلبي متطلباتك ؟)'},
    { id: 8, name: 'الوقت المستغرق لإتمام الخدمة' },
    { id: 9, name: 'التجربة بشكل عام' },
  ]);
  const [selectedSatisfaction, setSelectedSatisfaction] = useState({});
  const [newUserName, setNewUserName] = useState('');

  const handleChange = (userId, value) => {
    setSelectedSatisfaction({
      ...selectedSatisfaction,
      [userId]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(selectedSatisfaction);
    // try {
    //   const response = await axios.post('/api/submit-satisfaction', selectedSatisfaction);
    //   console.log('Submission successful:', response.data);
    // } catch (error) {
    //   console.error('Error submitting data:', error);
    // }
  };

  // const handleAddUser = () => {
  //   const newUser = {
  //     id: users.length + 1,
  //     name: newUserName,
  //   };
  //   setUsers([...users, newUser]);
  //   setNewUserName('');
  // };

  const satisfactionLevels = ['غير راض جدا', ' غير راض', 'محايد', 'راض ', 'راض جدا'];

  return (
    <div dir="rtl" className="p-4">
      <form onSubmit={handleSubmit} className="space-y-4">
        <table className="min-w-full divide-y divide-gray-200 shadow rounded-lg ">
          <thead className="bg-gray-100 ">
            <tr className=''>
              <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-700 uppercase tracking-wider align-middle">
                
              </th >
              {satisfactionLevels.map((level, index) => (
                <th key={index} scope="col" className=" px-6 py-3 content-evenly text-right text-xs font-medium text-gray-700 uppercase tracking-wider align-middle">
                  {level}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {users.map((user) => (
              <tr key={user.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 text-right align-middle">{user.name}</td>
                {satisfactionLevels.map((level, index) => (
                  <td  key={index} className=" px-6 py-4 whitespace-nowrap text-right align-middle">
                    <input 
                    required
                      type="radio"
                      name={`satisfaction-${user.id}`}
                      value={level}
                      checked={selectedSatisfaction[user.id] === level}
                      onChange={() => handleChange(user.id, level)}
                      className="  form-radio h-4 w-4  w-[54px] text-indigo-600 align-middle"
                    />
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
        </form>
        </div>
      );
    };
    
    export default SatisfactionTable;
    
    // <button type="submit" className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded shadow hover:bg-indigo-700">
    //   Submit
    // </button>
    // <button
    //   onClick={handleAddUser}
    //   className="px-4 py-2 bg-green-600 text-white rounded shadow hover:bg-green-700"
    // >
    //   Add User
    // </button>