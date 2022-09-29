import React, { useState } from "react";
import { getFirestore, getDocs, collection, query, where } from "firebase/firestore";
import "../styles/itemListContainer.css";
import ItemList from "./ItemList";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";


const ItemListContainer = () => {
    const { genero, userId } = useParams();
    const [items, setItems] = useState([]);
    useEffect(() => {
       
        const db = getFirestore();
        const itemsCollection = collection(db, "items");
        const queryItems = genero ? query(itemsCollection, where("categoria", "==", genero)) : itemsCollection;
        getDocs(queryItems).then((snapShot) => {
            setItems(snapShot.docs.map(items => ({ id: items.id, ...items.data() })))
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