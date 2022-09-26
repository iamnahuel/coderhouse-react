import React, { useContext, useState } from "react";
import ItemCount from "./ItemCount";
import { CartContext } from "./Context/Context"
import "../styles/itemDetail.css";

const ItemDetail = ({ items }) => {
    //usamos el contexto y los desestructuramos
    const { addItem } = useContext(CartContext);
    const [counter, setCounter] = useState(0);

    //funcion agregar producto
    const onAdd = (counter) => {
        setCounter(counter);
        addItem(items, counter)
    }

    return (
        <div className="tarjetaContenedor">
            <div className="contenedorImagen">
                <img src={items.imagen} className="card-img-top imagen" alt={items.nombre} />
            </div>
            <div className="detallesProducto">
                <div className="">
                    <h2 className="nombreArticulo">{items.nombre}</h2>
                    <h4>{items.descripcion}</h4>
                    <h4 className="descuento">${items.precio * 1.1}</h4>
                    <div className="precioDescuento">
                        <h3>Precio ${items.precio}</h3>
                        <h6 className="descuentoAplicado">%10 OFF</h6>
                    </div>
                    <div className="generoCategoria"><h6># {items.categoria} | {items.stock} unidades disponibles</h6></div>
                </div>
                <ItemCount stock={items.stock} initial={1} onAdd={onAdd} counter={counter} setCounter={setCounter} item={items} />
            </div>
        </div>
    )
}
export default ItemDetail;