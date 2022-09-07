import React from "react";
import "../styles/item.css";

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
           
        </div>

    )
}
export default Item;