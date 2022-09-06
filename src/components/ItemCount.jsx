import * as React from "react";
import '../styles/itemCount.css';


function ItemCount({ stock, initial, onAdd }) {
    const [cantidad, setCantidad] = React.useState(initial);
    const [itemStock, setStock] = React.useState(stock);
    const [itemAdd, setItemAdd] = React.useState(onAdd);


    const Suma = () => {
        if (cantidad < itemStock) {
            setCantidad(cantidad + 1)
        }
    };
    const Resta = () => {
        if (cantidad > initial) {
            setCantidad(cantidad - 1)
        }
    };
    const AgregarProductos = () => {
        if (cantidad <= itemStock) {
            setStock(itemStock - cantidad)
            setItemAdd(itemAdd + cantidad)
        }
    }


    return (
        <>
            <div className="itemCount">
                <h7>Disponible: {itemStock}</h7>
                <div className="controlCantidad">
                    <input type="button" className="controlSuma" onClick={Resta} value={"-"} />
                    {cantidad}
                    <input type="button" onClick={Suma} className="controlSuma" value={"+"} />
                </div>
                <input type="button" className="buttonAddCarrito" onClick={AgregarProductos} value={"Agregar al carrito"} />
                <div><h8>Cantida productos: {itemAdd}</h8></div>
            </div>
        </>
    )
}
export default ItemCount;