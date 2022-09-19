import React, {useContext, useState} from "react";
import { useEffect } from "react";
import Carrito from "../images/carrito.png";
import { CartContext } from "./Context/Context";

const CartWidget = () => {

    const {cart} = useContext(CartContext);
    const [total, setTotal] = useState(0);
    useEffect(()=>{
        let totalProductos = cart.reduce((total, item) => total+= item.cantidad, 0);
        setTotal(totalProductos);
    }, [cart])

    return (
        <div className="cartWidget">
            <img className="carrito" src={Carrito} alt="" />
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger cartWidget">{total}</span>
        </div>
    )
}
export default CartWidget;