

import { createContext, useState } from "react";


// as the actual value you want to access
export const CartDropdownContext = createContext({
    cartDropDownState: null,
    setcartDropDownState: () => null
});


export const CartDropdownProvider = ({ children }) => {
    const [cartDropDownState, setcartDropDownState] = useState(false);
    const value = { cartDropDownState, setcartDropDownState }


    return <CartDropdownContext.Provider value={value}>{children}</CartDropdownContext.Provider>
}
