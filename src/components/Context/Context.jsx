import React from "react";
import { useState } from "react";
import { createContext } from "react";

export const CartContext = createContext();

const Provider = ({ children }) => {
    //creamos el estado del carrito
    const [cart, setCart] = useState([]);
    

    //funcion agregar producto al carrito
    const addItem = (item, cantidad) => {
        clear();
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
            console.log(cart);
        }
    }

    //funcion para limpiar carrito
    const clear = () => {
        setCart([]);
    }

    //verificar si ya esta el producto en el carrito
    const isInCart = (id) => {
        return cart.some(item => item.id === id);
    }
     //funcion para calcular la cantidad de productos seleccionas en el carrito
   //  const cartTotal = () =>{
   //     return cart.reduce((total, item) =>{total += item.cantidad}, 0);
 //    }
    return (
        <CartContext.Provider value={{cart, addItem, clear, isInCart}}>
            {children}
        </CartContext.Provider>
    )
}

export default Provider;