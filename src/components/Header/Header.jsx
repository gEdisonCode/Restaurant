import React from "react";
import style from "./header.module.css";

function Header() {
  return (
    <>
      <header className={style.header}>

        <div className={style.logo}>
          <h1 className={style.nombre}>devstaurant</h1>
          <p className={style.slogan}>cargamos tu pedido en tiempo record</p>
        </div>

        <video
          src="/devstaurant.mp4"
          muted
          autoPlay
          loop
          className={style.video}
        />
      </header>
    </>
  );
}

export default Header;
