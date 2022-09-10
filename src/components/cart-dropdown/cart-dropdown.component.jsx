import "./cart-dropdown.styles.scss";
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

    return (<div className="cart-dropdown-container">
        <div className="cart-items">
            {cartItems.map((item) => <CartItem key={item.id} item={item} />)}
        </div>
        <Button buttonType="inverted" onClick={goToCheckoutHandler} >CHECK OUT</Button>
    </div>)
}

export default CartDropdown;