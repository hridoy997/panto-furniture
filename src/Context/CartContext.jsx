import { createContext, useState } from "react";
import Swal from "sweetalert2";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);

    const addToCart = (product) => {
        if (cartItems.some(item => item.id === product.id)) {
            // alert("Product is already in the cart");
            Swal.fire({
                title: "Oops!",
                text: "Product is already in the cart.",
                icon: "warning",
            })
        }
        else {
            setCartItems(prevItems => [...prevItems, product]);
            Swal.fire({
                title: "Success!",
                text: "Product added to the cart.",
                icon: "success",
            })
        }
    };

    const countCartItems = cartItems.length;

    return (
        <CartContext.Provider value={{ cartItems, setCartItems, addToCart, countCartItems }}>
            {children}
        </CartContext.Provider>
    );
}