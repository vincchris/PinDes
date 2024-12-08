import React, { useState } from "react";
import doctors from "@/Components/DataDokctors"; 

const SidebarTelemedicine = () => {
  const [selectedSpecialty, setSelectedSpecialty] = useState("All");

  // Ambil daftar spesialis unik
  const specialties = ["All", ...new Set(doctors.map((doctor) => doctor.specialty))];

  const filteredDoctors =
    selectedSpecialty === "All"
      ? doctors
      : doctors.filter((doctor) => doctor.specialty === selectedSpecialty);

  return (
    <div className="flex flex-row">
      {/* Sidebar */}
      <div className="w-1/4 bg-gray-100 p-4">
        <h2 className="text-lg font-semibold mb-4">Specialties</h2>
        <ul>
          {specialties.map((specialty, index) => (
            <li
              key={index}
              className={`cursor-pointer p-2 rounded-md ${
                selectedSpecialty === specialty ? "bg-blue-500 text-white" : "hover:bg-gray-200"
              }`}
              onClick={() => setSelectedSpecialty(specialty)}
            >
              {specialty}
            </li>
          ))}
        </ul>
      </div>

      {/* Daftar Dokter */}
      <div className="w-3/4 p-4">
        <h2 className="text-lg font-semibold mb-4">
          {selectedSpecialty === "All"
            ? "All Doctors"
            : `Doctors in ${selectedSpecialty}`}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredDoctors.map((doctor) => (
            <div
              key={doctor.id}
              className="border p-4 rounded-md shadow-md flex items-center"
            >
              <img
                src={doctor.image}
                alt={doctor.name}
                className="w-12 h-12 rounded-full mr-4"
              />
              <div>
                <h3 className="font-semibold">{doctor.name}</h3>
                <p className="text-sm text-gray-600">{doctor.specialty}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SidebarTelemedicine;
