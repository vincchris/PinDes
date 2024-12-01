import React from "react";

const VideoSection = () => {
  return (
    <div className="w-full bg-white shadow-md rounded-lg overflow-hidden flex flex-col md:flex-row">
      {/* Video Section */}
      <div className="relative w-full md:w-2/3 h-64 md:h-96">
        <iframe
          className="w-full h-full"
          src="https://www.youtube.com/embed/yQxV3DTvT3U?si=sB2jM7m6XmL4mpmC" // Ganti "example_video_id" dengan ID video Anda
          title="Edukasi Pertanian"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>

      <div className="p-4 w-full md:w-1/3 flex flex-col justify-center mt-4 md:mt-0">
        <h2 className="text-xl font-bold mb-2">Edukasi Pertanian dan Peternakan</h2>
        <p className="text-gray-700">
          Edukasi ini menyediakan panduan praktis bagi petani tentang teknik budidaya modern,
          penggunaan teknologi tepat guna, dan praktik berkelanjutan. Materi mencakup tutorial
          langkah demi langkah tentang pertanian organik, pemeliharaan ternak, dan pengelolaan
          sumber daya untuk meningkatkan hasil dan kesejahteraan.
        </p>
      </div>
    </div>
  );
};

export default VideoSection;
