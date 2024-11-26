// App.js
import React, { useEffect, useRef, useState } from "react";
import Vanta from "vanta/dist/vanta.waves.min";
import { Routes, Route, useNavigate } from "react-router-dom";
import "tailwindcss/tailwind.css";
import Home from "../pages/Home";

const VantaBackground = () => {
  const vantaRef = useRef(null);

  useEffect(() => {
    if (!vantaRef.current) {
      vantaRef.current = Vanta({
        el: document.getElementById("vanta"),
        THREE: window.THREE,
        color: 0x1c1c1c,
        waveHeight: 20,
        waveSpeed: 1.5,
        zoom: 0.5,
      });
    }

    return () => {
      if (vantaRef.current) vantaRef.current.destroy();
    };
  }, []);

  return <div id="vanta" className="absolute inset-0" />;
};

const LoginForm = ({ onSwitchToRegister }) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    if (email === "user@gmail.com") {
      navigate("/"); // Navigate to the Home page on successful login
    } else {
      alert("Invalid email. Please use 'user@gmail.com'");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center bg-white w-full h-full p-8 rounded-lg shadow-lg text-black">
      <h1 className="text-3xl font-semibold mb-4">Sign in</h1>
      <div className="flex justify-center mb-6">
        <button className="mx-2 text-gray-600">f</button>
        <button className="mx-2 text-gray-600">G+</button>
        <button className="mx-2 text-gray-600">in</button>
      </div>
      <form className="w-full" onSubmit={handleLogin}>
        <div className="mb-4">
          <label className="block mb-2">Email</label>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 rounded border border-gray-300"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 rounded border border-gray-300"
          />
        </div>
        <button type="submit" className="w-full p-2 bg-blue-600 hover:bg-blue-700 rounded text-white">Sign In</button>
      </form>
      <p className="text-center mt-4 text-sm">Forgot your password?</p>
      <p className="text-center mt-4">
        Don’t have an account?{" "}
        <button onClick={onSwitchToRegister} className="text-blue-600 hover:underline">
          Sign Up
        </button>
      </p>
    </div>
  );
};

const RegisterForm = ({ onSwitchToLogin }) => {
  return (
    <div className="flex flex-col items-center justify-center bg-white w-full h-full p-8 rounded-lg shadow-lg text-black">
      <h1 className="text-3xl font-semibold mb-4">Sign Up</h1>
      <p className="text-center mb-6">Create your account</p>
      <form className="w-full">
        <div className="mb-4">
          <label className="block mb-2">Name</label>
          <input type="text" className="w-full p-2 rounded border border-gray-300" placeholder="Full Name" />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Email</label>
          <input type="email" className="w-full p-2 rounded border border-gray-300" placeholder="Email" />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Password</label>
          <input type="password" className="w-full p-2 rounded border border-gray-300" placeholder="Password" />
        </div>
        <button type="submit" className="w-full p-2 bg-blue-600 hover:bg-blue-700 rounded text-white">Sign Up</button>
      </form>
      <p className="text-center mt-4">
        Already have an account?{" "}
        <button onClick={onSwitchToLogin} className="text-blue-600 hover:underline">
          Sign In
        </button>
      </p>
    </div>
  );
};

const App = () => {
  const [isRegister, setIsRegister] = useState(false);

  const switchToRegister = () => setIsRegister(true);
  const switchToLogin = () => setIsRegister(false);

  return (
    <Routes>
      <Route
        path="/"
        element={
          <div className="relative overflow-hidden h-screen flex items-center justify-center bg-gray-100">
            <VantaBackground />
            <div className="relative z-10 w-[400px] h-[500px] rounded-lg shadow-lg overflow-hidden bg-white">
              {isRegister ? (
                <RegisterForm onSwitchToLogin={switchToLogin} />
              ) : (
                <LoginForm onSwitchToRegister={switchToRegister} />
              )}
            </div>
          </div>
        }
      />
      <Route path="/" element={<Home />} /> {/* Update the path for Home */}
    </Routes>
  );
};

export default App;
