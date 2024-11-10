// import React, { useState } from 'react';
// import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
// // import { Input } from './Input';
// import Estate from './Estate';

// function App() {
// <>
//   /* // State initialization with useState
//   // const [newEntry, setNewEntry] = useState({ */}
//   //   name: "",
//   //   email: "",
//   //   password: ""
//   // });

//   // // Handle input changes
//   // const inputData = (e) => {
//   //   const { name, value } = e.target;
//   //   setNewEntry((previousData) => ({
//   //     ...previousData,
//   //     [name]: value
//   //   }));
//   // };

//   // // Handle form submit
//   // const handleSubmit = (e) => {
//   //   e.preventDefault();
//   //   // You can process form data here, e.g., send it to the backend
//   //   console.log('Form data:', newEntry);

//   //   // Reset form after submit
//   //   setNewEntry({
//   //     name: "",
//   //     email: "",
//   //     password: ""
//   //   });
//   // };

//   // return (
//   //   <>
//   //     <div className="container">
//   //       <form onSubmit={handleSubmit}>

//   //         <div className="mb-3">
//   //           <label htmlFor="nameInput" className="form-label">Name</label>
//   //           <input
//   //             type="text"
//   //             className="form-control"
//   //             id="nameInput"
//   //             name="name"
//   //             value={newEntry.name}
//   //             onChange={inputData}
//   //             required
//   //           />
//   //         </div>

//   //         <div className="mb-3">
//   //           <label htmlFor="emailInput" className="form-label">Email address</label>
//   //           <input
//   //             type="email"
//   //             className="form-control"
//   //             id="emailInput"
//   //             name="email"
//   //             value={newEntry.email}
//   //             onChange={inputData}
//   //             required
//   //           />
//   //           <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
//   //         </div>

//   //         <div className="mb-3">
//   //           <label htmlFor="passwordInput" className="form-label">Password</label>
//   //           <input
//   //             type="password"
//   //             className="form-control"
//   //             id="passwordInput"
//   //             name="password"
//   //             value={newEntry.password}
//   //             onChange={inputData}
//   //             required
//   //           />
//   //         </div>

//   //         <div className="mb-3 form-check">
//   //           <input type="checkbox" className="form-check-input" id="exampleCheck1" />
//   //           <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
//   //         </div>

//   //         <button type="submit" className="btn btn-primary">Submit</button>
//   //       </form>
//   //     </div>
//   //     <br />
//   //     <br />
//   //     <br />
//       {/* <Input /> */}
//       <Estate />
//     </>
//   );
// }

// export default App;


import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Estate from './Estate';
import { Input } from './Input';


function App () {

  return(

    <>
    {/* <Estate/> */}
    <Input />

    </>
  )

}


export default App;
