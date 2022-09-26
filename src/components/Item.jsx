import React from "react";
import { useContext } from "react";
import "../styles/item.css";
import { Link } from "react-router-dom";
import { CartContext } from "./Context/Context"




const Item = ({ nombre, precio, imagen, id }) => {

    const { estadoBtnItemCountT} = useContext(CartContext);

    return (

        <div className="card">
            <div className="contenedorImagen" >
                <img src={imagen} className="card-img-top imagen" alt={nombre} />
            </div>
            <div className="card-body text-center">
                <h5 className="card-title text-center nombreProducto"><b>{nombre}</b></h5>
                <p className="card-text text-center">${precio}</p>
                <Link to={"/productos/genero/" + id} className="btn btn-primary text-center" onClick={estadoBtnItemCountT()}>Comprar</Link>
            </div>
        </div>

    )
}
export default Item;