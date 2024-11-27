// // import React, { useState } from 'react';
// // import { useNavigate } from 'react-router-dom';
// // import './Login.css'; 

// // const Login = () => {
// //     const [credentials, setCredentials] = useState({ username: '', password: '' });
// //     const navigate = useNavigate();

// //     const handleChange = (e) => {
// //         setCredentials({ ...credentials, [e.target.name]: e.target.value });
// //     };

// //     const handleSubmit = (e) => {
// //         e.preventDefault();
// //         if (credentials.username === 'admin' && credentials.password === '12345') {
// //             navigate('/dashboard');
// //         } else {
// //             alert('Invalid credentials');
// //         }
// //     };

// //     return (
// //         <div className="login-container">
// //             <h2>Admin Login</h2>
// //             <form onSubmit={handleSubmit}>
// //                 <input
// //                     type="text"
// //                     name="username"
// //                     placeholder="Username"
// //                     value={credentials.username}
// //                     onChange={handleChange}
// //                     required
// //                 />
// //                 <input
// //                     type="password"
// //                     name="password"
// //                     placeholder="Password"
// //                     value={credentials.password}
// //                     onChange={handleChange}
// //                     required
// //                 />
// //                 <button type="submit">Login</button>
// //             </form>
// //         </div>
// //     );
// // };

// // export default Login;
// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import './Login.css';

// const Login = () => {
//     const [credentials, setCredentials] = useState({ username: '', password: '' });
//     const [errorMessage, setErrorMessage] = useState('');
//     const navigate = useNavigate();

//     const handleChange = (e) => {
//         setCredentials({ ...credentials, [e.target.name]: e.target.value });
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         if (credentials.username === 'admin' && credentials.password === '12345') {
//             navigate('/dashboard');
//         } else {
//             setErrorMessage('Invalid credentials');
//         }
//     };

//     return (
//         <div className="login-container">
//             <h2>Admin Login</h2>
//             {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>} {/* Conditional Rendering */}
//             <form onSubmit={handleSubmit}>
//                 <input
//                     type="text"
//                     name="username"
//                     placeholder="Username"
//                     value={credentials.username}
//                     onChange={handleChange}
//                     required
//                 />
//                 <input
//                     type="password"
//                     name="password"
//                     placeholder="Password"
//                     value={credentials.password}
//                     onChange={handleChange}
//                     required
//                 />
//                 <button type="submit">Login</button>
//             </form>
//         </div>
//     );
// };

// export default Login;
// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import './Login.css'; 

// const Login = () => {
//     const [credentials, setCredentials] = useState({ username: '', password: '' });
//     const [newPassword, setNewPassword] = useState('');
//     const [isEditing, setIsEditing] = useState(false);
//     const navigate = useNavigate();

//     const handleChange = (e) => {
//         setCredentials({ ...credentials, [e.target.name]: e.target.value });
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         if (credentials.username === 'admin' && credentials.password === '12345') {
//             navigate('/dashboard');
//         } else {
//             alert('Invalid credentials');
//         }
//     };

//     const handleEditPassword = (e) => {
//         e.preventDefault();
//         axios.put('http://localhost:3001/api/update-password', { password: newPassword })
//             .then(response => {
//                 console.log('Success:', response.data);
//                 alert('Password updated successfully!');
//                 setIsEditing(false); // Close the editing form
//             })
//             .catch(error => {
//                 console.error('Error updating password:', error.response ? error.response.data : error.message);
//             });
//     };

//     return (
//         <div className="login-container">
//             <h2>Admin Login</h2>
//             <form onSubmit={handleSubmit}>
//                 <input
//                     type="text"
//                     name="username"
//                     placeholder="Username"
//                     value={credentials.username}
//                     onChange={handleChange}
//                     required
//                 />
//                 <input
//                     type="password"
//                     name="password"
//                     placeholder="Password"
//                     value={credentials.password}
//                     onChange={handleChange}
//                     required
//                 />
//                 <button type="submit">Login</button>
//             </form>
//             <button onClick={() => setIsEditing(true)}>Edit Password</button>
//             {isEditing && (
//                 <form onSubmit={handleEditPassword}>
//                     <input
//                         type="password"
//                         placeholder="New Password"
//                         value={newPassword}
//                         onChange={(e) => setNewPassword(e.target.value)}
//                         required
//                     />
//                     <button type="submit">Update Password</button>
//                     <button type="button" onClick={() => setIsEditing(false)}>Cancel</button>
//                 </form>
//             )}
//         </div>
//     );
// };

// export default Login;
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css'; // Custom CSS for the login page

const Login = () => {
    const [credentials, setCredentials] = useState({ username: '', password: '' });
    const navigate = useNavigate();

    const handleChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Mock authentication - Replace this with real authentication logic
        if (credentials.username === 'admin' && credentials.password === 'admin') {
            navigate('/dashboard');
        } else {
            alert('Incorrect Password');
        }
    };

    return (

        <div className="login-container">
            <h2>ADMIN LOGIN</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="username"
                    placeholder="Username"
                    value={credentials.username}
                    onChange={handleChange}
                    required
                />
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={credentials.password}
                    onChange={handleChange}
                    required
                />
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default Login;