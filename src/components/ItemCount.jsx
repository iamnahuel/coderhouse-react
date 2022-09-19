import * as React from "react";
import { useContext, useState } from "react";
import '../styles/itemCount.css';
import { CartContext } from "./Context/Context"
//import Provider from './components/Context/Context';



function ItemCount(props) { //function ItemCount({ stock, initial, onAdd, items }) {
    //usamos el contexto
    const { cart, setCart, addItem } = useContext(CartContext);

    //estado de cantidad de productos a agregar
    const [counter, setCounter] = useState(props.initial);

    const [itemStock, setItemStock] = useState(props.stock);



    const Suma = () => {
        if (counter < itemStock) {
            setCounter(counter + 1)
        }
    };
    const Resta = () => {
        if (counter > 0) {
            setCounter(counter - 1)
        }
    };
    const AgregarProductos = () => {
        if (counter <= itemStock) {
            addItem(props.item, counter);
            setItemStock(itemStock - counter)
           
        }
    }


    return (
        <>
            <div className="itemCount">
                <div className="controlCantidad">
                    <input type="button" className="controlSuma" onClick={Resta} value={"-"} />
                    {counter}
                    <input type="button" onClick={Suma} className="controlSuma" value={"+"} />
                </div>
                <input type="button" className="buttonAddCarrito" onClick={AgregarProductos} value={"Agregar al carrito"} />

            </div>
        </>
    )
}
export default ItemCount;