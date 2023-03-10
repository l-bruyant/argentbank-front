import { React, useState, useEffect } from 'react'
import logoArgentBank from '../assets/img/argentBankLogo.png'
import { NavLink } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { tokenRemove } from '../utils/store/userTokenSlice'
import { requestUserName } from '../utils/api/api'

/**
*
* Displays the page Header
* If the user has no identification token : displays the login button
* If the user has an identification token : displays user name and sign out buttons
*
* @function Header
*
*/

export default function Header () {
    const userToken = useSelector(state => state.userToken.value)
    const [userFirstName, setUserFirstName] = useState()
    const userHasToken = userToken !== null
    const dispatch = useDispatch()

    useEffect (() => {
        if (userHasToken) {
            const call = async () => {
                const res = await requestUserName(userToken)
                setUserFirstName(res.body.firstName)
            }
            call()
        }
    }, [userToken] ) 


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
            {userHasToken ?
                <div className='nav-buttons-logged'>
                    <div>
                        <NavLink  to="profile" className={({isActive}) => {
                            return (isActive ? 'main-nav-item active-nav' : 'main-nav-item')
                        }}>
                            <i className="fa fa-user-circle" />
                            {userFirstName}
                        </NavLink>
                    </div>
                    <div>
                        <NavLink to="/" className="main-nav-item" onClick={() => dispatch(tokenRemove())} >
                            <i className="fa fa-sign-out" />                    
                            Sign out
                        </NavLink>
                    </div>
                </div>
                :    
                <div>
                    <NavLink to="login" className={({isActive}) => {
                        return (isActive ? 'main-nav-item active-nav' : 'main-nav-item')
                    }}>
                        <i className="fa fa-user-circle" />
                    Log In
                    </NavLink>
                </div>
            }
        </nav>
    )
}
