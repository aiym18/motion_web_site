import React from "react";
import s from "./Login.module.scss";
import Link from "next/link";
import Image from "next/image";
import google from "@/assets/img/google.svg";
import facebook from "@/assets/img/facebook.svg";
import { IoClose } from "react-icons/io5";
const Login = () => {
  return (
    <div id={s.login}>
      <div className="container">
        <div className={s.login}>
          <div className={s.login_text}>
            <strong className={s.close}>
              <IoClose />
            </strong>
            <h1>Добро пожаловать</h1>
            <form>
              <input type="email" placeholder="Почта" />
              <input type="password" placeholder="Пароль" />
              <Link href={"/"}>Забыли пароль?</Link>
              <button className={s.btn}>Войти</button>
              <div className={s.regis}>
                <p>
                  У вас нет аккаунта?
                  <Link href={"/auth/register"}>Зарегистрироваться</Link>{" "}
                </p>
                <div className={s.or}>
                  <hr />
                  <span>Или</span>
                  <hr />
                </div>
                <div className={s.reg_btn}>
                  <button>
                    <Image src={google} alt="img" />
                    Google
                  </button>
                  <button>
                    <Image src={facebook} alt="img" />
                    Facebook{" "}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
