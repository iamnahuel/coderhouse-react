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
                    <h1>{items.nombre}</h1>
                    <h6>{items.descripcion}</h6>
                    <h4>Precio ${items.precio}</h4>
                    <h6>Cantidad disponliles: {items.stock}</h6>
                </div>
                <ItemCount stock={items.stock} initial={1} onAdd={onAdd} counter={counter} setCounter={setCounter} item={items}/>
            </div>
        </div>
    )
}
export default ItemDetail;