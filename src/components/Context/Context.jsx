import React from "react";
import { useState } from "react";
import { createContext } from "react";

export const CartContext = createContext();

const Provider = ({ children }) => {
    //creamos el estado del carrito
    const [estado, setEstado] = useState(false);
    const [cart, setCart] = useState([]);
    const [montoFinal, setMonto] = useState();
    //creamos el estado del btnItemCoun
    const [estadoBtn, setEstadoBtn] = useState(true);

    //eliminar producto del carrito
    const deletProducto = (e) => {
        let w = cart.find(x => x.id === e.item.id)
        let p = cart.indexOf(w);
        cart.splice(p, 1);
        calcularMonto();
    }

    //funcion agregar producto al carrito
    const addItem = (item, cantidad) => {

        //llamamos a la funcion isInCart para verificar si el producto ya esta en el carrito
        if (isInCart(item.id)) {
            //si ya existe en el carrito, buscamos la posicion dentro del array de prodcutos del carrito
            let producto = cart.find(x => x.id === item.id);
            //a la cantidad que teniamos le sumamos la nueva cantidad
            cart[cart.indexOf(producto)].cantidad += cantidad;
            setCart([...cart]);

        } else {
            //si no existe, al carrito le agregamos el nuevo producto con su nueva propieda que es cantidad
            setCart([...cart, { ...item, cantidad: cantidad }]);

        }
        estadoBtnItemCount();
    }

    //funcion para limpiar carrito
    const clear = () => {
        setCart([]);
        calcularMonto();
    }

    //verificar si ya esta el producto en el carrito
    const isInCart = (id) => {
        return cart.some(item => item.id === id);
    }
    //funcion para calcular la cantidad de productos seleccionas en el carrito
    const cartTotal = () => {
        return cart.reduce((total, item) => total += item.cantidad, 0);

    }

    //calcular monto final de la compra
    const calcularMonto = () => {
        let p = 0;
        cart.map(item => (
            p = p + (item.precio * item.cantidad)
        ))
        setMonto(p);
    }
    
    //funcion para ver que renderizar en carrito
    const estadoCarrito = () => {
        if (cart.length === 0) {
            setEstado(false)
        } else {
            setEstado(true)
        }
    }
    //funcion para ver que boton renderizar en itemCount
    const estadoBtnItemCount = () => {
        setEstadoBtn(true)
    }
    const estadoBtnItemCountT = () => {
        setEstadoBtn(false)
    }

    return (
        <CartContext.Provider value={{ cart, addItem, clear, isInCart, cartTotal, deletProducto, montoFinal, calcularMonto, estadoCarrito, estado, estadoBtnItemCount, estadoBtnItemCountT, estadoBtn }}>
            {children}
        </CartContext.Provider>
    )
}

export default Provider;