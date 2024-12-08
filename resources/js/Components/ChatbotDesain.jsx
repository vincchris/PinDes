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
  const [isUserTyping, setIsUserTyping] = useState(false);
  const [isBotTyping, setIsBotTyping] = useState(false);
  const [showGreeting, setShowGreeting] = useState(true); // State untuk mengontrol tampilnya teks Halo, user!
  const chatContainerRef = useRef(null);

  const getGroqChatCompletion = async (userMessage) => {
    try {
      const response = await groq.chat.completions.create({
        messages: [
          {
            role: "user",
            content: userMessage,
          },
        ],
        model: "llama3-8b-8192",
      });
      return response.choices[0]?.message?.content || "No response from Groq";
    } catch (error) {
      console.error("Error fetching data from Groq:", error);
      return "Maaf, terjadi kesalahan pada server Groq.";
    }
  };

  const handleSendMessage = async () => {
    if (message.trim() !== "") {
      const newMessages = [...messages, { sender: "user", text: message }];
      setMessages(newMessages);
      setMessage("");
      setIsUserTyping(false);

      if (showGreeting) setShowGreeting(false);

      setIsBotTyping(true);
      const botResponse = await getGroqChatCompletion(message);
      simulateTypingEffect(botResponse);
    }
  };

  const simulateTypingEffect = (text) => {
    let index = 0;
    const interval = setInterval(() => {
      setMessages((prevMessages) => {
        const botTypingMessage = prevMessages.find(
          (msg) => msg.sender === "bot" && msg.typing
        );
        if (botTypingMessage) {
          botTypingMessage.text += text[index];
        } else {
          prevMessages.push({ sender: "bot", text: text[index] || "", typing: true });
        }
        return [...prevMessages];
      });

      index++;

      if (index >= text.length) {
        clearInterval(interval);
        setIsBotTyping(false);
        setMessages((prevMessages) =>
          prevMessages.map((msg) =>
            msg.typing ? { ...msg, typing: false } : msg
          )
        );
      }
    }, 50);
  };

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <div className="flex flex-col w-full h-full">
      {/* Header dengan ReactTyped dan warna untuk teks Halo, user */}
      {showGreeting && (
        <div className="flex justify-center mt-4">
          <ReactTyped
            strings={["Halo, user!"]}
            typeSpeed={40}
            backSpeed={30}
            loop={true}
            style={{ color: "#1DA1F2", fontSize: "20px", fontWeight: "bold" }}
          />
        </div>
      )}

      {/* Chat Container */}
      <div className="flex-grow mt-8 p-4 overflow-y-auto" ref={chatContainerRef}>
        <div className="flex flex-col space-y-4 items-start">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`flex items-center ${
                msg.sender === "user" ? "self-start pl-8" : "self-end pl-10"
              }`}
            >
              {/* Tambahkan ikon berdasarkan sender */}
              {msg.sender === "user" && (
                <span className="mr-2">👤</span>
              )}
              {msg.sender === "bot" && (
                <span className="mr-2">🤖</span>
              )}

              {/* Tampilkan pesan */}
              <div
                className={`p-3 rounded-lg max-w-sm ${
                  msg.sender === "user"
                    ? "bg-blue-600 text-white"
                    : "bg-gray-300 text-gray-800"
                }`}
              >
                {msg.text}
              </div>
            </div>
          ))}

          {isBotTyping && (
            <div className="flex items-center self-end pl-10">
              <span className="mr-2">🤖</span>
              <div className="p-3 rounded-lg max-w-sm bg-gray-300 text-gray-800">
                Bot sedang mengetik...
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Input Box */}
      <div className="p-4 fixed bottom-0 left-0 w-full">
        <div className="flex items-center justify-center">
          <input
            type="text"
            placeholder="Tanyakan Kepada AI"
            value={message}
            onChange={(e) => {
              setMessage(e.target.value);
              setIsUserTyping(true);
            }}
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
        </div>
      </div>
    </div>
  );
};

export default MainContent;
