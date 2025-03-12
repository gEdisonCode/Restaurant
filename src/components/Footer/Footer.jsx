import React from "react";
import style from "./footer.module.css";

function Footer() {
  return (
    <>
      <footer className={style.footer}>
        <h2 className={style.nombre}>
          devs <br /> taurant
        </h2>
        <p className={style.demo}>una demo escrita con:</p>
        <p className={style.tecnologías}>
          ReactJs <span className={style.separador}>|</span> Css Modules{" "}
          <span className={style.separador}>|</span> Themealdb Api
        </p>
      </footer>
    </>
  );
}
export default Footer;
