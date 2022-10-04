import React, { useContext} from "react";
import { Link } from "react-router-dom";
import Carrito from "../images/carrito.png";
import { CartContext } from "./Context/Context";

const CartWidget = () => {

    const { cartTotal} = useContext(CartContext);
    /* const [total, setTotal] = useState(0);
     useEffect(() => {
         let totalProductos = cart.reduce((total, item) => total += item.cantidad, 0);
         setTotal(totalProductos);
     }, [cart])*/

    return (
        <div className="cartWidget">

            <div className="iconosCart">
               
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