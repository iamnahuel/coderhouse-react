import React, { useContext } from "react";
import { Link } from "react-router-dom";
import ItemDetailCarrito from "./ItemDetailCarrito";
import { CartContext } from "./Context/Context";


const Cart = () => {

    const { estado, montoFinal, calcularMonto, estadoCarrito, clear } = useContext(CartContext);
    calcularMonto();
    estadoCarrito();

    return (
        <div className="contenedorCarrito">

            {estado === false ?
                <div className="titulosCarritoVacio">
                    <h3 className="carritoVacio">Tu carrito está vacío</h3>
                    <p>¿No sabes que compar? Echa un vistazo a nuestros productos</p>
                    <Link to={"/productos"}>
                        <input type="button" className="buttonAddCarrito" value={"Ver Productos"} />
                    </Link>
                </div> :
                <div className="productosEnCarrito">
                    <ItemDetailCarrito />
                    <div className="btnContinuarCompra">
                        <h5>Total compra: ${montoFinal}</h5>
                        <Link to={"/checkout"}>
                            <input type="button" className="buttonAddCarrito" value={"Continuar con la compra"} />
                        </Link>
                        <input type="button" className="buttonLimpiarCarrito" onClick={() => { clear() }} title="Vaciar Carrito" value={"Vaciar Carrito"} />

                    </div>
                </div>
            }
        </div>
    )
}
export default Cart;