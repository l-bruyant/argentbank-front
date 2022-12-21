import React from 'react'
import logoArgentBank from "../assets/img/argentBankLogo.png"
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';

export default function Header () {
    const dispatch = useDispatch()
    const userToken = useSelector((state) => state.userToken);
    const userLogged = userToken !== null

    return (
        <nav className="main-nav">
            <NavLink className="main-nav-logo" to="/">
                <img
                className="main-nav-logo-image"
                src={logoArgentBank}
                alt="Argent Bank Logo"
                />
                <h1 className="sr-only">Argent Bank</h1>
            </NavLink>
            <button onClick={() => dispatch({ type: 'tokenAdd' })}>Connect</button>
            <button onClick={() => dispatch({ type: 'tokenRemove' })}>Disconnect</button>
            {userLogged ?
                <div>
                    <NavLink className="main-nav-item" to="profile">
                    <i className="fa fa-user-circle" />
                    Account
                    </NavLink>
                </div>
            :    
                <div>
                    <NavLink className="main-nav-item" to="login">
                    <i className="fa fa-user-circle" />
                    Log In
                    </NavLink>
                </div>
            }
        </nav>
    )
}
