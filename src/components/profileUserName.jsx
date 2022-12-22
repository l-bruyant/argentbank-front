import { React, useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { requestUserName, editUserName } from '../utils/api/api'


export default function ProfileUserName () {
    const [userFirstName, setUserFirstName] = useState()
    const [userLastName, setUserLastName] = useState()
    const [userFirstNameInput, setUserFirstNameInput] = useState()
    const [userLastNameInput, setUserLastNameInput] = useState()
    const [editing, setEditing] = useState(false)
    const userToken = useSelector(state => state.userToken.value)

    const handleSubmit = async () => {
        const nameData = {
            firstName: userFirstNameInput,
            lastName: userLastNameInput
        }
        await editUserName(nameData, userToken)
    }

    const cancelEdit = e => {
        e.preventDefault()
        setEditing(false)
    }

    useEffect (() => {
        const call = async () => {
            const userNameData = await requestUserName(userToken)
            setUserFirstName(userNameData.body.firstName)
            setUserLastName(userNameData.body.lastName)
        }
        call()
    }, ) 

    return (
        <div className='profile-user-name-area'>
            {!editing?
                <div className="header">
                    <h1> Welcome back <br /> {userFirstName} {userLastName}</h1>
                    <button className="edit-button" onClick={() => setEditing(true)}>Edit Name</button>
                </div>
                :
                <div className="header">
                    <h1> Welcome back </h1>
                    <form className="user-name-form" onSubmit={handleSubmit}>
                        <div className='form-inputs'>
                            <div>
                                <label htmlFor="first"></label>
                                <input placeholder={userFirstName} type="text" id="first" onChange={e => setUserFirstNameInput(e.target.value)} />
                            </div>
                            <div>
                                <label htmlFor="last"></label>
                                <input placeholder={userLastName} type="text" id="last" onChange={e => setUserLastNameInput(e.target.value)}/>
                            </div>
                        </div>
                        <div className='form-controls'>
                            <button className="edit-button">Submit</button>
                            <button className="edit-button" onClick={cancelEdit}>Cancel</button>
                        </div>
                    </form>
                </div>
            }
        </div>
    )
}
