import React from 'react'
import logoArgentBank from "../assets/img/argentBankLogo.png"
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { tokenRemove, tokenAdd } from '../utils/store/userTokenSlice';

export default function Header () {
    const userToken = useSelector(state => state.userToken.value);
    const userLogged = userToken !== null
    const dispatch = useDispatch()

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
            <button onClick={() => dispatch(tokenAdd())}>Connect</button>
            <button onClick={() => dispatch(tokenRemove())}>Disconnect</button>
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
