import React, { useContext} from "react";
import { Link } from "react-router-dom";
import Carrito from "../images/carrito.png";
import Basura from "../images/basura.png";
import { CartContext } from "./Context/Context";

const CartWidget = () => {

    const { cartTotal, clear } = useContext(CartContext);
    /* const [total, setTotal] = useState(0);
     useEffect(() => {
         let totalProductos = cart.reduce((total, item) => total += item.cantidad, 0);
         setTotal(totalProductos);
     }, [cart])*/

    return (
        <div className="cartWidget">

            <div className="iconosCart">
                <button className="btnCartIcon" onClick={() => {clear()}} title="Vaciar Carrito">
                    <img className="carrito" src={Basura} alt="" />
                </button>
                <Link to={"/cart"}>
                    <button className="btnCartIcon" title="Ir al Carrito">
                        <img className="carrito" src={Carrito} alt="" />
                        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger cartWidget">{cartTotal()}</span>
                    </button>
                </Link>
            </div>



        </div >
    )
}
export default CartWidget;