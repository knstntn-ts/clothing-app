// Imports from react
import { Fragment, useContext } from "react"
// Fragment is useful when you don't want to render a component, like a dummy div that you don't want to render
import { Outlet, Link } from "react-router-dom"

// styles
import { NavigationContainer, LogoContainer, NavLinksContainer, NavLink } from "./navigation.styles"
import { ReactComponent as CrwnLogo } from "../../../assets/crown.svg"
// database related imports
import { signOutUser } from "../../../utils/firebase/firebase.utils"

// Context related imports
import { UserContext } from "../../../contexts/user.context"
import { CartDropdownContext } from "../../../contexts/cart-dropdown.context"

import CartDropdown from "../../cart-dropdown/cart-dropdown.component"

// Local react components
import CartIcon from "../../cart-icon/cart-icon.component"

const Navigation = () => {
    const { currentUser } = useContext(UserContext);
    const signOutHandler = async () => {
        await signOutUser();

    }

    const { cartDropDownState } = useContext(CartDropdownContext);



    return (
        <Fragment>
            <NavigationContainer>

                <LogoContainer to="/">
                    <CrwnLogo className="logo" />
                </LogoContainer>
                <NavLinksContainer>
                    <NavLink to="/shop">
                        SHOP
                    </NavLink>
                    {
                        currentUser ? (
                            <NavLink as="span" onClick={signOutHandler}>SIGN OUT</NavLink>

                        ) : (
                            <NavLink to="/auth">
                                SIGN IN
                            </NavLink>
                        )
                    }


                    <CartIcon />

                </NavLinksContainer>
                {
                    cartDropDownState ? <CartDropdown /> : null
                }

            </NavigationContainer>
            <Outlet />
        </Fragment>
    )
}


export default Navigation


