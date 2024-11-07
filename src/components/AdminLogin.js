// import React, { useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

// const AdminLogin = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');
//   const navigate = useNavigate();

//   const handleLogin = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await axios.post('http://localhost:5000/api/admin/login', {
//         email,
//         password,
//       });

//       // Save JWT token to local storage
//       localStorage.setItem('token', response.data.token);

//       // Redirect to admin dashboard
//     //   navigate('/admin-dashboard');
//       navigate('pages/admin-dashboard');

//     } catch (error) {
//       setError('Invalid email or password');
//     }
//   };

//   return (
//     <div className="flex justify-center items-center h-screen bg-gray-100">
//       <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
//         <h2 className="text-2xl font-bold mb-6 text-center">Admin Login</h2>
//         <form onSubmit={handleLogin}>
//           <div className="mb-4">
//             <label htmlFor="email" className="block text-gray-700">
//               Email
//             </label>
//             <input
//               type="email"
//               id="email"
//               className="w-full px-3 py-2 border border-gray-300 rounded"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//             />
//           </div>
//           <div className="mb-4">
//             <label htmlFor="password" className="block text-gray-700">
//               Password
//             </label>
//             <input
//               type="password"
//               id="password"z
//               className="w-full px-3 py-2 border border-gray-300 rounded"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//             />
//           </div>
//           {error && <p className="text-red-500">{error}</p>}
//           <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded mt-4">
//             Login
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default AdminLogin;


// import axios from 'axios';
// import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// const AdminLogin = () => {
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [error, setError] = useState(null);
//     const navigate = useNavigate();

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         try {
//             const res = await axios.post('http://localhost:5000/api/admin/login', {
//                 email,
//                 password,
//             });

//             // On successful login, store the token and redirect to dashboard
//             localStorage.setItem('token', res.data.token);
//             navigate('/admin-dashboard');
//         } catch (err) {
//             setError('Invalid credentials');
//         }
//     };

//     return (
//         <div>
//             <h2>Admin Login</h2>
//             {error && <p>{error}</p>}
//             <form onSubmit={handleSubmit}>
//                 <input
//                     type="email"
//                     placeholder="Email"
//                     value={email}
//                     onChange={(e) => setEmail(e.target.value)}
//                 />
//                 <input
//                     type="password"
//                     placeholder="Password"
//                     value={password}
//                     onChange={(e) => setPassword(e.target.value)}
//                 />
//                 <button type="submit">Login</button>
//             </form>
//         </div>
//     );
// };

// export default AdminLogin;



import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AdminLogin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post('http://localhost:5000/api/admin/login', {
                email,
                password,
            });

            // Save JWT token to local storage
            localStorage.setItem('token', res.data.token);

            // Redirect to admin dashboard
            navigate('/admin-dashboard'); // Correctly navigate to admin dashboard
        } catch (err) {
            setError('Invalid credentials');
        }
    };

    return (
        <div>
            <h2>Admin Login</h2>
            {error && <p>{error}</p>}
            <form onSubmit={handleSubmit}>
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <button type="submit">Login</button>
            </form>
            <a href="/password-recovery">Forgot Password?</a> {/* Link to Password Recovery */}
        </div>
    );
};

export default AdminLogin;
