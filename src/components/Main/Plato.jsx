import React, { useState, useEffect } from "react";
import style from "./plato.module.css";

function Main() {
  const [plato, setPlato] = useState(null);

  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/random.php")
      .then((res) => res.json())
      .then((data) => {
        if (data.meals && data.meals.length > 0) {
          setPlato(data.meals[0]);
        }
      })
      .catch((error) => console.error("Ha habido un error", error));
  }, []);

  if (!plato) {
    return (
      <>
        <section className={style.contenedor}>
          <h1 className={style.platoNombre}>Cargando...</h1>
        </section>
      </>
    );
  }

  return (
    <>
      <section className={style.contenedor}>
        <p className={style.platoDelDia}>plato del dia</p>
        <h2 className={style.platoNombre}>{plato && plato.strMeal}</h2>
        <div className={style.contenedorImg}>
          <img
            className={style.imagen}
            src={plato.strMealThumb}
            alt="imagen de plato"
          />
        </div>
        <p className={style.etiquetas}>{plato.strTags}</p>
      </section>
    </>
  );
}

export default Main;
