import { React, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { tokenFetchAdd } from '../utils/store/userTokenSlice';

async function loginUser(credentials) {
    return fetch('http://localhost:3001/api/v1/user/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(credentials)
        })
        .then(data => data.json())
}

export default function LoginPage () {
    const [userEmail, setUserEmail] = useState()
    const [userPassword, setUserPassword] = useState()
    const dispatch = useDispatch()

    const userToken = useSelector(state => state.userToken.value);
    const userLogged = userToken !== null

    const navigate = useNavigate()

    const handleSubmit = async e => {
        e.preventDefault()
        const token = await loginUser({
            email: userEmail,
            password: userPassword
        })
        dispatch(tokenFetchAdd(token.body.token))
    }

    useEffect(() => {
        if (userLogged) {
            navigate('/profile')
        } 
    }) 

    return (
        <main className="main bg-dark">
            <section className="sign-in-content">
                <i className="fa fa-user-circle sign-in-icon" />
                <h1>Log In</h1>
                <form onSubmit={handleSubmit}>
                    <div className="input-wrapper">
                        <label htmlFor="email">User Email</label>
                        <input type="text" id="email" onChange={e => setUserEmail(e.target.value)} />
                    </div>
                    <div className="input-wrapper">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" onChange={e => setUserPassword(e.target.value)}/>
                    </div>
                    <button className="sign-in-button">Log In</button>
                </form>
            </section>
        </main>
    )
}
