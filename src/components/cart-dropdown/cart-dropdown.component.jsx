import {CartDropdownContainer, EmptyMessage, CartItems} from "./cart-dropdown.styles";
import CartItem from "../cart-item/cart-item.component";
import { useContext } from "react";
import Button from "../button/button.component";

import { CartDropdownContext } from "../../contexts/cart-dropdown.context";
import { useNavigate } from "react-router-dom";
const CartDropdown = () => {

    const { cartItems } = useContext(CartDropdownContext);
    const navigate = useNavigate();

    const goToCheckoutHandler = () => {
        navigate("/checkout")
    }

    return (
    <CartDropdownContainer>
        <CartItems>
            {
                cartItems.length ? cartItems.map((item) => <CartItem key={item.id} item={item} />) : (<EmptyMessage>Your cart is empty</EmptyMessage>)
            }

        </CartItems>
        <Button buttonType="inverted" onClick={goToCheckoutHandler} >CHECK OUT</Button>
    </CartDropdownContainer>)
}

export default CartDropdown;