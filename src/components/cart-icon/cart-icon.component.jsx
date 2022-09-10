
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import "./cart-icon.styles.scss";
import { CartDropdownContext } from "../../contexts/cart-dropdown.context";
import { useContext } from "react";
import { Link } from "react-router-dom";




const CartIcon = () => {
    const {cartDropDownState, setcartDropDownState, cartCount} = useContext(CartDropdownContext)
    
    const cartDropDownHandler = () => {
        setcartDropDownState(!cartDropDownState);
    }

    
    return (

        <div className="cart-icon-container" onClick={cartDropDownHandler}>
            <ShoppingIcon className="shopping-icon" />
            <span className="item-count">{cartCount}</span>
        </div>
    )
}




export default CartIcon;