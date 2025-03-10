import { FC } from "react";
import scss from "./Profile.module.scss";
import chatimg from "@/assets/img/chatimg.png";
import chatuser from "@/assets/img/chatuser.png";
import Image from "next/image";
import Card from "@/ui/card/Card";

const Profile: FC = () => {
  return (
    <section className={scss.Profile}>
      <div className="">
        <div className={scss.content}>
          <div className={scss.userprofile}>
            <Image className={scss.proimg}  src={chatimg} alt="img" />
            <div className={scss.user}>
              <div className={scss.usertex}>
                <Image className={scss.useimg}  src={chatuser} alt="img" />
                <h2>
                  Саша Петрова <br />
                  <span>Студент</span>
                </h2>
              </div>

              <button>Редактировать</button>
            </div>
          </div>
          <div className={scss.forcours}>
            <div className={scss.btn}>
              <button>Мои курсы</button>
              <button>Избранные</button>
            </div>
            <div className={scss.topcours}>
              <Card />
              <Card />
              <Card />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
