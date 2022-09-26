import React, { useState } from "react";
//import ItemCount from "./ItemCount";
import "../styles/itemListContainer.css";
import ItemList from "./ItemList";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Productos  from "./Productos";

const ItemListContainer = () => {
    const { genero, userId } = useParams();
    const [items, setItems] = useState([]);
    useEffect(() => {
        const productos = Productos;

        const getProductos = new Promise((resolve) => {
            let producto;
           // console.log(genero);
            if (genero === "masculino") {
                producto = productos.filter(producto => producto.categoria === "masculino");
            } else if (genero === "femenino") {
                producto = productos.filter(producto => producto.categoria === "femenino");
            } else {
                producto = productos.filter(producto => producto);
            }
            setTimeout(() => {
                resolve(producto);
            }, 2000);
        });

        getProductos.then((respuesta) => {
            setItems(respuesta);
        });
    }, [genero, userId]);


    return (
        <div className="container">
            <div className="categoria">
                <h7 className="tituloCategorias">CATEGORIA:</h7>
                <Link to={"/productos/femenino"} className="genero">Femenina</Link><> | </>
                <Link to={"/productos/masculino"} className="genero">Masculina</Link>
            </div>
            <ItemList items={items} />
        </div>
    )
}
export default ItemListContainer;