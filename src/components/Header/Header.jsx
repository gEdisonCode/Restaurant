import React from "react";
import style from "./header.module.css";

/*/Esta seccion pertenece al Header.
La parte interesante esta en css...
/*/
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
            comida <span className={style.punto}>.</span> bebida{" "}
            <span className={style.punto}>.</span> música
          </p>
        </div>

        <video
          src="./devstaurant.mp4"
          muted
          autoPlay
          loop
          className={style.video}
        />

        <img
          src="./icons/flecha-abajo.svg"
          alt="Scroll"
          className={style.scroll}
        />
      </header>
    </>
  );
}

export default Header;
