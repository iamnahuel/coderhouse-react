import React from "react";
import ItemCount from "./ItemCount";
import "../styles/itemListContainer.css";


const ItemListContainer = () => {
    return (
        <>
            <div className="productos">
                <ItemCount stock={5} initial={1} producto="Camiseta" onAdd={0}/>
                <ItemCount stock={10} initial={1} producto="Gorra" onAdd={0}/>
            </div>
        </>
    )
}
export default ItemListContainer;