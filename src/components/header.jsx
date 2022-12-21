import React from 'react'
import logoArgentBank from "../assets/img/argentBankLogo.png"

export default function Header () {
    return (
        <nav className="main-nav">
            <a className="main-nav-logo" href="./">
                <img
                className="main-nav-logo-image"
                src={logoArgentBank}
                alt="Argent Bank Logo"
                />
                <h1 className="sr-only">Argent Bank</h1>
            </a>
            <div>
                <a className="main-nav-item" href="./">
                <i className="fa fa-user-circle" />
                Sign In
                </a>
            </div>
        </nav>
    )
}
