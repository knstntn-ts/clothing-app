import { addCollectionAndDocuments } from "../utils/firebase/firebase.utils.jsx";
import { createContext, useState, useEffect } from "react";

// as the actual value you want to access
export const ProductsContext = createContext({
    currentProducts: [],
    setcurrentProducts: () => null
});


export const ProductsProvider = ({ children }) => {
    const [currentProducts, setCurrentProducts] = useState([]);
    // useEffect(() => {
    //     addCollectionAndDocuments("categories", SHOP_DATA)
    // }, [])
    
    const value = { currentProducts, setCurrentProducts }



    return <ProductsContext.Provider value={value}>{children}</ProductsContext.Provider>
}
