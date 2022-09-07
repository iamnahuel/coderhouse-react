import React from "react";
import ItemCount from "./ItemCount";
import "../styles/itemDetail.css";

const ItemDetail = ({ items }) => {
    console.log({ items });
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
                <ItemCount stock={items.stock} initial={1} onAdd={0} />
            </div>
        </div>
    )
}
export default ItemDetail;