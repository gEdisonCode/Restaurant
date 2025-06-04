import React from "react";
import style from "./header.module.css";

function Header() {
  return (
    <>
      <header className={style.header}>
        <div className={style.contenedor}>
          <h1 className={style.nombre}>
            devs
            <br />
            taurant
          </h1>
          <hr className={style.separador} />
          <p className={style.slogan}>
            food <span className={style.punto}>.</span> drinks{" "}
            <span className={style.punto}>.</span> music
          </p>
        </div>

        <video
          src="/Restaurant/devstaurant.mp4"
          muted
          autoPlay
          loop
          className={style.video}
        />

        <img
          src="/Restaurant/icons/flecha-abajo.svg"
          alt="Scroll"
          className={style.scroll}
        />
      </header>
    </>
  );
}

export default Header;
