import React from "react";
import s from "./Message.module.scss";

interface MessageProps {
  text: string;
  time: string;
  date: string;
}

const Message: React.FC<MessageProps> = ({ text, time, date }) => {
  const formatDate = (dateStr: string, timeStr: string) => {
    const messageDate = new Date(`${dateStr}T${timeStr}`);
    const now = new Date();

    const isToday = messageDate.toDateString() === now.toDateString();
    const isYesterday =
      messageDate.toDateString() ===
      new Date(now.setDate(now.getDate() - 1)).toDateString();

    let formattedDate = isToday
      ? "Сегодня"
      : isYesterday
      ? "Вчера"
      : messageDate.toLocaleDateString("ru-RU", {
          day: "numeric",
          month: "long",
        });

    let formattedTime = messageDate.toLocaleTimeString("ru-RU", {
      hour: "numeric",
      minute: "2-digit",
    });

    return `${formattedDate}, ${formattedTime}`;
  };

  return (
    <div className={s.messageContainer}>
      <p className={s.bubble}>
        {text} <span className={s.tail}></span>
      </p>
      <span className={s.timestamp}>{formatDate(date, time)}</span>
    </div>
  );
};

export default Message;
