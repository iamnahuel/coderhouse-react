import * as React from "react";
import { useContext, useState } from "react";
import '../styles/itemCount.css';
import { CartContext } from "./Context/Context"
import { Link } from "react-router-dom";
//import Provider from './components/Context/Context';



function ItemCount(props) { //function ItemCount({ stock, initial, onAdd, items }) {
    //usamos el contexto
    const { addItem, estadoBtn } = useContext(CartContext);

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
                    <div className="cantidadProductosSeleccionados">{counter}</div>
                    <input type="button" className="btnResta" onClick={Resta} value={"-"} />
                    <input type="button" className="btnSuma" onClick={Suma} value={"+"} />
                </div>

                {estadoBtn === false ?
                    <input type="button" className="buttonAddCarrito" onClick={AgregarProductos} value={"Agregar al carrito"} />
                    :
                    <Link to={"/productos"}>
                        <input type="button" className="buttonAddCarrito" value={"Ver mas productos"} />
                    </Link>
                }

            </div>
        </>
    )
}
export default ItemCount;