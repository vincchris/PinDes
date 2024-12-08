import React from "react";
import doctors from "@/Components/DataDokctors"; 

const InformationTelemedicine = () => {
  return (
    <div className="p-6 bg-white shadow rounded-lg">
      <h1 className="text-2xl font-bold text-gray-800 mb-4">Informasi Telemedicine</h1>
      <p className="text-gray-600 mb-6">
        Berikut adalah daftar dokter yang tersedia di layanan telemedicine kami.
        Pilih dokter sesuai dengan kebutuhan Anda.
      </p>

      <ul className="space-y-4">
        {doctors.map((doctor) => (
          <li
            key={doctor.id}
            className="flex items-center p-4 bg-gray-100 rounded-lg shadow-sm hover:bg-gray-200 transition"
          >
            <img
              src={doctor.image}
              alt={doctor.name}
              className="w-10 h-10 rounded-full object-cover mr-4"
            />

            {/* Informasi Dokter */}
            <div>
              <h2 className="text-lg font-semibold text-gray-800">
                {doctor.name}
              </h2>
              <p className="text-sm text-gray-600">{doctor.specialization}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default InformationTelemedicine;
