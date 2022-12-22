import { React, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { tokenFetchAdd } from '../utils/store/userTokenSlice'
import { loginUser } from '../utils/api/api'

export default function LoginPage () {
    const [userEmail, setUserEmail] = useState()
    const [userPassword, setUserPassword] = useState()
    const [attemptedConnect, setAttemptedConnect] = useState(false)
    const userToken = useSelector(state => state.userToken.value)
    const userHasToken = userToken !== null
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleSubmit = async e => {
        e.preventDefault()
        const token = await loginUser({
            email: userEmail,
            password: userPassword
        })
        setAttemptedConnect(true)
        dispatch(tokenFetchAdd(token.body.token))
    }

    useEffect(() => {
        if (userHasToken) {
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
                    {attemptedConnect? <div className='connect-warning'>Could not connect</div>: null}
                </form>
            </section>
        </main>
    )
}
