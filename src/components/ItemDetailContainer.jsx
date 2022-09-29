import React, { useState } from "react";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
//import Productos from "./Productos";

const ItemDetailContainer = () => {
    const [items, setItems] = useState([]);
    const { genero, userId } = useParams();

    useEffect(() => {

        const db = getFirestore();
        const response = doc(db, "items", userId)
        getDoc(response).then((snapShot) => {
           setItems({id:snapShot.id, ...snapShot.data()});
        });

    }, [genero, userId]);


    return (
        <div>
            <ItemDetail key={items.id} items={items} />
        </div>
    )
}
export default ItemDetailContainer;