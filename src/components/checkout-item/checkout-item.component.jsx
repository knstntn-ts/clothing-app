import "./checkout-item.styles.scss";
import { useContext } from "react";
import { CartDropdownContext } from "../../contexts/cart-dropdown.context";

const CheckoutItem = ({ item }) => {
    const { name, imageUrl, price, quantity } = item;
    const { addItemToCart, decrementItem, removeItemFromCart } = useContext(CartDropdownContext);

    const addItemHandler = () => {
        addItemToCart(item)
    }
    const removeItemHandler = () => {
        decrementItem(item)
    }
    const removeHandler = () => {
        removeItemFromCart(item)
    }
    return (
        <div className="checkout-item-container" >
            <div className="image-container">
                <img src={imageUrl} alt={`${name}`} />
            </div>

            <span className="name">{name}</span>

            <span className="quantity">
                <div className="arrow" onClick={removeItemHandler}>
                    &#10094;
                </div>
                <span className="value">{quantity}</span>
                <div className="arrow" onClick={addItemHandler}>
                    &#10095;
                </div>
            </span>
            <span className="price">{price}</span>
            <div className="remove-button" onClick={removeHandler}>
                &#10005;
            </div>

        </div>
    )

}


export default CheckoutItem;