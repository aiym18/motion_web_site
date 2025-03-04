import React from "react";
import s from "./Register.module.scss";
import Link from "next/link";
import { FaRegEyeSlash } from "react-icons/fa";
import google from "@/assets/img/google.svg";
import facebook from "@/assets/img/facebook.svg";
import Image from "next/image";

const Register = () => {
  return (
    <div id={s.register}>
      <div id={s.register_head}>
        <div className="container">
          <div className={s.register_head}>
            <Link href={"/auth"}>Войти</Link>
          </div>
        </div>
      </div>
      <div className="container">
        <div className={s.register}>
          <h1>Регистрация</h1>
          <form>
            <label htmlFor="">
              Имя
              <input type="text" placeholder="Введите свое имя" />
            </label>
            <label htmlFor="">
              Почта
              <input type="email" placeholder="Введите свою почту" />
            </label>
            <label htmlFor="">
              Пароль*
              <FaRegEyeSlash />
              <input type="password" placeholder="Введите свой пароль" />
            </label>
            <p>
              <input type="checkbox" name="" id="" />
              Согласен с Условиями
            </p>
            <button className={s.btn}>Регистрация</button>
            <div className={s.or}>
              <hr />
              <span>Или</span>
              <hr />
            </div>
            <div className={s.btns}>
              <button>
                <Image src={google} alt="img" />
                Google
              </button>
              <button>
                <Image src={facebook} alt="img" />
                Facebook{" "}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
