import React from "react";
import style from "./footer.module.css";

//Esto es un Footer, y hace lo que un footer hace...
function Footer() {
  return (
    <>
      <footer className={style.footer}>
        <h2 className={style.nombre}>
          devs <br /> taurant
        </h2>
        <p className={style.demo}>written in:</p>
        <p className={style.tecnologías}>
          ReactJs <span className={style.separador}>|</span> Css Modules{" "}
          <span className={style.separador}>|</span> Themealdb Api
        </p>
      </footer>
    </>
  );
}
export default Footer;
