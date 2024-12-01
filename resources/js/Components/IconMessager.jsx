import React from "react";
import { FaFacebookMessenger } from "react-icons/fa";

const MessengerIcon = () => {
  return (
    <a
      href="/chatify" // Ganti dengan tautan halaman Facebook Messenger Anda
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 transition duration-300"
    >
      <FaFacebookMessenger className="text-3xl" />
    </a>
  );
};

export default MessengerIcon;
