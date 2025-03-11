import React, { useState, useEffect } from "react";
import style from "./menu.module.css";

function Menu() {
  const [comida, setComida] = useState([]);
  const [pedido, setPedido] = useState("Pasta");
  const [renderizar, setRenderizar] = useState(0);
  let url = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${pedido}`;

  function desayuno() {
    setPedido("breakfast");
  }

  function postre() {
    setPedido("dessert");
  }

  function principal() {
    setPedido("Pasta");
  }

  useEffect(() => {
    async function fetchData() {
      const respuesta = await fetch(url);
      const data = await respuesta.json();
      if (data.meals) {
        setComida(data.meals);
      }
    }
    fetchData();
  }, [pedido]);

  if (!comida) return <p>Cargando...</p>;

  return (
    <>
      <section className={style.contenedor}>
        <h1 className={style.carta}>carta</h1>
        <div className={style.lista}>
          <button className={style.opción} onClick={desayuno}>
            Desayuno
          </button>
          <button className={style.opción} onClick={postre}>
            Postre
          </button>
          <button className={style.opción} onClick={principal}>
            Principal
          </button>
        </div>

        <div className={style.contenedorTarjeta}>
          {comida.slice(0, 8).map((item, index) => (
            <div key={index} className={style.tarjeta}>
              <div className={style.imagen}>
                <img
                  src={item.strMealThumb}
                  alt="comida"
                  className={style.imagen}
                />
              </div>
              <h2 className={style.titulo}>{item.strMeal}</h2>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default Menu;
