import React from "react";
import "../styles/item.css";
import ItemCount from "./ItemCount"

const Item = ({ nombre, precio, imagen, stock }) => {
    return (

        <div className="card">
            <div className="contenedorImagen">
                <img src={imagen} className="card-img-top imagen" alt={nombre} />
            </div>
            <div className="card-body">
                <h5 className="card-title text-center nombreProducto"><b>{nombre}</b></h5>
                <p className="card-text text-center">${precio}</p>
            </div>
            <div>
                <ItemCount stock={stock} initial={1} onAdd={0} />
            </div>
        </div>

    )
}
export default Item;