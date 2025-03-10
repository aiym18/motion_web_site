import React from "react";
import s from "./ChatList.module.scss";
import Link from "next/link";
import ava from "@/assets/img/unknown-user.jpeg";
import Image from "next/image";
import { chats } from "@/constants/chat-data/chat";

const getFormattedTime = (date: string, time: string): string => {
  const [hours, minutes] = time.split(":").map(Number);
  const messageDate = new Date(date);
  messageDate.setHours(hours, minutes, 0, 0);

  const now = new Date();
  const isToday = messageDate.toDateString() === now.toDateString();
  const yesterday = new Date();
  yesterday.setDate(now.getDate() - 1);
  const isYesterday = messageDate.toDateString() === yesterday.toDateString();

  const daysAgo = Math.floor(
    (now.getTime() - messageDate.getTime()) / (1000 * 60 * 60 * 24)
  );

  if (isToday) return `Сегодня, ${time}`;
  if (isYesterday) return `Вчера, ${time}`;
  if (daysAgo < 7)
    return `${messageDate.toLocaleDateString("ru-RU", {
      weekday: "long",
    })}, ${time}`;
  return messageDate.toLocaleDateString("ru-RU");
};

const ChatList: React.FC = () => {
  return (
    <div className={s.chat_list}>
      {chats.map((chat) => (
        <Link
          key={chat.id}
          href={`/profil/chat/${chat.id}`}
          className={s.chat_item}
        >
          <Image src={ava} alt="img" className={s.avatar} />
          <div className={s.chat_info}>
            <h2>
              {chat.name} <span>{getFormattedTime(chat.date, chat.time)}</span>
            </h2>
            <p>{chat.lastMessage}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default ChatList;
