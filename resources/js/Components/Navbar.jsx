import React from "react";
import { Link } from "@inertiajs/react";

const Navbar = () => {
    return (
        <nav className="bg-white p-4 shadow-md">
            <div className="container mx-auto flex justify-between items-center">
                <div className="flex items-center">
                    <img
                        src="/assets/images/Logo PinDes.png"
                        alt="Logo"
                        className="h-10 mr-2"
                    />
                    <h1 className="text-gray-800 font-bold text-xl">
                        Pintar Desa
                    </h1>
                </div>
                <ul className="flex space-x-6 items-center">
                    <li>
                        <Link
                            href="/HomePage"
                            className="text-gray-800 hover:text-blue-600"
                        >
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="#features"
                            className="text-gray-800 hover:text-blue-600"
                        >
                            Layanan
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="#about"
                            className="text-gray-800 hover:text-blue-600"
                        >
                            Hubungi Kita
                        </Link>
                    </li> 
                    <li>
                        <Link
                            href="/chatbot"
                            className="text-gray-800 hover:text-blue-600"
                        >
                            ChatBot
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/login"
                            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300"
                        >
                            Login
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
