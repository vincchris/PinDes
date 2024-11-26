import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
// import logo from '../assets/images/Logo PinDes.png'; // Adjust the path based on your logo location


const logo = "/public/assets/images/Logo PinDes.png"

const Navbar = () => {
  return (
    <nav className="bg-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <img src={logo} alt="Logo" className="h-10 mr-2" /> 
          <h1 className="text-gray-800 font-bold text-xl">Pintar Desa</h1>
        </div>
        <ul className="flex space-x-6 items-center">
          <li><a href="#home" className="text-gray-800 hover:text-blue-600">Home</a></li>
          <li><a href="#features" className="text-gray-800 hover:text-blue-600">Layanan</a></li>
          <li><a href="#about" className="text-gray-800 hover:text-blue-600">Hubungi Kita</a></li>
          <li>
            <Link to="/login" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300">
              Login
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
