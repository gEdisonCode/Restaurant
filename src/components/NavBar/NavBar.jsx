import React, { useState } from "react";
import style from "./navBar.module.css";

function NavBar() {
  const [contacto, setContacto] = useState(false);

  function handleClick() {
    setContacto(!contacto);
  }

  return (
    <>
      <nav className={style.nav}>
        <button className={style.botón} onClick={handleClick}>
          contacto
        </button>
      </nav>
      {contacto === true && (
        <div className={style.contacto} >
          <h2 className={style.nombre}>
            dirección: <br />
            <span className={style.info}>en un lugar muy lejano...</span>
          </h2>
          <h2 className={style.nombre}>
            reserva: <br />
            <span className={style.info}>(XXX) XXX-XXXX</span>
          </h2>
          <h2 className={style.nombre}>
            atención al cliente: <br />
            <span className={style.info}>(XXX) XXX-XXXX</span>
          </h2>
        </div>
      )}
    </>
  );
}

export default NavBar;
