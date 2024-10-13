import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import { auth } from './firebase'; 
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

const Auth = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLogin, setIsLogin] = useState(true);
  const [message, setMessage] = useState('');
  const navigate = useNavigate(); 

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      setMessage(`Registration successful! Welcome, ${userCredential.user.email}`);
      setEmail('');
      setPassword('');
      navigate('/dashboard');
    } catch (error) {
      setMessage(`Registration failed: ${error.message}`);
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      setMessage(`Login successful! Welcome back, ${userCredential.user.email}`);
      setEmail('');
      setPassword('');
      navigate('/dashboard'); 
    } catch (error) {
      setMessage(`Login failed: ${error.message}`);
    }
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      setMessage("You have logged out.");
      navigate('/'); 
    } catch (error) {
      setMessage(`Logout failed: ${error.message}`);
    }
  };

  const handleGoogleSignIn = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      setMessage(`Google Sign-In successful! Welcome, ${result.user.email}`);
      navigate('/dashboard');
    } catch (error) {
      setMessage(`Google Sign-In failed: ${error.message}`);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-400 to-purple-500">
      <div className="hidden lg:flex lg:w-1/2 items-center justify-center">
        <img 
          src="/findriya-logo.png" 
          alt="Findriya Logo" 
          className="max-w-full h-auto"
        />
      </div>

      <div className="auth-container bg-white p-8 rounded-lg shadow-lg w-full max-w-sm transition-transform transform hover:scale-105">
        <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">{isLogin ? 'Login' : 'Register'}</h2>
        
        <form onSubmit={isLogin ? handleLogin : handleRegister}>
          <div className="mb-4">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-200"
            />
          </div>
          <div className="mb-6">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-200"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white p-3 rounded hover:bg-blue-700 transition duration-200 shadow-md"
          >
            {isLogin ? 'Login' : 'Register'}
          </button>
        </form>

        <p
          onClick={() => setIsLogin(!isLogin)}
          className="text-center text-blue-500 cursor-pointer mt-4 hover:underline"
        >
          {isLogin ? 'Need an account? Register' : 'Already have an account? Login'}
        </p>

        <p className="text-center text-red-500 mt-2">{message}</p>

        <div className="flex items-center justify-between mt-4">
          <hr className="w-full border-gray-300" />
          <span className="mx-2 text-gray-500">or</span>
          <hr className="w-full border-gray-300" />
        </div>

        <button
          onClick={handleGoogleSignIn}
          className="w-full bg-red-500 text-white p-3 rounded mt-4 hover:bg-red-600 transition duration-200 shadow-md"
        >
          Sign in with Google
        </button>

        {isLogin && (
          <button
            onClick={handleLogout}
            className="w-full bg-gray-300 text-gray-700 p-2 rounded mt-4 hover:bg-gray-400 transition duration-200 shadow-md"
          >
            Logout
          </button>
        )}
      </div>
    </div>
  );
};

export default Auth;
