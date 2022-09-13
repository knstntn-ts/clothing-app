

import { CartIconContainer, ItemCount, ShoppingIcon } from "./cart-icon.styles";
import { CartDropdownContext } from "../../contexts/cart-dropdown.context";
import { useContext } from "react";





const CartIcon = () => {
    const { cartDropDownState, setcartDropDownState, cartCount } = useContext(CartDropdownContext)

    const cartDropDownHandler = () => {
        setcartDropDownState(!cartDropDownState);
    }


    return (

        <CartIconContainer onClick={cartDropDownHandler}>
            <ShoppingIcon />
            <ItemCount>{cartCount}</ItemCount>
        </CartIconContainer>
    )
}




export default CartIcon;