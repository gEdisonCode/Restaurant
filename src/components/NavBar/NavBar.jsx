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
          contact
        </button>
      </nav>
      {contacto === true && (
        <div className={style.contacto}>
          <h2 className={style.nombre}>
            address: <br />
            <span className={style.info}>far, far way...</span>
          </h2>
          <h2 className={style.nombre}>
            reserve: <br />
            <span className={style.info}>(XXX) XXX-XXXX</span>
          </h2>
          <h2 className={style.nombre}>
            phone: <br />
            <span className={style.info}>(XXX) XXX-XXXX</span>
          </h2>
        </div>
      )}
    </>
  );
}

export default NavBar;
