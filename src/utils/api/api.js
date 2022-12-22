/**
*
* Makes a POST call with user credentials to get an identification token
*
* @function loginUser
*
* @param credentials an object containing a user's email and password
*
* @returns an identification token for the user
*
*/

export async function loginUser(credentials) {
    const res = await fetch('http://localhost:3001/api/v1/user/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
    })
    if (!res.ok) {
        throw('Identification error')
    }
    return res.json()
}

/**
*
* Makes a POST call with user token to get user first and last name
*
* @function requestUserName
*
* @param token a string containing the current user identification token 
*
* @returns an object with the user's first name and last name
*
*/

export async function requestUserName(token) {
    const res = await fetch('http://localhost:3001/api/v1/user/profile', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer' + token
        },
    })
    if (res.status === 401) {
        sessionStorage.clear()
        location.reload()
    }
    if (!res.ok) {
        throw('API Error, check internet connection')
    }
    return res.json()
}

/**
*
* Makes a PUT call with new name data for the user + the identification token
* Used to replace the user first and last names in the database
*
* @function editUserName
*
* @param userNameData and object with new user first and last name data to replace current data on the server 
* @param token a string containing the current user identification token 
*
* @returns a response 
*
*/

export async function editUserName(userNameData, token) {
    const res = await fetch('http://localhost:3001/api/v1/user/profile', {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer' + token
        },
        body: JSON.stringify(userNameData)
    })
    if (res.status === 401) {
        sessionStorage.clear()
        location.reload()
    }
    if (!res.ok) {
        throw('API Error, check internet connection')
    }
    return res.json()
}

