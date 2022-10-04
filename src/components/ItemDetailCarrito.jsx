import React, { useContext, useState, useEffect } from "react";
import { CartContext } from "./Context/Context"
import "../styles/itemDetailCarrito.css";
import Basura from "../images/basura.png";

const ItemDetailCarrito = () => {
    const { cart, deletProducto } = useContext(CartContext);
    const [items, setItems] = useState([]);
    const [effect, setUe] = useState(0);


    useEffect(() => {
        const productos = cart;
        const getProductos = new Promise((resolve) => {
            let producto = productos.filter(producto => producto);
            resolve(producto);
        });

        getProductos.then((respuesta) => {
            setItems(respuesta);
        });
    }, [effect]);


    return (
        <div>
            {items.map(item => (
                <div>
                    <div key={item.id} className="detallesCarrito">

                        <div>
                            <img src={item.imagen} className="card-img-top imagenCarrito" />
                        </div>
                        <div>
                            <h4 className="nombreArticulo">{item.nombre}</h4>
                            <h6 className="descripcionArticulo">{item.descripcion}</h6>
                            <div className="generoCantidad"><h6># {item.categoria} | {item.cantidad} unidades</h6></div>
                        </div>
                        <button className="btnCartIcon" onClick={() => { deletProducto({ item }); setUe(effect + 1) }} title="Eliminar producto">
                            <img className="carrito" src={Basura} alt="" />
                        </button>
                        <div className="precio">
                            <h3>${item.precio * item.cantidad}</h3>

                        </div>

                    </div>
                    <hr />
                </div>
            ))}
        </div>
    )
}

export default ItemDetailCarrito;