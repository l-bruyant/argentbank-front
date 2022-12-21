import React from 'react'

export default function LoginPage () {
    return (
        <main className="main bg-dark">
            <section className="sign-in-content">
                <i className="fa fa-user-circle sign-in-icon" />
                <h1>Log In</h1>
                <form>
                    <div className="input-wrapper">
                        <label htmlFor="email">Username</label>
                        <input type="text" id="email" />
                    </div>
                    <div className="input-wrapper">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" />
                    </div>
                    <button className="sign-in-button">Log In</button>
                </form>
            </section>
        </main>
    )
}
