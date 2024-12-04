import React, { useState, useEffect, useRef } from "react";
import { ReactTyped } from "react-typed";
import Groq from "groq-sdk";

// Inisialisasi Groq SDK
const groq = new Groq({
  apiKey: "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",  
  dangerouslyAllowBrowser: true,  
});

const MainContent = () => {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const chatContainerRef = useRef(null); // Referensi untuk kontainer chat

  // Fungsi untuk mengirim pesan ke Groq
  const getGroqChatCompletion = async (userMessage) => {
    try {
      const response = await groq.chat.completions.create({
        messages: [
          {
            role: "user",
            content: userMessage,
          },
        ],
        model: "llama3-8b-8192", // Ganti dengan model yang relevan
      });
      return response.choices[0]?.message?.content || "No response from Groq";
    } catch (error) {
      console.error("Error fetching data from Groq:", error);
      return "Maaf, terjadi kesalahan pada server Groq.";
    }
  };

  // Fungsi untuk mengirim pesan
  const handleSendMessage = async () => {
    if (message.trim() !== "") {
      // Tambahkan pesan pengguna ke daftar pesan
      const newMessages = [...messages, { sender: "user", text: message }];
      setMessages(newMessages);
      setMessage("");

      // Kirim pesan ke Groq dan dapatkan balasan
      const botResponse = await getGroqChatCompletion(message);

      // Tambahkan balasan bot ke daftar pesan
      setMessages((prevMessages) => [
        ...prevMessages,
        { sender: "bot", text: botResponse },
      ]);
    }
  };

  // Scroll otomatis ke bawah ketika ada pesan baru
  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <div className="flex flex-col w-full h-full">
      {/* Header dengan efek Typed */}
      {messages.length === 0 && (
        <div className="flex justify-center mt-10">
          <h1 className="text-4xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-red-500">
            <ReactTyped
              strings={["Halo, User"]}
              typeSpeed={35}
              backSpeed={40}
              loop={true}
            />
          </h1>
        </div>
      )}

      {/* Chat Container */}
      <div
        className="flex-grow mt-8 p-4 overflow-y-auto"
        ref={chatContainerRef}
      >
        <div className="flex flex-col space-y-4 items-start">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`flex items-center ${
                msg.sender === "user" ? "self-start pl-8" : "self-end pl-10"
              }`}
            >
              {/* Teks Pesan */}
              <div
                className={`p-3 rounded-lg max-w-sm ${
                  msg.sender === "user"
                    ? "bg-blue-600 text-white"
                    : "bg-gray-300 text-gray-800"
                }`}
              >
                {msg.text}
              </div>

              {/* Icon untuk User atau Bot */}
              {msg.sender === "user" ? (
                <div className="w-10 h-10 bg-blue-600 text-white flex items-center justify-center rounded-full ml-3">
                  U
                </div>
              ) : (
                <div className="w-10 h-10 bg-gray-600 text-white flex items-center justify-center rounded-full mr-3">
                  🤖
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Input Box (Dibawah) */}
      <div className="p-4 fixed bottom-0 left-0 w-full">
        <div className="flex items-center justify-center">
          <input
            type="text"
            placeholder="Tanyakan Kepada AI"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full max-w-xl text-black p-3 rounded-lg focus:outline-none focus:ring-2"
            onKeyDown={(e) => {
              if (e.key === "Enter") handleSendMessage();
            }}
          />
          <button
            className="ml-4 p-3 bg-blue-600 text-white rounded-lg hover:bg-blue-500 transition"
            onClick={handleSendMessage}
          >
            <span role="img" aria-label="send">
              ➤
            </span>
          </button>
          <button className="ml-2 p-3 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition">
            <span role="img" aria-label="microphone">
              🎤
            </span>
          </button>
          <button className="ml-2 p-3 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition">
            <span role="img" aria-label="image">
              🖼️
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
