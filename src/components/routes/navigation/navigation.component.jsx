import { Fragment, useContext } from "react"
import { signOutUser } from "../../../utils/firebase/firebase.utils"
// Fragment is useful when you don't want to render a component, like a dummy div that you don't want to render
import { Outlet, Link } from "react-router-dom"

import "./navigation.styles.scss"
import { UserContext } from "../../../contexts/user.context"

import { ReactComponent as CrwnLogo } from "../../../assets/crown.svg"

const Navigation = () => {
    const { currentUser } = useContext(UserContext);
    const signOutHandler = async () => {
        await signOutUser();
        
    }
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


                </div>
            </div>
            <Outlet />
        </Fragment>
    )
}


export default Navigation


