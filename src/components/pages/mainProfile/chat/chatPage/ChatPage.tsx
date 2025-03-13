"use client";
import { chats } from "@/constants/chat-data/chat";
import { useParams } from "next/navigation";
import React, { useState } from "react";
import s from "./ChatPage.module.scss";
import ava from "@/assets/img/unknown-user.jpeg";
import Image from "next/image";
import EmptyPage from "../emptyPage/EmptyPage";
import { MdCall, MdKeyboardVoice } from "react-icons/md";
import { FaRegSmile, FaVideo } from "react-icons/fa";
import { BsThreeDotsVertical } from "react-icons/bs";
import Message from "@/ui/message/Message";
import { VscDeviceCamera } from "react-icons/vsc";
import { AiOutlinePython } from "react-icons/ai";

const ChatPage = () => {
  const { id } = useParams();
  const chat = chats.find((c) => c.id === id);

  const [messages, setMessages] = useState([
    {
      text: chat?.prevMessage || "",
      time: chat?.time || "",
      date: chat?.date || "",
    },
    {
      text: chat?.lastMessage || "",
      time: chat?.time || "",
      date: chat?.date || "",
    },
  ]);

  const [inputValue, setInputValue] = useState("");

  if (!chat) return <EmptyPage />;

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    const newMessage = {
      text: inputValue,
      time: new Date().toLocaleTimeString("ru-RU", {
        hour: "numeric",
        minute: "2-digit",
      }),
      date: new Date().toISOString().split("T")[0], // Сегодняшняя дата
    };

    setMessages([...messages, newMessage]);
    setInputValue(""); // Очищаем поле ввода
  };

  return (
    <div className={s.chat_page}>
      <div className={s.chat_header}>
        <div className={s.chat_head}>
          <div className={s.chat_title}>
            <div className={s.title_ava}>
              <Image src={ava} alt="img" />
            </div>
            <h1>
              {chat.name} <span>В сети</span>
            </h1>
          </div>
          <div className={s.actions}>
            <span>
              <MdCall />
            </span>
            <span>
              <FaVideo />
            </span>
            <span>
              <BsThreeDotsVertical />
            </span>
          </div>
        </div>
      </div>

      <div className={s.chat_content}>
        {messages.map((msg, index) => (
          <Message
            key={index}
            text={msg.text}
            time={msg.time}
            date={msg.date}
          />
        ))}

        <div className={s.my_message}>
          <div className={s.input}>
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
            />
            <span className={s.smile}>
              <FaRegSmile />
            </span>
            <span className={s.camera}>
              <VscDeviceCamera />
            </span>
            <span className={s.share}>
              <AiOutlinePython />
            </span>
          </div>
          <button onClick={handleSendMessage}>
            <MdKeyboardVoice />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatPage;
