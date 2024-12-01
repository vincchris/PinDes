import React from "react";
import { Link } from "@inertiajs/react";

const Sidebar = () => {
  return (
    <aside className="w-72 h-screen bg-gray-100 p-6 border-r shadow-md">
      {/* Header */}
      <div className="text-2xl font-bold text-blue-600 mb-8">
        Navigasi Utama
      </div>

      {/* Navigation Links */}
      <nav className="space-y-6">
        {/* Edukasi Desa */}
        <div>
          <h3 className="text-lg font-semibold text-gray-700 mb-2">Edukasi Desa</h3>
          <ul className="space-y-2">
            <li>
              <Link
                href="/edukasi"
                className="flex items-center space-x-3 text-blue-800"
              >
                <span>🌾</span>
                <span>Pertanian dan Peternakan</span>
              </Link>
            </li>
            <li>
              <Link
                href="/telemedicine"
                className="flex items-center space-x-3 text-gray-800 hover:text-blue-600 transition duration-200"
              >
                <span>💊</span>
                <span>Kedokteran</span>
              </Link>
            </li>
          </ul>
        </div>

        {/* UMKM */}
        <div>
          <h3 className="text-lg font-semibold text-gray-700 mb-2">Edukasi Kota</h3>
          <ul className="space-y-2">
            <li>
              <Link
                href="/pelatihan-umkm"
                className="flex items-center space-x-3 text-gray-800 hover:text-blue-600 transition duration-200"
              >
                <span>🏪</span>
                <span>Bisnis/UMKM</span>
              </Link>
            </li>
            <li>
              <Link
                href="/telemedicine"
                className="flex items-center space-x-3 text-gray-800 hover:text-blue-600 transition duration-200"
              >
                <span>💊</span>
                <span>Teknologi dan Informasi</span>
              </Link>
            </li>
          </ul>
        </div>
        
      </nav>
    </aside>

    
  );
};

export default Sidebar;
