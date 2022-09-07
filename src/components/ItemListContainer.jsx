import React, { useState } from "react";
//import ItemCount from "./ItemCount";
import "../styles/itemListContainer.css";
import ItemList from "./ItemList";
import { useEffect } from "react";
//import { reject } from "core-js/fn/promise";


const ItemListContainer = () => {


    const [items, setItems] = useState([]);
    useEffect(() => {

        const productos = [
            {id:1, stock:30, nombre:"Gorra", descripcion:"Gorra original con los colores del club", imagen:"src/images/gorra.jpg", precio:2500},
            {id:2, stock:20, nombre:"Camiseta Suplente", descripcion:"Camiseta alternativa Deportivo Rolon", imagen:"https://www.thefutbolstore.com.ar/uploads/v2/product/hi/TS1703_471_A.jpg", precio:6000},
            {id:3, stock:15, nombre:"Camiseta Titular", descripcion:"Camiseta titular Deportivo Rolon", imagen:"https://www.dhresource.com/0x0/f2/albu/g19/M01/32/84/rBVap2EWANWAGnJFAAN3jGb8ikQ557.jpg/kits-de-f-tbol-para-ni-os-y-adultos-conjunto.jpg", precio:9000},
            {id:4, stock:30, nombre:"Campera Verano", descripcion:"Campera entrenamiento verano", imagen:"https://cdn.solodeportes.com.ar/media/catalog/product/cache/7c4f9b393f0b8cb75f2b74fe5e9e52aa/c/a/campera-de-futbol-adidas-squadra-21-azul-100020gp6466001-1.jpg", precio:9800},
            {id:5, stock:18, nombre:"Campera invierno", descripcion:"Camperon entrenamiento invierno", imagen:"https://http2.mlstatic.com/D_NQ_NP_909384-MLU46546065337_062021-O.jpg", "precio":1300},
            {id:6, stock:8, nombre:"Pantalon Largo", descripcion:"Pantalon largo entrenamiento y viajes", imagen:"https://www.tradeinn.com/f/131/1311776_2/adidas-pantalones-sereno-14-trg.jpg", "precio":4800}
        ];


        const getProductos = new Promise((resolve) => {
            setTimeout(() => {
                resolve(productos);
            }, 2000);
        });

        getProductos.then((respuesta) => {
            setItems(respuesta);
        });
    }, []);


    return (
        <div className="container">
            <ItemList items={items} />
        </div>
    )
}
export default ItemListContainer;