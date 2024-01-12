import React, { useState } from 'react';
import Homeauto from './Homeauto';
import { useNavigate } from 'react-router-dom';
const LoginPage = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (username === 'admin' && password === '1234'){
        console.log('inside');
        navigate('/homeauto');
    }
    else{
        console.log('not inside');
    }

  };

  return (
    <div className=''>
        <div className='flex justify-center items-center  mt-20 mb-20 h-full'>
            <h1 className='text-[23px] text-emerald-700 font-bold md:text-6xl'>Welcome to Smart Home Control</h1>
        </div>
        <div className="flex items-center justify-center ">
      <div className="w-[90%] max-w-md p-8 bg-white border border-emerald-500  rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-gray-800 mb-8">Login</h2>
        <form>
          <div className="mb-4">
            <label htmlFor="username" className="block text-sm font-medium text-gray-600">
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="mt-1 p-2 w-full border border-emerald-500 rounded-md"
              placeholder="Enter your username"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-600">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 p-2 w-full border border-emerald-500 rounded-md"
              placeholder="Enter your password"
            />
          </div>
          <button
            type="button"
            onClick={handleLogin}
            className="bg-zinc-700 text-white p-2 rounded-md w-full hover:bg-emerald-700"
          >
            Login
          </button>
        </form>
      </div>
    </div>
    </div>
    
  );
};

export default LoginPage;
