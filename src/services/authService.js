const baseUrl = 'http://localhost:5000/api/v1'

export const login = async (email, password) => {
    let res = await fetch(`${baseUrl}/users/login`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({ email, password })
    });
    
    let jsonResult = await res.json();
     console.log(jsonResult)
    if (res.ok) {
        const user = jsonResult.data.user
        const token = jsonResult.data.token
        
        console.log(user)
        const users = { ...user, token }
        return users
    } else {
        const err = jsonResult.message;
        throw err
    }
};

export const register = async (username,email, password, passwordConfirm) => {
    let res = await fetch(`${baseUrl}/users/signup`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({ username,email, password, passwordConfirm })
    })
    console.log(res)
    let jsonResult = await res.json();

    if (res.ok) {
        const user = jsonResult.data.user
        const token = jsonResult.data.token
        const users = { ...user, token }
        return users
    } else {
        const err = jsonResult.message;
        throw err
    }
};

export const logout = (token) => {
    return fetch(`${baseUrl}/users/logout`, {
        headers: {
            'Authorization': token,
        }
    })
};

export const getUser = () => {
    let username = localStorage.getItem('username');

    return username;
};

export const isAuthenticated = () => {
    return Boolean(getUser())
};