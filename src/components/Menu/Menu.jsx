import React, { useState, useEffect } from "react";
import style from "./menu.module.css";

function Menu() {
  const [menu, setMenu] = useState(false);

  function mostrar() {
    setMenu(!menu);
  }

  return (
    <>
      <section className={style.contenedor}>
        <button className={style.botón} onClick={mostrar}>
          <img
            src="./icons/menu.svg"
            alt="botón-Imagen"
            className={style.menu}
          />
        </button>
        {menu === true && (
          <div className={style.lista}>
            <button className={style.opción}>desayuno</button>
            <button className={style.opción}>almuerzo</button>
            <button className={style.opción}>cena</button>
          </div>
        )}

        <div className={style.tarjeta}>
            <div className={style.imagen}></div>
            <h2 className={style.titulo}></h2>
        </div>

      </section>
    </>
  );
}

export default Menu;
