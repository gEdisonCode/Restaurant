import React from "react";
import style from "./header.module.css";

function Header() {
  return (
    <>
      <header className={style.header}>
        <div className={style.logo}>
          <h1 className={style.nombre}>devstaurant</h1>
          <hr className={style.separador} />
          <p className={style.slogan}>comida . bebida . <span className={style.tachado}>bugs</span></p>
        </div>

        <video
          src="/devstaurant.mp4"
          muted
          autoPlay
          loop
          className={style.video}
        />

        <img
          src="/icons/flecha-abajo.svg"
          alt="Scroll"
          className={style.scroll}
        />
      </header>
    </>
  );
}

export default Header;
