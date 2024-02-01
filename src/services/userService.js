import axios from 'axios';

const baseURL = 'https://api-node-mongo-red.vercel.app/users';

const apiService = axios.create({
baseURL,
});

export const getUsers = () => {
    return apiService.get('')
}

export const getUser = (userId) => {
    return apiService.get(`/${userId}`);
};

export const postUser= (userData) => {
    return apiService.post('/', userData);
};

export const updateUser = (userId, updatedData) => {
    return apiService.put(`/${teamId}`, updatedData);
};

export const deleteUser = (userId) => {
    return apiService.delete(`/${userId}`);
};