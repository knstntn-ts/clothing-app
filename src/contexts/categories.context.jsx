import { addCollectionAndDocuments } from "../utils/firebase/firebase.utils.jsx";
import { createContext, useState, useEffect } from "react";
import { getCategoriesAndDocuments } from "../utils/firebase/firebase.utils.jsx";
// as the actual value you want to access
export const CategoriesContext = createContext({
    categoriesMap: {},
    setCategoriesMap: () => null
});


export const CategoriesProvider = ({ children }) => {
    const [categoriesMap, setCategoriesMap] = useState({});

    useEffect( () => {
        const getCategories = async () =>{
            const categoryMap = await getCategoriesAndDocuments();
            setCategoriesMap(categoryMap);

        }
        getCategories();
        
    }, [])
    // useEffect(() => {
    //     addCollectionAndDocuments("categories", SHOP_DATA)
    // }, [])
    
    const value = { categoriesMap, setCategoriesMap }



    return <CategoriesContext.Provider value={value}>{children}</CategoriesContext.Provider>
}
