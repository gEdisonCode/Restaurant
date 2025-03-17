import React, { useState, useEffect } from "react";
import style from "./menu.module.css";

/*/Definiendo estados para contenedor de: 
  tarjetas | interpolación en url | selección de items | confirmar compra
  respectivamente.
/*/
function Menu() {
  const [comida, setComida] = useState([]);
  const [pedido, setPedido] = useState("Pasta");
  const [selección, setSelección] = useState(false);
  const [compra, setCompra] = useState([]);

  let url = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${pedido}`;

  /*/Estos interruptores definen la url de la api/*/
  function mostrar() {
    setSelección(!selección);
  }
  function desayuno() {
    setPedido("breakfast");
  }

  function postre() {
    setPedido("dessert");
  }

  function principal() {
    setPedido("Pasta");
  }

  //Aquí los botones de añadir o quitar items del carrito
  function añadir(item) {
    setCompra([...compra, item]);
  }

  function eliminar(quitar) {
    setCompra(compra.filter((item) => item !== quitar));
  }

  //Una alerta para simular la compra
  function confirmar() {
    alert("Su Orden Fue Recibida!");
    setCompra([]);
    setSelección(false);
  }


  /*/Esta api devuelve entre 8 o 9 elementos según se defina en su url.
    En este caso esta limitado por las funciones de mas arriba.
  /*/
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


  /*/Este return gestiona las tarjetas, 
  limita los elementos a 4 por pantalla, 
  y devuelve el carrito junto a sus funciones principales (añadir, quitar, confirmar) 
  /*/
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
        <button type="button" className={style.carrito} onClick={mostrar}>
          <img
            src="./icons/carrito.svg"
            alt="carrito"
            className={style.carritoImagen}
          />{" "}
          <span className={style.notificación}>{compra.length}</span>
        </button>
        <div className={style.contenedorTarjeta}>
          {comida.slice(0, 4).map((item, index) => (
            <div
              key={index}
              className={style.tarjeta}
              onClick={() => añadir(item)}>
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


        <div className={style.contenedorLista}>
          {selección === true &&
            compra.map((item) => (
              <ul className={style.seleccionado} key={item.idMeal}>
                <li onClick={() => eliminar(item)}>{item.strMeal}</li>
              </ul>
            ))}

          {selección === true && compra.length > 0 && (
            <button className={style.confirmar} onClick={confirmar}>
              Confirmar compra
            </button>
          )}
        </div>
      </section>
    </>
  );
}

export default Menu;
