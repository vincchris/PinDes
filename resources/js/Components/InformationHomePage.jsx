import React, { useState } from "react";

const LearningFeatures = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const features = [
    {
      title: "Chatbot Siap Membantu Anda",
      content:
        "Chatbot ini dirancang untuk membantu Anda dengan cepat dalam berbagai kebutuhan sehari-hari, mulai dari pencarian informasi hingga panduan langkah demi langkah.",
    },
    {
      title: "Chatbot Mudah Untuk Digunakan",
      content:
        "Antarmuka yang intuitif dan ramah pengguna membuat Chatbot ini dapat digunakan oleh siapa saja tanpa memerlukan pelatihan khusus.",
    },
    {
      title: "Tepercaya Untuk Memperoleh Informasi",
      content:
        "Data yang disediakan oleh chatbot ini bersumber dari sumber tepercaya, memberikan Anda informasi yang akurat dan terkini.",
    },
    {
      title: "Terintegrasi Dengan API Groq",
      content:
        "Chatbot ini terintegrasi dengan API Groq, memungkinkan pengambilan data yang lebih cepat dan responsif untuk mendukung kebutuhan Anda.",
    },
  ];

  const handleToggle = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto flex flex-col lg:flex-row items-center">
        {/* Left Section: Accordion List */}
        <div className="lg:w-1/2 w-full mb-10 lg:mb-0 px-4">
          <div className="space-y-4">
            {features.map((feature, index) => (
              <div
                key={index}
                className="p-4 border rounded-lg bg-white shadow-sm"
              >
                <div
                  className="flex justify-between items-center cursor-pointer"
                  onClick={() => handleToggle(index)}
                >
                  <p className="font-medium text-lg text-gray-700">
                    {feature.title}
                  </p>
                  <span className="text-gray-500">
                    {activeIndex === index ? "▲" : "▼"}
                  </span>
                </div>
                {/* Accordion Content */}
                <div
                  className={`transition-all duration-500 ease-in-out overflow-hidden ${
                    activeIndex === index
                      ? "max-h-40 opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="mt-2 text-gray-600">
                    <p>{feature.content}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Section: Image and Tags */}
        <div className="lg:w-1/2 w-full px-4 flex justify-center">
          <div className="relative w-full max-w-sm">
            {/* Main Image */}
            <img
              src="/assets/images/ChatbotImage.jpg"
              alt="Learning Expert"
              className="w-full rounded-lg shadow-lg"
            />
            {/* Tags */}
            <div className="absolute top-4 left-4 bg-white shadow rounded-full py-2 px-4 flex items-center">
              <span className="text-green-500 text-xl mr-2">📱</span>
              <p className="text-gray-700 text-sm">Easy to Use</p>
            </div>
            <div className="absolute top-16 right-4 bg-white shadow rounded-full py-2 px-4 flex items-center">
              <span className="text-red-500 text-xl mr-2">🌐</span>
              <p className="text-gray-700 text-sm">A lot of Information</p>
            </div>
            <div className="absolute bottom-4 left-10 bg-white shadow rounded-full py-2 px-4 flex items-center">
              <span className="text-blue-500 text-xl mr-2">☁️</span>
              <p className="text-gray-700 text-sm">
                Can Communicate with the People
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LearningFeatures;
