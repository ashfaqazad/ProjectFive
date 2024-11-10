
import React, { useState } from 'react';
// import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai'; // Eye icons
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { HiOutlineEyeOff } from "react-icons/hi";

export const Input = () => {
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className='container w-50 mt-3' style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
            <label style={{ marginRight: '10px' }}>Password</label> {/* Password label */}

            <input
                type={showPassword ? 'text' : 'password'}
                placeholder=" "
                style={{
                    paddingRight: '30px',
                    flex: 1,
                    backgroundColor: 'black',  // Background ko black set karna
                    color: 'white'             // Text color ko white set karna
                }} // Flex to take available space
            />

<span
    onClick={togglePasswordVisibility}
    style={{
        position: 'absolute',
        right: '15px',
        top: '50%',
        transform: 'translateY(-50%)',
        cursor: 'pointer'
    }}
>
    {showPassword ? (
        <MdOutlineRemoveRedEye color="white" />  // Eye icon ko white color diya gaya hai

    ) : (
        <HiOutlineEyeOff color="white" />  // Eye off icon ko white color diya gaya hai
    )}
</span>
        </div>
    );
};



// // {/* // import React, { useState } from 'react';

// // // export const Input = () => { */}
// {/* const [name, setName] = useState(''); */ }

// {/* Function to handle input changes */ }
// {/* const handleChange = (e) => { */ }
// {/* setName(e.target.value); // Update state with the input value */ }
// // //   };

// {/* // //   // Function to handle button click
// // //   const handleClick = () => { */}
// {/* // //     // You can add any action here when the button is clicked
// // //     console.log(`Submitted Name: ${name}`); // For demonstration

// // //     alert(`Submitted Name: ${name}`); // For demonstration
// // //     setName(''); // Clear the input after submission (optional)
// // //   }; */}

// {/* // //   return (
// // //     <>
// // //       <div className="container d-flex flex-column align-items-center">
// // //         <label htmlFor="nameInput" className="form-label">Name</label>
// // //         <input */}
// {/* // //           type="text"
// // //           className="form-control w-50 mx-auto"
// // //           id="nameInput"
// // //           name="name"
// // //           value={name}
// // //           onChange={handleChange} // Handle input change
// // //         />
// // //         <button className='btn btn-primary mt-1' onClick={handleClick}>Submit</button>
// // //       </div>
// //     </> */}
// //   );
// // };
