export async function loginUser(credentials) {
    return fetch('http://localhost:3001/api/v1/user/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
    })
        .then(data => data.json())
        .catch(error => {
            console.log(error.response)
        }
        )
}

export async function requestUserName(token) {
    return fetch('http://localhost:3001/api/v1/user/profile', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer' + token
        },
    })
        .then(data => data.json())
}

export async function editUserName(userNameData, token) {
    return fetch('http://localhost:3001/api/v1/user/profile', 
        {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer' + token
            },
            body: JSON.stringify(userNameData)
        })
        .then(data => data.json())
}

