import axios from 'axios';

export const axiosRegister = async (values) => {
    try {
        return await axios.post('http://localhost:8080/api/auth/sign-up', values);
    } catch (error) {
        console.error(error.message);
    }
};

export const axiosLogin = async (values) => {
    try {
        return await axios.post('http://localhost:8080/api/auth/sign-in', values);
    } catch (error) {
        console.error(error.message);
    }
};

export const axiosPutUserData = async (values, token) => {
    try {
        return await axios.put('http://localhost:8080/api/user', values, {
            headers: {
                jwt: token,
            },
        });
    } catch (error) {
        console.error(error.message);
    }
};
