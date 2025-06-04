import React, { useState, useEffect } from "react";
import style from "./plato.module.css";

function Plato() {
  const [plato, setPlato] = useState(null);
  let url = "https://www.themealdb.com/api/json/v1/1/random.php";
  const etiquetas = "Producto sin información";
  function pedir() {
    alert("Su pedido ha sido recibido!");
  }

  useEffect(() => {
    async function fetchData() {
      const respuesta = await fetch(url);
      const data = await respuesta.json();
      if (data.meals && data.meals.length > 0) {
        setPlato(data.meals[0]);
      }
    }
    fetchData();
  }, []);

  if (!plato) return <h1 className={style.platoNombre}>Cargando...</h1>;

  return (
    <>
      <section className={style.contenedor}>
        <p className={style.platoDelDia}>dish of the day</p>
        <h2 className={style.platoNombre}>{plato && plato.strMeal}</h2>
        <div className={style.contenedorImg}>
          <img
            className={style.imagen}
            src={plato.strMealThumb}
            alt="imagen de plato"
            onClick={pedir}
          />
        </div>
        <p className={style.etiquetas}>{plato.strTags || etiquetas}</p>
        
      </section>
    </>
  );
}

export default Plato;
