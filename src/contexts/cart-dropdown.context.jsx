

import { createContext, useState, useEffect } from "react";

const addCartItem = (cartItems, productToAdd) => {
    // find if items contain productToAdd
    const existingCartItem = cartItems.find((cartItem) => {
        if (cartItem.id === productToAdd.id) {
            return cartItem
        }
    })
    // if found, increment
    if (existingCartItem) {
        return cartItems.map((cartItem) => {
            if (cartItem.id === productToAdd.id) {
                return { ...cartItem, quantity: cartItem.quantity + 1 }
            }
            else {
                return cartItem
            }
        })
    }
    // return modified array
    return [...cartItems, { ...productToAdd, quantity: 1 }]
}

const decrementCartItem = (cartItems, producToDecrement) => {

    const existingCartItem = cartItems.find((item) => {
        if (item.id === producToDecrement.id) {
            return item
        }
    })

    if (existingCartItem) {

        if (existingCartItem.quantity === 1) {
            return cartItems.filter((item) => {
                return item.id !== producToDecrement.id
            })
        }

        return cartItems.map((item) => {
            if (item.id === producToDecrement.id) {
                return { ...item, quantity: item.quantity - 1 }
            }

            else {
                return item
            }
        })
    }

}

const deleteItem = (cartItems, producToDelete) => {
    const existingCartItem = cartItems.find((item) => {
        if (item.id === producToDelete.id) {
            return item
        }
    })

    if (existingCartItem) {
        return cartItems.filter((item) => {
            return item.id !== producToDelete.id
        })
    }
}


// as the actual value you want to access
export const CartDropdownContext = createContext({
    cartDropDownState: null,
    setcartDropDownState: () => null,
    cartItems: [],
    addItemToCart: () => null,
    cartCount: 0,
    decrementItem: () => null,
    removeItemFromCart: () => null,
    total: 0
});

/*


*/

export const CartDropdownProvider = ({ children }) => {
    const [cartDropDownState, setcartDropDownState] = useState(false);
    const [cartItems, setCartItems] = useState([])
    const [cartCount, setCartCount] = useState(0)
    const [total, setTotal] = useState(0)

    useEffect(() => {
        const newCartCount = cartItems.reduce(((acc, el) => acc + el.quantity), 0)
        setCartCount(newCartCount)
    }, [cartItems])


    useEffect(() => {
        const newTotal = cartItems.reduce(((acc, el) => acc + el.quantity*el.price), 0)
        setTotal(newTotal)
    }, [cartItems])

    const addItemToCart = (productToAdd) => {
        setCartItems(addCartItem(cartItems, productToAdd))
    }

    const decrementItem = (producToDecrement) => {
        setCartItems(decrementCartItem(cartItems, producToDecrement))
    }

    const removeItemFromCart = (producToDelete) => {
        setCartItems(deleteItem(cartItems, producToDelete))
    }
    const value = { cartDropDownState, setcartDropDownState, addItemToCart, cartItems, cartCount, decrementItem, removeItemFromCart, total }


    return <CartDropdownContext.Provider value={value}>{children}</CartDropdownContext.Provider>
}
