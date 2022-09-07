import React, { useState } from "react";
import { useEffect } from "react";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
    const [items, setItems] = useState([]);
    useEffect(() => {
        const producto = { id: 1, stock: 30, nombre: "Gorra", descripcion: "Gorra original con los colores del club", imagen: "https://image.spreadshirtmedia.net/image-server/v1/mp/products/T15A13PA5514PT32X16Y2D183353307W4692H4678/views/1,width=800,height=800,appearanceId=13,backgroundColor=F2F2F2,modelId=4466,crop=detail/dibujo-de-pelota-de-futbol-gorra-beisbol.jpg", precio: 2500 };

        const getProducto = new Promise((resolve) => {
            setTimeout(() => {
                resolve(producto);
            }, 2000);
        });

        getProducto.then((respuesta) => {
            setItems(respuesta)
        })
       

    }, []);


    return (
        <div>
            
            <ItemDetail items={items}/>
        </div>
    )
}
export default ItemDetailContainer;