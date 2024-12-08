import React, { useState } from "react";
import umkmItems from "@/Components/DataUmkm";

const SidebarUMKM = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Ambil daftar kategori unik
  const categories = ["All", ...new Set(umkmItems.map((item) => item.category))];

  // Filter produk berdasarkan kategori
  const filteredItems =
    selectedCategory === "All"
      ? umkmItems
      : umkmItems.filter((item) => item.category === selectedCategory);

  return (
    <div className="flex flex-row">
      {/* Sidebar */}
      <div className="w-1/4 bg-gray-100 p-4">
        <h2 className="text-lg font-semibold mb-4">Kategori</h2>
        <ul>
          {categories.map((category, index) => (
            <li
              key={index}
              className={`cursor-pointer p-2 rounded-md ${
                selectedCategory === category ? "bg-blue-500 text-white" : "hover:bg-gray-200"
              }`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </li>
          ))}
        </ul>
      </div>

      {/* Daftar Produk */}
      <div className="w-3/4 p-4">
        <h2 className="text-lg font-semibold mb-4">
          {selectedCategory === "All"
            ? "Semua Produk"
            : `Produk di Kategori ${selectedCategory}`}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="border p-4 rounded-md shadow-md flex flex-col items-start"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-24 h-24 rounded-md object-cover mb-4"
              />
              <h3 className="font-semibold">{item.name}</h3>
              <p className="text-sm text-gray-600 mb-2">{item.description}</p>
              <p className="text-sm text-gray-700 font-semibold">
                Harga: {item.price}
              </p>
              <p className="text-sm text-gray-500">Penjual: {item.seller}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SidebarUMKM;
