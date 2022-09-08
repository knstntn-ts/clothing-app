// Imports from react
import { Fragment, useContext } from "react"
// Fragment is useful when you don't want to render a component, like a dummy div that you don't want to render
import { Outlet, Link } from "react-router-dom"

// styles
import "./navigation.styles.scss"
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
            <div className="navigation">
                <Link className="logo-container" to="/">
                    <CrwnLogo className="logo" />
                </Link>
                <div className="nav-links-container">
                    <Link className="nav-link" to="/shop">
                        SHOP
                    </Link>
                    {
                        currentUser ? (
                            <span className="nav-link" onClick={signOutHandler}>SIGN OUT</span>

                        ) : (
                            <Link className="nav-link" to="/auth">
                                SIGN IN
                            </Link>
                        )
                    }


                    <CartIcon />

                </div>
                {
                    cartDropDownState ? <CartDropdown /> : null
                }
                
            </div>
            <Outlet />
        </Fragment>
    )
}


export default Navigation


