import React from "react";
import villages from "@/Components/DataVillage";

const InformationVillage = () => {
  return (
    <div className="p-6 bg-white shadow rounded-lg">
      <h1 className="text-2xl font-bold text-gray-800 mb-4">Informasi Desa</h1>
      <p className="text-gray-600 mb-6">
        Berikut adalah daftar desa dengan informasi terkait lokasi, deskripsi, dan gambarnya. Pilih desa untuk mengetahui lebih banyak.
      </p>

      <ul className="space-y-4">
        {villages.map((village) => (
          <li
            key={village.id}
            className="flex items-center p-4 bg-gray-100 rounded-lg shadow-sm hover:bg-gray-200 transition"
          >
            <img
              src={village.image}
              alt={village.name}
              className="w-20 h-20 rounded-lg object-cover mr-4" // Perbesar ukuran gambar
            />

            {/* Informasi Desa */}
            <div>
              <h2 className="text-lg font-semibold text-gray-800">{village.name}</h2>
              <p className="text-sm text-gray-600 mb-2">{village.description}</p>
              <p className="text-sm text-gray-700 font-semibold">Alamat: {village.address}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default InformationVillage;
