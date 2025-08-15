"use client";
import { useState, useRef, useEffect } from "react";
import {
  FaPaperclip,
  FaMicrophone,
  FaSmile,
  FaCheck,
  FaCheckDouble,
} from "react-icons/fa";
import { IoSend } from "react-icons/io5";

interface Message {
  id: string;
  text: string;
  sender: "me" | "you";
  time: string;
  status: "sent" | "delivered" | "read";
}

export default function WhatsAppNotes() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "Hola amor, solo quería recordarte lo especial que eres para mí 💖",
      sender: "me",
      time: "10:30 AM",
      status: "read",
    },
    {
      id: "2",
      text: "Cada día a tu lado es un regalo que atesoro con todo mi corazón",
      sender: "me",
      time: "10:31 AM",
      status: "read",
    },
    {
      id: "3",
      text: "Eres la razón por la que creo en el amor verdadero",
      sender: "you",
      time: "10:33 AM",
      status: "delivered",
    },
    {
      id: "4",
      text: "Recuerda que no importa lo que pase, siempre estaré aquí para ti",
      sender: "you",
      time: "10:34 AM",
      status: "delivered",
    },
    {
      id: "5",
      text: "Estoy muy enamorado de ti cielo mio",
      sender: "you",
      time: "10:34 AM",
      status: "delivered",
    },
    {
      id: "6",
      text: "Eres lo mejor que me ha pasado en la vida",
      sender: "me",
      time: "10:34 AM",
      status: "delivered",
    },
    {
      id: "7",
      text: "Me devolviste las ganas de vivir, gracias",
      sender: "me",
      time: "10:33 AM",
      status: "delivered",
    },
    {
      id: "8",
      text: "No veo la hora en que vivamos juntos",
      sender: "you",
      time: "10:34 AM",
      status: "delivered",
    },
    {
      id: "9",
      text: "Quiero besarte y abrazarte hasta viejitos",
      sender: "you",
      time: "10:34 AM",
      status: "delivered",
    },
    {
      id: "10",
      text: "Gracias por hacer de mi vida un mundo mejor",
      sender: "me",
      time: "10:34 AM",
      status: "delivered",
    },
  ]);

  const [newMessage, setNewMessage] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSendMessage = () => {
    if (newMessage.trim() === "") return;

    const message: Message = {
      id: Date.now().toString(),
      text: newMessage,
      sender: "me",
      time: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
      status: "sent",
    };

    setMessages([...messages, message]);
    setNewMessage("");

    // Simulate reply after 1-3 seconds
    if (Math.random() > 0.3) {
      const replies = [
        "Te amo más 💕",
        "Eres mi persona favorita en el mundo entero",
        "No sabes cuánto significas para mí",
        "Eres mi sueño hecho realidad",
        "Mi corazón late por ti",
      ];
      const randomReply = replies[Math.floor(Math.random() * replies.length)];

      setTimeout(() => {
        const reply: Message = {
          id: Date.now().toString(),
          text: randomReply,
          sender: "you",
          time: new Date().toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          }),
          status: "delivered",
        };
        setMessages((prev) => [...prev, reply]);
      }, 1000 + Math.random() * 2000);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const getStatusIcon = (status: Message["status"]) => {
    switch (status) {
      case "sent":
        return <FaCheck className="text-gray-400 ml-1" />;
      case "delivered":
        return <FaCheckDouble className="text-gray-400 ml-1" />;
      case "read":
        return <FaCheckDouble className="text-blue-500 ml-1" />;
      default:
        return null;
    }
  };

  return (
    <section className="bg-gray-100 py-12 px-4 min-h-screen">
      <div className="max-w-md mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-serif font-bold text-rose-800 mb-2">
            Nuestras Notas
          </h1>
          <p className="text-xl text-rose-600">
            Mensajes especiales que guardamos en el corazón
          </p>
        </div>

        {/* WhatsApp-like chat container */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          {/* Chat header */}
          <div className="bg-rose-600 text-white p-4 flex items-center">
            <div className="w-12 h-12 rounded-full bg-rose-400 flex items-center justify-center mr-3">
              <span className="text-xl">💑</span>
            </div>
            <div>
              <h2 className="font-semibold text-lg">Tú & Yo</h2>
              <p className="text-xs opacity-80">En línea</p>
            </div>
          </div>

          {/* Messages area */}
          <div
            className="p-4 h-96 overflow-y-auto bg-[#e5ddd5] bg-opacity-30 bg-[url('https://web.whatsapp.com/img/bg-chat-tile-light_a4be512e7195b6b733d9110b408f075d.png')]"
            style={{ backgroundSize: "412.5px 749.25px" }}
          >
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex mb-4 ${
                  message.sender === "me" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                    message.sender === "me"
                      ? "bg-rose-100 rounded-tr-none"
                      : "bg-white rounded-tl-none"
                  }`}
                >
                  <p className="text-gray-800">{message.text}</p>
                  <div
                    className={`flex items-center justify-end mt-1 space-x-1 ${
                      message.sender === "me" ? "text-xs text-gray-500" : ""
                    }`}
                  >
                    <span className="text-xs">{message.time}</span>
                    {message.sender === "me" && getStatusIcon(message.status)}
                  </div>
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Input area */}
          <div className="bg-gray-100 p-3 flex items-center">
            <button className="text-gray-500 mx-2">
              <FaSmile className="text-xl" />
            </button>
            <button className="text-gray-500 mx-2">
              <FaPaperclip className="text-xl" />
            </button>
            <div className="flex-1 bg-white rounded-full px-4 py-2 mx-2">
              <input
                type="text"
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Escribe un mensaje..."
                className="w-full border-none focus:ring-0"
              />
            </div>
            <button
              onClick={handleSendMessage}
              disabled={!newMessage.trim()}
              className={`ml-2 w-10 h-10 rounded-full flex items-center justify-center ${
                newMessage.trim()
                  ? "bg-rose-600 text-white"
                  : "bg-gray-300 text-gray-500"
              }`}
            >
              {newMessage.trim() ? (
                <IoSend className="text-lg" />
              ) : (
                <FaMicrophone className="text-lg" />
              )}
            </button>
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-rose-700 italic">
            "Las palabras pueden no durar, pero nuestros sentimientos
            permanecerán para siempre"
          </p>
        </div>
      </div>
    </section>
  );
}
