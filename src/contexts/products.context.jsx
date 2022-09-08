import SHOP_DATA from "../shop-data.json"

import { createContext, useState, useEffect } from "react";
import { onAuthStateChangedListener } from "../utils/firebase/firebase.utils";
import { createUserDocumentFromAuth } from "../utils/firebase/firebase.utils";
// as the actual value you want to access
export const ProductsContext = createContext({
    currentProducts: [],
    setcurrentProducts: () => null
});


export const ProductsProvider = ({ children }) => {
    const [currentProducts, setCurrentProducts] = useState(SHOP_DATA);
    const value = { currentProducts, setCurrentProducts }

    // useEffect(() => {
    //     const unsubscribe = onAuthStateChangedListener((user) => {
    //         if (user) {
    //             createUserDocumentFromAuth(user);
    //         }
    //         setCurrentUser(user);

    //         console.log(user)
    //     })

    //     return unsubscribe;
    // }, [])

    return <ProductsContext.Provider value={value}>{children}</ProductsContext.Provider>
}
