import React, { useState, useContext } from "react";
import { CartContext } from "./Context/Context";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import "../styles/checkout.css";
import Success from "./Success";

const Checkout = () => {
    const { cart, cartTotal, montoFinal, clear } = useContext(CartContext);
    const [nombre, setNombre] = useState("");
    const [email, setEmail] = useState("");
    const [telefono, setTelefono] = useState("");
    const [orderId, setOrderId] = useState("");
    const [disable, setDisable] = useState(true);

    //funcion para armar el objeto pedido con todo los datos
    const senOrder = () => {
        const buyer = { name: nombre, email: email, phone: telefono }
        const items = [];
        cart.forEach((item) => {
            items.push({ id: item.id, title: item.nombre, price: item.precio })
        })
        const order = { buyer: buyer, itmes: items, monto: montoFinal, date: new Date() }

      
        const db = getFirestore();
        const orderCollection = collection(db, "orders");
        addDoc(orderCollection, order).then((data) => {
            setOrderId(data.id);
            clear();
        })
    }
    const deseable = () => {
        if (nombre === "" || email === "" || telefono === ""){
            setDisable(true)
        }else{
            setDisable(false)
        }
    }


    return (
        <div className="cantainer py-5">
            {cartTotal() > 0 ?
                <div className="row">
                    <div className="col-md-4 offset-md-2">
                        <div className="mb-3">
                            <label for="nombre" className="form-label">Nombre</label>
                            <input type="text" className="form-control" id="nombre" onInput={(e) => setNombre(e.currentTarget.value, deseable()) } />
                        </div>
                        <div className="mb-3">
                            <label for="email" className="form-label">Email</label>
                            <input type="text" className="form-control" id="email" onInput={(e) => setEmail(e.target.value, deseable())} />
                        </div>
                        <div className="mb-3">
                            <label for="telefono" className="form-label">Telefono</label>
                            <input type="number" className="form-control" id="telefono" onInput={(e) => setTelefono(e.target.value, deseable())} />
                        </div>
                        <button type="button" disabled={disable} className="btn btn-success" onClick={() => senOrder()}>Generar Oreden</button>
                    </div>
                    <div className="col-md-4">
                        <table className="table">
                            <tbody>
                                {cart.map(item => (
                                    <tr key={item.id}>
                                        <td className="text-start"><img src={item.imagen} className="imgCheckOut" alt="" /></td>
                                        <td className="text-start aling-middle">{item.nombre} x {item.cantidad}</td>
                                        <td className="text-end aling-middle">${item.cantidad * item.precio}</td>
                                    </tr>
                                ))}
                                <tr>
                                    <td colSpan={2} className="text-end fw-bold">Total a Pagar</td>
                                    <td className="text-end fw-bold">${montoFinal}</td>
                                </tr>
                            </tbody>
                        </table>

                    </div>
                </div>
                : 
                orderId !== "" ? <Success id={orderId}/>
                :
                <div className="alert alert-danger text-center" role="alert">
                    No se encontraron productos
                </div>
            }
        </div>
    )

}

export default Checkout;