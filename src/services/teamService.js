import axios from 'axios';

const baseURL = 'http://localhost:3000/teams';

const apiService = axios.create({
baseURL,
});

export const getTeams = () => {
    return apiService.get('')
}

export const getTeam = (teamId) => {
    return apiService.get(`/${teamId}`);
};

export const postTeam = (teamData) => {
    return apiService.post('/', teamData);
};

export const updateTeam = (teamId, updatedData) => {
    return apiService.put(`/${teamId}`, updatedData);
};

export const deleteTeam = (teamId) => {
    return apiService.delete(`/${teamId}`);
};