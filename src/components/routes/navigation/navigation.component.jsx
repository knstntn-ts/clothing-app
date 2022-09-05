import { Fragment } from "react"
// Fragment is useful when you don't want to render a component, like a dummy div that you don't want to render
import { Outlet, Link } from "react-router-dom"

import "./navigation.styles.scss"


import {ReactComponent as CrwnLogo } from "../../../assets/crown.svg"

const Navigation = () => {
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
                    <Link className="nav-link" to="/sign-in">
                        Sign In
                    </Link>
                </div>
            </div>
            <Outlet />
        </Fragment>
    )
}


export default Navigation


