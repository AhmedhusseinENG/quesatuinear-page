// import { useState } from 'react';
// import React from 'react'

// export default function SignUp() {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   return (
//     <form className='form'>
//       <h3>Sign Up</h3>
//       <input
//         value={name}
//         onChange={(e) => setName(e.target.value)}
//         placeholder='Name'
//       />
//       <input
//         value={email}
//         onChange={(e) => setEmail(e.target.value)}
//         placeholder='Email'
//       />
//       <input
//         value={password}
//         onChange={(e) => setPassword(e.target.value)}
//         placeholder='Password'
//       />
//       <button type='submit'>Submit</button>
//     </form>
//   );
// }


// M2

function SignUp() {
    function handleSubmit (e) {
      // To prevent the page from reloading
      e.preventDefault();
      
      // Generate a new form data object
      const formData = new FormData(e.target);
//   console.log(formData);
      // Get the required values
      const formObject = Object.fromEntries(formData.entries());
    //   const formObject1= formObject.entries();
    //   for (let i = 0; i < formObject.length; i++) {
        
    //     try {
    //         for (let i = 0; i < formObject.length; i++) {
    //             console.log(formObject[i][0], ":", formObject[i][1]);
    //         }
    //     } catch (error) {
    //         console.error("Error occurred while iterating over formObject:", error);
        // }
    //   }
    // formObject.forEach((value, key) => {
    //     console.log(key, ":", value);
    //   });
    
    // console.log(formObject.entries())  
// ;
    
      console.log(formObject);
    }
  
    return (
      <form className='form' onSubmit={handleSubmit} >
        <h3>Sign Up</h3>
        <input
          name='name'
          placeholder='Name'
        />
        <input
          name='email'
          placeholder='Email'
        />
        <input
          name='password'
          placeholder='Password'
        />
        <button type='submit'>Submit</button>
      </form>
    );
  }

  export default SignUp;