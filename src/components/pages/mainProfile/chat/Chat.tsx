import { FC } from "react";
import s from "./Chat.module.scss";
import ChatList from "./chatList/ChatList";
import ChatPage from "./chatPage/ChatPage";

const Chat: FC = () => {
  return (
    <section id={s.chat}>
      <ChatList />
      <ChatPage />
    </section>
  );
};

export default Chat;
