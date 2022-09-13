
import { createAction } from "../utils/reducer/reducer.utils";
import { createContext, useState, useEffect, useReducer } from "react";

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



/////////// Implementation with Reducers

const USER_ACTION_TYPES = {
    SET_CART_ITEMS: "SET_CART_ITEMS",
    SET_CART_OPEN: "SET_CART_OPEN"   
}

const cartReducer = (state, action) => {
    const {type, payload} = action;


    switch(type) {
        case USER_ACTION_TYPES.SET_CART_ITEMS:
            return {
                ...state,
                ...payload
            }
        case USER_ACTION_TYPES.SET_CART_OPEN:
            return {
                ...state,
                cartDropDownState: payload
            }
        default:
            throw new Error(`Unhandled type ${type} in userReducer`)

    }
}

const INITIAL_STATE = {
    cartItems: [],
    cartDropDownState: false,
    cartCount: 0,
    total: 0
}
///////////////////

export const CartDropdownProvider = ({ children }) => {
    // const [cartDropDownState, setcartDropDownState] = useState(false);
    // const [cartItems, setCartItems] = useState([])
    // const [cartCount, setCartCount] = useState(0)
    // const [total, setTotal] = useState(0)


    // useEffect(() => {
    //     const newCartCount = cartItems.reduce(((acc, el) => acc + el.quantity), 0)
    //     setCartCount(newCartCount)
    // }, [cartItems])


    // useEffect(() => {
    //     const newTotal = cartItems.reduce(((acc, el) => acc + el.quantity*el.price), 0)
    //     setTotal(newTotal)
    // }, [cartItems])


    const [{cartItems, cartDropDownState, cartCount, total}, dispatch] = useReducer(cartReducer, INITIAL_STATE);

    const updateCartItemsReducer = (newCartItems) => {
        const newCartCount = newCartItems.reduce(((acc, el) => acc + el.quantity), 0)
        const newTotal = newCartItems.reduce(((acc, el) => acc + el.quantity*el.price), 0)
        dispatch(createAction(USER_ACTION_TYPES.SET_CART_ITEMS, {cartItems: newCartItems, cartCount: newCartCount, cartTotal: newTotal}))
    }

    const addItemToCart = (productToAdd) => {
        // setCartItems(addCartItem(cartItems, productToAdd))
        const newCartItems = addCartItem(cartItems, productToAdd)// for reducer
        updateCartItemsReducer(newCartItems);
    }

    const decrementItem = (producToDecrement) => {
        // setCartItems(decrementCartItem(cartItems, producToDecrement))
        const newCartItems = decrementCartItem(cartItems, producToDecrement)// for reducer
        updateCartItemsReducer(newCartItems);
    }

    const removeItemFromCart = (producToDelete) => {
        // setCartItems(deleteItem(cartItems, producToDelete))
        const newCartItems = deleteItem(cartItems, producToDelete) // for reducer
        updateCartItemsReducer(newCartItems);
    }


    const setcartDropDownState = (bool) => {
        dispatch(createAction(USER_ACTION_TYPES.SET_CART_OPEN, bool))
    }
    


    
    const value = { cartDropDownState, setcartDropDownState, addItemToCart, cartItems, cartCount, decrementItem, removeItemFromCart, total }


    return <CartDropdownContext.Provider value={value}>{children}</CartDropdownContext.Provider>
}
