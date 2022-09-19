import React, { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import Productos from "./Productos";

const ItemDetailContainer = () => {
    const [items, setItems] = useState([]);
    const { genero, userId } = useParams();

    const productos = Productos; /*[
        { id: 1, stock: 30, categoria: "masculino", nombre: "Gorra", descripcion: "Gorra original con los colores del club", imagen: { gorra }, precio: 2500 },
        { id: 2, stock: 20, categoria: "masculino", nombre: "Camiseta Suplente", descripcion: "Camiseta alternativa Deportivo Rolon", imagen: "https://www.thefutbolstore.com.ar/uploads/v2/product/hi/TS1703_471_A.jpg", precio: 6000 },
        { id: 3, stock: 15, categoria: "masculino", nombre: "Camiseta Titular", descripcion: "Camiseta titular Deportivo Rolon", imagen: "https://www.dhresource.com/0x0/f2/albu/g19/M01/32/84/rBVap2EWANWAGnJFAAN3jGb8ikQ557.jpg/kits-de-f-tbol-para-ni-os-y-adultos-conjunto.jpg", precio: 9000 },
        { id: 4, stock: 30, categoria: "masculino", nombre: "Campera Verano", descripcion: "Campera entrenamiento verano", imagen: "https://cdn.solodeportes.com.ar/media/catalog/product/cache/7c4f9b393f0b8cb75f2b74fe5e9e52aa/c/a/campera-de-futbol-adidas-squadra-21-azul-100020gp6466001-1.jpg", precio: 9800 },
        { id: 5, stock: 18, categoria: "femenino", nombre: "Campera invierno", descripcion: "Camperon entrenamiento invierno", imagen: "https://http2.mlstatic.com/D_NQ_NP_909384-MLU46546065337_062021-O.jpg", "precio": 1300 },
        { id: 6, stock: 8, categoria: "femenino", nombre: "Pantalon Largo", descripcion: "Pantalon largo entrenamiento y viajes", imagen: "https://www.tradeinn.com/f/131/1311776_2/adidas-pantalones-sereno-14-trg.jpg", "precio": 4800 }
    ];*/

    useEffect(() => {


        const getProducto = new Promise((resolve) => {
            const producto = productos.find(producto => producto.id === parseInt(userId));
            setTimeout(() => {
                resolve(producto);
            }, 0);
        });

        getProducto.then((respuesta) => {
            setItems(respuesta)

        })


    }, [genero, userId]);


    return (
        <div>
            <ItemDetail key={items.id} items={items} />
        </div>
    )
}
export default ItemDetailContainer;