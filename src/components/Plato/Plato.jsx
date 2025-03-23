import React, { useState, useEffect } from "react";
import style from "./plato.module.css";

//definiendo  estado de sección junto a la url
function Plato() {
  const [plato, setPlato] = useState(null);
  let url = "https://www.themealdb.com/api/json/v1/1/random.php";
  const etiquetas = "Producto sin información"
  function pedir() {
    alert("Su pedido ha sido recibido!");
  }

  //Tomando información de la Api (un item random)
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

  //control de errores
  if (!plato) return <h1 className={style.platoNombre}>Cargando...</h1>;

  
  //return de imagen, titulo, y si de existir, etiquetas de plato.
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
            onClick={pedir}
          />
        </div>
        <p className={style.etiquetas}>{plato.strTags || etiquetas}</p>
      </section>
    </>
  );
}

export default Plato;
