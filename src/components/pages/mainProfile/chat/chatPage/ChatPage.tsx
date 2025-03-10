"use client";
import { useParams } from "next/navigation";
import React from "react";

const ChatPage = () => {
  const { id } = useParams();

  return (
    <div>
      <h1>Чат {id}</h1>
      <div>Сообщения...</div>
    </div>
  );
};

export default ChatPage;
