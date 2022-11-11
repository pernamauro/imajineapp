import axios from 'axios';

export const axiosRegister = async (values) => {
    return await axios.post('http://localhost:8080/api/auth/sign-up', values);
};

export const axiosLogin = async (values) => {
    return await axios.post('http://localhost:8080/api/auth/sign-in', values);
};

export const axiosPutUserData = async (values, token) => {
    return await axios.put('http://localhost:8080/api/user', values, {
        headers: {
            jwt: token,
        },
    });
};
