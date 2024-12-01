import React, { useState } from "react";
import { FiSend } from "react-icons/fi"; // Ikon dari react-icons

const ChatPrompt = () => {
  const [message, setMessage] = useState("");

  const handleSend = () => {
    if (message.trim()) {
      console.log("Pesan dikirim:", message);
      setMessage(""); // Reset input setelah dikirim
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSend();
    }
  };

  return (
    <div className="flex items-center max-w-md mx-auto border rounded-full p-2 bg-white shadow-md">
      <input
        type="text"
        placeholder="Tulis pesan Anda..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyPress={handleKeyPress}
        className="flex-1 px-4 py-2 text-sm border-none focus:outline-none focus:ring-0"
      />
      <button
        onClick={handleSend}
        className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-500 hover:bg-blue-600 text-white transition-all duration-300"
      >
        <FiSend size={20} />
      </button>
    </div>
  );
};

export default ChatPrompt;
