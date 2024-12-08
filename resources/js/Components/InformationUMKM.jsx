import React from "react";
import umkmItems from "@/Components/DataUmkm";

const InformationUMKM = () => {
  return (
    <div className="p-6 bg-white shadow rounded-lg">
      <h1 className="text-2xl font-bold text-gray-800 mb-4">Informasi UMKM</h1>
      <p className="text-gray-600 mb-6">
        Berikut adalah daftar produk dari berbagai pengusaha UMKM yang tersedia. Pilih produk sesuai dengan kebutuhan Anda.
      </p>

      <ul className="space-y-4">
        {umkmItems.map((item) => (
          <li
            key={item.id}
            className="flex items-center p-4 bg-gray-100 rounded-lg shadow-sm hover:bg-gray-200 transition"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-40 h-40 rounded-lg object-cover mr-4" // Ukuran 160x160
            />

            {/* Informasi Produk */}
            <div>
              <h2 className="text-lg font-semibold text-gray-800">{item.name}</h2>
              <p className="text-sm text-gray-600">{item.description}</p>
              <p className="text-sm text-gray-700 font-semibold">Harga: {item.price}</p>
              <p className="text-sm text-gray-500">Penjual: {item.seller}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default InformationUMKM;
