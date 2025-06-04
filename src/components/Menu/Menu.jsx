import { useState, useEffect } from "react";
import style from "./menu.module.css";

function Menu() {
  const [comida, setComida] = useState([]);
  const [pedido, setPedido] = useState("Pasta");
  const [selección, setSelección] = useState(false);
  const [compra, setCompra] = useState([]);
  const [elegido, setElegido] = useState([]);
  const [mostrarModal, setMostrarModal] = useState(false);

  let url = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${pedido}`;

  function mostrar() {
    setSelección(!selección);
  }
  function desayuno() {
    setPedido("breakfast");
    setSelección(false);

  }

  function postre() {
    setPedido("dessert");
    setSelección(false);

  }

  function principal() {
    setPedido("Pasta");
    setSelección(false);

  }

  function incluir(item) {
    const yaElegido = elegido.includes(item.idMeal);
    if (yaElegido) {
      setCompra(compra.filter((i) => i.idMeal !== item.idMeal));
      setElegido(elegido.filter((id) => id !== item.idMeal));
    } else {
      setCompra([...compra, item]);
      setElegido([...elegido, item.idMeal]);
    }
    setSelección(false);
  }

  function eliminar(quitar) {
    setCompra(compra.filter((item) => item.idMeal !== quitar.idMeal));
    setElegido(elegido.filter((id) => id !== quitar.idMeal));
  }

  function modal() {
    setMostrarModal(true);
    setCompra([]);
    setSelección(false);
    setElegido([]);
    setTimeout(() => {
      setMostrarModal(false);
    }, 3000);
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

  if (!comida) return <p>Loading...</p>;

  return (
    <>
      <section className={style.contenedor}>
        <h1 className={style.carta}>menu</h1>

        <div className={style.lista}>
          <button className={style.opción} onClick={desayuno}>
            Breakfast
          </button>
          <button className={style.opción} onClick={postre}>
            Dessert
          </button>
          <button className={style.opción} onClick={principal}>
            Dinner
          </button>
        </div>

        <button type="button" className={style.carrito} onClick={mostrar}>
          <img
            src="/Restaurant/icons/carrito.svg"
            alt="carrito"
            className={style.carritoImagen}
          />
          <span className={style.notificación}>{compra.length}</span>
        </button>

        <div className={style.contenedorTarjeta}>
          {comida.slice(0, 4).map((item) => (
            <div key={item.idMeal} className={style.tarjeta}>
              <div className={style.imagen} onClick={() => incluir(item)}>
                <img
                  src={item.strMealThumb}
                  alt="comida"
                  className={style.imagen}
                />
              </div>
              <h2 className={style.titulo}>{`${item.strMeal}`.slice(0, 22)}</h2>
              {elegido.includes(item.idMeal) && (
                <button
                  className={style.incluido}
                  onClick={() => incluir(item)}>
                  ✔
                </button>
              )}
            </div>
          ))}
        </div>

        <div className={style.contenedorLista}>
          {selección &&
            compra.map((item) => (
              <ul className={style.seleccionado} key={item.idMeal}>
                <li onClick={() => eliminar(item)}>
                  {`${item.strMeal}`.slice(0, 20)}
                </li>
              </ul>
            ))}

          {selección && compra.length > 0 && (
            <button className={style.confirmar} onClick={modal}>
              Buy
            </button>
          )}
        </div>
      </section>
      {mostrarModal === true && (
        <section className={style.modal}>
          <h1>succeed!</h1>
          <h2>thank's for buying</h2>
        </section>
      )}
    </>
  );
}

export default Menu;
