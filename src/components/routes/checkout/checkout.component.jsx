import {CheckoutContainer, CheckoutHeader, HeaderBlock, Total} from "./checkout.styles"
import { CartDropdownContext } from "../../../contexts/cart-dropdown.context";
import { useContext } from "react";

import CheckoutItem from "../../checkout-item/checkout-item.component";
const Checkout = () => {

    const { cartItems, total } = useContext(CartDropdownContext);

    return (
        <CheckoutContainer>
            <CheckoutHeader>
                <HeaderBlock>
                    <span>Product</span>
                </HeaderBlock>
                <HeaderBlock>
                    <span>Description
                    </span>
                </HeaderBlock>
                <HeaderBlock>
                    <span>Quantity
                    </span>
                </HeaderBlock>
                <HeaderBlock>
                    <span>Price
                    </span>
                </HeaderBlock>
                <HeaderBlock>
                    <span>Remove
                    </span>
                </HeaderBlock>

            </CheckoutHeader>

            {cartItems.map((item) => {
                return (
                    <CheckoutItem key={item.id} item={item} />
                )
            })}
            <Total as="span">Total: ${total}</Total>
        </CheckoutContainer>
    )
}

export default Checkout;
