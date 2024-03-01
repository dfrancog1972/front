import axios from 'axios'

const API_URL = 'https://courageous-duck-top-coat.cyclic.app/api/users/'

//creamos la peticion al backend

const register = async(userData) => {
    const response = await axios.post(API_URL, userData)
    return response.data;
}

const authService = {
    register
}

export default authService