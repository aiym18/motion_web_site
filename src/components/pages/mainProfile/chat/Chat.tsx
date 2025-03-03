import { FC } from "react";
import scss from "./Chat.module.scss";

const Chat: FC = () => {
 return (
  <section className={scss.Chat}>
   <div className="container">
    <div className={scss.content}>Chat</div>
   </div>
  </section>
 );
};

export default Chat;
